import { useUpdateRequest } from '../../utils'

export const useCheckIfReachedMonthlyLimit = () => {
	const { checkIfReachedMonthlyLimit } = useUpdateRequest('checkIfReachedMonthlyLimit')
	return { checkIfReachedMonthlyLimit: () => checkIfReachedMonthlyLimit({}) }
}
