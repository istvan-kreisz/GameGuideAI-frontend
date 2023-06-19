import Link from 'next/link'
import Image from '@/components/Image/Image'

type NotificationProps = {
	item: any
}

const Notification = ({ item }: NotificationProps) => (
	<Link
		className="flex items-center p-4 rounded-xl transition-colors hover:bg-n-2 md:hover:bg-transparent md:p-0 dark:hover:bg-n-6 dark:md:hover:bg-transparent"
		href={item.url}
	>
		<div className="w-[calc(100%-3.75rem)] px-5 md:px-3">
			<div className="mb-1 truncate base1 text-n-7 md:mb-0 md:base2 dark:text-n-1">
				{item.content}
			</div>
			<div>
				<span className="inline-block w-0.5 h-2 bg-n-3 rounded-full mx-3 md:mx-2 dark:bg-n-5"></span>
				<span className="caption1 text-n-4">{item.category}</span>
			</div>
		</div>
		{item.new && <div className=" shrink-0 w-4 h-4 rounded-full bg-accent-1 md:w-3 md:h-3"></div>}
	</Link>
)

export default Notification
