import Image from '@/components/Image/Image'
import Loading from './Loading/Loading'
import Actions from './Actions/Actions'
import { Anchorme } from 'react-anchorme'

type AnswerProps = {
	text: string
	loading?: boolean
	time?: string
}

const Answer = ({ text, loading, time }: AnswerProps) => {
	const newline = text.split('\n')

	return (
		<div className="max-w-[45rem]">
			<div className="pt-6 px-6 pb-16 space-y-4 bg-n-2 rounded-[1.5rem] md:p-5 md:pb-14 dark:bg-surf-4">
				{loading ? (
					<Loading />
				) : (
					newline.map((paragraph, index) => (
						<p key={index}>
							<Anchorme className="text-accent-2" target="_blank">
								{paragraph}
							</Anchorme>
						</p>
					))
				)}
			</div>
			<div className="-mt-9 flex items-end pl-3">
				<div className={`relative shrink-0 w-16 h-16 mr-auto rounded-2xl overflow-hidden`}>
					<Image
						className="object-cover rounded-2xl"
						src="/images/avatar-chat.jpg"
						fill
						alt="Avatar"
					/>
				</div>
				{loading ? null : (
					// (
					// <button className="group flex items-center ml-3 px-2 py-0.5 bg-n-3 rounded-md caption1 txt-n-6 transition-colors hover:text-primary-1 dark:bg-surf-1 dark:text-n-3 dark:hover:text-primary-1">
					// 	<Icon
					// 		className="w-4 h-4 mr-2 transition-colors group-hover:fill-primary-1 dark:fill-n-3"
					// 		name="pause-circle"
					// 	/>
					// 	Pause generating
					// </button>
					// )
					<div className="flex items-center">
						<div className="caption1 text-n-4/50 dark:text-n-4">{time}</div>
						<Actions text={text} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Answer
