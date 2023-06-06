import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyAG_ETSkDfG4ivKQffYr03eukW0u990j5U',
	authDomain: 'gameguide-ai.firebaseapp.com',
	projectId: 'gameguide-ai',
	storageBucket: 'gameguide-ai.appspot.com',
	messagingSenderId: '407938787321',
	appId: '1:407938787321:web:1ca9760f2722ef30b43f28',
	measurementId: 'G-R653GY5V2V',
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)
export const auth = getAuth()
