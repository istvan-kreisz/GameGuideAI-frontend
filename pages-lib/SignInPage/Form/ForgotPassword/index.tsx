import { useState } from 'react'
import Icon from '@/components/Icon/Icon'
import Field from '@/components/Field/Field'
import { useAuth } from 'context/AuthContext'

type ForgotPasswordProps = {
	onClick: () => void
}

const ForgotPassword = ({ onClick }: ForgotPasswordProps) => {
	const [email, setEmail] = useState<string>('')
	const { resetPassword } = useAuth()

	const handleResetPassword = async () => {
		try {
			await resetPassword(email)
			// todo: add success message
		} catch (err) {
			// todo: error handling
			console.log('>>>>>>>>>>>>>>> error')
			console.log(err)
		}
	}

	return (
		<>
			<button className="group flex items-center mb-8 h5" onClick={onClick}>
				<Icon
					className="mr-4 transition-transform group-hover:-translate-x-1 dark:fill-n-1"
					name="arrow-prev"
				/>
				Reset your password
			</button>
			<form>
				<Field
					className="mb-6"
					classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
					placeholder="Email"
					icon="email"
					type="email"
					value={email}
					onChange={(e: any) => setEmail(e.target.value)}
					required
				/>
				<button
					className="btn-blue btn-large w-full mb-6"
					type="button"
					onClick={handleResetPassword}
				>
					Reset password
				</button>
			</form>
		</>
	)
}

export default ForgotPassword
