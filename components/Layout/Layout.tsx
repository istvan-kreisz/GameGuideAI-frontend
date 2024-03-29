import { useEffect, useState } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { enablePageScroll, clearQueueScrollLocks } from 'scroll-lock'
import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import LeftSidebar from '@/components/LeftSidebar/LeftSideBar'
import RightSidebar from '@/components/RightSidebar'
import Icon from '@/components/Icon/Icon'
import Burger from './Burger/Burger'

type LayoutProps = {
	smallSidebar?: boolean
	hideRightSidebar?: boolean
	backUrl?: string
	children: React.ReactNode
}

const Layout = ({ smallSidebar, hideRightSidebar, backUrl, children }: LayoutProps) => {
	const [visibleSidebar, setVisibleSidebar] = useState<boolean>(smallSidebar === true)
	const [visibleRightSidebar, setVisibleRightSidebar] = useState<boolean>(false)

	const isDesktop = useMediaQuery({
		query: '(max-width: 1179px)',
	})

	const handleClickOverlay = () => {
		setVisibleSidebar(true)
		setVisibleRightSidebar(false)
		clearQueueScrollLocks()
		enablePageScroll()
	}

	useEffect(() => {
		setVisibleSidebar(smallSidebar || isDesktop)
	}, [isDesktop, smallSidebar])

	return (
		<>
			<Head>
				<title>AI GameGuide</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			</Head>
			<div
				className={`pr-6 bg-surf-1 md:p-0 md:bg-n-1 dark:md:bg-surf-2 md:overflow-hidden ${
					visibleSidebar
						? 'pl-24 md:pl-0'
						: smallSidebar
						? 'pl-24 md:pl-0'
						: 'pl-72 xl:pl-24 md:pl-0'
				}`}
			>
				<LeftSidebar
					value={visibleSidebar}
					setValue={setVisibleSidebar}
					visibleRightSidebar={visibleRightSidebar}
					smallSidebar={smallSidebar}
				/>
				<div className={'flex py-6 md:py-0 h-screen h-screen-ios'}>
					<div
						className={`relative flex grow max-w-full bg-n-1 rounded-[0.75rem] md:rounded-none dark:bg-surf-2 ${
							!hideRightSidebar && 'pr-[22.5rem] 2xl:pr-80 lg:pr-0'
						}`}
					>
						<div className={`relative flex flex-col grow max-w-full md:pt-18`}>
							{
								<Burger
									className={`
                                ${!visibleSidebar && 'md:hidden'}
                            `}
									visibleRightSidebar={visibleRightSidebar}
									onClick={() => setVisibleRightSidebar(!visibleRightSidebar)}
								/>
							}
							{hideRightSidebar && smallSidebar && (
								<Link
									className="absolute top-6 right-6 flex justify-center items-center w-10 h-10 border-2 border-n-4/25 rounded-full text-0 transition-colors hover:border-transparent hover:bg-n-4/25"
									href={backUrl || '/'}
								>
									<Icon className="fill-n-4" name="close" />
								</Link>
							)}
							{children}
						</div>
						{!hideRightSidebar && (
							<RightSidebar
								className={`
                                ${
																	!visibleSidebar &&
																	'md:translate-x-64 md:before:absolute md:before:z-30 md:before:inset-0'
																}
                            `}
								visible={visibleRightSidebar}
							/>
						)}
					</div>
				</div>
				<div
					className={twMerge(
						`fixed inset-0 z-10 bg-surf-1/80 invisible opacity-0 md:hidden ${
							(!visibleSidebar && smallSidebar) || (visibleRightSidebar && 'visible opacity-100')
						}`
					)}
					onClick={handleClickOverlay}
				></div>
			</div>
		</>
	)
}

export default Layout
