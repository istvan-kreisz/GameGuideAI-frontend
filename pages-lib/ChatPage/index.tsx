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

const GameAIPage = () => {
	const { user } = useAuth()
	const { selectedConversationId, messages } = useUserData()

	const [newMessage, setNewMessage] = useState<string>('')
	const [lastSentMessage, setLastSentMessage] = useState<MessageType | null>(null)
	const listEnd = useRef<HTMLDivElement | null>(null)

	const { sendMessage } = useSendMessage()
	const { deleteAllMessages } = useDeleteAllMessages()

	const messageIds = messages.map((val) => val.id)

	const didNotLoadLastMessage = lastSentMessage && !messageIds.includes(lastSentMessage.id)
	const isLoading =
		didNotLoadLastMessage || (messages.length > 0 && messages[messages.length - 1].isLoading)

	if (didNotLoadLastMessage && lastSentMessage) {
		if (!messageIds.includes(lastSentMessage.id)) {
			messages.push(lastSentMessage)
		}
	}

	const send = async () => {
		if (!user?.uid) return

		const newUserMessage: MessageType = {
			id: uuidv4(),
			userId: user.uid,
			questionId: undefined,
			type: 'User',
			text: newMessage.trim().replaceAll('\n', ' '),
			isLoading: false,
			createdAt: new Date().getTime(),
		}
		setNewMessage('')
		setLastSentMessage(newUserMessage)
		try {
			if (newUserMessage.text.length === 0) {
				throw new Error('Message is empty')
			}
			await sendMessage({ messageId: newUserMessage.id, message: newUserMessage.text })
		} catch (error) {
			setLastSentMessage(null)
			if (messageIds.length && messageIds[messageIds.length - 1] === lastSentMessage?.id) {
				messages.pop()
			}
			handleError(error)
		}
	}

	useEffect(() => {
		if (listEnd.current) {
			listEnd.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages, lastSentMessage])

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
