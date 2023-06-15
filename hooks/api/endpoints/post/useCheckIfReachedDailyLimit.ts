import { useUpdateRequest } from '../../utils'

export const useCheckIfReachedDailyLimit = () => {
	const { checkIfReachedDailyLimit } = useUpdateRequest('checkIfReachedDailyLimit')
	return { checkIfReachedDailyLimit: () => checkIfReachedDailyLimit({}) }
}
