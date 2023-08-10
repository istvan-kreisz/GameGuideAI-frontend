import { useColorMode } from '@chakra-ui/color-mode'
import Icon from '@/components/Icon/Icon'
import Image from '@/components/Image/Image'

type FeaturePreviewProps = {
	title: string
	text: string
	icon: string
	imageLight: string
	imageDark: string
}

const FeaturePreview = ({ title, text, icon, imageLight, imageDark }: FeaturePreviewProps) => {
	const { colorMode } = useColorMode()

	const isDarkMode = colorMode === 'dark'

	return (
		<>
			<div className="flex w-full  py-16 border-t border-n-3 lg:flex-col md:py-8 dark:border-n-4 ">
				<div className="max-w-lg lg:max-w-none mr-16 lg:mb-10 lg:mr-0 lg:pr-0">
					<div className="dark:bg-surf-1/80 p-8 rounded-xl">
						<div className="flex items-center gap-4">
							<div className="flex justify-center items-center w-15 h-15 mb-5 rounded-full bg-accent-1/20">
								<Icon className="fill-accent-1" name={icon} />
							</div>
							<div className="mb-5 h6">{title}</div>
						</div>
						<div className="base1 font-semibold text-n-4 text-left">{text}</div>
					</div>
				</div>

				{imageLight && (
					<div className={`relative shrink-0 w-[700px] h-96 mx-auto rounded-2xl overflow-hidden`}>
						<Image
							className="object-cover rounded-2xl"
							src={isDarkMode ? imageDark : imageLight}
							fill
							alt=""
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default FeaturePreview
