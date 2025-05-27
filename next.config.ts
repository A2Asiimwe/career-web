import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */

	reactStrictMode: true,

	// Browser compatibility settings
	transpilePackages: [],

	// Configure for older browsers
	experimental: {
		// Removed invalid browsersListForSwc property
	},

	// Custom webpack config for polyfills and older browser support
	webpack: (config, { isServer }) => {
		// Add polyfills for older browsers
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				net: false,
				tls: false,
			};
		}

		// Ensure compatibility with older browsers
		config.module.rules.push({
			test: /\.m?js$/,
			resolve: {
				fullySpecified: false,
			},
		});

		return config;
	},

	// Compiler optimizations
	compiler: {
		// Remove console logs in production
		removeConsole: process.env.NODE_ENV === 'production',
	},

	// Output configuration for better compatibility
	output: 'standalone',

	// Disable SWC minification for better compatibility (optional)
	// swcMinify: false, // Uncomment if you face minification issues

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'zdmexvtrwcwpbcdpsfdc.supabase.co',
				pathname: '/storage/v1/object/public/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'www.everbridge.com',
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
			},
			{
				protocol: 'https',
				hostname: 'media.istockphoto.com',
			},
			{
				protocol: 'https',
				hostname: 'scontent.febb3-1.fna.fbcdn.net',
			},
			{
				protocol: 'https',
				hostname: 'www.iata.org',
			},
			{
				protocol: 'https',
				hostname: 'www.icao.int',
			},
			{
				protocol: 'https',
				hostname: 'www.faa.gov',
			},
			{
				protocol: 'https',
				hostname: 'elcome.com',
			},
			{
				protocol: 'https',
				hostname: 'thumbs.dreamstime.com',
			},
			{
				protocol: 'https',
				hostname: 'stjudeagrivoc.edu.ug',
			},
			{
				protocol: 'https',
				hostname: 'static.vecteezy.com',
			},
			{
				protocol: 'https',
				hostname: 'mailmktg.makemytrip.com',
			},
			{
				protocol: 'https',
				hostname: 'greaterthamesmarshes.com',
			},
			{
				protocol: 'https',
				hostname: 'www.hotelschool.co.za',
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
			{
				protocol: 'https',
				hostname: 'smesouthafrica.co.za',
			},
			{
				protocol: 'https',
				hostname: 'cloudinary.hbs.edu',
			},
			{
				protocol: 'https',
				hostname: 'www.transportify.com.ph',
			},
			{
				protocol: 'https',
				hostname: 'www.foxhr.sa',
			},
			{
				protocol: 'https',
				hostname: 'marvel-b1-cdn.bc0a.com',
			},
			{
				protocol: 'https',
				hostname: 'www.swindia.com',
			},
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
			},
			{
				protocol: 'https',
				hostname: 'www.sorbonne-universite.fr',
			},
			{
				protocol: 'https',
				hostname: 'x.com',
			},
			{
				protocol: 'https',
				hostname: 'www.airport-technology.com',
			},
			{
				protocol: 'https',
				hostname: 'www.evergladesuniversity.edu',
			},
		],
	},
};

export default nextConfig;
