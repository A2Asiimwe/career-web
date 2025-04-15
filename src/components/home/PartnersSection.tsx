'use client';
// components/PartnersSection.jsx
import Image from 'next/image';
import { useState, useEffect } from 'react';

const partners = [
	{
		id: 1,
		name: 'IATA ATC',
		logo: 'https://www.iata.org/contentassets/6fa11835395e4a9f9b9a0d22049b015e/iata-atc-classic_stamp_rgb.png',
		alt: 'University Logo with Book and Shield',
	},
	{
		id: 2,
		name: 'University 2',
		logo: 'https://www.iata.org/contentassets/6fa11835395e4a9f9b9a0d22049b015e/iata-atc-affiliate_stamp_rgb.png',
		alt: 'University Logo with Diamond and Laurel',
	},
	{
		id: 3,
		name: 'University 3',
		logo: 'https://tvet.go.ug/storage/tvet-approved-logo-2-1.png',
		alt: 'University Logo with Graduation Cap',
	},
	{
		id: 4,
		name: 'University 4',
		logo: 'https://unche.or.ug/wp-content/uploads/2023/03/NCHE_LOGO-e1679488414519.png',
		alt: 'University Logo with Open Book',
	},
	{
		id: 5,
		name: 'University 5',
		logo: 'https://www.ministryofeducationandsports.com/wp-content/uploads/2019/07/NewLogo2.png',
		alt: 'University Logo with Laurel Wreath',
	},
	{
		id: 6,
		name: 'Education Institute',
		logo: 'https://utb.go.ug/wp-content/uploads/2024/05/UTB_Logo_No_Background.png',
		alt: 'Education Logo with Badge',
	},
];

export default function PartnersSection() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Set initial value
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Clean up
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-10'>
					<h2 className='text-3xl font-bold text-gray-800 mb-2'>
						Our Partners
					</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						We collaborate with leading institutions to provide the best
						educational opportunities.
					</p>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center'>
					{partners.map((partner) => (
						<div
							key={partner.id}
							className='w-full flex items-center justify-center transition-opacity hover:opacity-75'>
							<div className='relative w-24 h-24 grayscale hover:grayscale-0 transition-all duration-300'>
								{/* Using Next.js Image component with empty src as placeholder */}
								{/* In a real app you'd use actual image paths */}
								<Image
									src={partner.logo}
									alt={partner.alt}
									fill
									sizes='(max-width: -768px) 100px, 150px'
									className='object-contain'
									// This is for demonstration - replace with actual images
									unoptimized={true}
								/>
							</div>
							{isMobile && (
								<span className='ml-4 text-sm text-gray-600'>
									{partner.name}
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
