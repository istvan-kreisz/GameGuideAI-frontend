import { useUpdateRequest } from '../../utils'

export const useSendMessage = () => {
	const { sendMessage } = useUpdateRequest<{
		selectedConversationId: string
		userMessageId: string
		message: string
		aiMessageId: string
	}>('sendMessage')
	return { sendMessage }
}
