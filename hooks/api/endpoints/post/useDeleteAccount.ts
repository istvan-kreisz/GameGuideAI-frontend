import { updateRequest } from '../../utils'

export const useDeleteAccount = () => {
	const { deleteAccount } = updateRequest('deleteAccount')
	return { deleteAccount: () => deleteAccount({}) }
}
