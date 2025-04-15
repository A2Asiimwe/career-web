import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */

	reactStrictMode: true,
	images: {
		domains: [
			'encrypted-tbn0.gstatic.com',
			'images.unsplash.com',
			'cdn.pixabay.com',
			'media.istockphoto.com',
		],
	},
};

export default nextConfig;
