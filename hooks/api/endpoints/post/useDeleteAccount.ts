import { useUpdateRequest } from '../../utils'

export const useDeleteAccount = () => {
	const { deleteAccount } = useUpdateRequest('deleteAccount')
	return { deleteAccount: () => deleteAccount({}) }
}
