import { useState } from 'react'
import { default as NextImage, ImageProps } from 'next/image'

const Image = ({
	className,
	skipTransition = false,
	...props
}: ImageProps & { skipTransition?: boolean }) => {
	const [loaded, setLoaded] = useState(false)

	return (
		<NextImage
			className={`inline-block align-top ${skipTransition ? '' : 'transition-opacity opacity-0'} ${
				loaded && 'opacity-100'
			} ${className}`}
			onLoadingComplete={() => setLoaded(true)}
			{...props}
		/>
	)
}

export default Image
