import FaqItem from '@/components/FaqItem/FaqItem'
import Image from '@/components/Image/Image'

type FaqItems = {
	id: string
	title: string
	content: string
	defaultOpen: boolean
}

type FaqProps = {
	items: FaqItems[]
}

const Faq = ({ items }: FaqProps) => (
	<>
		<div>
			{items.map((x) => (
				<FaqItem item={x} key={x.id} />
			))}
		</div>
	</>
)

export default Faq
