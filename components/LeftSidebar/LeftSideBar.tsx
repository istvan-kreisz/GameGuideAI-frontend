import { useState, useEffect } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import Logo from '@/components/Logo/Logo'
import Icon from '@/components/Icon/Icon'
import Modal from '@/components/Modal/Modal'
import Settings from '@/components/Settings/Settings'
import Navigation from './Navigation/Navigation'
import Profile from './Profile/Progile'
import ToggleTheme from './ToggleTheme/ToggleTheme'
import { settings } from '@/constants/settings'
import { twMerge } from 'tailwind-merge'
import { useAuth } from 'context/AuthContext'

type LeftSidebarProps = {
	value: boolean
	setValue?: any
	smallSidebar?: boolean
	visibleRightSidebar?: boolean
}

const LeftSidebar = ({ value, setValue, smallSidebar, visibleRightSidebar }: LeftSidebarProps) => {
	const [visibleSettings, setVisibleSettings] = useState<boolean>(false)
	const { user, logout } = useAuth()

	useEffect(() => {
		window.addEventListener('keydown', handleWindowKeyDown)
		return () => {
			window.removeEventListener('keydown', handleWindowKeyDown)
		}
	}, [])

	const handleWindowKeyDown = (event: any) => {
		if (event.metaKey && event.key === 'f') {
			event.preventDefault()
		}
	}

	const navigation = [
		{
			title: 'Home',
			icon: 'chat',
			color: 'fill-accent-2',
			url: '/',
		},
		{
			title: 'Skyrim Chat',
			icon: 'chat',
			color: 'fill-accent-5',
			url: '/skyrim',
		},
		...(user
			? [
					{
						title: 'Manage subscription',
						icon: 'card',
						color: 'fill-accent-4',
						url: '/pricing',
					},
			  ]
			: []),
		{
			title: 'Updates & FAQ',
			icon: 'barcode',
			color: 'fill-accent-1',
			url: '/updates-and-faq',
		},
		...(user
			? [
					{
						title: 'Settings',
						icon: 'settings',
						color: 'fill-accent-3',
						onClick: () => setVisibleSettings(true),
					},
			  ]
			: []),
	]

	const handleClick = () => {
		setValue(!value)
		smallSidebar && value ? disablePageScroll() : enablePageScroll()
	}

	return (
		<>
			<div
				className={twMerge(
					`fixed z-20 top-0 left-0 bottom-0 flex flex-col pt-30 px-4 bg-n-7 md:invisible md:opacity-0 md:transition-opacity ${
						value ? 'w-24 pb-38 md:w-16 md:px-0 md:pb-30' : 'w-80 pb-58'
					} ${visibleRightSidebar && 'md:visible md:opacity-100'}`
				)}
			>
				<div
					className={`absolute top-0 right-0 left-0 flex items-center h-30 pl-7 pr-6 ${
						value ? 'justify-center md:px-4' : 'justify-between'
					}`}
				>
					{!value && <Logo />}
					<button className="group tap-highlight-color" onClick={handleClick}>
						<Icon
							className="fill-n-4 transition-colors group-hover:fill-n-3"
							name={value ? 'toggle-on' : 'toggle-off'}
						/>
					</button>
				</div>
				<div className="grow overflow-y-auto scroll-smooth scrollbar-none">
					<Navigation visible={value} items={navigation} />
				</div>
				<div className="absolute left-0 bottom-0 right-0 pb-6 px-4 bg-n-7 before:absolute before:left-0 before:right-0 before:bottom-full before:h-10 before:bg-gradient-to-t before:from-[#131617] before:to-[rgba(19,22,23,0)] before:pointer-events-none md:px-3">
					{user && <Profile visible={value} />}
					<ToggleTheme visible={value} />
				</div>
			</div>
			{user && (
				<Modal
					className="md:!p-0"
					classWrap="max-w-[48rem] md:min-h-screen-ios md:rounded-none"
					classButtonClose="hidden md:block md:absolute md:top-5 md:right-5 dark:fill-n-4"
					classOverlay="md:bg-n-1"
					visible={visibleSettings}
					onClose={() => setVisibleSettings(false)}
				>
					<Settings items={settings} />
				</Modal>
			)}
		</>
	)
}

export default LeftSidebar
