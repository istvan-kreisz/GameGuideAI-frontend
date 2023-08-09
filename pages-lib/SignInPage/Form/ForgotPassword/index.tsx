import { FormEventHandler, useState } from 'react'
import Icon from '@/components/Icon/Icon'
import Field from '@/components/Field/Field'
import { useAuth } from 'context/AuthContext'
import { showNotification } from '@/components/Notify/showNotification'
import { getErrorMessage } from '../../utils'

type ForgotPasswordProps = {
	onClick: () => void
}

const ForgotPassword = ({ onClick }: ForgotPasswordProps) => {
	const [email, setEmail] = useState<string>('')
	const { resetPassword } = useAuth()

	const handleResetPassword: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()
		try {
			await resetPassword(email)
			showNotification('Please check your email.', 'success')
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
		<>
			<button className="group flex items-center mb-8 h5" onClick={onClick}>
				<Icon
					className="mr-4 transition-transform group-hover:-translate-x-1 dark:fill-n-1"
					name="arrow-prev"
				/>
				Reset your password
			</button>
			<form onSubmit={handleResetPassword}>
				<Field
					className="mb-6"
					classInput="dark:bg-surf-1 dark:border-n-7 dark:focus:bg-transparent"
					placeholder="Email"
					icon="email"
					type="email"
					value={email}
					onChange={(e: any) => setEmail(e.target.value)}
					required
				/>
				<button className="btn-blue btn-large w-full mb-6">Reset password</button>
			</form>
		</>
	)
}

export default ForgotPassword
