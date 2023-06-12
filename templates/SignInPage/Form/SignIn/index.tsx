import { FormEventHandler, useState } from 'react'
import Field from '@/components/Field/Field'
import { useAuth } from 'context/AuthContext'
import { useRouter } from 'next/router'

type SignInProps = {
	onClick: () => void
}

const SignIn = ({ onClick }: SignInProps) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { user, login } = useAuth()
	const router = useRouter()

	if (user) {
		router.push('/')
	}

	const handleLogin: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()

		// todo: error handling
		try {
			await login(email, password)
			router.push('/')
		} catch (err) {
			// todo: error handling
			console.log(err)
		}
	}

	return (
		<form action="" onSubmit={handleLogin}>
			<Field
				className="mb-4"
				classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
				placeholder="Email"
				icon="email"
				value={email}
				autoComplete="email"
				onChange={(e: any) => setEmail(e.target.value)}
				required
			/>
			<Field
				className="mb-2"
				classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
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
			<button className="btn-blue btn-large w-full" type="submit">
				Sign in with GameGuideAI
			</button>
		</form>
	)
}

export default SignIn
