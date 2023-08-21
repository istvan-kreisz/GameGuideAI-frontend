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
			<div className="flex flex-wrap-reverse w-full py-16 border-t border-n-3 lg:flex-col md:py-8 dark:border-n-4 place-content-center items-center  text-n-2 ">
				<div className="max-w-lg lg:max-w-none mr-16 lg:mb-10 lg:mr-0 lg:pr-0">
					<div className="dark:bg-surf-1/80 p-8 rounded-xl">
						<div className="flex items-center gap-4">
							<div className="flex justify-center items-center w-15 h-15 mb-5 rounded-full bg-surf-4">
								<Icon className="fill-accent-2" name={icon} />
							</div>
							<div className="mb-5 h6">{title}</div>
						</div>
						<div className="base1 font-medium text-left">{text}</div>
					</div>
				</div>

				{imageLight && (
					<div className="h-fit w-fit rounded-xl bg-gradient-to-r from-purple-400 via-blue-200 to-primary-1 p-[2px]">
						<Image
							className="w-full h-auto-full h-auto max-h-[506px] max-w-[519px]"
							style={{ flex: '1 0 120vw' }}
							src={isDarkMode ? imageDark : imageLight}
							width={519}
							height={506}
							quality={100}
							alt=""
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default FeaturePreview
