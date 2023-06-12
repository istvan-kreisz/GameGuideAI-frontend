import { useEmulator } from 'config/config'
import { User } from 'firebase/auth'
import useSWRMutation from 'swr/mutation'
import { useAuth } from 'context/AuthContext'

const SENDMESSAGE = 'sendMessage' as const
const DELETEALLMESSAGES = 'deleteAllMessages' as const
const DELETECONVERSATION = 'deleteConversation' as const
const DELETEMESSAGE = 'deleteMessage' as const
const CHECKIFREACHEDDAILYLIMIT = 'checkIfReachedDailyLimit' as const
const DELETEACCOUNT = 'deleteAccount' as const
const GETUSER = 'getUser' as const
const UPDATETIMEZONE = 'updateTimezone' as const
const UPDATEUSERNAME = 'updateUsername' as const

type Endpoint =
	| typeof SENDMESSAGE
	| typeof DELETEALLMESSAGES
	| typeof DELETECONVERSATION
	| typeof DELETEMESSAGE
	| typeof CHECKIFREACHEDDAILYLIMIT
	| typeof DELETEACCOUNT
	| typeof GETUSER
	| typeof UPDATETIMEZONE
	| typeof UPDATEUSERNAME

const getURL = (endpoint: Endpoint) => {
	const postFix = 'm46ipsyeya-uc.a.run.app'
	if (useEmulator) {
		return `http://localhost:5001/gameguide-ai/us-central1/${endpoint}`
	} else {
		return `https://${endpoint.toLowerCase()}-${postFix}`
	}
}

const baseHeaders = (token: string): HeadersInit => {
	return {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	}
}

// const deleteMessage = async (
// 	key: string,
// 	{ arg }: { arg: { user: User | null; conversationId: string; messageId: string } }
// ) => {
// 	if (!arg.user || !arg.conversationId?.length || !arg.messageId?.length) {
// 		throw new Error('Invalid arguments')
// 	}

// 	const token = await arg.user.getIdToken()
// 	await fetch(getURL('deleteMessage'), {
// 		method: 'POST',
// 		headers: baseHeaders(token),
// 		body: JSON.stringify({ conversationId: arg.conversationId, messageId: arg.messageId }),
// 	})
// }

const fetcher = async <T extends Record<string, string | undefined>>(
	key: string,
	{ arg }: { arg: { user: User | null; endpoint: Endpoint } & T }
) => {
	const { user, endpoint, ...payload } = arg

	const invalidArgCount = Object.values(payload).filter((value) => {
		if (value === undefined) return false
		return !value.length
	}).length

	if (invalidArgCount || !user || !endpoint.length) {
		throw new Error('Invalid arguments')
	}

	const token = await user.getIdToken()

	await fetch(getURL(endpoint), {
		method: 'POST',
		headers: baseHeaders(token),
		body: JSON.stringify(payload),
	})
}

const updateRequest = <T extends Record<string, string>>(endpoint: Endpoint) => {
	const { user } = useAuth()
	const { trigger } = useSWRMutation(endpoint, fetcher)

	return {
		[endpoint]: async (args: T) => {
			await trigger({ user, endpoint, ...args })
		},
	}
}

export {
	SENDMESSAGE,
	DELETEALLMESSAGES,
	DELETECONVERSATION,
	DELETEMESSAGE,
	CHECKIFREACHEDDAILYLIMIT,
	DELETEACCOUNT,
	GETUSER,
	UPDATETIMEZONE,
	UPDATEUSERNAME,
}

export { getURL, baseHeaders, updateRequest }

export type { Endpoint }
