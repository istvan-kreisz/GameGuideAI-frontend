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
		<div className="overflow-x-scroll max-w-6xl scrollbar mx-auto bg-surf-2 rounded-xl pt-7">
			<div className="flex justify-between mb-2 h4">
				<div className="flex-1 base2 font-semibold mt-auto min-w-[110px]">Core features</div>
				<div className="flex items-center justify-center flex-1 px-4">
					<div className="w-fit  rounded-lg flex flex-col items-center gap-1 justify-center min-w-[110px]">
						<div className="bg-surf-4 rounded-full w-16 h-16">
							<Icon name="google" className="w-8 h-full fill-primary-1 m-auto" />
						</div>
						<span className="lg:text-sm text-base self-center mt-2">Google Search</span>
					</div>
				</div>
				<div className="flex items-center justify-center flex-1 px-4">
					<div className="w-fit  rounded-lg flex flex-col items-center gap-1 justify-center min-w-[110px]">
						<div className="bg-surf-4 rounded-full w-16 h-16">
							<Icon name="book" className="w-8 h-full fill-primary-1 m-auto" />
						</div>
						<span className="lg:text-sm text-base self-center mt-2">Traditional Wiki</span>
					</div>
				</div>
				<div className="flex items-center justify-center flex-1 px-4">
					<div className="w-fit  rounded-lg flex flex-col items-center gap-1 justify-center min-w-[110px]">
						<div className="bg-surf-4 rounded-full w-16 h-16 ">
							<Image
								className="h-full w-9 m-auto"
								src="/images/logosmall.svg"
								width={36}
								height={36}
								alt=""
							/>
						</div>
						<span className="lg:text-sm text-base self-center mt-2">AI GameGuide</span>
					</div>
				</div>
			</div>
			<div className="min-w-max">
				{data.map((item: any) => (
					<div
						className="flex justify-between items-center py-5 border-t border-n-4/15 min-w-[110px]"
						key={item.id}
					>
						<div className="flex-1 base2 font-semibold min-w-[110px]">{item.title}</div>
						<div className="flex items-center justify-center flex-1 px-4 min-w-[110px]">
							<Icon
								className={`h-7 w-7 ${item['Google Search'] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item['Google Search'] ? 'check-thin' : 'close'}
							/>
						</div>
						<div className="flex items-center justify-center flex-1 px-4 min-w-[110px]">
							<Icon
								className={`h-7 w-7 ${item['Traditional Wiki'] ? 'fill-primary-1' : 'fill-n-4'}`}
								name={item['Traditional Wiki'] ? 'check-thin' : 'close'}
							/>
						</div>
						<div className="flex items-center justify-center flex-1 px-4 min-w-[110px]">
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
