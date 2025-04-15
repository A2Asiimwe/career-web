// src/components/sections/HeroHeader.tsx
'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';

// const HeroSection = () => {
// 	return (
// 		<div className='relative w-full h-[500px] md:h-[600px] overflow-hidden'>
// 			{/* Background Image */}
// 			<div className='absolute inset-0'>
// 				<Image
// 					src='/images/university-building.jpg'
// 					alt='University Building'
// 					fill
// 					priority
// 					className='object-cover object-center'
// 					sizes='100vw'
// 				/>
// 				{/* Dark Overlay */}
// 				<div className='absolute inset-0 bg-blue-950 bg-opacity-60'></div>
// 			</div>

// 			{/* Content */}
// 			<div className='relative h-full flex flex-col items-center justify-center text-center px-4'>
// 				{/* University Logo */}
// 				<div className='mb-6'>
// 					<Image
// 						src='/images/university-emblem.svg'
// 						alt='University Logo'
// 						width={100}
// 						height={100}
// 						className='w-20 h-20 md:w-28 md:h-28'
// 					/>
// 				</div>

// 				{/* Heading */}
// 				<h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4 max-w-3xl'>
// 					<span className='block'>Academic Journey</span>
// 					<span className='block'>Begins Unipix</span>
// 				</h1>

// 				{/* Subheading */}
// 				<p className='text-white text-sm md:text-base mb-8 max-w-xl'>
// 					Remember to tailor the section names to fit the specific needs and
// 					structure of your university website.
// 				</p>

// 				{/* CTA Button */}
// 				<Link
// 					href='/programs'
// 					className='inline-flex items-center bg-[#8B0000] hover:bg-[#7A0000] text-white py-3 px-6 rounded transition-colors duration-300'>
// 					View Our Program
// 					<ArrowRight size={18} className='ml-2' />
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };

// export default HeroSection;
// src/components/sections/HeroHeader.tsx

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
	return (
		<div className='relative w-full h-[650px] md:h-[800px] lg:h-[900px] overflow-hidden '>
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
			<div className='relative h-full flex flex-col items-center justify-center text-center px-4'>
				{/* University Logo */}
				<div className='mb-6'>
					<div className='bg-white p-2 rounded-full'>
						<Image
							src='/Logo/screen_logo-2.png'
							alt='University Logo'
							width={100}
							height={100}
							className='w-20 h-20 md:w-28 md:h-28'
						/>
					</div>
				</div>

				{/* Heading */}
				<h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4 max-w-3xl'>
					<span className='block'>Career Institute </span>
					<span className='block'>Building Your Career </span>
				</h1>

				{/* Subheading */}
				<p className='text-white text-sm md:text-base mb-8 max-w-xl'>
					Remember to tailor the section names to fit the specific needs and
					structure of your university website.
				</p>

				{/* CTA Button */}
				<Link
					href='/programs'
					className='inline-flex items-center bg-[#8B0000] hover:bg-[#7A0000] text-white py-3 px-6 rounded transition-colors duration-300'>
					View Our Program
					<ArrowRight size={18} className='ml-2' />
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
