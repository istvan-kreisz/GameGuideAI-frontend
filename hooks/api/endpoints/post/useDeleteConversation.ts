import { useUpdateRequest } from '../../utils'

export const useDeleteConversation = () => {
	const { deleteConversation } = useUpdateRequest<{ conversationId: string }>('deleteConversation')
	return { deleteConversation }
}
