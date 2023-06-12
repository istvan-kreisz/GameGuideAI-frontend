import { updateRequest } from '../../utils'

export const useUpdateTimezone = () => {
	const { updateTimezone } = updateRequest<{ timezone: string }>('updateTimezone')
	return { updateTimezone }
}
