import { useUpdateRequest } from '../../utils'

export const useDeleteMessage = () => {
	const { deleteMessage } = useUpdateRequest<{ conversationId: string; messageId: string }>(
		'deleteMessage'
	)
	return { deleteMessage }
}
