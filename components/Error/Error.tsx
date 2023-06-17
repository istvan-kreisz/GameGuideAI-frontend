import { toast } from 'react-hot-toast'
import Notify from '../Notify/Notify'

const showError = (error: string) => {
	toast((t) => (
		<Notify className="md:flex-col md:items-center md:px-10" iconName="close">
			<div className="ml-3 mr-6 h6 md:mx-0 md:my-2">Error!</div>
			<div className="ml-3 mr-6 text-base md:mx-0 md:my-2">{error}</div>
		</Notify>
	))
}

export { showError }
