'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function CampusLife() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='relative'>
			{/* Section 1: Header with dark overlay */}
			<div className='relative z-10 bg-black bg-opacity-70 text-white'>
				<div className='mx-auto max-w-7xl px-6 md:px-12 lg:px-16 w-full py-16 md:py-20'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center'>
						{/* Left column - Button */}
						<div className='flex justify-center md:justify-end pr-0 md:pr-12'>
							<button className='border-2 border-white/50 rounded-full px-10 py-4 text-lg text-white hover:bg-white/10 transition-all duration-300'>
								Campus Life
							</button>
						</div>

						{/* Right column - Content */}
						<div className='w-full max-w-3xl pl-0 md:pl-8'>
							<h2 className='text-3xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-normal text-white'>
								<span className='block'>Thriving Beyond Classes</span>
								<span className='block font-light mt-2'>
									Campus Life at unipix
								</span>
							</h2>
							<p className='text-gray-300 text-base md:text-lg leading-normal mt-8 w-full max-w-2xl'>
								Step into a World of Possibilities: Unipix Campus Life is a Hub
								of Energy, Creativity, and Collaboration. Discover a Home Away
								from Home Where Every Moment Counts.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Section 2: Parallax image with overlay text */}
			<div className='relative h-[50vh] md:h-[70vh] overflow-hidden'>
				{/* Parallax background image */}
				<div
					className='absolute inset-0 w-full bg-cover bg-center bg-no-repeat bg-fixed'
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
						transform: `translateY(${scrollY * 0.3}px)`,
						height: '120%',
						top: '-100%', //tart above container to allow for parallax effect
					}}
				/>

				{/* Dark overlay for better text contrast */}
				{/* <div className='absolute inset-0 bg-black bg-opacity-30 z-0'></div> */}

				{/* Centered text content */}
				<div className='relative z-10 h-full flex items-center justify-center'>
					<div className='text-center text-white px-4'>
						<h3 className='text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg'>
							Experience Campus Life
						</h3>
						<p className='text-xl max-w-lg mx-auto drop-shadow-lg'>
							Where memories are made and futures begin
						</p>
					</div>
				</div>
			</div>

			{/* Section 3: Content below parallax */}
			<div className='relative z-20 bg-gray-900 text-white'>
				<div className='container mx-auto px-6 py-24'>
					<h3 className='text-2xl md:text-3xl font-bold mb-6'>
						Campus Activities
					</h3>
					<p className='text-lg mb-12'>
						Explore the vibrant activities, clubs, and events that make our
						campus life extraordinary.
					</p>

					{/* Activity cards */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
						{/* Student Clubs Card */}
						<div className='bg-gray-800 bg-opacity-70 rounded-lg overflow-hidden hover:bg-opacity-90 transition-all duration-300 group'>
							<div className='h-48 overflow-hidden relative'>
								<Image
									src='https://images.unsplash.com/photo-1524179091875-b494986c6e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
									alt='Student club meeting'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold mb-3 text-white'>
									Student Clubs
								</h4>
								<p className='text-gray-300'>
									Join diverse communities of like-minded individuals pursuing
									their passions together.
								</p>
								<button className='mt-4 text-blue-400 hover:text-blue-300 transition-colors'>
									Explore clubs →
								</button>
							</div>
						</div>

						{/* Sports & Recreation Card */}
						<div className='bg-gray-800 bg-opacity-70 rounded-lg overflow-hidden hover:bg-opacity-90 transition-all duration-300 group'>
							<div className='h-48 overflow-hidden relative'>
								<Image
									src='https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
									alt='Students playing sports'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold mb-3 text-white'>
									Sports & Recreation
								</h4>
								<p className='text-gray-300'>
									From intramural leagues to fitness classes, stay active and
									energized on campus.
								</p>
								<button className='mt-4 text-blue-400 hover:text-blue-300 transition-colors'>
									View sports →
								</button>
							</div>
						</div>

						{/* Arts & Culture Card */}
						<div className='bg-gray-800 bg-opacity-70 rounded-lg overflow-hidden hover:bg-opacity-90 transition-all duration-300 group'>
							<div className='h-48 overflow-hidden relative'>
								<Image
									src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
									alt='Art exhibition'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold mb-3 text-white'>
									Arts & Culture
								</h4>
								<p className='text-gray-300'>
									Immerse yourself in creative expression through performances,
									exhibitions, and workshops.
								</p>
								<button className='mt-4 text-blue-400 hover:text-blue-300 transition-colors'>
									Discover arts →
								</button>
							</div>
						</div>
					</div>

					{/* Additional content */}
					<div className='py-16'>
						<h3 className='text-2xl md:text-3xl font-bold mb-6'>
							Living on Campus
						</h3>
						<p className='text-lg mb-12 max-w-3xl'>
							Our residence halls offer more than just a place to
							sleep—they&apos;re communities where friendships form and memories
							are made.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CampusLife;
