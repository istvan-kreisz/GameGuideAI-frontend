import { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/color-mode'

const useColorModDefault = () => {
	const { colorMode, setColorMode } = useColorMode()

	useEffect(() => {
		const savedColorMode = localStorage.getItem('theme-color-mode')
		if (!savedColorMode) {
			setColorMode('dark')
		} else {
			setColorMode(savedColorMode)
		}
	}, [setColorMode])

	const setColorModeWithStorage = (mode: 'light' | 'dark') => {
		setColorMode(mode)
		localStorage.setItem('theme-color-mode', mode)
	}

	return { colorMode, setColorMode: setColorModeWithStorage }
}

export default useColorModDefault
