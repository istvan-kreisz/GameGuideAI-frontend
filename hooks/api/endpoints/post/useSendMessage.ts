import { useUpdateRequest } from '../../utils'

export const useSendMessage = () => {
	const { sendMessage } = useUpdateRequest<{
		userMessageId: string
		message: string
		aiMessageId: string
	}>('sendMessage')
	return { sendMessage }
}
