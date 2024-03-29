import { Tab } from '@headlessui/react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'
import Icon from '@/components/Icon/Icon'
import Updates from './Updates'
import Faq from './Faq'

import { updates } from 'mockdata/updates'
import { faqs } from 'mockdata/faq'

const tanNavigation = ['Updates', 'FAQ']

const UpdatesAndFaqPage = () => {
	const router = useRouter()

	return (
		<Layout hideRightSidebar>
			<div className="grow overflow-y-auto scroll-smooth scrollbar-none p-20 2xl:px-10 md:pt-6 md:px-6 md:pb-10">
				<div className="max-w-[58.5rem] mx-auto">
					<div className="mb-4 h2 md:pr-16 md:h3">Updates & FAQ</div>
					<div className="mb-12 body1 text-n-4 md:mb-6">Features, fixes & improvements.</div>
					<Tab.Group defaultIndex={0}>
						<Tab.List className="mb-12 md:mb-6 space-x-3">
							{tanNavigation.map((button, index) => (
								<Tab
									className="h-10 px-6 rounded-full base1 text-n-4 transition-colors outline-none tap-highlight-color hover:text-n-7 ui-selected:bg-primary-1 ui-selected:!text-n-1 dark:hover:text-n-1"
									key={index}
								>
									{button}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels>
							<Tab.Panel>
								<Updates items={updates} />
							</Tab.Panel>
							<Tab.Panel>
								<Faq items={faqs} />
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
		</Layout>
	)
}

export default UpdatesAndFaqPage
