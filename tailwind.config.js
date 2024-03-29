const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./pages-lib/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			'2xl': { max: '1419px' },
			// => @media (max-width: 1419px) { ... }
			xl: { max: '1179px' },
			// => @media (max-width: 1179px) { ... }
			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }
			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }
			sm: { max: '480px' },
			// => @media (max-width: 480px) { ... }
			xs: { max: '320px' },
			// => @media (max-width: 480px) { ... }
		},
		extend: {
			colors: {
				primary: {
					1: '#0084FF',
					2: '#3FDD78',
				},
				accent: {
					1: '#D84C10',
					2: '#3E90F0',
					3: '#8E55EA',
					4: '#8C6584',
					5: '#DDA73F',
				},
				n: {
					1: '#FEFEFE',
					2: '#E8ECEF',
					3: '#d5d8db',
					4: '#6C7275',
					5: '#343839',
					6: '#272A37',
					7: '#141718',
				},
				surf: {
					1: '#272A37',
					2: '#323644',
					3: '#1D90F5',
					4: '#424656',
				},
			},
			spacing: {
				0.25: '0.0625rem',
				0.75: '0.1875rem',
				4.5: '1.125rem',
				5.5: '1.375rem',
				6.5: '1.75rem',
				13: '3.25rem',
				15: '3.75rem',
				18: '4.5rem',
				22: '5.5rem',
				30: '7.5rem',
				34: '8.5rem',
				38: '9.5rem',
				58: '14.5rem',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'linear',
			},
			fontFamily: {
				inter: ['var(--font-inter)', ...fontFamily.sans],
				outfit: 'var(--font-outfit)',
			},
			fontSize: {
				0: ['0px', '0px'],
				xl: ['1.125rem', '2rem'],
				'2xl': ['1.5rem', '2.5rem'],
				'3xl': ['1.75rem', '2.5rem'],
				'4xl': ['2.5rem', '3rem'],
				'5xl': ['3rem', '3.5rem'],
				'6xl': ['4rem', '4.5rem'],
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},
			borderWidth: {
				3: '0.1875rem',
				6: '0.375rem',
			},
			opacity: {
				15: '.15',
			},
			keyframes: {
				loaderDots: {
					'0%': { opacity: 1 },
					'50%,100%': { opacity: 0.15 },
				},
			},
		},
	},
	plugins: [
		require('@headlessui/tailwindcss')({ prefix: 'ui' }),
		require('tailwind-scrollbar'),
		iOSHeight,
		plugin(function ({ addBase, addComponents, addUtilities }) {
			addBase({
				html: {
					'@apply text-[0.92rem]': {},
				},
				body: {
					'@apply bg-surf-1 text-[1rem] leading-6 -tracking-[.01em] text-n-7 antialiased md:bg-n-1 dark:text-n-2 dark:md:bg-surf-2':
						{},
				},
			})
			addComponents({
				'.h1': {
					'@apply font-outfit text-6xl font-medium -tracking-[.025em]': {},
				},
				'.h2': {
					'@apply font-outfit text-5xl font-medium': {},
				},
				'.h3': {
					'@apply font-outfit text-4xl font-medium': {},
				},
				'.h4': {
					'@apply font-outfit text-3xl font-bold': {},
				},
				'.h5': {
					'@apply font-outfit text-2xl font-bold': {},
				},
				'.h6': {
					'@apply font-outfit text-xl font-bold': {},
				},
				'.body1': {
					'@apply text-[1.5rem] leading-9 -tracking-[.03em]': {},
				},
				'.body1S': {
					'@apply text-[1.375rem] leading-7 -tracking-[.02em]': {},
				},
				'.body2': {
					'@apply text-[1.0625rem] leading-6 -tracking-[.01em]': {},
				},
				'.base1': {
					'@apply font-inter text-[1rem] leading-6 font-medium -tracking-[.03em]': {},
				},
				'.base2': {
					'@apply font-inter text-[0.875rem] leading-6 font-medium -tracking-[.02em]': {},
				},
				'.caption1': {
					'@apply font-inter text-[0.75rem] leading-5 font-medium -tracking-[.03em]': {},
				},
				'.caption2': {
					'@apply font-inter text-[0.6875rem] leading-4 font-medium -tracking-[.01em]': {},
				},
				'.btn': {
					'@apply inline-flex items-center justify-center h-12 px-5.5 border-2 rounded-xl base2 font-semibold transition-colors disabled:opacity-20 disabled:pointer-events-none':
						{},
				},
				'.btn svg': {
					'@apply fill-inherit first:mr-2 last:ml-2': {},
				},
				'.btn-blue': {
					'@apply btn bg-primary-1 border-primary-1 text-n-1 fill-n-1 hover:bg-primary-1/90 hover:border-transparent':
						{},
				},
				'.btn-red': {
					'@apply btn bg-accent-1 border-accent-1 text-n-1 fill-n-1 hover:bg-accent-1/90 hover:border-transparent':
						{},
				},
				'.btn-dark': {
					'@apply btn bg-surf-1 border-n-7 text-n-1 fill-n-1 hover:bg-n-5 hover:border-n-5 dark:bg-n-1 dark:border-n-1 dark:text-n-7 dark:fill-n-7 dark:hover:border-transparent dark:hover:text-primary-1 dark:hover:fill-primary-1':
						{},
				},
				'.btn-white': {
					'@apply btn bg-n-1 border-transparent shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.15)] text-n-7 fill-n-7 hover:bg-n-2 dark:bg-surf-2 dark:border-n-1/10 dark:text-n-1 dark:fill-n-1 dark:hover:bg-n-1/10':
						{},
				},
				'.btn-stroke-dark': {
					'@apply btn border-surf-4 text-n-1 hover:bg-surf-1': {},
				},
				'.btn-stroke-light': {
					'@apply btn border-n-3 fill-n-7 hover:bg-n-3 hover:text-n-7 dark:border-n-4 dark:hover:bg-surf-1 dark:hover:text-n-1 dark:fill-n-1':
						{},
				},
				'.btn-large': {
					'@apply h-13': {},
				},
				'.btn-medium': {
					'@apply h-10': {},
				},
				'.btn-small': {
					'@apply h-9 px-4 border rounded-md': {},
				},
				'.btn-medium svg, .btn-small svg': {
					'@apply w-5 h-5': {},
				},
			})
			addUtilities({
				'.tap-highlight-color': {
					'-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
				},
			})
		}),
	],
}
