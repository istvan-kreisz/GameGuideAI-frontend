import { updateRequest } from '../../utils'

export const useDeleteConversation = () => {
	const { deleteConversation } = updateRequest<{ conversationId: string }>('deleteConversation')
	return { deleteConversation }
}
