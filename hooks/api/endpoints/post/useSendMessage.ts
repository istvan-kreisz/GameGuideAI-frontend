import { updateRequest } from '../../utils'

export const useSendMessage = () => {
	const { sendMessage } = updateRequest<{ messageId: string; message: string }>('sendMessage')
	return { sendMessage }
}
