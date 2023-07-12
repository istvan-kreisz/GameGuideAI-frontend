import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					content="Discover GameGuideAI, the first AI-powered game guide enhancing player strategies, walkthroughs, and tips. Level up your gaming experience with artificial intelligence."
					name="GameGuideAI - Chat with GPT trained on game info"
				/>
				<meta content="GameGuideAI - Chat with GPT trained on game info" property="og:title" />
				<meta
					content="Discover GameGuideAI, the first AI-powered game guide enhancing player strategies, walkthroughs, and tips. Level up your gaming experience with artificial intelligence."
					property="og:description"
				/>
				<meta content="%PUBLIC_URL%/fb-og-image.png" property="og:image" />
				<meta property="og:url" content="https://gameguide.ai" />
				<meta property="og:site_name" content="GameGuideAI - Chat with GPT trained on game info" />
				<meta content="GameGuideAI - Chat with GPT trained on game info" property="twitter:title" />
				<meta
					content="Discover GameGuideAI, the first AI-powered game guide enhancing player strategies, walkthroughs, and tips. Level up your gaming experience with artificial intelligence."
					property="twitter:description"
				/>
				<meta content="%PUBLIC_URL%/twitter-card.png" property="twitter:image" />
				<meta property="og:type" content="Article" />
				<meta content="summary" name="twitter:card" />
				{/* <meta name="twitter:site" content="@gameguideai" />
				<meta name="twitter:creator" content="@gameguideai" /> */}
				{/* <meta property="fb:admins" content="132951670226590" /> */}

				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
