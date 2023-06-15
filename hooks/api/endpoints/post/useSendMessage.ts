import { useUpdateRequest } from '../../utils'

export const useSendMessage = () => {
	const { sendMessage } = useUpdateRequest<{ messageId: string; message: string }>('sendMessage')
	return { sendMessage }
}
