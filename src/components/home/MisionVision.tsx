// 'use client';

// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';

// const MissionAndValues = () => {
// 	const [scrollY, setScrollY] = useState(0);
// 	const [isMobile, setIsMobile] = useState(false);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setScrollY(window.scrollY);
// 		};

// 		const handleResize = () => {
// 			setIsMobile(window.innerWidth < 768);
// 		};

// 		// Initialize mobile state
// 		handleResize();

// 		window.addEventListener('scroll', handleScroll, { passive: true });
// 		window.addEventListener('resize', handleResize);

// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	const calculateParallax = (speed: number): number => {
// 		if (isMobile) return 0;
// 		return (scrollY * speed) / 4;
// 	};

// 	return (
// 		<section className='py-16 bg-white'>
// 			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 				<h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
// 					Mission and Values
// 				</h2>

// 				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 relative'>
// 					{/* Left Column */}
// 					<div className='space-y-12'>
// 						{/* Diversity */}
// 						<div>
// 							<h3 className='text-2xl font-semibold mb-4'>Diversity</h3>
// 							<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
// 								<Image
// 									src='/api/placeholder/600/400'
// 									alt='Students from diverse backgrounds working together'
// 									fill
// 									className='object-cover'
// 								/>
// 							</div>
// 							<p className='text-gray-700'>
// 								Celebrating a rich tapestry of backgrounds, perspectives, and
// 								talents. We embrace diversity as a cornerstone of our academic
// 								community, fostering an environment where different ideas and
// 								experiences enrich the learning process.
// 							</p>
// 						</div>

// 						{/* Innovation */}
// 						<div>
// 							<h3 className='text-2xl font-semibold mb-4'>Innovation</h3>
// 							<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
// 								<Image
// 									src='/api/placeholder/600/400'
// 									alt='Students collaborating on an innovative project'
// 									fill
// 									className='object-cover'
// 								/>
// 							</div>
// 							<p className='text-gray-700'>
// 								Encouraging creativity, critical thinking, and a spirit of
// 								innovation. We challenge our students and faculty to explore new
// 								ideas, develop solutions to complex problems, and push the
// 								boundaries of knowledge.
// 							</p>
// 						</div>
// 					</div>

// 					{/* Center Divider - Properly positioned */}
// 					<div
// 						className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200'
// 						style={{ transform: 'translateX(-50%)' }}></div>

// 					{/* Right Column */}
// 					<div className='space-y-12'>
// 						{/* Excellence */}
// 						<div>
// 							<h3 className='text-2xl font-semibold mb-4'>Excellence</h3>
// 							<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
// 								<Image
// 									src='/api/placeholder/600/400'
// 									alt='Students attending a lecture in an auditorium'
// 									fill
// 									className='object-cover'
// 								/>
// 							</div>
// 							<p className='text-gray-700'>
// 								Striving for academic and research excellence in all endeavors.
// 								We set high standards for our educational programs, research
// 								initiatives, and institutional practices, continuously seeking
// 								ways to improve and excel.
// 							</p>
// 						</div>

