import { database } from '../../config/firebase'
import { onValue, ref, Unsubscribe } from 'firebase/database'
import { useCallback, useEffect, useRef } from 'react'

export function useMessageListener() {
	const unsubscribe = useRef<Unsubscribe | null>()

	const listenToMessageUpdates = useCallback(
		(
			userId: string,
			conversationId: string,
			messageId: string,
			updated: (text: string) => void
		) => {
			unsubscribe.current?.()

			const messageRef = ref(database, [userId, conversationId, messageId].join('/'))
			unsubscribe.current = onValue(messageRef, (snapshot) => {
				let val = snapshot.val()
				if (val && typeof val === 'string' && val.length) {
					updated(val)
				}
			})
		},
		[]
	)

	const stopListener = useCallback(() => {
		unsubscribe.current?.()
	}, [])

	useEffect(() => {
		return () => {
			unsubscribe.current?.()
		}
	}, [])

	return {
		listenToMessageUpdates,
		stopListener,
	}
}
