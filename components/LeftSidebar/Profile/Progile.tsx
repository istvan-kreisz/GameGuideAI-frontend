import Link from 'next/link'
import Image from '@/components/Image/Image'

type ProfileProps = {
	visible?: boolean
	logout: () => void
}

const Profile = ({ visible, logout }: ProfileProps) => (
	<div className={`${visible ? 'mb-6' : 'mb-3 shadow-[0_1.25rem_1.5rem_0_rgba(0,0,0,0.5)]'}`}>
		<div className={`${!visible && 'p-2.5 bg-n-6 rounded-xl'}`}>
			<div
				className={`flex items-center ${
					visible ? 'justify-center' : 'px-2.5 py-2.5 pb-4.5'
				}`}
			>
				{!visible && (
					<>
						<div className="mr-4">
							<div className="base2 font-semibold text-n-1">Guest User</div>
							<div className="caption1 font-semibold text-n-3/50">
								guest@gmail.com
							</div>
						</div>
						<div className="shrnik-0 ml-auto self-start px-3 bg-primary-2 rounded-lg caption1 font-bold text-n-7">
							Free
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

export default Profile
