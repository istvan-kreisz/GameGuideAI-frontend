import { showNotification } from '@/components/Notify/showNotification'
import { useDeleteAccount } from '@/hooks/api/endpoints/post/useDeleteAccount'
import { handleError } from '@/utils/utils'
import { useAuth } from 'context/AuthContext'

type DeleteAccountProps = {}

const DeleteAccount = ({}: DeleteAccountProps) => {
	const { deleteAccount } = useDeleteAccount()
	const { logout } = useAuth()

	const deleteAndLogout = async () => {
		try {
			await deleteAccount()
			showNotification('Account deleted', 'success')
			try {
				await logout()
			} catch {}
		} catch (error) {
			handleError(error)
		}
	}

	return (
		<div className="">
			<div className="mb-8 h4">We’re sorry to see you go</div>
			<div className="mb-6 caption1 text-n-4">
				Warning: Deleting your account will permanently remove all of your data and cannot be
				undone. This includes your profile, chats, comments, and any other information associated
				with your account. Are you sure you want to proceed with deleting your account?
			</div>
			<button onClick={deleteAndLogout} className="btn-red w-full">
				Delete account
			</button>
		</div>
	)
}

export default DeleteAccount
