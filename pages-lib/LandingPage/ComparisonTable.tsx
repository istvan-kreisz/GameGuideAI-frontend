import React from 'react'
import Icon from '@/components/Icon/Icon'

const ComparisonTable = () => {
	// Define the comparison data
	const data: any = [
		{
			id: '1',
			title: 'Personalized Assistance',
			'AI GameGuide': true,
			'Google Search': false,
			'Traditional Wiki': false,
		},
		{
			id: '2',
			title: 'Context-Aware Answers',
			'AI GameGuide': true,
			'Google Search': false,
			'Traditional Wiki': true,
		},
		{
			id: '3',
			title: 'Natural Language Interaction',
			'AI GameGuide': true,
			'Google Search': false,
			'Traditional Wiki': false,
		},
		{
			id: '4',
			title: 'Dynamic Learning & Updating',
			'AI GameGuide': true,
			'Google Search': true,
			'Traditional Wiki': false,
		},
		{
			id: '5',
			title: 'Community Input',
			'AI GameGuide': true,
			'Google Search': false,
			'Traditional Wiki': true,
		},
		{
			id: '6',
			title: 'Spoiler Free',
			'AI GameGuide': true,
			'Google Search': false,
			'Traditional Wiki': false,
		},
	]

	return (
		<div className="overflow-x-scroll lg:overflow-x-visible">
			<div className="flex justify-between mb-8 h4">
				<div className="flex-1 base2 font-semibold min-w-[4rem]">Core features</div>
				<div className="flex items-center justify-center flex-1 px-4">
					<div className="w-fit bg-surf-2 rounded-lg px-4 flex flex-col h-14 items-center gap-1 justify-center">
						<Icon name="game" className="mr-2" />
						<span className="lg:text-sm text-base self-center">AI GameGuide</span>
					</div>
				</div>
				<div className="flex items-center justify-center flex-1">
					<div className="w-fit bg-surf-2 rounded-lg px-4 flex flex-col h-14 items-center gap-1 justify-center">
						<Icon name="search" className="mr-2" />
						<span className="lg:text-sm text-base self-center">Google Search</span>
					</div>
				</div>
				<div className="flex items-center justify-center flex-1 px-4">
					<div className="w-fit bg-surf-2 rounded-lg px-4 flex flex-col h-14 items-center gap-1 justify-center">
						<Icon name="book" className="mr-2" />
						<span className="lg:text-sm text-base self-center">Traditional Wiki</span>
					</div>
				</div>
			</div>
			<div className="min-w-max">
				{data.map((item: any) => (
					<div
						className="flex justify-between items-center py-5 border-t border-n-4/15"
						key={item.id}
					>
						<div className="flex-1 base2 font-semibold min-w-[4rem]">{item.title}</div>
						<div className="flex items-center justify-center flex-1 px-4">
							<Icon
								className={`${item['AI GameGuide'] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item['AI GameGuide'] ? 'check-thin' : 'close'}
							/>
						</div>
						<div className="flex items-center justify-center flex-1 px-4">
							<Icon
								className={`${item['Google Search'] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item['Google Search'] ? 'check-thin' : 'close'}
							/>
						</div>
						<div className="flex items-center justify-center flex-1 px-4">
							<Icon
								className={`${item['Traditional Wiki'] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item['Traditional Wiki'] ? 'check-thin' : 'close'}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ComparisonTable
