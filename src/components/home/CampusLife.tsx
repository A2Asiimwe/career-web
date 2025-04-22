// 'use client';
// import React, { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

// function CampusLife() {
// 	const [isMobile, setIsMobile] = useState(false);
// 	const [isVisible, setIsVisible] = useState(false);
// 	const campusLifeRef = useRef<HTMLDivElement>(null);
// 	const imageSectionRef = useRef<HTMLDivElement>(null);

// 	useEffect(() => {
// 		const handleResize = () => {
// 			setIsMobile(window.innerWidth < 768);
// 		};

// 		const handleScroll = () => {
// 			// Check if sections are in viewport for animation
// 			if (campusLifeRef.current) {
// 				const rect = campusLifeRef.current.getBoundingClientRect();
// 				if (rect.top < window.innerHeight * 0.8) {
// 					setIsVisible(true);
// 				}
// 			}
// 		};

// 		// Initialize mobile state
// 		handleResize();

// 		window.addEventListener('scroll', handleScroll, { passive: true });
// 		window.addEventListener('resize', handleResize);

// 		// Initial calculation
// 		handleScroll();

// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	return (
// 		<div className='relative w-full overflow-hidden' ref={campusLifeRef}>
// 			{/* First section - This will slide over the parallax image */}
// 			<div
// 				className={`relative z-20 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 transition-all duration-1000 ${
// 					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// 				}`}>
// 				<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
// 					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
// 						{/* Left column - Button with new design */}
// 						<div className='flex justify-center md:justify-end pr-0 md:pr-12'>
// 							<div className='relative'>
// 								<div className='absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-70'></div>
// 								<button className='relative bg-white rounded-full px-10 py-4 text-lg text-blue-800 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg'>
// 									Campus Life
// 								</button>
// 							</div>
// 						</div>

// 						{/* Right column - Content */}
// 						<div className='w-full max-w-3xl pl-0 md:pl-8'>
// 							<h2 className='text-3xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-normal text-gray-800'>
// 								<span className='block'>Thriving Beyond Classes</span>
// 								<span className='block font-light mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
// 									Life at Career Institute
// 								</span>
// 							</h2>
// 							<p className='text-gray-600 text-base md:text-lg leading-normal mt-8 w-full max-w-2xl'>
// 								Step into a World of Possibilities: Career Institute is a Hub of
// 								Energy, Creativity, and Collaboration. Discover a Home Away from
// 								Home Where Every Moment Counts.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Fixed position background image that stays in place while scrolling */}
// 			<div className='fixed inset-0 w-full h-screen -z-10' style={{ top: 0 }}>
// 				<div
// 					className='absolute inset-0 w-full h-full bg-cover bg-center'
// 					style={{
// 						backgroundImage:
// 							"url('https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
// 						backgroundSize: 'cover',
// 						backgroundPosition: 'center center',
// 					}}
// 				/>
// 				{/* Gradient overlay for fixed background */}
// 				<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-transparent'></div>
// 			</div>

// 			{/* Middle section with "Experience Campus Life" - This will be visible over the parallax image */}
// 			<div
// 				ref={imageSectionRef}
// 				className={`relative z-10 h-[60vh] md:h-[70vh] flex items-center justify-center transition-all duration-1000 ${
// 					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// 				}`}>
// 				{/* Subtle floating particles */}
// 				<div className='absolute inset-0 overflow-hidden pointer-events-none'>
// 					{Array.from({ length: 20 }).map((_, i) => {
// 						const size = Math.random() * 6 + 2;
// 						const top = Math.random() * 100;
// 						const left = Math.random() * 100;
// 						const duration = 5 + Math.random() * 10;
// 						const delay = Math.random() * 5;
// 						return (
// 							<div
// 								key={i}
// 								className='absolute rounded-full bg-white/20'
// 								style={{
// 									width: `${size}px`,
// 									height: `${size}px`,
// 									top: `${top}%`,
// 									left: `${left}%`,
// 									animation: `float ${duration}s infinite ${delay}s ease-in-out alternate`,
// 									opacity: 0.7,
// 								}}
// 							/>
// 						);
// 					})}
// 				</div>

