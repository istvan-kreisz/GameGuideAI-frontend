import type { NextPage } from 'next'
import Logo from '@/components/Logo/Logo'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Loading from '@/components/Answer/Loading/Loading'
import { TypeAnimation } from 'react-type-animation'
import Gamecards from '@/components/Gamecards/Gamecards'
import GamecardsCarousel from '@/components/Gamecards/GamecardsCarousel'
import { navigation } from '@/constants/navigation'

const Landing: NextPage = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 2500)
	}, [])

	return (
		<div className="flex flex-col min-h-screen bg-n-1">
			<div className="relative">
				{/* Navbar */}
				<nav className="flex items-center justify-between p-6 bg-n-6 shadow-lg">
					{<Logo />}
					<div className="flex items-center space-x-4">
						<a
							href="#"
							className="flex items-center h-12 base2 font-semibold text-n-3 rounded-lg transition-colors hover:text-n-1"
						>
							About
						</a>
						<a href="#" className="text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700">
							Join Our Discord
						</a>
					</div>
				</nav>

				{/* Hero Section */}
				<header className="flex items-center justify-center bg-black text-center relative">
					<div className="bg-gradient-to-b from-n-6 to-primary-1/40 w-full h-full py-10 px-10 gap-20 flex flex-col items-center">
						<div className="">
							<h1 className="text-5xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary-1">
								First Ever AI-Powered Game Guide
							</h1>
						</div>
						<div className="max-w-lg min-w-[500px]">
							<div className="pt-6 px-6 pb-16 space-y-4 bg-n-2 rounded-[0.75rem] md:p-5 md:pb-14 dark:bg-n-7">
								{loading ? (
									<Loading />
								) : (
									<TypeAnimation
										sequence={[
											'Chat with GPT trained on game info!\n\nOur goal is to revolutionize gaming with in-depth tips and realtime assitance powered by AI 🧠\n\nJoin our discord to participate in our closed beta 🚀',
										]}
										speed={60}
										wrapper="span"
										cursor={false}
										style={{ whiteSpace: 'pre-line', fontSize: '1.3em', display: 'block' }}
									/>
								)}
							</div>
							<div className="-mt-9 flex items-end pl-6">
								<div
									className={`relative shrink-0 w-16 h-16 mr-auto rounded-2xl overflow-hidden ${
										!loading && 'shadow-[0_0_0_0.25rem_#FEFEFE] dark:shadow-[0_0_0_0.25rem_#232627]'
									}`}
								>
									<Image
										className="object-cover rounded-2xl"
										src="/images/avatar-chat.jpg"
										fill
										alt="Avatar"
									/>
								</div>
							</div>
						</div>
						{/* Join Discord Button */}
						<a
							href="https://discord.gg/Pwzt3yBG5w"
							aria-label="Discord"
							className="btn btn-secondary z-50 bg-blue-600 hover:bg-blue-700 flex flex-row gap-x-2 justify-center items-center rounded-full w-5/6 max-w-xs mx-auto h-12 mb-14"
						>
							<h3 className="text-2xl font-medium text-white">Join our Discord</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-white"
							>
								<path
									fill="#ffffff"
									d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"
								></path>
							</svg>
						</a>
					</div>
				</header>
				{/*Infinite Floating Cubes */}
				<div className="circles">
					{Array.from({ length: 10 }).map((_, i) => (
						<div key={i}></div>
					))}
				</div>
			</div>
			{/* Features Section */}
			<section className="p-10 bg-n-1 my-5 items-center text-center flex flex-col gap-10">
				<div className="h4 2xl:mb-2 2xl:h4 text-n-5">Our games in Beta</div>
				<Gamecards className="mx-auto" items={navigation} filterEnabled />
				<div className="h4 2xl:mb-2 2xl:h4 text-n-5">Vote on the next Game!</div>
				<GamecardsCarousel className="mx-auto" items={navigation} filterDisabled />
			</section>
			<section className="flex items-center justify-center bg-black text-center relative">
				<div className="bg-gradient-to-b from-n-6 to-primary-1/40 w-full h-full py-10 px-10 gap-20 flex flex-col items-center">
					<div className="flex flex-wrap justify-around">
						<div className="w-64 p-4 mb-8 bg-white rounded shadow-lg">
							<h3 className="text-xl font-bold mb-2">In-Depth Analysis</h3>
							<p>Understand your games better with detailed stats and analytics powered by AI.</p>
						</div>
						<div className="w-64 p-4 mb-8 bg-white rounded shadow-lg">
							<h3 className="text-xl font-bold mb-2">Strategy Tips</h3>
							<p>Get personalized strategy tips based on your gameplay using our AI algorithms.</p>
						</div>
						<div className="w-64 p-4 mb-8 bg-white rounded shadow-lg">
							<h3 className="text-xl font-bold mb-2">Real-Time Assistance</h3>
							<p>Experience the first-ever real-time AI assistance as you play.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="mt-auto p-6 bg-white shadow-lg">
				<div className="text-center text-gray-900">
					&copy; 2023 AI Game Guide. All rights reserved.
				</div>
			</footer>
		</div>
	)
}

export default Landing