// 						{/* Academic Excellence */}
// 						<div>
// 							<h3 className='text-2xl font-semibold mb-4'>
// 								Academic Excellence
// 							</h3>
// 							<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
// 								<Image
// 									src='/api/placeholder/600/400'
// 									alt='Students studying together outdoors on campus'
// 									fill
// 									className='object-cover'
// 								/>
// 							</div>
// 							<p className='text-gray-700'>
// 								Our commitment to academic excellence is reflected in the
// 								diverse range of programs we offer. We provide rigorous
// 								curriculum, outstanding faculty, and supportive learning
// 								environments that prepare students for success in their chosen
// 								fields.
// 							</p>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Mission Statement */}
// 				<div className='mt-16 text-center max-w-4xl mx-auto'>
// 					<h3 className='text-2xl font-semibold mb-6'>Our Mission</h3>
// 					<p className='text-gray-700 mb-6'>
// 						At Unipix University, our mission is to foster an environment of
// 						intellectual growth and personal development. We are dedicated to
// 						providing accessible, high-quality education that empowers students
// 						to become thoughtful leaders and active contributors to society.
// 					</p>
// 					<p className='text-gray-700'>
// 						Through innovative teaching, research, and community engagement, we
// 						aim to address global challenges and create positive change. We
// 						cultivate a community where diversity is celebrated, excellence is
// 						pursued, and the potential of each individual is realized.
// 					</p>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default MissionAndValues;

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const MissionAndValues = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initialize mobile state
		handleResize();

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const calculateParallax = (speed: number): number => {
		if (isMobile) return 0;
		return (scrollY * speed) / 4;
	};

	return (
		<section className='py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
					Mission and Values
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 relative'>
					{/* Left Column */}
					<div className='space-y-12'>
						{/* Diversity */}
						<div>
							<h3 className='text-2xl font-semibold mb-4'>Diversity</h3>
							<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
								<Image
									src='/api/placeholder/600/400'
									alt='Students from diverse backgrounds working together'
									fill
									className='object-cover'
									style={{
										transform: `translateY(${calculateParallax(0.5)}px)`,
									}}
								/>
							</div>
							<p className='text-gray-700'>
								Celebrating a rich tapestry of backgrounds, perspectives, and
								talents. We embrace diversity as a cornerstone of our academic
								community, fostering an environment where different ideas and
								experiences enrich the learning process.
							</p>
						</div>

						{/* Innovation */}
						<div>
							<h3 className='text-2xl font-semibold mb-4'>Innovation</h3>
							<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
								<Image
									src='/api/placeholder/600/400'
									alt='Students collaborating on an innovative project'
									fill
									className='object-cover'
									style={{
										transform: `translateY(${calculateParallax(0.3)}px)`,
									}}
								/>
							</div>
							<p className='text-gray-700'>
								Encouraging creativity, critical thinking, and a spirit of
								innovation. We challenge our students and faculty to explore new
								ideas, develop solutions to complex problems, and push the
								boundaries of knowledge.
							</p>
						</div>
					</div>

					{/* Center Divider - Properly positioned */}
					<div
						className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200'
						style={{ transform: 'translateX(-50%)' }}></div>

					{/* Right Column */}
					<div className='space-y-12'>
						{/* Excellence */}
						<div>
							<h3 className='text-2xl font-semibold mb-4'>Excellence</h3>
							<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
								<Image
									src='/api/placeholder/600/400'
									alt='Students attending a lecture in an auditorium'
									fill
									className='object-cover'
									style={{
										transform: `translateY(${calculateParallax(0.2)}px)`,
									}}
								/>
							</div>
							<p className='text-gray-700'>
								Striving for academic and research excellence in all endeavors.
								We set high standards for our educational programs, research
								initiatives, and institutional practices, continuously seeking
								ways to improve and excel.
							</p>
						</div>

						{/* Academic Excellence */}
						<div>
							<h3 className='text-2xl font-semibold mb-4'>
								Academic Excellence
							</h3>
							<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
								<Image
									src='/api/placeholder/600/400'
									alt='Students studying together outdoors on campus'
									fill
									className='object-cover'
									style={{
										transform: `translateY(${calculateParallax(0.4)}px)`,
									}}
								/>
							</div>
							<p className='text-gray-700'>
								Our commitment to academic excellence is reflected in the
								diverse range of programs we offer. We provide rigorous
								curriculum, outstanding faculty, and supportive learning
								environments that prepare students for success in their chosen
								fields.
							</p>
						</div>
					</div>
				</div>

				{/* Mission Statement */}
				<div className='mt-16 text-center max-w-4xl mx-auto'>
					<h3 className='text-2xl font-semibold mb-6'>Our Mission</h3>
					<p className='text-gray-700 mb-6'>
						At Unipix University, our mission is to foster an environment of
						intellectual growth and personal development. We are dedicated to
						providing accessible, high-quality education that empowers students
						to become thoughtful leaders and active contributors to society.
					</p>
					<p className='text-gray-700'>
						Through innovative teaching, research, and community engagement, we
						aim to address global challenges and create positive change. We
						cultivate a community where diversity is celebrated, excellence is
						pursued, and the potential of each individual is realized.
					</p>
				</div>
			</div>
		</section>
	);
};

export default MissionAndValues;
