import { FormEventHandler, useState } from 'react'
import Field from '@/components/Field/Field'
import { useAuth } from 'context/AuthContext'
import { useRouter } from 'next/router'
import { showNotification } from '@/components/Notify/showNotification'
import { getErrorMessage } from '../../utils'

type SignInProps = {
	onClick: () => void
}

const SignIn = ({ onClick }: SignInProps) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { user, login } = useAuth()
	const router = useRouter()

	if (user) {
		router.push('/games')
	}

	const handleLogin: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()
		try {
			await login(email, password)
			router.push('/games')
		} catch (error) {
			const errorMessage = getErrorMessage(error)
			if (errorMessage) {
				showNotification(errorMessage, 'error')
			} else {
				showNotification('Something went wrong', 'error')
			}
		}
		return false
	}

	return (
		<form onSubmit={handleLogin}>
			<Field
				className="mb-4"
				classInput="dark:bg-surf-1 dark:border-n-7 dark:focus:bg-transparent"
				placeholder="Email"
				icon="email"
				value={email}
				autoComplete="email"
				onChange={(e: any) => setEmail(e.target.value)}
				required
			/>
			<Field
				className="mb-2"
				classInput="dark:bg-surf-1 dark:border-n-7 dark:focus:bg-transparent"
				placeholder="Password"
				icon="lock"
				type="password"
				autoComplete="current-passwor"
				value={password}
				onChange={(e: any) => setPassword(e.target.value)}
				required
			/>
			<button
				className="mb-6 base2 text-primary-1 transition-colors hover:text-primary-1/90"
				type="button"
				onClick={onClick}
			>
				Forgot password?
			</button>
			<button className="btn-blue btn-large w-full">Sign In</button>
		</form>
	)
}

export default SignIn
