import Icon from '@/components/Icon/Icon'

type NotifyProps = {
	className?: string
	iconName?: 'check-thin' | 'trash' | 'close'
	children: React.ReactNode
}

const Notify = ({ className, iconName, children }: NotifyProps) => {
	const iconColor = iconName === 'check-thin' ? 'fill-n-7' : 'fill-n-1'
	const bgColor = iconName === 'check-thin' ? 'bg-primary-2' : 'bg-accent-1'
	return (
		<div className={`flex items-center p-4 rounded-2xl bg-surf-1 text-n-1 md:-mb-5 ${className}`}>
			<div
				className={`flex justify-center items-center shrink-0 w-10 h-10 rounded-full ${bgColor}`}
			>
				<Icon className={iconColor} name={iconName} />
			</div>
			{children}
		</div>
	)
}

export default Notify
