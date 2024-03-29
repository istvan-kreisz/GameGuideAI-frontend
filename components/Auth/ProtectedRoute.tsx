import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { user } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (user === null) {
			router.push('/sign-in')
		}
	}, [router, user])

	return <>{user ? children : null}</>
}

export default ProtectedRoute
