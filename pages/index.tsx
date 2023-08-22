import type { NextPage } from 'next'
import Logo from '@/components/Logo/Logo'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Gamecards from '@/components/Gamecards/Gamecards'
import GamecardsCarousel from '@/components/Gamecards/GamecardsCarousel'
import { navigation } from '@/constants/navigation'
import { useColorMode } from '@chakra-ui/color-mode'
import FeatureBox from '@/pages-lib/LandingPage/FeatureBox'
import ComparisonTable from '@/pages-lib/LandingPage/ComparisonTable'
import FeaturePreview from '@/pages-lib/LandingPage/FeaturePreview'
import Faq from '@/pages-lib/LandingPage/Faq'

const svgs = [
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" rx="12" fill="#FFC876" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M30 33H18C16.3432 33 15 31.6569 15 30V18C15 16.3432 16.3432 15 18 15H30C31.6569 15 33 16.3432 33 18V30C33 31.6569 31.6569 33 30 33ZM29 20.4142L24.4142 25H26C26.5523 25 27 25.4477 27 26C27 26.5523 26.5523 27 26 27H22C21.4477 27 21 26.5523 21 26V22C21 21.4477 21.4477 21 22 21C22.5523 21 23 21.4477 23 22V23.5858L27.5858 19H26C25.4477 19 25 18.5523 25 18C25 17.4477 25.4477 17 26 17H30C30.5523 17 31 17.4477 31 18V22C31 22.5523 30.5523 23 30 23C29.4477 23 29 22.5523 29 22V20.4142Z"
			fill="#0E0C15"
		/>
	</svg>,

	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" rx="12" fill="#7ADB78" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M31 29.5C31 28.6716 30.3284 28 29.5 28H20C17.2386 28 15 25.7614 15 23C15 20.2386 17.2386 18 20 18H23V20H20C18.3432 20 17 21.3432 17 23C17 24.6569 18.3432 26 20 26H29.5C31.433 26 33 27.567 33 29.5C33 31.433 31.433 33 29.5 33H16C15.4477 33 15 32.5523 15 32C15 31.4477 15.4477 31 16 31H29.5C30.3284 31 31 30.3284 31 29.5Z"
			fill="#0E0C15"
		/>
		<path
			d="M32 16H28V18H32C32.5523 18 33 17.5523 33 17C33 16.4477 32.5523 16 32 16Z"
			fill="#0E0C15"
		/>
		<path
			d="M32 20H28V22H32C32.5523 22 33 21.5523 33 21C33 20.4477 32.5523 20 32 20Z"
			fill="#0E0C15"
		/>
		<path
			d="M21 19C21 16.7909 22.7909 15 25 15H29C29.5523 15 30 15.4477 30 16V22C30 22.5523 29.5523 23 29 23H25C22.7909 23 21 21.2091 21 19Z"
			fill="#0E0C15"
		/>
	</svg>,

	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" rx="12" fill="#AC6AFF" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M15 21.4V29.2747C15 31.1327 15 32.0617 15.3646 32.484C15.6809 32.8503 16.1545 33.0415 16.6364 32.9975C17.1921 32.9468 17.8371 32.2782 19.1272 30.9411L20.0563 29.9781C20.4043 29.6174 20.5783 29.4371 20.7832 29.3079C20.9648 29.1935 21.1637 29.109 21.3722 29.0578C21.6073 29 21.8579 29 22.3592 29H26.6C28.8402 29 29.9603 29 30.816 28.564C31.5686 28.1805 32.1805 27.5686 32.564 26.816C33 25.9603 33 24.8402 33 22.6V21.4C33 19.1598 33 18.0397 32.564 17.184C32.1805 16.4314 31.5686 15.8195 30.816 15.436C29.9603 15 28.8402 15 26.6 15H21.4C19.1598 15 18.0397 15 17.184 15.436C16.4314 15.8195 15.8195 16.4314 15.436 17.184C15 18.0397 15 19.1598 15 21.4ZM20 23C20.5523 23 21 22.5523 21 22C21 21.4477 20.5523 21 20 21C19.4477 21 19 21.4477 19 22C19 22.5523 19.4477 23 20 23ZM25 22C25 22.5523 24.5523 23 24 23C23.4477 23 23 22.5523 23 22C23 21.4477 23.4477 21 24 21C24.5523 21 25 21.4477 25 22ZM28 23C28.5523 23 29 22.5523 29 22C29 21.4477 28.5523 21 28 21C27.4477 21 27 21.4477 27 22C27 22.5523 27.4477 23 28 23Z"
			fill="#0E0C15"
		/>
	</svg>,
]

