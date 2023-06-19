import Link from 'next/link'
import Image from '@/components/Image/Image'

type MenuType = {
	title: string
	image: string
	url: string
	enabled: boolean
}

type MenuProps = {
	className?: string
	items: MenuType[]
}

const Gamecards = ({ className, items }: MenuProps) => (
	<div className={`flex md:flex-col items-center justify-center gap-2 ${className}`}>
		{items.map((item, index) => (
			<Link
				className={`group flex flex-col items-center mx-1 border-2 border-n-3 rounded-xl h6 transition-all hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] last:mb-0 2xl:p-2.5 lg:p-3.5 dark:border-n-5 dark:hover:border-n-7 dark:hover:bg-n-7 ${
					item.enabled ? 'pointer-events-auto' : 'pointer-events-none'
				}`}
				href={item.url}
				key={index}
			>
				<div
					className={`relative flex justify-center items-center 2xl:w-[150px] 2xl:h-52 w-[212px] h-72 ${
						item.enabled ? null : ''
					}`}
				>
					<Image
						layout={'fill'}
						objectFit={'contain'}
						className="rounded-lg "
						src={`/gamecovers/` + item.image}
						fill
						alt="Avatar"
					/>
					{!item.enabled && (
						<div className="absolute text-white text-3xl text-center bg-black bg-opacity-40 w-full">
							Coming Soon
						</div>
					)}
				</div>
				<div className="text-center text-base my-auto py-3">{item.title}</div>
			</Link>
		))}
	</div>
)

export default Gamecards