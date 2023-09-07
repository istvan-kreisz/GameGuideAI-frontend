import Image from '@/components/Image/Image'
import Document from './Document/Document'

type QuestionProps = {
	content: any
	image?: string
	document?: string
	time: string
}

const Question = ({ content, image, document, time }: QuestionProps) => (
	<div className="max-w-[45rem] ml-auto">
		<div className="space-y-6 pt-6 px-6 pb-6 border-3 border-n-2 rounded-[1.5rem] rounded-br-none md:p-5 md:pb-8 dark:border-transparent text-white bg-surf-3 dark:bg-surf-3/70">
			{document && <Document value={document} />}
			<div className="">{content}</div>
			{image && (
				<div className="relative w-[11.25rem] h-[11.25rem]">
					<Image className="rounded-xl object-cover" src={image} fill alt="Avatar" />
				</div>
			)}
		</div>
		{/*<div className="-mt-8 flex items-end pr-6">
			<div className="pb-0.5 caption1 text-n-4/50 dark:text-n-4">{time}</div>
			 <button className="ml-3 px-2 py-0.5 bg-n-3 rounded-md caption1 txt-n-6 transition-colors hover:text-primary-1 dark:bg-surf-3/50">
                Edit
            </button> 
			<div className="relative w-16 h-16 ml-auto "></div>
			</div>*/}
	</div>
)

export default Question
