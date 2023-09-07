type FeatureBoxProps = {
	title: string
	text: string | JSX.Element
	color: string
	svg: JSX.Element
}

const FeatureBox = ({ title, text, color, svg }: FeatureBoxProps) => {
	return (
		<div
			className={`bg-gradient-to-br ${color} to-primary-1 p-1 flex basis-1/2 rounded-xl border-none`}
		>
			<div className="flex h-full w-full max-w-[518px] items-center justify-center p-8 2xl:px-6 bg-surf-2 bg-opacity-90 rounded-xl glowborder">
				<div className="relative flex flex-col grow z-2">
					<div className="h5 w-auto h-20" style={{ color: color }}>
						<h4 className="text-left">{title}</h4>
					</div>
					<div className="base1 text-n-2 text-left mb-6">{text}</div>
					{svg}
				</div>
			</div>
		</div>
	)
}

export default FeatureBox
