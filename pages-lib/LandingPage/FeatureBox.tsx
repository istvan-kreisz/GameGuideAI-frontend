type FeatureBoxProps = {
	title: string
	text: string
	color: string
	svg: JSX.Element
}

const FeatureBox = ({ title, text, color, svg }: FeatureBoxProps) => {
	return (
		<div
			className={`bg-gradient-to-br ${color} via-n-3 to-primary-1 p-1 flex basis-1/3 rounded-[30px] border-none
        ${
					''
					//  item.popular && 'relative text-n-1 before:absolute before:-top-4 before:left-0 before:right-0 before:-bottom-4 before:bg-surf-2 before:rounded-3xl dark:text-n-7 dark:before:bg-n-2'
				}
        `}
		>
			<div className="flex h-full w-full items-center justify-center p-8 2xl:px-6 dark:bg-surf-2 back rounded-[27px]">
				<div className="relative flex flex-col grow z-2">
					<div className="flex justify-between items-center mb-1">
						<div className="h4" style={{ color: color }}>
							{title}
						</div>
					</div>
					{/* <div className="mb-6 base1 font-semibold">{item.description}</div> */}
					{/* <div className="mb-2">
				<span className="mr-2 h2">${plan ? item.priceYear : item.priceMonth}</span>
				<span className={twMerge(`h4 text-n-4/50 ${item.popular && 'text-n-4'}`)}>
					/{plan ? 'year' : 'mo'}
				</span>
			</div> */}
					<div className="base1 text-n-2 text-left mb-6">{text}</div>

					{svg}

					{/* <div
				className={`grow space-y-4 mt-6 pt-6 border-t border-n-3 dark:border-n-6 ${
					item.popular && 'border-n-5 dark:border-n-4/25'
				}`}
			>
				{item.details.map((x: any, index: number) => (
					<div className="flex base2" key={index}>
						<Icon
							className={twMerge(`mr-3 fill-n-4/50 ${item.popular && 'fill-n-4'}`)}
							name="check-circle"
						/>
						{x}
					</div>
				))}
			</div> */}
				</div>
			</div>
		</div>
	)
}

export default FeatureBox
