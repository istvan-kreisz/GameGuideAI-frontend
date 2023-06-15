import { useUpdateRequest } from '../../utils'

export const useUpdateTimezone = () => {
	const { updateTimezone } = useUpdateRequest<{ timezone: string }>('updateTimezone')
	return { updateTimezone }
}
