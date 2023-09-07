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
		<div className="grid grid-cols-4 gap-4 max-w-6xl scrollbar mx-auto bg-surf-2 rounded-xl py-8 px-4 items-center">
			<div className="col-span-1 lg:text-sm text-base  mt-auto flex items-center justify-center">
				Core features
			</div>
			{['Google Search', 'Traditional Wiki', 'AI GameGuide'].map((title, index) => (
				<div key={index} className="col-span-1 flex flex-col items-center gap-1 justify-center">
					<div className="bg-surf-4 rounded-full w-16 h-16 flex items-center justify-center">
						{index === 0 && <Icon name="google" className="w-8 h-full fill-primary-1 m-auto" />}
						{index === 1 && <Icon name="book" className="w-8 h-full fill-primary-1 m-auto" />}
						{index === 2 && (
							<Image
								className="h-full w-9 m-auto"
								src="/images/logosmall.svg"
								width={36}
								height={36}
								alt=""
							/>
						)}
					</div>
					<span className="lg:text-sm text-base self-center mt-2">{title}</span>
				</div>
			))}
			{data.map((item: any) => (
				<React.Fragment key={item.id}>
					<div className="col-span-1 lg:text-sm text-base flex items-center justify-center text-center">
						{item.title}
					</div>
					{['Google Search', 'Traditional Wiki', 'AI GameGuide'].map((title, index) => (
						<div key={index} className="col-span-1 flex items-center justify-center">
							<Icon
								className={`h-7 w-7 ${item[title] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item[title] ? 'check-thin' : 'close'}
							/>
						</div>
					))}
				</React.Fragment>
			))}
		</div>
	)
}

export default ComparisonTable
