import { updateRequest } from '../../utils'

// const deleteMessage = async (
// 	key: string,
// 	{ arg }: { arg: { user: User | null; conversationId: string; messageId: string } }
// ) => {
// 	if (!arg.user || !arg.conversationId?.length || !arg.messageId?.length) {
// 		throw new Error('Invalid arguments')
// 	}

// 	const token = await arg.user.getIdToken()
// 	await fetch(getURL('deleteMessage'), {
// 		method: 'POST',
// 		headers: baseHeaders(token),
// 		body: JSON.stringify({ conversationId: arg.conversationId, messageId: arg.messageId }),
// 	})
// }

export const useDeleteMessage = () => {
	const { deleteMessage } = updateRequest<{ conversationId: string; messageId: string }>(
		'deleteMessage'
	)
	return { deleteMessage }

	// const { user } = useAuth()
	// const { trigger } = useSWRMutation(DELETEALLMESSAGES, deleteMessage)

	// return {
	// 	deleteConversation: async (conversationId: string, messageId: string) => {
	// 		await trigger({ user, conversationId, messageId })
	// 	},
	// }
}