const Landing: NextPage = () => {
	const [loading, setLoading] = useState(true)
	const { setColorMode } = useColorMode()

	useEffect(() => {
		setColorMode('dark')
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}, [])

	return (
		<div className="flex flex-col min-h-screen bg-surf-2">
			<div className="relative z-10">
				{/* Navbar */}
				<nav className="flex items-center justify-between p-6 bg-surf-1 shadow-lg">
					{<Logo />}
					{/* <div className="flex items-center space-x-4">
						<a
							href="#"
							className="flex items-center h-12 base2 font-semibold text-n-3 rounded-lg transition-colors hover:text-n-1"
						>
							About
						</a>
						<a href="#" className="text-white bg-surf-3 rounded-md px-6 py-2 hover:bg-blue-700">
							Login
						</a>
					</div> */}
				</nav>
				<div className="flex flex-col h-fit items-center justify-center text-center relative">
					<div className="bg-gradient-to-b from-surf-1 via-[#2a5e90] to-surf-2 w-full h-full pt-10 pb-20 px-10 overflow-hidden">
						{/* Hero Section */}
						<section className="items-center justify-center flex flex-col gap-20">
							<div>
								<h1 className="text-7xl m-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-200 to-primary-1">
									First Ever AI-Powered Game Guide
								</h1>

								<h2 className="text-2xl mt-6 font-medium text-n-1 max-w-6xl">
									Join us in creating the future of gaming! Gameguide.ai provides tips, strategies,
									walkthroughs, and answers to gaming related questions in real time!
								</h2>
							</div>

							<div
								className="max-w-[1200px] flex flex-row"
								style={{
									alignItems: 'start',
								}}
							>
								<div className="h-full w-full rounded-xl bg-gradient-to-r from-purple-400 via-blue-200 to-primary-1 p-1">
									<Image
										className="w-full h-auto max-h-[744px] max-w-[1200px]"
										style={{
											flex: '1 0 120vw',
										}}
										src="/images/hero.png"
										width={1200}
										height={744}
										quality={100}
										alt=""
									/>
								</div>
							</div>

							{/* <div className="max-w-[640px] min-w-[640px] md:min-w-full mx-5 three-d-hero z-50">
								<div className="pt-10 px-6 pb-16 space-y-4  rounded-[1.5rem] md:p-5 md:pb-14 bg-surf-1 three-d-box">
									{loading ? (
										<Loading />
									) : (
										<TypeAnimation
											sequence={[
												'Chat with GPT trained on game info!\n\n' +
													'Time to revolutionize gaming with in-depth tips and real-time assistance powered by AI 🧠\n\n' +
													'Join us on Discord to participate in our closed beta 🚀\n\n',
												// "We're working hard to democratizing gaming data, making it accessible, personalized, and easy for everyone to use. We see a future where gaming data is open-source, public, and shaped by gamers for gamers 💪"
											]}
											speed={60}
											wrapper="span"
											cursor={false}
											style={{ whiteSpace: 'pre-line', fontSize: '1.3em', display: 'block' }}
										/>
									)}
								</div>
								<div className="-mt-9 flex items-end pl-3">
									<div
										className={`relative shrink-0 w-16 h-16 mr-auto rounded-2xl overflow-hidden ${'shadow-[0_0_0_0.25rem_#FEFEFE] dark:shadow-[0_0_0_0.25rem_#272A37]'}`}
									>
										<Image
											className="object-cover rounded-2xl"
											src="/images/avatar-chat.jpg"
											fill
											alt="Avatar"
										/>
									</div>
								</div>
							</div> */}
							{/* Join Discord Button */}

							<a
								href="https://discord.gg/Pwzt3yBG5w"
								aria-label="Discord"
								className="text-white bg-gradient-to-br from-purple-600 to-primary-1 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  hover:bg-blue-700 flex flex-row gap-x-2 justify-center items-center w-5/6 max-w-xs h-12 mb-14"
							>
								<h3 className="text-2xl font-medium text-white">Join on Discord</h3>
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
						</section>
						<div className="my-10"></div>
						<section className="items-center justify-center flex flex-col gap-20 mb-40 mt-20">
							<h2 className="h1 text-n-2 font-medium text-center max-w-6xl -mb-10 mt-10">
								Features
							</h2>

							<div className="flex gap-16 lg:gap-6 md:flex-col">
								<FeatureBox
									title="Personalized and Instant Gaming Guidance"
									text="Imagine having a personal gaming assistant who understands your play style,
										responds to your queries in real-time, and provides you with accurate,
										context-aware answers. That's what we're building with AI GameGuide -
										a revolutionary alternative to traditional wikis that offers tailored guidance
										and tips for gamers."
									color="from-yellow-300/75"
									svg={svgs[0]}
									key={'feature-1'}
								/>
								<FeatureBox
									title="Community-driven Knowledge Base"
									text="We recognize the expertise of the gaming community. That's why we're planning to
										open up our AI's knowledge base for contributions. Whether you're a casual gamer
										or a fanatic, you'll be able to improve the accuracy of our GameGuide's
										responses by updating and modifying its data sources."
									color="from-red-300/75"
									svg={svgs[1]}
									key={'feature-2'}
								/>
								<FeatureBox
									title="Building a Gaming Community"
									text={
										<>
											We're not just building a product; we're building a community. We plan to
											introduce game specific community features such as showcasing popular
											questions asked by others, integrating streamer content, and creating
											interactive elements like polls, quizzes, and challenges. All of these
											features aim to foster a spirit of camaraderie among gamers and make gaming a
											more fun and engaging experience overall.{' '}
											<a href="https://discord.gg/Pwzt3yBG5w" className="text-primary-1">
												Join our discord
											</a>{' '}
											for more info!
										</>
									}
									color="from-green-300/75"
									svg={svgs[2]}
									key={'feature-3'}
								/>
							</div>

							{/* <div className="flex flex-wrap justify-center gap-10 w-full z-50">
								<div className="w-full max-w-2xl text-left p-6 bg-surf-1 rounded-2xl shadow-lg">
									<div className="text-5xl">👤⚡</div>
									<h3 className="text-xl font-bold mb-2 text-surf-3">
										Personalized and Instant Gaming Guidance
									</h3>

									<p>
										Imagine having a personal gaming assistant who understands your play style,
										responds to your queries in real-time, and provides you with accurate,
										context-aware answers. That's what we're attempting to build with AI GameGuide -
										a revolutionary alternative to traditional wikis that offers tailored guidance
										and tips for gamers.
									</p>
								</div>

								<div className="w-full max-w-2xl text-left p-6 bg-surf-1 rounded-2xl shadow-lg">
									<div className="text-5xl">🧑‍🤝‍🧑📚</div>
									<h3 className="text-xl font-bold mb-2 text-surf-3">
										Community-driven Knowledge Base
									</h3>
									<p>
										We recognize the expertise of our gaming community. That's why we're planning to
										open up our AI's knowledge base for contributions. Whether you're a casual gamer
										or a fanatic, you'll be able to improve the accuracy of our GameGuide's
										responses by updating and modifying its data sources.
									</p>
								</div>

								<div className="w-full max-w-2xl text-left p-6 bg-surf-1 rounded-2xl shadow-lg">
									<div className="text-5xl">🌱🤝</div>
									<h3 className="text-xl font-bold mb-2 text-surf-3">
										Building a Gaming Community{' '}
									</h3>
									<p>
										We're not just building a product; we're building a community. We plan to
										introduce game specific community features such as showcasing popular questions
										asked by others, integrating influencer content, and creating interactive
										elements like polls, quizzes, and challenges. All of these features aim to
										foster a spirit of camaraderie among gamers and make gaming a more fun and
										engaging experience overall.{' '}
										<a href="https://discord.gg/Pwzt3yBG5w" className="text-primary-1">
											Join our discord
										</a>{' '}
										for more info!
									</p>
								</div>
							</div> */}
						</section>

						<section className="items-center">
							<FeaturePreview
								title="Building a Gaming Community"
								text="We're building not just a product but a community.
								Our plans include game-specific community features like popular questions, influencer content, polls, quizzes and challenges.
								All to enhance the gaming experience and camaraderie among gamers!"
								icon={'recording'}
								imageLight="/images/q&a.png"
								imageDark="/images/q&a.png"
							/>
						</section>

						<section className="items-center mt-40">
							<ComparisonTable></ComparisonTable>
						</section>

						<section className="items-center mt-40">
							<Faq></Faq>
						</section>
					</div>
				</div>

				{/*Infinite Floating Cubes
				<div className="circles" style={{ zIndex: 0 }}>
					{Array.from({ length: 10 }).map((_, i) => (
						<div key={i}></div>
					))}
				</div>*/}
			</div>
			{/* Games Section */}
			<section className="p-10 bg-surf-2 my-5 items-center text-center flex flex-col gap-10">
				<div className="h4 2xl:mb-2 2xl:h4 text-n-2">Our games in Beta</div>
				<Gamecards className="mx-auto" items={navigation} filterEnabled />
				<div className="h4 2xl:mb-2 2xl:h4 text-n-2">Vote on the next Game!</div>
				<GamecardsCarousel className="mx-auto" items={navigation} filterDisabled />
			</section>
			{/* Unused Section */}
			<section className="flex items-center justify-center text-center relative">
				<div className="bg-gradient-to-b from-surf-2 to-primary-1/20 w-full py-40 px-10 gap-20 flex flex-col items-center"></div>
			</section>
			{/* Footer
			<footer className="mt-auto p-6 bg-surf-2 shadow-lg">
				<div className="text-center text-white">{&copy; 2023 AI Game Guide}</div>
					</footer>*/}
		</div>
	)
}

export default Landing
