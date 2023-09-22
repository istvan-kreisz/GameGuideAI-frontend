import { createContext, useContext, useRef, useState } from 'react'
import { Conversation, Message } from 'config/types'
import { User } from 'firebase/auth'

export const UserDataContext = createContext<{
	conversations: Conversation[]
	setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>
	messages: Message[]
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}>({
	conversations: [],
	setConversations: () => {},
	messages: [],
	setMessages: () => {},
})

export const useUserData = () => useContext(UserDataContext)

export const UserDataContextProvider = (user: User | null | undefined) => {
	const [conversations, setConversations] = useState<Conversation[]>([])
	const [messages, setMessages] = useState<Message[]>([])
	const currentUserId = useRef<string | null | undefined>(null)

	if (currentUserId.current !== user?.uid) {
		if (!user?.uid) {
			setConversations([])
			setMessages([])
		}
		currentUserId.current = user?.uid
	}

	return {
		conversations,
		setConversations,
		messages,
		setMessages,
	}
}
