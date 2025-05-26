'use client';
// components/PartnersSection.jsx
import Image from 'next/image';
import { useState, useEffect } from 'react';

const partners = [
	{
		id: 1,
		name: 'IATA ATC',
		logo: 'https://www.iata.org/contentassets/6fa11835395e4a9f9b9a0d22049b015e/iata-atc-classic_stamp_rgb.png',
		alt: 'IATA ATC Logo',
	},
	{
		id: 2,
		name: 'UVTAB ',
		logo: '/partners/uvtab.jpg',
		alt: 'IATA ATC Affiliate Logo',
	},
	{
		id: 3,
		name: 'Technical Vocational Education and Training',
		logo: 'https://tvet.go.ug/storage/tvet-approved-logo-2-1.png',
		alt: 'Technical Vocational Education and Training Logo',
	},
	{
		id: 4,
		name: 'National Council for Higher Education',
		logo: 'https://unche.or.ug/wp-content/uploads/2023/03/NCHE_LOGO-e1679488414519.png',
		alt: 'National Council for Higher Education Logo',
	},
	{
		id: 5,
		name: 'Ministry of Education',
		logo: 'https://www.ministryofeducationandsports.com/wp-content/uploads/2019/07/NewLogo2.png',
		alt: 'Ministry of Education Logo',
	},
	{
		id: 6,
		name: 'Uganda Tourism Board',
		logo: 'https://utb.go.ug/wp-content/uploads/2024/05/UTB_Logo_No_Background.png',
		alt: 'Uganda Tourism Board Logo',
	},
];

export default function PartnersSection() {
	const [screenSize, setScreenSize] = useState('desktop');

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setScreenSize('mobile');
			} else if (window.innerWidth < 1024) {
				setScreenSize('tablet');
			} else {
				setScreenSize('desktop');
			}
		};

		// Set initial value
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Clean up
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const showNames = screenSize === 'mobile';

	return (
		<section className='py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50'>
			<div className='container mx-auto px-4 sm:px-6'>
				<div className='text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
					<h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
						Our Partners
					</h2>
					<p className='text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0'>
						We collaborate with leading institutions to provide the best
						educational opportunities.
					</p>
				</div>

				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 items-center'>
					{partners.map((partner) => (
						<div
							key={partner.id}
							className='w-full flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300'>
							<div className='relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 grayscale-0 hover:grayscale transition-all duration-300'>
								<Image
									src={partner.logo}
									alt={partner.alt}
									fill
									sizes='(max-width: 640px) 64px, (max-width: 768px) 80px, 96px'
									className='object-contain'
									unoptimized={true}
								/>
							</div>
							{showNames && (
								<span className='mt-2 text-center text-[10px] sm:text-xs text-gray-600 line-clamp-2'>
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
