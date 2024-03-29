import Link from 'next/link'
import Image from '@/components/Image/Image'

type TestProps = {
	className?: string
	dark?: boolean
}

const Logo = ({ className, dark }: TestProps) => (
	<Link className={`flex w-[11.88rem] ${className}`} href="/">
		<Image
			skipTransition={true}
			className="w-full h-auto"
			src={dark ? '/images/logo-dark.svg' : '/images/logo.svg'}
			width={190}
			height={40}
			alt="GameGuideAI"
		/>
	</Link>
)

export default Logo
