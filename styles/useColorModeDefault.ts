import { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/color-mode'

const useColorModDefault = () => {
	const { colorMode, setColorMode } = useColorMode()

	// Set the default color mode
	useEffect(() => {
		const savedColorMode = localStorage.getItem('theme-color-mode')
		if (!savedColorMode) {
			setColorMode('light')
		} else {
			setColorMode(savedColorMode)
		}
	}, [setColorMode])

	// Update local storage if color mode changes
	useEffect(() => {
		localStorage.setItem('theme-color-mode', colorMode)
	}, [colorMode])

	return { colorMode, setColorMode }
}

export default useColorModDefault
