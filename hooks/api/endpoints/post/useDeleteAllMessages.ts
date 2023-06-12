import { updateRequest } from '../../utils'

export const useDeleteAllMessages = () => {
	const { deleteAllMessages } = updateRequest<{ conversationId: string }>('deleteAllMessages')
	return { deleteAllMessages }
}
