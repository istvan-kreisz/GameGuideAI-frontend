import FaqItem from '@/components/FaqItem/FaqItem'

import { faqs } from 'mockdata/faq'

type FaqProps = {}

const Faq = ({}: FaqProps) => (
	<div className="pb-32 px-15 2xl:py-20 2xl:px-10 xl:px-8">
		<div className="max-w-[47.75rem] mx-auto">
			<h2 className="mb-12 text-center h3 lg:h4">Frequently asked questions</h2>
			<div>
				{faqs.map((x) => (
					<FaqItem item={x} key={x.id} />
				))}
			</div>
		</div>
	</div>
)

export default Faq
