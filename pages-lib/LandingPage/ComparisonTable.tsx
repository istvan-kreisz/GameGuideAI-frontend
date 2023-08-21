import React from 'react'
import Icon from '@/components/Icon/Icon'
import Image from 'next/image'

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
		<div className="overflow-x-scroll max-w-7xl scrollbar mx-auto">
			<h2 className="mb-12 text-center h3 lg:h4">How it compares</h2>
			<div className="flex justify-between mb-8 h4">
				<div className="flex-1 base2 font-semibold self-center min-w-[120px]">Core features</div>
				<div className="flex items-center justify-center flex-1 px-4">
					<div className="w-fit bg-surf-2 rounded-lg flex flex-col h-16 items-center gap-1 justify-center min-w-[120px]">
						<Icon name="google" className="w-6 h-6 fill-primary-1" />
						<span className="lg:text-sm text-base self-center">Google Search</span>
					</div>
				</div>
				<div className="flex items-center justify-center flex-1 px-4">
					<div className="w-fit bg-surf-2 rounded-lg flex flex-col h-16 items-center gap-1 justify-center min-w-[120px]">
						<Icon name="book" className="w-[20px] h-[20px] fill-primary-1" />
						<span className="lg:text-sm text-base self-center">Traditional Wiki</span>
					</div>
				</div>
				<div className="flex items-center justify-center flex-1 px-4">
					<div className="w-fit bg-surf-2 rounded-lg flex flex-col h-16 items-center gap-1 justify-center min-w-[120px]">
						<Image className="h-6 w-6" src="/images/logosmall.svg" width={24} height={24} alt="" />
						<span className="lg:text-sm text-base self-center">AI GameGuide</span>
					</div>
				</div>
			</div>
			<div className="min-w-max">
				{data.map((item: any) => (
					<div
						className="flex justify-between items-center py-5 border-t border-n-4/15 min-w-[120px]"
						key={item.id}
					>
						<div className="flex-1 base2 font-semibold min-w-[120px]">{item.title}</div>
						<div className="flex items-center justify-center flex-1 px-4 min-w-[120px]">
							<Icon
								className={`h-7 w-7 ${item['Google Search'] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item['Google Search'] ? 'check-thin' : 'close'}
							/>
						</div>
						<div className="flex items-center justify-center flex-1 px-4 min-w-[120px]">
							<Icon
								className={`h-7 w-7 ${item['Traditional Wiki'] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item['Traditional Wiki'] ? 'check-thin' : 'close'}
							/>
						</div>
						<div className="flex items-center justify-center flex-1 px-4 min-w-[120px]">
							<Icon
								className={`h-7 w-7 ${item['AI GameGuide'] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item['AI GameGuide'] ? 'check-thin' : 'close'}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ComparisonTable
