import { createContext, useContext, useEffect, useState } from 'react'
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	User as AuthUser,
	User,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { UserInfo } from 'config/types'
import { useGetUser } from '@/hooks/api/endpoints/useGetUser'

// type AuthUser = {
// 	uid: string
// 	email: string | null
// 	displayName: string | null
// }

const AuthContext = createContext<{
	authUser: User | null
	user: UserInfo | undefined | null
	login: (email: string, password: string) => Promise<void>
	signup: (email: string, password: string) => Promise<void>
	logout: () => Promise<void>
}>({
	user: null,
	authUser: null,
	login: async () => {},
	signup: async () => {},
	logout: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [authUser, setAuthUser] = useState<User | null>(null)
	const { user } = useGetUser(authUser)
	const [loading, setLoading] = useState<boolean>(true)

	// todo: convert to useSyncExternalStore?
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (newUser) => {
			if (newUser) {
				setAuthUser(newUser)
			} else {
				setAuthUser(null)
			}
			setLoading(false)
		})

		return () => unsubscribe()
	}, [])

	const signup = async (email: string, password: string) => {
		setLoading(true)
		await createUserWithEmailAndPassword(auth, email, password)
	}

	const login = async (email: string, password: string) => {
		setLoading(true)
		await signInWithEmailAndPassword(auth, email, password)
	}

	const logout = async () => {
		setLoading(true)
		setAuthUser(null)
		await signOut(auth)
	}

	return (
		<AuthContext.Provider value={{ authUser, user, login, signup, logout }}>
			{loading ? null : children}
		</AuthContext.Provider>
	)
}
