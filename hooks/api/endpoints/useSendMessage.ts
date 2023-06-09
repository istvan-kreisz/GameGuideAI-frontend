import useSWR from 'swr'
import { SENDMESSAGE, getURL } from '../utils'

const sendMessage = (token: string, message: string, messageId: string) =>
	fetch(getURL('sendMessage'), {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ message }),
	}).then((res) => res.json())

export const useSendMessage = (token: string, message: string, messageId: string) => {
	const { data, error, isLoading, mutate } = useSWR(
		SENDMESSAGE,
		sendMessage.bind(null, token, message, messageId)
	)

	return { data, isLoading, error }
}
