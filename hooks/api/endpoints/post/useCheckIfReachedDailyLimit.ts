import { updateRequest } from '../../utils'

export const useCheckIfReachedDailyLimit = () => {
	const { checkIfReachedDailyLimit } = updateRequest('checkIfReachedDailyLimit')
	return { checkIfReachedDailyLimit: () => checkIfReachedDailyLimit({}) }
}
