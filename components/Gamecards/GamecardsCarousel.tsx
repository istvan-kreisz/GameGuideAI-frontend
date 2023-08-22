import React, { useState } from 'react'
import Link from 'next/link'
import Image from '@/components/Image/Image'
import Modal from '@/components/Modal/Modal'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay } from 'swiper/modules'

type MenuType = {
	title: string
	image: string
	url: string
	enabled: boolean
}

type MenuProps = {
	className?: string
	items: MenuType[]
	filterEnabled?: boolean
	filterDisabled?: boolean
}

const GamecardsCarousel = ({ items, filterEnabled = false, filterDisabled = false }: MenuProps) => {
	const [visible, setVisible] = useState<boolean>(false)
	const [slidesToShow, setSlidesToShow] = useState(5)

	const handleClick = (event: React.MouseEvent, enabled: boolean) => {
		if (!enabled) {
			event.preventDefault()
			setVisible(true)
		}
	}

	let filteredItems = items
	if (filterEnabled) {
		filteredItems = filteredItems.filter((item) => item.enabled)
	}
	if (filterDisabled) {
		filteredItems = filteredItems.filter((item) => !item.enabled)
	}

	return (
		<>
			<Swiper
				slidesPerView={'auto'}
				spaceBetween={10}
				centeredSlides={true}
				breakpoints={{
					300: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 3,
					},
					900: {
						slidesPerView: 5,
					},
					2100: {
						slidesPerView: 7,
					},
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				loop={true}
				modules={[Autoplay]}
				className="w-5/6"
			>
				{filteredItems.map((item, index) => (
					<SwiperSlide key={index}>
						<Link href={item.url} passHref as="image">
							<div
								className={`group w-[212px] 2xl:w-[150px] xl:w-[127px] flex flex-col items-center border-2 border-n-3 rounded-xl h6 transition-all hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] last:mb-0 dark:border-n-4 dark:hover:border-n-5 dark:hover:bg-surf-1`}
								onClick={(event) => handleClick(event, item.enabled)}
							>
								<div
									className={`relative flex justify-center items-center w-[212px] h-72 2xl:w-[150px] 2xl:h-52 xl:w-[127px] xl:h-44 overflow-hidden`}
								>
									<Image
										className="rounded-lg"
										src={`/gamecovers/` + item.image}
										fill
										sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 10vw"
										alt={`Game cover - ${item.title}`}
									/>
									{!item.enabled && (
										<div className="absolute text-white 2xl:text-2xl text-3xl text-center bg-black bg-opacity-40 w-full">
											Vote On It!
										</div>
									)}
									{item.enabled && (
										<div className="absolute top-[4%] right-[-11%] 2xl:right-[-16%] xl:right-[-20%] rotate-45 bg-primary-1 text-white px-8 whitespace-nowrap text-center py-1 text-sm font-medium">
											BETA
										</div>
									)}
								</div>
								<div className="text-center text-sm font-bold my-auto py-3 whitespace-nowrap">
									{item.title}
								</div>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>

			<Modal visible={visible} onClose={() => setVisible(false)}>
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

export default GamecardsCarousel
