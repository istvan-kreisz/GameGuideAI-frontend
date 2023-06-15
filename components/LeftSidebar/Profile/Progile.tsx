import { useGetUser } from '@/hooks/api/endpoints/get/useGetUser'
import { useAuth } from 'context/AuthContext'
import Link from 'next/link'

type ProfileProps = {
	visible?: boolean
}

const Profile = ({ visible }: ProfileProps) => {
	const { userInfo } = useGetUser()
	const { logout } = useAuth()

	return (
		<div className={`${visible ? 'mb-6' : 'mb-3 shadow-[0_1.25rem_1.5rem_0_rgba(0,0,0,0.5)]'}`}>
			<div className={`${!visible && 'p-2.5 bg-n-6 rounded-xl'}`}>
				<div className={`flex items-center ${visible ? 'justify-center' : 'px-2.5 py-2.5 pb-4.5'}`}>
					{!visible && (
						<>
							<div className="mr-4">
								<div className="base2 font-semibold text-n-1">
									{userInfo?.name?.length ? userInfo.name : 'Guest User'}
								</div>
								{userInfo?.email && (
									<div className="caption1 font-semibold text-n-3/50">{userInfo.email}</div>
								)}
							</div>
							<div
								className={`shrnik-0 ml-auto self-start px-3 ${
									userInfo?.subscription === 'pro' ? 'bg-accent-1' : 'bg-primary-2'
								} rounded-lg caption1 font-bold text-n-7`}
							>
								{userInfo?.subscription === 'pro' ? 'Pro' : 'Free'}
							</div>
						</>
					)}
				</div>
				{!visible && (
					<>
						<Link className="btn-stroke-dark w-full mt-2" href="/pricing">
							Upgrade to Pro
						</Link>

						<button className="btn-stroke-dark w-full mt-2" onClick={logout}>
							Log Out
						</button>
					</>
				)}
			</div>
		</div>
	)
}

export default Profile
