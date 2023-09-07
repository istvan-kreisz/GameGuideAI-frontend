import { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/color-mode'

const useColorModeDefault = () => {
	const { colorMode, setColorMode } = useColorMode()

	// Set the default color mode
	useEffect(() => {
		const savedColorMode = localStorage.getItem('theme-color-mode')
		if (!savedColorMode) {
			setColorMode('dark')
		} else {
			setColorMode(savedColorMode)
		}
	}, []) // Removing dependency on setColorMode

	// Update local storage if color mode changes
	useEffect(() => {
		localStorage.setItem('theme-color-mode', colorMode)
	}, [colorMode])

	return { colorMode, setColorMode }
}

export default useColorModeDefault
