import { toast } from 'react-hot-toast'
import Notify from './Notify'
import { capitalize } from '@/utils/utils'

const showNotification = (message: string, type: 'error' | 'success') => {
	toast((t) => (
		<Notify
			className="md:flex-col md:items-center md:px-10"
			iconName={type === 'error' ? 'close' : 'check-thin'}
		>
			<div className="ml-3 mr-6 h6 md:mx-0 md:my-2">{capitalize(type)}</div>
			<div className="ml-3 mr-6 text-lg md:mx-0 md:my-2">{message}</div>
		</Notify>
	))
}

export { showNotification }
