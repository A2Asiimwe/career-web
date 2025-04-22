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
			'scontent.febb3-1.fna.fbcdn.net',
			'www.iata.org',
			'www.icao.int',
			'www.faa.gov',
			'www.faa.gov',
			'www.faa.gov',
			'www.faa.gov',
		],
	},
};

export default nextConfig;
