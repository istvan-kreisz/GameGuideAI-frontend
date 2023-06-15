import { createContext, useContext, useRef, useState } from 'react'
import { Conversation, Message } from 'config/types'
import { useAuth } from './AuthContext'

export const UserDataContext = createContext<{
	selectedConversationId: string | null
	setSelectedConversationId: React.Dispatch<React.SetStateAction<string | null>>
	conversations: Conversation[]
	setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>
	messages: Message[]
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}>({
	selectedConversationId: null,
	setSelectedConversationId: () => {},
	conversations: [],
	setConversations: () => {},
	messages: [],
	setMessages: () => {},
})

export const useUserData = () => useContext(UserDataContext)

export const UserDataContextProvider = () => {
	const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null)
	const [conversations, setConversations] = useState<Conversation[]>([])
	const [messages, setMessages] = useState<Message[]>([])
	const currentUserId = useRef<string | null | undefined>(null)

	const { user } = useAuth()

	if (currentUserId.current !== user?.uid) {
		if (!user?.uid) {
			setSelectedConversationId(null)
			setConversations([])
			setMessages([])
		}
		currentUserId.current = user?.uid
	}

	return {
		selectedConversationId,
		setSelectedConversationId,
		conversations,
		setConversations,
		messages,
		setMessages,
	}
}
