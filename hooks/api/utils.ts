import { useEmulator } from 'config/config'

const SENDMESSAGE = 'sendMessage' as const
const DELETEALLMESSAGES = 'deleteAllMessages' as const
const DELETECONVERSATION = 'deleteConversation' as const
const DELETEMESSAGE = 'deleteMessage' as const
const CHECKIFREACHEDDAILYLIMIT = 'checkIfReachedDailyLimit' as const
const DELETEACCOUNT = 'deleteAccount' as const
const GETUSER = 'getUser' as const
const UPDATETIMEZONE = 'updateTimeZone' as const
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

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
	fetch(input, init).then((res) => res.json())

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

export { getURL, fetcher }

export type { Endpoint }
