import { createContext, useContext, useEffect, useState } from 'react'
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'

type User = {
	uid: string
	email: string | null
	displayName: string | null
}

const AuthContext = createContext<{
	user: User | null
	login: (email: string, password: string) => Promise<void>
	signup: (email: string, password: string) => Promise<void>
	logout: () => Promise<void>
}>({ user: null, login: async () => {}, signup: async () => {}, logout: async () => {} })

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	console.log(user)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
				})
			} else {
				setUser(null)
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
		setUser(null)
		await signOut(auth)
	}

	return (
		<AuthContext.Provider value={{ user, login, signup, logout }}>
			{loading ? null : children}
		</AuthContext.Provider>
	)
}
