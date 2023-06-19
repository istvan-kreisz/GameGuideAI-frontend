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

				<>
					{logout ? (
						<button className="btn-stroke-dark w-full h-11" onClick={logout}>
							Log Out
						</button>
					) : (
						<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border border-blue-500 rounded-xl w-full">
							Sign In to Save Chats
						</button>
					)}
					<div className="text-center px-7 pt-4 opacity-90">
						{/*<Link className="btn-stroke-dark w-full mt-2" href="/pricing">
						Support us on Patreon!
						</Link>*/}

						<a
							href="https://www.patreon.com/GameGuideAI"
							target="_blank"
							rel="noopener noreferrer"
							role="link"
							aria-disabled="false"
							className="inline-flex justify-center items-center relative bg-red-500 rounded-lg px-4 py-1 w-full text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
						>
							<div className="flex items-center space-x-1">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
									<path
										d="M6 3H3v18h3V3zm8.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
										fill="#FFFFFF"
									></path>
								</svg>
								<span className="text-sm">Become a patron</span>
							</div>
						</a>
						<a
							href="https://discord.gg/your_invite_link"
							target="_blank"
							rel="noopener noreferrer"
							role="link"
							aria-disabled="false"
							className="inline-flex justify-center items-center relative bg-indigo-500 rounded-lg px-4 py-1 w-full text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							<div className="flex items-center space-x-2">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
									<g>
										<path
											d="M20.33 4.23a19.56 19.56 0 0 0-4.95-1.56c-.22.39-.46.9-.63 1.32a18.2 18.2 0 0 0-5.5 0c-.16-.42-.42-.93-.63-1.32-1.74.3-3.4.83-4.96 1.56A20.77 20.77 0 0 0 .1 18.13c2.08 1.56 4.1 2.5 6.08 3.12.48-.68.92-1.4 1.3-2.14-.72-.27-1.4-.61-2.05-1l.5-.4a13.99 13.99 0 0 0 12.14 0l.5.4c-.65.39-1.33.73-2.05 1 .38.75.81 1.47 1.3 2.14 1.98-.62 4-1.56 6.08-3.11.5-5.28-.85-9.85-3.57-13.91ZM8.01 15.33c-1.18 0-2.15-1.1-2.15-2.45 0-1.34.95-2.45 2.15-2.45s2.18 1.1 2.16 2.45c0 1.35-.95 2.46-2.16 2.46Zm7.98 0c-1.19 0-2.16-1.1-2.16-2.45 0-1.34.95-2.45 2.16-2.45 1.2 0 2.17 1.1 2.15 2.45 0 1.35-.95 2.46-2.15 2.46Zm0 0"
											fill="#FFFFFF"
										></path>
									</g>
								</svg>
								<span className="text-sm">Join us on Discord</span>
							</div>
						</a>
					</div>
				</>
			</div>
		</div>
	)
}

export default Profile
