'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UniversityPage: React.FC = () => {
	const [scrollY, setScrollY] = useState(0);
	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// const calculateParallax = (speed: number) => {
	// 	return -(scrollY * speed);
	// };
	const calculateParallax = (speed: number) => {
		//eturn scrollY * speed; // Removed negative sign for smoother both-direction scrolling

		return (scrollY * speed) / 2;
	};
	return (
		<div className='relative overflow-hidden z-10'>
			{/* Hero Section */}
			<div
				ref={heroRef}
				className='relative bg-red-900 text-white min-h-[500px]'>
				{/* Background decorative elements */}
				<div
					className='absolute inset-0 opacity-10 pointer-events-none'
					style={{ transform: `translateY(${calculateParallax(0.15)}px)` }}>
					<div className='absolute top-20 left-20 w-40 h-40 border-2 border-white rounded-full' />
					<div className='absolute bottom-40 left-40 w-20 h-20 border-2 border-white rounded-full' />
					<div className='absolute top-60 right-60 w-16 h-16'>
						<svg viewBox='0 0 24 24' fill='white'>
							<path d='M15 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9L15 3Z' />
						</svg>
					</div>
					<div className='absolute bottom-20 right-20 w-12 h-12'>
						<svg viewBox='0 0 24 24' fill='white'>
							<path d='M7 2V5H2V7H7V10H2V12H7V22H9V12H17V22H19V12H22V10H19V7H22V5H19V2H17V5H9V2H7ZM9 7H17V10H9V7Z' />
						</svg>
					</div>
				</div>

				{/* Content Container */}
				<div className='container mx-auto max-w-6xl px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-start'>
					{/* Left side content - Increased z-index */}

					<div
						className='w-full md:w-1/2 py-2 md:py-4 z-20 pr-4' // Reduced md:py-8 to md:py-4
						style={{ transform: `translateY(${calculateParallax(0.08)}px)` }}>
						<div className='mb-2'>
							<svg className='w-6 h-6' viewBox='0 0 24 24' fill='white'>
								<path d='M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z' />
							</svg>
						</div>
						<h1 className='text-2xl md:text-4xl font-serif mb-2'>
							Embark on a Journey:
							<br />
							Unveiling the Story of
							<br />
							<span className='font-light'>Career Institute </span>
						</h1>
						<Link
							href='/learn-more'
							className='inline-flex items-center text-white hover:underline mt-2'>
							Learn More
							<svg
								className='w-4 h-4 ml-1'
								viewBox='0 0 24 24'
								fill='currentColor'>
								<path d='M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z' />
							</svg>
						</Link>
					</div>

					{/* Right side content */}
					<div
						className='w-full md:w-1/2 py-2 md:py-4 flex flex-col z-10'
						style={{ transform: `translateY(${calculateParallax(0.1)}px)` }}>
						<div className='mb-4 max-w-md'>
							<p className='text-xs md:text-sm'>
								Embark on a journey of knowledge, discovery, and growth at
								Career Institute. Our commitment to academic excellence and
								diverse programs empowers students to explore their passions and
								unique talents.
								<br />
								Our admissions process is designed to identify bright, motivated
								individuals who are eager to contribute to our dynamic academic
								community.
							</p>
						</div>

						{/* Image container with overlap effect */}
						<div className='relative w-full h-52 md:h-[420px] max-w-none md:max-w-[120%] -mb-24 md:-mb-32 ml-auto'>
							<Image
								src='/api/placeholder/800/600'
								alt='University library with bust sculpture and books'
								fill
								className='object-cover rounded-l-md shadow-lg'
								priority
							/>
						</div>
					</div>
				</div>
			</div>

			{/* About Section with adjusted top padding to accommodate image overlap */}
			<div className='bg-white pt-24 pb-12'>
				<div className='ml-10 px-4 md:px-8 lg:px-12'>
					<h2 className='text-5xl md:text-8xl font-black tracking-tight text-gray-200 pl-0'>
						<span className='block font-serif italic text-6xl md:text-9xl font-extrabold leading-none'>
							About
						</span>
						<span className='block font-sans uppercase tracking-widest text-red-900 text-4xl md:text-6xl mt-2'>
							Career Institute
						</span>
					</h2>
				</div>
			</div>

			{/* Tuition Fees Section */}
			{/* Tuition Fees Section - Expanded Columns */}
			<div className='bg-white py-16'>
				<div className='container mx-auto max-w-7xl px-4 md:px-8 lg:px-12'>
					{' '}
					{/* Increased max-width */}
					<div className='grid grid-cols-1 md:grid-cols-7 gap-8'>
						{' '}
						{/* Changed to 7-column grid */}
						{/* Left Column - Title and Description */}
						<div className='md:col-span-3'>
							{' '}
							{/* Increased from 2 to 3 */}
							<h2 className='text-3xl md:text-4xl lg:text-5xl font-serif mb-6  text-gray-600'>
								Tuition Fees At
								<br />
								Career Institute
							</h2>
							<p className='text-gray-600 text-base mb-8'>
								{' '}
								{/* Increased text size */}
								unique curriculum designed to foster critical thinking,
								innovation, and personal growth. Our programs are tailored to
								meet the needs of a rapidly changing world, equipping students
								with the skills and knowledge necessary to succeed in their
								chosen fields. At Career Institute, we strive to create an
								inclusive and supportive learning environment where every
								student can thrive and achieve their full potential.
							</p>
							<Link
								href='/plan-details'
								className='inline-flex items-center bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors'>
								Plan Details
								<svg
									className='w-4 h-4 ml-2'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z' />
								</svg>
							</Link>
						</div>
						{/* Middle Column - Undergraduate Programs (wider) */}
						<div className='md:col-span-2 bg-red-900 text-white p-8 rounded-lg shadow-xl'>
							{' '}
							{/* Increased from 1.5 to 2 */}
							<h3 className='text-2xl font-semibold mb-6'>
								{' '}
								{/* Larger text */}
								Undergraduate Programs
							</h3>
							<div className='mb-8 space-y-4'>
								{' '}
								{/* Increased spacing */}
								<div>
									<h4 className='font-semibold mb-3 text-lg'>
										{' '}
										{/* Larger text */}
										College of Arts and Sciences
									</h4>
									<div className='flex items-start mb-3'>
										<svg
											className='w-6 h-6 mr-3 mt-0.5 flex-shrink-0' /* Larger icon */
											viewBox='0 0 24 24'
											fill='currentColor'>
											<path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
										</svg>
										<p className='text-base'>
											{' '}
											{/* Larger text */}
											Full-Time Tuition (per semester): $241
										</p>
									</div>
									<div className='flex items-start'>
										<svg
											className='w-6 h-6 mr-3 mt-0.5 flex-shrink-0'
											viewBox='0 0 24 24'
											fill='currentColor'>
											<path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
										</svg>
										<p className='text-base'>
											Part-Time Tuition (per credit): $141
										</p>
									</div>
								</div>
								<div>
									<h4 className='font-semibold mb-3 text-lg'>
										School of Business
									</h4>
									{/* Similar updates for business program items */}
								</div>
							</div>
						</div>
						{/* Right Column - Graduate Programs (wider) */}
						<div className='md:col-span-2 bg-gray-100 p-8 rounded-lg shadow-xl'>
							{' '}
							{/* Increased from 1.5 to 2 */}
							<h3 className='text-2xl font-semibold mb-6 text-gray-600 '>
								Certificate Programs
							</h3>
							<div className='mb-8 space-y-4 text-gray-600'>
								<div>
									<h4 className='font-semibold mb-3 text-lg'>
										Graduate School/Department
									</h4>
									{/* Similar updates for graduate program items */}
								</div>

								<div>
									<h4 className='font-semibold mb-3 text-lg'>
										Additional Fees
									</h4>
									{/* Similar updates for additional fees items */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UniversityPage;
