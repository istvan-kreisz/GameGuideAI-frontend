import useSWR from 'swr'
import { baseHeaders, getURL } from '../../utils'
import { User } from 'firebase/auth'
import { create } from 'superstruct'
import { UserInfo } from 'config/types'
import { useAuth } from 'context/AuthContext'

const fetchUser = async ([userId, user]: [string, User | null]) => {
	if (!user) return undefined

	const token = await user.getIdToken()
	const res = await fetch(getURL('getUser'), {
		method: 'POST',
		headers: baseHeaders(token),
	})
	const json = await res.json()
	const userInfo = create(json, UserInfo)
	return userInfo
}

export const useGetUser = () => {
	const { user } = useAuth()
	const { data, error, isLoading, mutate } = useSWR([user?.uid, user], fetchUser)

	return {
		userInfo: data,
		isLoading,
		isError: error,
		mutate,
	}
}
