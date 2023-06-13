import { Conversation, Message } from 'config/types'
import { firestore } from '../../config/firebase'
import { Unsubscribe, orderBy } from 'firebase/firestore'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { CollectionRef } from './constants'
import { array, create } from 'superstruct'
import { useCallback, useEffect, useRef } from 'react'
import { User } from 'firebase/auth'

export async function useUserDataListener(
	user: User | null,
	selectedConversationId: string | null,
	setSelectedConversationId: React.Dispatch<React.SetStateAction<string | null>>,
	setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>,
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) {
	const unsubscribeConversation = useRef<Unsubscribe | null>()
	const unsubscribeMessages = useRef<Unsubscribe | null>()

	const currentUserId = useRef<string | undefined>(undefined)
	const currentConversationId = useRef<string | null | undefined>(null)

	useEffect(() => {
		return () => {
			unsubscribeConversation.current?.()
			unsubscribeMessages.current?.()
		}
	}, [])

	const conversationsListener = useCallback(
		(userId: string, conversationsUpdated: (conversations: Conversation[]) => void) => {
			const q = query(
				collection(firestore, `${CollectionRef.users}/${userId}/${CollectionRef.conversations}`),
				orderBy('updatedAt', 'desc')
			)
			unsubscribeConversation.current = onSnapshot(q, (querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => doc.data())

				const conversations = create(data, array(Conversation))
				conversationsUpdated(conversations)
			})
		},
		[]
	)

	const messagesListener = useCallback(
		(userId: string, conversationId: string, messagesUpdated: (messages: Message[]) => void) => {
			const q = query(
				collection(
					firestore,
					`${CollectionRef.users}/${userId}/${CollectionRef.conversations}/${conversationId}/${CollectionRef.messages}`
				),
				orderBy('createdAt', 'asc')
			)
			unsubscribeMessages.current = onSnapshot(q, (querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => doc.data())
				console.log('>>>>>>>>>>>>>>> updated')

				const messages = create(data, array(Message))
				messagesUpdated(messages)
			})
		},
		[]
	)

	if (currentUserId.current !== user?.uid) {
		unsubscribeConversation.current?.()
		unsubscribeMessages.current?.()

		if (user?.uid) {
			conversationsListener(user?.uid, (conversations) => {
				setConversations(conversations)
				const conversationIds = conversations.map((conversation) => conversation.id)
				setSelectedConversationId((currentValue) => {
					return currentValue && conversationIds.includes(currentValue)
						? currentValue
						: conversations[0]?.id
				})
			})
		}
		currentUserId.current = user?.uid
	}

	if (currentConversationId.current !== selectedConversationId) {
		unsubscribeMessages.current?.()

		if (user?.uid && selectedConversationId) {
			messagesListener(user?.uid, selectedConversationId, (messages) => {
				setMessages(messages)
			})
		}
		currentConversationId.current = selectedConversationId
	}
}
