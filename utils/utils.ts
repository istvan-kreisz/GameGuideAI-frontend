import { showNotification } from '@/components/Notify/showNotification'

function capitalize(word: string) {
	const lower = word.toLowerCase()
	return word.charAt(0).toUpperCase() + lower.slice(1)
}

const handleError = (error: any) => {
	if (error instanceof Error) {
		showNotification(error.message, 'error')
	} else if (typeof error === 'string') {
		showNotification(error, 'error')
	} else {
		showNotification('An unknown error occurred', 'error')
	}
}
const conversationId = () => {
	if (typeof window !== 'undefined') {
		return window.location.search.split('=')?.[1]
	} else {
		return undefined
	}
}

export { capitalize, handleError, conversationId }