// 				{/* Centered text content */}
// 				<div className='text-center text-white px-4 max-w-4xl mx-auto'>
// 					<h3 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
// 						Experience Campus Life
// 					</h3>
// 					<p className='text-xl max-w-lg mx-auto drop-shadow-lg'>
// 						Where memories are made and futures begin
// 					</p>
// 					<div className='mt-8'>
// 						<button className='relative px-8 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg'>
// 							<span className='relative z-10 flex items-center justify-center'>
// 								<span>Explore Campus</span>
// 								<ArrowRight className='ml-2 w-4 h-4' />
// 							</span>
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Bottom section - This will slide over the parallax image from the bottom */}
// 			<div
// 				className={`relative z-20 bg-blue-900 text-white transition-all duration-1000 ${
// 					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// 				}`}>
// 				<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
// 					<div className='flex flex-col md:flex-row items-center justify-between'>
// 						<div className='w-full md:w-1/2 mb-8 md:mb-0'>
// 							<h3 className='text-3xl md:text-4xl font-bold mb-4'>
// 								Experience Career Institute in Person
// 							</h3>
// 							<p className='text-blue-200 text-lg mb-6'>
// 								Schedule a campus tour to see our facilities, meet instructors,
// 								and get a feel for our vibrant campus life.
// 							</p>
// 							<button className='px-8 py-3 bg-white text-blue-800 rounded-full hover:bg-blue-50 transition-colors shadow-lg flex items-center'>
// 								<span className='font-medium'>Book a Campus Tour</span>
// 								<ArrowRight className='ml-2 w-5 h-5' />
// 							</button>
// 						</div>
// 						<div className='w-full md:w-1/2 relative'>
// 							<div
// 								className={`aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 ${
// 									isMobile ? 'max-w-full' : ''
// 								}`}>
// 								<Image
// 									src='/api/placeholder/800/450'
// 									alt='Career Institute Campus'
// 									className='object-cover'
// 									width={800}
// 									height={450}
// 									priority
// 								/>
// 								<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
// 								<div className='absolute inset-0 flex items-center justify-center'>
// 									<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-50 transition-colors'>
// 										<div className='w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-blue-600 border-b-8 border-b-transparent ml-1'></div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default CampusLife;

// 'use client';
// import React, { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

// function CampusLife() {
// 	const [isMobile, setIsMobile] = useState(false);
// 	const [isVisible, setIsVisible] = useState(false);
// 	const campusLifeRef = useRef<HTMLDivElement>(null);
// 	const imageSectionRef = useRef<HTMLDivElement>(null);

// 	useEffect(() => {
// 		const handleResize = () => {
// 			setIsMobile(window.innerWidth < 768);
// 		};

// 		const handleScroll = () => {
// 			// Check if sections are in viewport for animation
// 			if (campusLifeRef.current) {
// 				const rect = campusLifeRef.current.getBoundingClientRect();
// 				if (rect.top < window.innerHeight * 0.8) {
// 					setIsVisible(true);
// 				}
// 			}
// 		};

// 		// Initialize mobile state
// 		handleResize();

// 		window.addEventListener('scroll', handleScroll, { passive: true });
// 		window.addEventListener('resize', handleResize);

// 		// Initial calculation
// 		handleScroll();

// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	return (
// 		<div className='relative w-full overflow-hidden' ref={campusLifeRef}>
// 			{/* First section - This will slide over the parallax image */}
// 			<div
// 				className={`relative z-20 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 transition-all duration-1000 ${
// 					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// 				}`}>
// 				<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
// 					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
// 						{/* Left column - Button with new design */}
// 						<div className='flex justify-center md:justify-end pr-0 md:pr-12'>
// 							<div className='relative'>
// 								<div className='absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-70'></div>
// 								<button className='relative bg-white rounded-full px-10 py-4 text-lg text-blue-800 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg'>
// 									Campus Life
// 								</button>
// 							</div>
// 						</div>

// 						{/* Right column - Content */}
// 						<div className='w-full max-w-3xl pl-0 md:pl-8'>
// 							<h2 className='text-3xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-normal text-gray-800'>
// 								<span className='block'>Thriving Beyond Classes</span>
// 								<span className='block font-light mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
// 									Life at Career Institute
// 								</span>
// 							</h2>
// 							<p className='text-gray-600 text-base md:text-lg leading-normal mt-8 w-full max-w-2xl'>
// 								Step into a World of Possibilities: Career Institute is a Hub of
// 								Energy, Creativity, and Collaboration. Discover a Home Away from
// 								Home Where Every Moment Counts.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Fixed position background image that stays in place while scrolling */}
// 			<div className='fixed inset-0 w-full h-screen -z-10' style={{ top: 0 }}>
// 				<div
// 					className='absolute inset-0 w-full h-full bg-cover bg-center'
// 					style={{
// 						backgroundImage:
// 							"url('https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
// 						backgroundSize: 'cover',
// 						backgroundPosition: 'center center',
// 					}}
// 				/>
// 				{/* Gradient overlay for fixed background */}
// 				<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-transparent'></div>
// 			</div>

