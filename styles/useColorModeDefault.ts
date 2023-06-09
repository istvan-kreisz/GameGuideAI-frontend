import { useColorMode, ColorMode } from '@chakra-ui/color-mode'

const useColorModDefault = (): {
	colorMode: ColorMode
	setColorMode: (mode: ColorMode) => void
} => {
	const { colorMode, setColorMode } = useColorMode()

	// Set the initial color mode to dark if not set
	if (typeof window !== 'undefined' && !localStorage.getItem('chakra-ui-color-mode')) {
		setColorMode('dark')
	}

	return { colorMode, setColorMode }
}

export default useColorModDefault
