import { Conversation, Message, User } from 'config/types'
import { firestore } from '../../config/firebase'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export async function useFireStore(userId: string) {
	const userListener = (userUpdated: (user: User) => void) => {
		//
	}

	const conversationsListener = (conversationsUpdated: (conversations: Conversation[]) => void) => {
		//
	}

	const messagesUpdated = (messagesUpdated: (messages: Message[]) => void) => {
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