// 			{/* Middle section with "Experience Campus Life" - This will be visible over the parallax image */}
// 			<div
// 				ref={imageSectionRef}
// 				className={`relative z-10 h-[60vh] md:h-[70vh] flex items-center justify-center transition-all duration-1000 ${
// 					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// 				}`}>
// 				{/* Subtle floating particles */}
// 				<div className='absolute inset-0 overflow-hidden pointer-events-none'>
// 					{Array.from({ length: 20 }).map((_, i) => {
// 						const size = Math.floor(Math.random() * 6) + 2;
// 						const topPosition = Math.floor(Math.random() * 100);
// 						const leftPosition = Math.floor(Math.random() * 100);
// 						const duration = Math.floor(Math.random() * 10) + 5;
// 						const delay = Math.floor(Math.random() * 5);

// 						// Define animation keyframes in a style block
// 						const floatAnimation = `
//               @keyframes float-${i} {
//                 0% { transform: translateY(0) translateX(0); }
//                 50% { transform: translateY(-20px) translateX(10px); }
//                 100% { transform: translateY(0) translateX(0); }
//               }
//             `;

// 						return (
// 							<div key={i}>
// 								<style>{floatAnimation}</style>
// 								<div
// 									className='absolute rounded-full bg-white/20'
// 									style={{
// 										width: size,
// 										height: size,
// 										top: `${topPosition}%`,
// 										left: `${leftPosition}%`,
// 										opacity: 0.7,
// 										animation: `float-${i} ${duration}s infinite alternate ease-in-out`,
// 										animationDelay: `${delay}s`,
// 									}}
// 								/>
// 							</div>
// 						);
// 					})}
// 				</div>

// 				{/* Centered text content */}
// 				<div className='text-center text-white px-4 max-w-4xl mx-auto'>
// 					<h3 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
// 						Experience Campus Life
// 					</h3>
// 					<p className='text-xl max-w-lg mx-auto drop-shadow-lg'>
// 						Where memories are made and futures begin
// 					</p>
// 					<div className='mt-8'>
// 						<button className='relative px-8 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg'>
// 							<span className='relative z-10 flex items-center justify-center'>
// 								<span>Explore Campus</span>
// 								<ArrowRight className='ml-2 w-4 h-4' />
// 							</span>
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Bottom section - This will slide over the parallax image from the bottom */}
// 			<div
// 				className={`relative z-20 bg-blue-900 text-white transition-all duration-1000 ${
// 					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// 				}`}>
// 				<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
// 					<div className='flex flex-col md:flex-row items-center justify-between'>
// 						<div className='w-full md:w-1/2 mb-8 md:mb-0'>
// 							<h3 className='text-3xl md:text-4xl font-bold mb-4'>
// 								Experience Career Institute in Person
// 							</h3>
// 							<p className='text-blue-200 text-lg mb-6'>
// 								Schedule a campus tour to see our facilities, meet instructors,
// 								and get a feel for our vibrant campus life.
// 							</p>
// 							<button className='px-8 py-3 bg-white text-blue-800 rounded-full hover:bg-blue-50 transition-colors shadow-lg flex items-center'>
// 								<span className='font-medium'>Book a Campus Tour</span>
// 								<ArrowRight className='ml-2 w-5 h-5' />
// 							</button>
// 						</div>
// 						<div className='w-full md:w-1/2 relative'>
// 							<div
// 								className={`aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 ${
// 									isMobile ? 'max-w-full' : ''
// 								}`}>
// 								<Image
// 									src='/api/placeholder/800/450'
// 									alt='Career Institute Campus'
// 									className='object-cover'
// 									width={800}
// 									height={450}
// 									priority
// 								/>
// 								<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
// 								<div className='absolute inset-0 flex items-center justify-center'>
// 									<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-50 transition-colors'>
// 										<div className='w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-blue-600 border-b-8 border-b-transparent ml-1'></div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default CampusLife;

'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import CoursesSection from './CoursesSection';

