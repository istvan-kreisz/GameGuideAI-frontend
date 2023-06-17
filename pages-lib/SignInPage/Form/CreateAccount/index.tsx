import { FormEventHandler, useState } from 'react'
import Link from 'next/link'
import Field from '@/components/Field/Field'
import { useAuth } from 'context/AuthContext'
import { useRouter } from 'next/router'
import { getErrorMessage } from '../../utils'
import { showNotification } from '@/components/Notify/showNotification'

type CreateAccountProps = {}

const CreateAccount = ({}: CreateAccountProps) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { user, signup } = useAuth()
	const router = useRouter()

	if (user) {
		router.push('/')
	}

	const handleSignup: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()

		try {
			await signup(email, password)
			router.push('/')
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
		<form onSubmit={handleSignup}>
			<Field
				className="mb-4"
				classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
				placeholder="Email"
				icon="email"
				type="email"
				value={email}
				onChange={(e: any) => setEmail(e.target.value)}
				required
			/>
			<Field
				className="mb-6"
				classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
				placeholder="Password"
				icon="lock"
				type="password"
				value={password}
				onChange={(e: any) => setPassword(e.target.value)}
				required
			/>
			<button className="btn-blue btn-large w-full mb-6">Create Account</button>
			<div className="text-center caption1 text-n-4">
				By creating an account, you agree to our{' '}
				<Link
					className="text-n-5 transition-colors hover:text-n-7 dark:text-n-3 dark:hover:text-n-1"
					href="/"
				>
					Terms of Service
				</Link>{' '}
				and{' '}
				<Link
					className="text-n-5 transition-colors hover:text-n-7 dark:text-n-3 dark:hover:text-n-1"
					href="/"
				>
					Privacy & Cookie Statement
				</Link>
				.
			</div>
		</form>
	)
}

export default CreateAccount
