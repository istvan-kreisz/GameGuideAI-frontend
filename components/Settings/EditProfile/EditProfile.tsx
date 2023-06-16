import { FormEventHandler, useState } from 'react'
import Image from '@/components/Image/Image'
import Icon from '@/components/Icon/Icon'
import Field from '@/components/Field/Field'
import { useUpdateUsername } from '@/hooks/api/endpoints/post/useUpdateUsername'
import { useGetUser } from '@/hooks/api/endpoints/get/useGetUser'

type EditProfileProps = {}

const EditProfile = ({}: EditProfileProps) => {
	const [objectURL, setObjectURL] = useState<any>('/images/avatar.jpg')
	const { userInfo } = useGetUser()
	const [name, setName] = useState<string>(userInfo?.name || '')
	const [bio, setBio] = useState<string>('')
	const { updateUsername } = useUpdateUsername()

	const handleUpdate: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()

		try {
			updateUsername({ username: name })
			// todo: add success message
		} catch (error) {
			// todo: error handling
			console.log('>>>>>>>>>>>>>>> error')
			console.log(error)
		}
		return false
	}

	return (
		<form className="" onSubmit={handleUpdate}>
			<div className="mb-8 h4 md:mb-6">Edit profile</div>
			{/* <div className="flex items-center mb-6">
				<div className="relative flex justify-center items-center shrink-0 w-28 h-28 mr-4 rounded-full overflow-hidden bg-n-2 dark:bg-n-6">
					{objectURL !== null ? (
						<Image className="object-cover rounded-full" src={objectURL} fill alt="Avatar" />
					) : (
						<Icon className="w-8 h-8 dark:fill-n-1" name="profile" />
					)}
				</div>
			</div> */}
			<Field
				className="mb-6"
				label="Username"
				placeholder="Username"
				icon="profile-1"
				value={name}
				onChange={(e: any) => setName(e.target.value)}
				required
			/>
			<button className="btn-blue w-full">Save changes</button>
		</form>
	)
}

export default EditProfile
