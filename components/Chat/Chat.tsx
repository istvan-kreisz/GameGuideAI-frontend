import Icon from '@/components/Icon/Icon'
import { toast } from 'react-hot-toast'
import Notify from '@/components/Notify/Notify'

type ChatProps = {
	title: string
	children: React.ReactNode
	deleteAllMessages: () => void
	clean: boolean
}

const Chat = ({ title, children, deleteAllMessages, clean }: ChatProps) => {
	const handleClickClear = (t: any) => {
		toast.dismiss(t.id)
		deleteAllMessages()
	}

	return (
		<>
			<div className="flex items-center min-h-[4.5rem] px-10 py-3 border-b border-n-3 shadow-[0_0.75rem_2.5rem_-0.75rem_rgba(0,0,0,0.06)] 2xl:px-6 lg:-mt-18 lg:pr-20 md:pl-5 md:pr-18 dark:border-n-5 dark:shadow-[0_0.75rem_2.5rem_-0.75rem_rgba(0,0,0,0.15)]">
				<div className="mx-auto pl-16 xs:pl-0 h5 truncate md:h6">{title}</div>
				<div className="flex items-center">
					{!clean && (
						<button
							className="group relative ml-auto text-0"
							onClick={() =>
								toast((t) => (
									<Notify className="md:flex-col md:items-center md:px-10" iconName="trash">
										<div className="ml-3 mr-6 h6 md:mx-0 md:my-2">Clear all chat history?</div>
										<div className="flex justify-center">
											<button
												className="btn-stroke-light btn-medium md:min-w-[6rem]"
												onClick={() => toast.dismiss(t.id)}
											>
												Cancel
											</button>
											<button
												className="btn-blue btn-medium ml-3 md:min-w-[6rem]"
												onClick={() => handleClickClear(t)}
											>
												Yes
											</button>
										</div>
									</Notify>
								))
							}
						>
							<Icon
								className="w-6 h-6 fill-n-4 transition-colors group-hover:fill-accent-1"
								name="trash"
							/>
							<div className="absolute min-w-[8rem] top-1/2 -translate-y-1/2 right-full mr-2 px-2 py-1 rounded-lg bg-n-7 caption1 text-n-1 invisible opacity-0 transition-opacity pointer-events-none lg:hidden after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-4 after:border-l-4 after:border-b-4 after:border-r-4 after:border-r-transparent after:border-l-n-7 after:border-t-transparent after:border-b-transparent group-hover:opacity-100 group-hover:visible">
								Clear chat history
							</div>
						</button>
					)}
					{/* <button
						className="group w-8 h-8 ml-6 md:ml-3 md:hidden"
						onClick={() => setVisibleModal(true)}
					>
						<Icon className="fill-n-4 transition-colors group-hover:fill-primary-1" name="share" />
					</button> */}
				</div>
			</div>
			<div className="relative z-2 grow p-10 space-y-6 overflow-y-auto scroll-smooth scrollbar-none 2xl:p-6 md:p-5 mx-auto max-w-4xl w-full">
				{children}
			</div>
		</>
	)
}

export default Chat
