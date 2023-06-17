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
		<div className={`flex items-center p-4 rounded-2xl bg-n-7 text-n-1 md:-mb-5 ${className}`}>
			<div
				className={`flex justify-center items-center shrink-0 w-10 h-10 rounded-full ${bgColor}`}
			>
				<Icon className={iconColor} name={iconName} />
			</div>
			{/* {iconName === 'check-thin' && (
				<div className="flex justify-center items-center shrink-0 w-10 h-10 rounded-full bg-primary-2">
					<Icon className="fill-n-7" name={iconName} />
				</div>
			)}
			{iconDelete && (
				<div className="flex justify-center items-center shrink-0 w-10 h-10 rounded-full bg-accent-1">
					<Icon className="fill-n-1" name="trash" />
				</div>
			)} */}
			{children}
		</div>
	)
}

export default Notify
