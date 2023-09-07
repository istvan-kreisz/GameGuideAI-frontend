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
import DiscordButton from '@/pages-lib/LandingPage/JoinDiscordButton'
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
					<div className="bg-gradient-to-b from-[#282A37] via-primary-1/10 to-surf-2 w-full h-full pt-10 pb-20 px-5 overflow-hidden">
						{/* Hero Section */}
						<section className="items-center justify-center flex flex-col gap-20">
							<div>
								<h1 className="h1 m-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-200 to-primary-1">
									First Ever AI-Powered Game Guide
								</h1>
								<p className="body1 mt-6 text-n-1 max-w-6xl">
									Join us in creating the future of gaming! Gameguide.ai provides tips, strategies,
									walkthroughs, and answers to gaming related questions in real time!
								</p>
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

							<Image
								className="w-full h-auto max-h-[1800px] max-w-[1200px] absolute z-[-1] overflow-hidden"
								src="/images/blobanimation.svg"
								width={1800}
								height={1244}
								quality={100}
								priority={true}
								alt=""
							/>

							<DiscordButton></DiscordButton>
							<div className="flex flex-row relative max-w-3xl">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-38 h-38 lg:w-32 lg:h-32 rotate-[280deg] fill-n-2 absolute -top-34 sm:-top-28 left-10 sm:left-0"
									viewBox="0 0 100 36.5"
								>
									<path d="M92.3 10.1a2.6 2.6 0 0 0-2.6 2.6v7a62.1 62.1 0 0 0-83.9 4.1c-1 1-1 2.7 0 3.7s2.7 1 3.7 0A57 57 0 0 1 85.3 23h-6a2.6 2.6 0 0 0-2.6 2.6c0 1.5 1.2 2.6 2.6 2.6h12.9l1-.2c.6-.3 1.2-.8 1.4-1.4l.2-1V12.7a2.4 2.4 0 0 0-2.5-2.6z" />
								</svg>
								<h3 className="h4 text-3xl lg:text-2xl mt-6 font-medium text-n-1 max-w-6xl mx-28 lg:mx-20 sm:mx-10">
									Join our discord for early access to the prototype.
								</h3>
							</div>
						</section>

						<section className="items-center justify-center flex flex-col gap-20 my-20">
							<h2 className="h3 lg:h4 text-center -mb-10 mt-10">Features</h2>

							<div className="flex gap-16 lg:gap-6 sm:flex-col justify-center">
								<FeatureBox
									title="Personalized and Instant Gaming Guidance"
									text="Imagine a personal gaming assistant that understands your play style, 
									responds to queries in real-time, and provides accurate, context-aware answers. 
									That's what we're building with AI GameGuide -
									a revolutionary alternative to traditional wikis "
									color="from-accent-5/75"
									svg={svgs[0]}
									key={'feature-1'}
								/>
								<FeatureBox
									title="Community-driven Knowledge Base"
									text="We recognize the expertise of the gaming community. 
									That's why we plan to open our AI's knowledge base for contributions from all gamers. 
									Casual or fanatic, you will be able to improve GameGuide's accuracy 
									by updating and modifying its data sources."
									color="from-primary-2/75"
									svg={svgs[1]}
									key={'feature-2'}
								/>
							</div>
						</section>

						<section className="items-center">
							<FeaturePreview
								title="Building a Gaming Community"
								text="Our plans include game-specific community features like popular questions, influencer profiles, interactive polls and collaborative challenges. The goal is to elevate the gaming experience beyond playing alone."
								icon={'recording'}
								imageLight="/images/q&a.png"
								imageDark="/images/q&a.png"
							/>
						</section>

						<section className="items-center my-10">
							<h2 className="mb-12 text-center h3 lg:h4">How it compares</h2>
							<ComparisonTable></ComparisonTable>
						</section>
						<section className="p-10 mt-20 mb-10 items-center text-center flex flex-col gap-10">
							<h3 className="h3 lg:h4 text-center 2xl:mb-2">Our games in Beta</h3>
							<Gamecards className="mx-auto" items={navigation} filterEnabled clickable={false} />
							<h3 className="h3 lg:h4 text-center 2xl:mb-2">Vote on the next Game!</h3>
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
			<section className="mb-20">
				<h3 className="mb-12 text-center h3 lg:h4">Join now for access to the prototype</h3>
				<DiscordButton></DiscordButton>
			</section>
			<section className="items-center bg-gradient-to-b from-surf-2  to-surf-1 justify-center">
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
