import { createContext, useContext, useEffect, useRef, useState } from 'react'
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	User,
	sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../config/firebase'

export const AuthContext = createContext<{
	user: User | null | undefined
	login: (email: string, password: string) => Promise<void>
	signup: (email: string, password: string) => Promise<void>
	logout: () => Promise<void>
	resetPassword: (email: string) => Promise<void>
}>({
	user: null,
	login: async () => {},
	signup: async () => {},
	logout: async () => {},
	resetPassword: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = () => {
	const [user, setUser] = useState<User | null | undefined>(undefined)
	// const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (newUser) => {
			if (newUser) {
				setUser(newUser)
			} else {
				setUser(null)
			}
			// setLoading(false)
		})

		return () => unsubscribe()
	}, [])

	const signup = async (email: string, password: string) => {
		try {
			// setLoading(true)
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (error) {
			// setLoading(false)
			throw error
		}
	}

	const login = async (email: string, password: string) => {
		try {
			// setLoading(true)
			await signInWithEmailAndPassword(auth, email, password)
		} catch (error) {
			// setLoading(false)
			throw error
		}
	}

	const logout = async () => {
		try {
			// setLoading(true)
			setUser(null)
			await signOut(auth)
		} catch (error) {
			// setLoading(false)
			throw error
		}
	}

	const resetPassword = async (email: string) => {
		await sendPasswordResetEmail(auth, email)
	}

	return {
		user,
		login,
		signup,
		logout,
		resetPassword,
	}
}
