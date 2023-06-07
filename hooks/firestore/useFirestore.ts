import { Conversation, Message, User } from 'config/types'
import { firestore } from '../../config/firebase'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export async function useFireStore(userId: string) {
	const conversationsListener = (conversationsUpdated: (conversations: Conversation[]) => void) => {
		//
	}

	const messagesListener = (messagesUpdated: (messages: Message[]) => void) => {
		//
	}

	// let docRef = doc(db, collection, id)
	// let result = null
	// let error = null
	// try {
	// 	result = await getDoc(docRef)
	// } catch (e) {
	// 	error = e
	// }
	// return { result, error }
}
