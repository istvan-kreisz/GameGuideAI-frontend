import Link from 'next/link'

type ProfileProps = {
	visible?: boolean
	logout?: () => void
}

const Profile = ({ visible, logout }: ProfileProps) => (
	<div className={`${visible ? 'mb-6' : 'mb-3 shadow-[0_1.25rem_1.5rem_0_rgba(0,0,0,0.5)]'}`}>
		<div className={`${!visible && 'p-2.5 bg-n-6 rounded-xl'}`}>
			<div className={`flex items-center ${visible ? 'justify-center' : 'px-2.5 py-2.5 pb-4.5'}`}>
				{!visible && (
					<>
						<div className="mr-4">
							<div className="base2 font-semibold text-n-1">Guest User</div>
							<div className="caption1 font-semibold text-n-3/50">guest@gmail.com</div>
						</div>
						{/*<div className="shrnik-0 ml-auto self-start px-3 bg-primary-2 rounded-lg caption1 font-bold text-n-7">
							Free
						</div>*/}
					</>
				)}
			</div>
			{!visible && (
				<div className="text-center">
					{/*<Link className="btn-stroke-dark w-full mt-2" href="/pricing">
						Support us on Patreon!
			</Link>*/}
					<a
						href="https://www.patreon.com/bePatron?u=83091163"
						target="_blank"
						rel="noopener noreferrer"
						role="link"
						aria-disabled="false"
						className="inline-flex justify-center items-center relative bg-red-500 rounded-xl px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
					>
						<div className="flex items-center space-x-2">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M6 3H3v18h3V3zm8.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
								></path>
							</svg>
							<span>Become a patron</span>
						</div>
					</a>
					{logout && (
						<button className="btn-stroke-dark w-full mt-2" onClick={logout}>
							Log Out
						</button>
					)}
				</div>
			)}
		</div>
	</div>
)

export default Profile
