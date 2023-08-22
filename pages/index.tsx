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
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
		<rect width="48" height="48" rx="12" className="fill-orange-400" />
		<path
			fill="#0E0C15"
			fillRule="evenodd"
			d="M30 33H18a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3Zm-1-12.6L24.4 25H26a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.6l4.6-4.6H26a1 1 0 1 1 0-2h4c.6 0 1 .4 1 1v4a1 1 0 1 1-2 0v-1.6Z"
			clipRule="evenodd"
		/>
	</svg>,

	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
		<rect width="48" height="48" rx="12" className="fill-primary-2" />
		<path
			fill="#0E0C15"
			fillRule="evenodd"
			d="M31 29.5c0-.8-.7-1.5-1.5-1.5H20a5 5 0 0 1 0-10h3v2h-3a3 3 0 0 0 0 6h9.5a3.5 3.5 0 1 1 0 7H16a1 1 0 1 1 0-2h13.5c.8 0 1.5-.7 1.5-1.5Z"
			clipRule="evenodd"
		/>
		<path fill="#0E0C15" d="M32 16h-4v2h4a1 1 0 1 0 0-2ZM32 20h-4v2h4a1 1 0 1 0 0-2Z" />
		<path
			fill="#0E0C15"
			d="M21 19a4 4 0 0 1 4-4h4c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1h-4a4 4 0 0 1-4-4Z"
		/>
	</svg>,

	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
		<rect width="48" height="48" rx="12" className="fill-accent-3" />
		<path
			fill="#0E0C15"
			fillRule="evenodd"
			d="M15 21.4v7.9c0 1.8 0 2.8.4 3.2.3.4.8.5 1.2.5.6 0 1.2-.7 2.5-2l1-1 .7-.7.6-.2 1-.1h4.2c2.2 0 3.4 0 4.2-.4a4 4 0 0 0 1.8-1.8c.4-.8.4-2 .4-4.2v-1.2c0-2.2 0-3.4-.4-4.2a4 4 0 0 0-1.8-1.8c-.8-.4-2-.4-4.2-.4h-5.2c-2.2 0-3.4 0-4.2.4a4 4 0 0 0-1.8 1.8c-.4.8-.4 2-.4 4.2Zm5 1.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
			clipRule="evenodd"
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
				<nav className="flex items-center justify-between p-6 bg-surf-1 shadow-lg">{<Logo />}</nav>
				<div className="flex flex-col h-fit items-center justify-center text-center relative">
					<div className="bg-gradient-to-b from-surf-1 via-[#2a5e90] to-surf-2 w-full h-full pt-10 pb-20 px-5 overflow-hidden">
						{/* Hero Section */}
						<section className="items-center justify-center flex flex-col gap-20">
							<div>
								<h1 className="text-7xl m-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-200 to-primary-1">
									First Ever AI-Powered Game Guide
								</h1>
								<h3 className="text-2xl mt-6 font-medium text-n-1 max-w-6xl">
									Join us in creating the future of gaming! Gameguide.ai provides tips, strategies,
									walkthroughs, and answers to gaming related questions in real time!
								</h3>
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
										priority={true}
										alt=""
									/>
								</div>
							</div>

							<a
								href="https://discord.gg/Pwzt3yBG5w"
								aria-label="Discord"
								className="text-white bg-gradient-to-br from-purple-600 to-primary-1 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  hover:bg-blue-700 flex flex-row gap-x-2 justify-center items-center w-5/6 max-w-xs h-12 mb-14 mt-5"
							>
								<h3 className="text-3xl lg:text-2xl font-medium text-white">Join on Discord</h3>
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
							<div className="flex flex-row relative max-w-3xl">
								<svg
									className="w-34 h-34 lg:w-30 lg:h-30 -rotate-[140deg] scale-x-[-1] fill-n-2 absolute -top-30"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="6.6 0 76.8 90"
								>
									<path d="m28.3 88.8 8.6-14.9L45.5 59c.9-1.6-.2-3.6-2.1-3.6H32.6a49.4 49.4 0 0 1 49-43.3c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8-31.8 0-58 24.3-61.1 55.3H9c-1.8 0-3 2-2.1 3.6l8.6 14.9 8.6 14.9c1 1.7 3.3 1.7 4.2.1z" />
								</svg>
								<h3 className="text-3xl lg:text-2xl mt-6 font-medium text-n-1 max-w-6xl ml-28 pr-28 lg:ml-20 lg:pr-20">
									Join our discord for early access to the prototype.
								</h3>
							</div>
						</section>

						<section className="items-center justify-center flex flex-col gap-20 my-20">
							<h2 className="h3 lg:h4 font-bold text-center -mb-10 mt-10">Features</h2>

							<div className="flex gap-16 lg:gap-6 md:flex-col">
								<FeatureBox
									title="Personalized and Instant Gaming Guidance"
									text="Imagine having a personal gaming assistant who understands your play style,
									responds to your queries in real-time, and provides you with accurate,
									context-aware answers. That's what we're attempting to build with AI GameGuide -
									a revolutionary alternative to traditional wikis that offers tailored guidance
									and tips for gamers."
									color="from-accent-5/75"
									svg={svgs[0]}
									key={'feature-1'}
								/>
								<FeatureBox
									title="Community-driven Knowledge Base"
									text="We recognize the expertise of our gaming community. That's why we're planning to
									open up our AI's knowledge base for contributions. Whether you're a casual gamer
									or a fanatic, you'll be able to improve the accuracy of our GameGuide's
									responses by updating and modifying its data sources."
									color="from-primary-2/75"
									svg={svgs[1]}
									key={'feature-2'}
								/>
								<FeatureBox
									title="Building a Gaming Community"
									text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis inventore, voluptatem dolores sapiente laudantium quos harum laborum, tempora tempore a voluptates possimus illum magnam quod nostrum. Expedita quam quae saepe."
									color="from-accent-3/75"
									svg={svgs[2]}
									key={'feature-3'}
								/>
							</div>
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

						<section className="items-center my-10">
							<h2 className="mb-12 text-center h3 lg:h4">How it compares</h2>
							<ComparisonTable></ComparisonTable>
						</section>
						<section className="p-10 my-20 items-center text-center flex flex-col gap-10">
							<h3 className="h3 lg:h4 font-bold text-center 2xl:mb-2">Our games in Beta</h3>
							<Gamecards className="mx-auto" items={navigation} filterEnabled />
							<h3 className="h3 lg:h4 font-bold text-center 2xl:mb-2">Vote on the next Game!</h3>
							<GamecardsCarousel className="mx-auto" items={navigation} filterDisabled />
						</section>
					</div>
				</div>

				{/*=Infinite Floating Cubes 
				<div className="circles" style={{ zIndex: 0 }}>
					{Array.from({ length: 10 }).map((_, i) => (
						<div key={i}></div>
					))}
				</div>*/}
			</div>
			{/* Games Section */}
			<section className="items-center bg-gradient-to-b from-surf-2  to-surf-1">
				<Faq></Faq>
			</section>

			{/* Footer
			<footer className="mt-auto p-6 bg-surf-2 shadow-lg">
				<div className="text-center text-white">{&copy; 2023 AI Game Guide}</div>
					</footer>*/}
		</div>
	)
}

export default Landing
