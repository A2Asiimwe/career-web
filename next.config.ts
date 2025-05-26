// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
// 	/* config options here */

// 	reactStrictMode: true,
// 	images: {
// 		domains: [
// 			'encrypted-tbn0.gstatic.com',
// 			'images.unsplash.com',
// 			'cdn.pixabay.com',
// 			'media.istockphoto.com',
// 			'scontent.febb3-1.fna.fbcdn.net',
// 			'www.iata.org',
// 			'www.icao.int',
// 			'www.faa.gov',
// 			'www.faa.gov',
// 			'www.faa.gov',
// 			'www.faa.gov',
// 			'elcome.com',
// 			'thumbs.dreamstime.com',
// 			'stjudeagrivoc.edu.ug',
// 			'static.vecteezy.com',
// 			'mailmktg.makemytrip.com',
// 			'media.istockphoto.com',
// 			'greaterthamesmarshes.com',
// 			'www.hotelschool.co.za',
// 			'images.pexels.com',
// 			'smesouthafrica.co.za',
// 			'cloudinary.hbs.edu',
// 			'www.transportify.com.ph',
// 			'www.foxhr.sa',
// 			'marvel-b1-cdn.bc0a.com',
// 			'www.swindia.com',
// 			'media.licdn.com',
// 			'www.sorbonne-universite.fr',
// 		],
// 		remotePatterns: [
// 			{
// 				protocol: 'https',
// 				hostname: 'zdmexvtrwcwpbcdpsfdc.supabase.co',
// 				pathname: '/storage/v1/object/public/**',
// 			},
// 			{
// 				protocol: 'https',
// 				hostname: 'images.unsplash.com',
// 			},
// 		],
// 	},
// };

// export default nextConfig;

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
		domains: [
			'encrypted-tbn0.gstatic.com',
			'images.unsplash.com',
			'cdn.pixabay.com',
			'media.istockphoto.com',
			'scontent.febb3-1.fna.fbcdn.net',
			'www.iata.org',
			'www.icao.int',
			'www.faa.gov',
			'www.faa.gov',
			'www.faa.gov',
			'www.faa.gov',
			'elcome.com',
			'thumbs.dreamstime.com',
			'stjudeagrivoc.edu.ug',
			'static.vecteezy.com',
			'mailmktg.makemytrip.com',
			'media.istockphoto.com',
			'greaterthamesmarshes.com',
			'www.hotelschool.co.za',
			'images.pexels.com',
			'smesouthafrica.co.za',
			'cloudinary.hbs.edu',
			'www.transportify.com.ph',
			'www.foxhr.sa',
			'marvel-b1-cdn.bc0a.com',
			'www.swindia.com',
			'media.licdn.com',
			'www.sorbonne-universite.fr',
			'x.com',
		],
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
		],
	},
};

export default nextConfig;
