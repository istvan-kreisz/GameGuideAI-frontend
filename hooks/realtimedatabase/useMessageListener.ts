import { database } from '../../config/firebase'
import { onValue, ref, Unsubscribe } from 'firebase/database'
import { useCallback, useEffect, useRef } from 'react'

export function useMessageListener() {
	const unsubscribe = useRef<Unsubscribe | null>()

	const chunks = useRef<string[]>([])
	const timer = useRef<NodeJS.Timer | undefined>()

	const stopListener = useCallback(() => {
		unsubscribe.current?.()
		if (timer.current) {
			clearInterval(timer.current)
		}
		chunks.current = []
	}, [])

	const listenToMessageUpdates = useCallback(
		(
			userId: string,
			conversationId: string,
			messageId: string,
			updated: (text: string) => void
		) => {
			unsubscribe.current?.()

			stopListener()
			let index = 0
			timer.current = setInterval(() => {
				if (chunks.current.length > index) {
					updated(chunks.current[index])
					index++
				}
			}, 30)
			const messageRef = ref(database, [userId, conversationId, messageId].join('/'))
			unsubscribe.current = onValue(messageRef, (snapshot) => {
				let val = snapshot.val()
				if (val && typeof val === 'string' && val.length) {
					const chunked = val.split(' ').map((chunk, index, array) => {
						return array.length - 1 === index ? chunk : chunk + ' '
					})
					chunks.current.push(...chunked)
				}
			})
		},
		[stopListener]
	)

	useEffect(() => {
		return () => {
			stopListener()
		}
	}, [])

	return {
		listenToMessageUpdates,
		stopListener,
	}
}
