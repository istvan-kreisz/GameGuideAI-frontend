import useSWR from 'swr'
import { GETUSER, getURL } from '../utils'
import { User } from 'firebase/auth'
import { create } from 'superstruct'
import { UserInfo } from 'config/types'

const fetchUser = async (user: User | null) => {
	if (!user) return undefined

	const token = await user.getIdToken()
	const res = await fetch(getURL('getUser'), {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
	const json = res.json()
	const userInfo = create(json, UserInfo)
	return userInfo
}

export const useGetUser = (user: User | null) => {
	const { data, error, isLoading, mutate } = useSWR(
		`${GETUSER}/${user?.uid}`,
		fetchUser.bind(null, user)
	)

	return {
		user: data,
		isLoading,
		isError: error,
	}
}
