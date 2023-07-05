import { getApps, initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectDatabaseEmulator, getDatabase } from 'firebase/database'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { Analytics, getAnalytics } from 'firebase/analytics'
import { useEmulator } from './config'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const firestore = getFirestore(app)
const database = getDatabase(app)
const auth = getAuth(app)

let analytics: Analytics | undefined
if (typeof window !== 'undefined') {
	analytics = getAnalytics(app)
}

if (useEmulator) {
	connectFirestoreEmulator(firestore, 'localhost', 8080)
	connectAuthEmulator(auth, 'http://localhost:9099')
	connectDatabaseEmulator(database, 'localhost', 9000)
}

export { firestore, database, auth, analytics }
