/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'components', 'config', 'constants', 'context', 'hooks', 'templates'],
	},
}

module.exports = nextConfig
