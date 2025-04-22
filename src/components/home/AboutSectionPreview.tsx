'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';

const UniversityPage: React.FC = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const heroRef = useRef<HTMLDivElement>(null);
	const imageContainerRef = useRef<HTMLDivElement>(null);
	const aboutSectionRef = useRef<HTMLDivElement>(null);
	const tuitionSectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);

			// Check if sections are in viewport for animation
			if (aboutSectionRef.current) {
				const aboutRect = aboutSectionRef.current.getBoundingClientRect();
				if (aboutRect.top < window.innerHeight * 0.8) {
					setIsVisible(true);
				}
			}

			// For true parallax effect on the image - disabled on mobile
			if (imageContainerRef.current && !isMobile) {
				const container = imageContainerRef.current;
				const containerTop = container.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				// Only apply parallax when the container is in view
				if (
					containerTop < windowHeight &&
					containerTop + container.offsetHeight > 0
				) {
					// Calculate how far the container is through the viewport as a percentage
					const scrollPercentage =
						(windowHeight - containerTop) /
						(windowHeight + container.offsetHeight);

					// Apply a transform that keeps the image relatively fixed in place
					// Reduce parallax intensity on mobile
					const parallaxIntensity = isMobile ? 10 : 50;
					const translateY = scrollPercentage * parallaxIntensity;

					const image = container.querySelector('.parallax-image');
					if (image) {
						(
							image as HTMLElement
						).style.transform = `translateY(-${translateY}px)`;
					}
				}
			}
		};

		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initialize mobile state
		handleResize();

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleResize);

		// Initial calculation
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [isMobile]);

	const calculateParallax = (speed: number) => {
		// Disable parallax on mobile to prevent overlap issues
		if (isMobile) return 0;
		return (scrollY * speed) / 2;
	};

	return (
		<div className='relative overflow-hidden z-10'>
			{/* Hero Section - Updated to match navbar color */}
			<div
				ref={heroRef}
				className='relative bg-blue-950 text-white min-h-[400px] sm:min-h-[500px]'>
				{/* Background decorative elements - hidden on mobile */}
				<div
					className='absolute inset-0 opacity-10 pointer-events-none hidden sm:block'
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
				<div className='container mx-auto max-w-6xl px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-start py-8 sm:py-12 md:py-16'>
					{/* Left side content - Increased z-index */}
					<div
						className='w-full md:w-1/2 py-2 md:py-4 z-20 pr-4'
						style={{ transform: `translateY(${calculateParallax(0.08)}px)` }}>
						<div className='mb-3 sm:mb-4 flex items-center'>
							<GraduationCap className='w-6 h-6 sm:w-8 sm:h-8 mr-2 text-blue-300' />
							<div className='h-6 w-px bg-blue-300 mx-2 sm:mx-3'></div>
							<span className='text-blue-300 text-sm sm:text-base font-medium'>
								Since 1995
							</span>
						</div>
						<h1 className='text-2xl sm:text-3xl md:text-5xl font-serif mb-3 sm:mb-4'>
							Embark on a Journey:
							<br />
							Unveiling the Story of
							<br />
							<span className='font-light bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent'>
								Career Institute
							</span>
						</h1>
						<p className='text-blue-100 text-sm sm:text-base mt-3 sm:mt-4 mb-4 sm:mb-6 max-w-md'>
							Dedicated to academic excellence and innovation since 1995
						</p>
						<Link
							href='/learn-more'
							className='inline-flex items-center bg-white text-indigo-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-50 transition-all shadow-lg group text-sm sm:text-base'>
							Learn More
							<ArrowRight className='w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform' />
						</Link>
					</div>

					{/* Right side content */}
					<div
						className='w-full md:w-1/2 py-2 md:py-4 flex flex-col z-10 mt-6 sm:mt-0'
						style={{ transform: `translateY(${calculateParallax(0.1)}px)` }}>
						<div className='mb-4 sm:mb-6 max-w-md bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg'>
							<p className='text-xs sm:text-sm md:text-base text-white leading-relaxed'>
								Embark on a journey of knowledge, discovery, and growth at
								Career Institute. Our commitment to academic excellence and
								diverse programs empowers students to explore their passions and
								unique talents.
								<br />
								<br />
								Our admissions process is designed to identify bright, motivated
								individuals who are eager to contribute to our dynamic academic
								community.
							</p>
						</div>

						{/* Image container with parallax effect */}
						<div
							ref={imageContainerRef}
							className='relative w-full h-40 sm:h-60 md:h-[420px] max-w-none md:max-w-[120%] -mb-8 sm:-mb-12 md:-mb-32 ml-auto overflow-hidden'>
							<div className='absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-l-lg blur opacity-30'></div>
							<div className='relative h-full overflow-hidden rounded-l-lg'>
								<div className='parallax-image h-[140%] relative w-full'>
									<Image
										src='/api/placeholder/800/800'
										alt='University library with bust sculpture and books'
										fill
										className='object-cover'
										priority
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* About Section - Updated for better transition and scroll effects */}
			<div
				ref={aboutSectionRef}
				className={`bg-gradient-to-b from-indigo-50 to-white pt-16 sm:pt-24 md:pt-36 pb-8 sm:pb-12 transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
				<div className='container mx-auto px-4 md:px-8 lg:px-12'>
					<h2 className='text-3xl sm:text-4xl md:text-8xl font-black tracking-tight text-gray-600 pl-0'>
						<span className='block font-serif italic text-3xl sm:text-5xl md:text-9xl font-extrabold leading-none'>
							About
						</span>
						<span className='block font-sans uppercase tracking-widest text-indigo-700 text-2xl sm:text-3xl md:text-6xl mt-2'>
							Career Institute
						</span>
					</h2>
				</div>
			</div>

			{/* Tuition Fees Section - Updated to match CampusLife styling with scroll effects */}
			<div
				ref={tuitionSectionRef}
				className={`bg-white py-8 sm:py-12 md:py-16 transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
				<div className='container mx-auto max-w-7xl px-4 md:px-8 lg:px-12'>
					<div className='grid grid-cols-1 md:grid-cols-7 gap-4 sm:gap-6 md:gap-8'>
						{/* Left Column - Title and Description */}
						<div className='md:col-span-3'>
							<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4 md:mb-6 text-indigo-900'>
								Tuition Fees At
								<br />
								<span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
									Career Institute
								</span>
							</h2>
							<p className='text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 leading-relaxed'>
								Unique curriculum designed to foster critical thinking,
								innovation, and personal growth. Our programs are tailored to
								meet the needs of a rapidly changing world, equipping students
								with the skills and knowledge necessary to succeed in their
								chosen fields.
							</p>
							<Link
								href='/plan-details'
								className='inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg group text-sm sm:text-base'>
								Plan Details
								<ArrowRight className='w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform' />
							</Link>
						</div>

						{/* Middle Column - Undergraduate Programs */}
						<div className='md:col-span-2 bg-gradient-to-br from-indigo-800 to-blue-900 text-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl mt-4 sm:mt-6 md:mt-0 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl'>
							<div className='flex items-center mb-3 sm:mb-4'>
								<BookOpen className='w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2' />
								<h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>
									Undergraduate Programs
								</h3>
							</div>

							<div className='mb-4 sm:mb-6 md:mb-8 space-y-3 sm:space-y-4'>
								<div>
									<h4 className='font-semibold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg text-blue-100'>
										College of Arts and Sciences
									</h4>
									<div className='flex items-start mb-2 sm:mb-3'>
										<div className='bg-blue-300/20 p-1 rounded-full mr-2 sm:mr-3 mt-0.5'>
											<svg
												className='w-3 h-3 sm:w-4 sm:h-4 text-blue-200'
												viewBox='0 0 24 24'
												fill='currentColor'>
												<path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
											</svg>
										</div>
										<span className='text-xs sm:text-sm text-blue-100'>
											Bachelor of Science in Computer Science
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Professional Certifications */}
						<div className='md:col-span-2 bg-gradient-to-br from-blue-800 to-indigo-900 text-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl mt-4 sm:mt-6 md:mt-0 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl'>
							<div className='flex items-center mb-3 sm:mb-4'>
								<GraduationCap className='w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mr-2' />
								<h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>
									Professional Certifications
								</h3>
							</div>

							<div className='mb-4 sm:mb-6 md:mb-8 space-y-3 sm:space-y-4'>
								<div>
									<h4 className='font-semibold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg text-blue-100'>
										Industry-Recognized Credentials
									</h4>
									<div className='flex items-start mb-2 sm:mb-3'>
										<div className='bg-blue-300/20 p-1 rounded-full mr-2 sm:mr-3 mt-0.5'>
											<svg
												className='w-3 h-3 sm:w-4 sm:h-4 text-blue-200'
												viewBox='0 0 24 24'
												fill='currentColor'>
												<path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
											</svg>
										</div>
										<span className='text-xs sm:text-sm text-blue-100'>
											Data Science & Analytics
										</span>
									</div>
									<div className='flex items-start mb-2 sm:mb-3'>
										<div className='bg-blue-300/20 p-1 rounded-full mr-2 sm:mr-3 mt-0.5'>
											<svg
												className='w-3 h-3 sm:w-4 sm:h-4 text-blue-200'
												viewBox='0 0 24 24'
												fill='currentColor'>
												<path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
											</svg>
										</div>
										<span className='text-xs sm:text-sm text-blue-100'>
											Cloud Computing
										</span>
									</div>
									<div className='flex items-start mb-2 sm:mb-3'>
										<div className='bg-blue-300/20 p-1 rounded-full mr-2 sm:mr-3 mt-0.5'>
											<svg
												className='w-3 h-3 sm:w-4 sm:h-4 text-blue-200'
												viewBox='0 0 24 24'
												fill='currentColor'>
												<path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
											</svg>
										</div>
										<span className='text-xs sm:text-sm text-blue-100'>
											Cybersecurity
										</span>
									</div>
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
