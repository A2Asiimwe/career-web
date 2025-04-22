// src/components/sections/HeroHeader.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
	return (
		<div className='relative w-full h-[500px] sm:h-[650px] md:h-[800px] lg:h-[900px] overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<Image
					src='/images/university-building.jpg'
					alt='University Building'
					fill
					priority
					className='object-cover object-center'
					sizes='100vw'
				/>
				{/* Dark Overlay */}
				<div className='absolute inset-0 bg-blue-950 bg-opacity-60'></div>
			</div>

			{/* Content */}
			<div className='relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8'>
				{/* University Logo */}
				<div className='mb-4 sm:mb-6'>
					<div className='bg-white p-2 rounded-full'>
						<Image
							src='/Logo/screen_logo-2.png'
							alt='University Logo'
							width={100}
							height={100}
							className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28'
						/>
					</div>
				</div>

				{/* Heading */}
				<h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4 max-w-3xl'>
					<span className='block'>Career Institute</span>
					<span className='block mt-1 sm:mt-2'>Building Your Career</span>
				</h1>

				{/* Subheading */}
				<p className='text-white text-sm sm:text-base mb-6 sm:mb-8 max-w-xl px-4 sm:px-0'>
					Empowering students with quality education and professional
					development opportunities for a successful future.
				</p>

				{/* CTA Button */}
				<Link
					href='/programs'
					className='inline-flex items-center bg-[#8B0000] hover:bg-[#7A0000] text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded transition-colors duration-300 text-sm sm:text-base'>
					View Our Programs
					<ArrowRight size={16} className='ml-2' />
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
