import { useGetUser } from '@/hooks/api/endpoints/get/useGetUser'
import { useUpdateRequest } from '../../utils'

export const useUpdateUsername = () => {
	const { userInfo, mutate } = useGetUser()
	const { updateUsername: update } = useUpdateRequest<{ username: string }>('updateUsername')

	const updateUsername = async ({ username }: { username: string }) => {
		if (!userInfo) {
			throw new Error('User not found')
		}
		if (username === userInfo?.name) {
			throw new Error('Username is the same')
		}
		await update({ username })

		await mutate((data) => (data ? { ...data, name: username } : data), {
			optimisticData: (data) => (data ? { ...data, name: username } : data),
		})
	}

	return { updateUsername }
}
