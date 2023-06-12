import { createContext, useContext, useEffect, useState } from 'react'
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	User,
	sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { UserInfo } from 'config/types'
import { useGetUser } from '@/hooks/api/endpoints/useGetUser'

const AuthContext = createContext<{
	authUser: User | null
	user: UserInfo | undefined | null
	login: (email: string, password: string) => Promise<void>
	signup: (email: string, password: string) => Promise<void>
	logout: () => Promise<void>
	resetPassword: (email: string) => Promise<void>
}>({
	user: null,
	authUser: null,
	login: async () => {},
	signup: async () => {},
	logout: async () => {},
	resetPassword: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [authUser, setAuthUser] = useState<User | null>(null)
	const { user } = useGetUser(authUser)
	// const [loading, setLoading] = useState<boolean>(true)

	// todo: convert to useSyncExternalStore?
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (newUser) => {
			if (newUser) {
				setAuthUser(newUser)
			} else {
				setAuthUser(null)
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
			setAuthUser(null)
			await signOut(auth)
		} catch (error) {
			// setLoading(false)
			throw error
		}
	}

	const resetPassword = async (email: string) => {
		await sendPasswordResetEmail(auth, email)
	}

	return (
		<AuthContext.Provider value={{ authUser, user, login, signup, logout, resetPassword }}>
			{children}
			{/* {loading ? null : children} */}
		</AuthContext.Provider>
	)
}