function CampusLife() {
	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [particles, setParticles] = useState<
		Array<{
			size: number;
			top: number;
			left: number;
			duration: number;
			delay: number;
		}>
	>([]);
	const campusLifeRef = useRef<HTMLDivElement>(null);
	const imageSectionRef = useRef<HTMLDivElement>(null);

	// Generate particles only on client-side to avoid hydration errors
	useEffect(() => {
		const newParticles = Array.from({ length: 20 }, () => ({
			size: Math.floor(Math.random() * 6) + 2,
			top: Math.floor(Math.random() * 100),
			left: Math.floor(Math.random() * 100),
			duration: Math.floor(Math.random() * 10) + 5,
			delay: Math.floor(Math.random() * 5),
		}));
		setParticles(newParticles);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		const handleScroll = () => {
			// Check if sections are in viewport for animation
			if (campusLifeRef.current) {
				const rect = campusLifeRef.current.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.8) {
					setIsVisible(true);
				}
			}
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
	}, []);

	return (
		<div className='relative w-full overflow-hidden' ref={campusLifeRef}>
			{/* First section - This will slide over the parallax image */}
			<div
				className={`relative z-20 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
				<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
						{/* Left column - Button with new design */}
						<div className='flex justify-center md:justify-end pr-0 md:pr-12'>
							<div className='relative'>
								<div className='absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-70'></div>
								<button className='relative bg-white rounded-full px-10 py-4 text-lg text-blue-800 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg'>
									Campus Life
								</button>
							</div>
						</div>

						{/* Right column - Content */}
						<div className='w-full max-w-3xl pl-0 md:pl-8'>
							<h2 className='text-3xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-normal text-gray-800'>
								<span className='block'>Thriving Beyond Classes</span>
								<span className='block font-light mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
									Life at Career Institute
								</span>
							</h2>
							<p className='text-gray-600 text-base md:text-lg leading-normal mt-8 w-full max-w-2xl'>
								Step into a World of Possibilities: Career Institute is a Hub of
								Energy, Creativity, and Collaboration. Discover a Home Away from
								Home Where Every Moment Counts.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Fixed position background image that stays in place while scrolling */}
			<div className='fixed inset-0 w-full h-screen -z-10' style={{ top: 0 }}>
				<div
					className='absolute inset-0 w-full h-full bg-cover bg-center'
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
					}}
				/>
				{/* Gradient overlay for fixed background */}
				<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-transparent'></div>
			</div>

			{/* Middle section with "Experience Campus Life" - This will be visible over the parallax image */}
			<div
				ref={imageSectionRef}
				className={`relative z-10 h-[60vh] md:h-[70vh] flex items-center justify-center transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
				{/* Subtle floating particles - Only rendered client-side */}
				<div className='absolute inset-0 overflow-hidden pointer-events-none'>
					<style>
						{`
              @keyframes float {
                0% { transform: translateY(0) translateX(0); }
                50% { transform: translateY(-20px) translateX(10px); }
                100% { transform: translateY(0) translateX(0); }
              }
            `}
					</style>
					{particles.map((particle, i) => (
						<div
							key={i}
							className='absolute rounded-full bg-white/20'
							style={{
								width: particle.size,
								height: particle.size,
								top: `${particle.top}%`,
								left: `${particle.left}%`,
								opacity: 0.7,
								animation: `float ${particle.duration}s infinite alternate ease-in-out`,
								animationDelay: `${particle.delay}s`,
							}}
						/>
					))}
				</div>

				{/* Centered text content */}
				<div className='text-center text-white px-4 max-w-4xl mx-auto'>
					<h3 className='text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg'>
						Experience Campus Life
					</h3>
					<p className='text-xl max-w-lg mx-auto drop-shadow-lg'>
						Where memories are made and futures begin
					</p>
					<div className='mt-8'>
						<button className='relative px-8 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg'>
							<span className='relative z-10 flex items-center justify-center'>
								<span>Explore Campus</span>
								<ArrowRight className='ml-2 w-4 h-4' />
							</span>
						</button>
					</div>
				</div>
			</div>
			<div>
				<CoursesSection />
			</div>
			{/* Bottom section - This will slide over the parallax image from the bottom */}
			<div
				className={`relative z-20 bg-blue-900 text-white transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}>
				<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
					<div className='flex flex-col md:flex-row items-center justify-between'>
						<div className='w-full md:w-1/2 mb-8 md:mb-0'>
							<h3 className='text-3xl md:text-4xl font-bold mb-4'>
								Experience Career Institute in Person
							</h3>
							<p className='text-blue-200 text-lg mb-6'>
								Schedule a campus tour to see our facilities, meet instructors,
								and get a feel for our vibrant campus life.
							</p>
							<button className='px-8 py-3 bg-white text-blue-800 rounded-full hover:bg-blue-50 transition-colors shadow-lg flex items-center'>
								<span className='font-medium'>Book a Campus Tour</span>
								<ArrowRight className='ml-2 w-5 h-5' />
							</button>
						</div>
						<div className='w-full md:w-1/2 relative'>
							<div
								className={`aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 ${
									isMobile ? 'max-w-full' : ''
								}`}>
								<Image
									src='/api/placeholder/800/450'
									alt='Career Institute Campus'
									className='object-cover'
									width={800}
									height={450}
									priority
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
								<div className='absolute inset-0 flex items-center justify-center'>
									<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-50 transition-colors'>
										<div className='w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-blue-600 border-b-8 border-b-transparent ml-1'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CampusLife;
