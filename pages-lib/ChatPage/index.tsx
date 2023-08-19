import { useEffect, useRef, useState } from 'react'
import Layout from '@/components/Layout/Layout'
import Chat from '@/components/Chat/Chat'
import Question from '@/components/Question/Question'
import Answer from '@/components/Answer/Answer'
import { useUserData } from 'context/UserDataContext'
import { Message as MessageType } from 'config/types'
import Message from '@/components/Message/Message'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from 'context/AuthContext'
import { useSendMessage } from '@/hooks/api/endpoints/post/useSendMessage'
import { useDeleteAllMessages } from '@/hooks/api/endpoints/post/useDeleteAllMessages'
import { showNotification } from '@/components/Notify/showNotification'
import { handleError } from '@/utils/utils'
import { useMessageListener } from '@/hooks/realtimedatabase/useMessageListener'
import { useCheckIfReachedMonthlyLimit } from '@/hooks/api/endpoints/post/useCheckIfReachedDailyLimit'
import { useGetUser } from '@/hooks/api/endpoints/get/useGetUser'
import { boolean, create, object } from 'superstruct'

const GameAIPage = () => {
	const MONTHLY_LIMIT = 25
	const { user } = useAuth()
	const { userInfo } = useGetUser()
	const { selectedConversationId, messages } = useUserData()
	const { sendMessage } = useSendMessage()
	const { checkIfReachedMonthlyLimit } = useCheckIfReachedMonthlyLimit()
	const { deleteAllMessages } = useDeleteAllMessages()

	const [newMessage, setNewMessage] = useState<string>('')
	const [lastSentMessage, setLastSentMessage] = useState<MessageType | null>(null)
	const [pendingAIMessage, setPendingAIMessage] = useState<MessageType | null>(null)

	const listEnd = useRef<HTMLDivElement | null>(null)
	const didReachMonthlyLimit = useRef<boolean>(false)

	const messageIds = messages.map((val) => val.id)

	const didNotLoadLastUserMessage = !!lastSentMessage && !messageIds.includes(lastSentMessage.id)
	const didNotLoadLastAIMessage =
		!!pendingAIMessage &&
		(!messageIds.includes(pendingAIMessage.id) ||
			!!messages.find((message) => message.id === pendingAIMessage.id)?.isLoading)
	const isLoading = didNotLoadLastUserMessage || didNotLoadLastAIMessage

	if (messages) {
		if (lastSentMessage) {
			const lastUserMsg = messages.find(
				(message) => message.id === lastSentMessage.id && message.isLoading === false
			)
			if (lastUserMsg) {
				setLastSentMessage(null)
			}
		}
		if (pendingAIMessage) {
			const lastAIMsg = messages.find(
				(message) => message.id === pendingAIMessage.id && message.isLoading === false
			)
			if (lastAIMsg) {
				setPendingAIMessage(null)
			}
		}
	}

	if (didNotLoadLastUserMessage) {
		messages.push(lastSentMessage)
	}
	if (didNotLoadLastAIMessage) {
		if (messageIds.includes(pendingAIMessage.id)) {
			const aiMessage = messages.find((message) => message.id === pendingAIMessage.id)
			if (aiMessage) {
				aiMessage.text = pendingAIMessage.text
			}
		} else {
			messages.push(pendingAIMessage)
		}
	}

	const { listenToMessageUpdates, stopListener } = useMessageListener()

	useEffect(() => {
		if (userInfo?.subscription === 'pro') return
		if (
			userInfo?.messageCountInCurrentMonth &&
			userInfo.messageCountInCurrentMonth >= MONTHLY_LIMIT
		) {
			didReachMonthlyLimit.current = true
			return
		}

		if (!userInfo) return
		;(async () => {
			try {
				const res = await checkIfReachedMonthlyLimit()
				const resParsed = create(res, object({ didReachMonthlyLimit: boolean() }))
				didReachMonthlyLimit.current = resParsed.didReachMonthlyLimit
			} catch (error) {
				return
			}
		})()
	}, [userInfo])

	const send = async () => {
		if (!user?.uid) return

		if (didReachMonthlyLimit.current) {
			handleError(
				`Montly question limit ${MONTHLY_LIMIT} reached. Please upgrade to Pro to remove question limit!`
			)
			return
		}

		const newUserMessage: MessageType = {
			id: uuidv4(),
			userId: user.uid,
			questionId: undefined,
			type: 'User',
			text: newMessage.trim().replaceAll('\n', ' '),
			isLoading: true,
			createdAt: new Date().getTime(),
		}

		const newAIMessage: MessageType = {
			id: uuidv4(),
			userId: user.uid,
			questionId: newUserMessage.id,
			type: 'AI',
			text: '',
			isLoading: true,
			createdAt: new Date().getTime(),
		}

		setNewMessage('')
		setLastSentMessage(newUserMessage)
		setPendingAIMessage(newAIMessage)
		try {
			if (newUserMessage.text.length === 0) {
				throw new Error('Message is empty')
			}
			if (selectedConversationId) {
				listenToMessageUpdates(user.uid, selectedConversationId, newAIMessage.id, (text) => {
					setPendingAIMessage((val) => {
						if (val) {
							const newVal = { ...val, text: val.text + text }
							return newVal
						} else {
							return val
						}
					})
				})
			}

			const res = await sendMessage({
				userMessageId: newUserMessage.id,
				message: newUserMessage.text,
				aiMessageId: newAIMessage.id,
			})
			const resParsed = create(res, object({ didReachMonthlyLimit: boolean() }))
			didReachMonthlyLimit.current = resParsed.didReachMonthlyLimit
			stopListener()
		} catch (error) {
			stopListener()
			setLastSentMessage(null)
			setPendingAIMessage(null)
			handleError(error)
		}
	}

	useEffect(() => {
		if (listEnd.current) {
			listEnd.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages, lastSentMessage, pendingAIMessage])

	return (
		<Layout hideRightSidebar>
			<Chat
				title="Skyrim Chat"
				clean={messageIds.length === 0}
				deleteAllMessages={async () => {
					if (selectedConversationId) {
						try {
							if (messageIds.length === 0) {
								throw new Error('No messages to delete')
							}
							setLastSentMessage(null)
							setPendingAIMessage(null)
							await deleteAllMessages({
								conversationId: selectedConversationId,
							})
							showNotification('Messages deleted', 'success')
						} catch (error) {
							handleError(error)
						}
					}
				}}
			>
				{messages.map((message) => {
					if (message.type === 'User') {
						return <Question key={message.id} content={message.text} time="" />
					} else {
						return (
							<Answer
								text={message.text}
								key={message.id}
								loading={message.isLoading && message.text.length === 0}
								time=""
							></Answer>
						)
					}
				})}
				<div className="" ref={listEnd}></div>
			</Chat>
			<Message
				value={newMessage}
				disabled={isLoading}
				submit={send}
				onChange={(event) => {
					if (typeof event.target.value === 'string') {
						setNewMessage(event.target.value)
					}
				}}
			/>
		</Layout>
	)
}

export default GameAIPage
