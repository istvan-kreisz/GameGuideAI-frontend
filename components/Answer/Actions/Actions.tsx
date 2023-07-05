import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-hot-toast'
import Image from '@/components/Image/Image'
import Notify from '@/components/Notify/Notify'

type ActionsProps = { text: string }

const Actions = ({ text }: ActionsProps) => {
	const [copied, setCopied] = useState<boolean>(false)
	const [share, setShare] = useState<boolean>(false)
	const [archive, setArchive] = useState<boolean>(false)
	const [visibleModal, setVisibleModal] = useState<boolean>(false)

	const onCopy = () => {
		setCopied(true)
		toast((t) => (
			<Notify iconName="check-thin">
				<div className="ml-3 h6">Content copied</div>
			</Notify>
		))
	}

	const handleClick = () => {
		toast((t) => (
			<Notify iconName="check-thin">
				<div className="mr-6 ml-3 h6">1 chat archived</div>
				<button className="btn-blue btn-medium ml-3" onClick={() => toast.dismiss(t.id)}>
					Undo
				</button>
			</Notify>
		))
	}

	const styleButton: string =
		'h-6 ml-3 px-2 rounded-md caption1 txt-n-6 transition-colors hover:text-primary-1 dark:bg-n-7'

	return (
		<>
			<CopyToClipboard text={text} onCopy={onCopy}>
				<button className={`${styleButton} md:hidden mt`}>Copy</button>
			</CopyToClipboard>
			{/* <button className={styleButton}>Regenerate response</button> */}
			{/* {!share && !archive && (
				<div className="flex ml-3 px-1 space-x-1 bg-n-3 rounded-md md:hidden dark:bg-n-7">
					<button className="" onClick={() => setShare(true)}>
						<Image
							src="/images/smile-heart-eyes.png"
							width={24}
							height={24}
							alt="Smile heart eyes"
						/>
					</button>
					<button className="" onClick={() => setArchive(true)}>
						<Image src="/images/smile-unamused.png" width={24} height={24} alt="Smile unamused" />
					</button>
				</div>
			)} */}
			{share && (
				<button
					className={`flex items-center ${styleButton} pl-1 md:hidden`}
					onClick={() => setVisibleModal(true)}
				>
					<Image src="/images/smile-heart-eyes.png" width={24} height={24} alt="Smile heart eyes" />
					Share
				</button>
			)}
			{archive && (
				<button className={`flex items-center ${styleButton} pl-1 md:hidden`} onClick={handleClick}>
					<Image src="/images/smile-unamused.png" width={24} height={24} alt="Smile unamused" />
					Archive chat
				</button>
			)}
		</>
	)
}

export default Actions
