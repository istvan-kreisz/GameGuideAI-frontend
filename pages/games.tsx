import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import Gamecards from '@/components/Gamecards/Gamecards'
import { navigation } from '@/constants/navigation'
import Modal from '@/components/Modal/Modal'
import { useUserData } from 'context/UserDataContext'

const Home: NextPage = () => {
	const [visible, setVisible] = useState<boolean>(false)
	const { conversations } = useUserData()

	conversations.forEach((conversation) => {
		const navigationElement = navigation.find((nav) => nav.title === conversation.game)

		if (navigationElement && navigationElement.baseURL) {
			navigationElement.url = navigationElement.baseURL + `?id=${conversation.id}`
		}
	})

	return (
		<>
			<Layout hideRightSidebar={true}>
				<div className="grow px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none 2xl:py-12 md:px-4 md:pt-0 md:pb-6">
					<div className="mb-10 text-center">
						<div className="h3 leading-[4rem] 2xl:mb-2 2xl:h4">AI Gaming Companion</div>
						<div className="body1 text-n-4 2xl:body1S">Chat with GPT trained on game info!</div>
					</div>
					<Gamecards className="mx-auto" items={navigation} />
					<div className="my-4 text-center">
						<button className="btn-blue btn-medium" onClick={() => setVisible(true)}>
							Vote on the next game!
						</button>
					</div>
				</div>
			</Layout>
			<Modal video visible={visible} onClose={() => setVisible(false)}>
				<iframe
					style={{ width: 'inherit', height: '100%' }}
					src="https://docs.google.com/forms/d/e/1FAIpQLScH-2Bs0iAPhgSLQ4svJMjdxJUquevMPZEhbbl_SvFMTLNOyA/viewform?embedded=true"
					title="Google Poll"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				>
					Loading…
				</iframe>
			</Modal>
		</>
	)
}

export default Home
