import { useUpdateRequest } from '../../utils'

export const useDeleteAllMessages = () => {
	const { deleteAllMessages } = useUpdateRequest<{ conversationId: string }>('deleteAllMessages')
	return { deleteAllMessages }
}
