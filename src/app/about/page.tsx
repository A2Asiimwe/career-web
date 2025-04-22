// // app/about/page.jsx
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import MissionAndValues from '@/components/home/MisionVision';

// export default function AboutUs() {
// 	return (
// 		<main className='min-h-screen'>
// 			{/* Hero Section with Graduation Cap Image */}
// 			<div className='relative h-64 md:h-80 flex '>
// 				<div className='absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70 z-10 ' />
// 				<Image
// 					src='/images/graduation-cap.jpg'
// 					alt='Graduation cap'
// 					fill
// 					className='object-cover'
// 					priority
// 				/>
// 				<div className='relative z-20 h-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center'>
// 					<h1 className='text-4xl font-bold text-white text-center'>
// 						About Us
// 					</h1>
// 					<div className='flex items-center justify-center mt-4 text-white'>
// 						<Link href='/' className='hover:underline'>
// 							Home
// 						</Link>
// 						<span className='mx-2'>›</span>
// 						<span>About Us</span>
// 					</div>
// 				</div>
// 			</div>

// 			{/* About University Section */}
// 			<section className='py-16 bg-white'>
// 				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
// 						<div>
// 							<h2 className='text-3xl font-bold text-gray-900 mb-6'>
// 								About University
// 							</h2>
// 							<div className='aspect-[4/3] relative'>
// 								<Image
// 									src='/images/student-laptop.jpg'
// 									alt='Student with laptop'
// 									fill
// 									className='object-cover rounded-lg'
// 								/>
// 							</div>
// 						</div>
// 						<div>
// 							<p className='text-gray-700 mb-6'>
// 								Welcome to Unipix University, where knowledge meets inspiration,
// 								and every individuals educational journey is valued. Established
// 								in 1971, our university has been a bastion of learning,
// 								innovation, and community for 51 years.
// 							</p>
// 							<p className='text-gray-700'>
// 								We pride ourselves on fostering an environment where students
// 								can thrive academically while developing the skills and
// 								character needed for success in an ever-changing world. Our
// 								commitment to excellence in teaching, research, and community
// 								engagement sets us apart as a leading institution of higher
// 								education.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Statistics Section */}
// 			<section className='py-16 bg-gray-50'>
// 				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
// 						{/* Stat Card 1 */}
// 						<div className='bg-red-800 text-white p-8 rounded-lg'>
// 							<h3 className='text-4xl font-bold mb-4'>20,000</h3>
// 							<p>undergraduate and graduate students</p>
// 						</div>

// 						{/* Stat Card 2 */}
// 						<div className='bg-red-800 text-white p-8 rounded-lg'>
// 							<h3 className='text-4xl font-bold mb-4'>16,214</h3>
// 							<p>undergraduate and graduate students</p>
// 						</div>

// 						{/* Stat Card 3 */}
// 						<div className='bg-red-800 text-white p-8 rounded-lg'>
// 							<h3 className='text-4xl font-bold mb-4'>300k</h3>
// 							<p>undergraduate and graduate students</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Our History Section */}
// 			<section className='py-16 bg-white'>
// 				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 					<h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
// 						Our History
// 					</h2>
// 					<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
// 						<div>
// 							<h3 className='text-2xl font-semibold mb-4'>Our Beginnings</h3>
// 							<p className='text-gray-700 mb-6'>
// 								Founded in 1971, Unipix University began as a small college with
// 								just 200 students. Our founders envisioned an institution that
// 								would break barriers in education and provide opportunities for
// 								students from all backgrounds.
// 							</p>
// 							<p className='text-gray-700'>
// 								Over the decades, we&apos;ve grown from a modest campus to a
// 								sprawling university with state-of-the-art facilities while
// 								maintaining our core values of inclusivity, innovation, and
// 								academic excellence.
// 							</p>
// 						</div>
// 						<div>
// 							<h3 className='text-2xl font-semibold mb-4'>
// 								Vision For Tomorrow
// 							</h3>
// 							<p className='text-gray-700 mb-6'>
// 								As we look to the future, Unipix University aims to be at the
// 								forefront of addressing global challenges through research,
// 								education, and community partnerships. We&apos;re committed to
// 								preparing our students for a rapidly changing world.
// 							</p>
// 							<p className='text-gray-700'>
// 								Our strategic plan focuses on enhancing the student experience,
// 								expanding our research capabilities, strengthening our global
// 								connections, and contributing to sustainable development in our
// 								community and beyond.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Mission and Values Section */}
// 			<MissionAndValues />
// 			{/* Leadership Section */}
// 			<section className='py-16 bg-gray-50'>
// 				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 					<h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
// 						Our Leadership
// 					</h2>
// 					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
// 						{[1, 2, 3].map((item) => (
// 							<div
// 								key={item}
// 								className='bg-white rounded-lg shadow overflow-hidden'>
// 								<div className='h-64 relative'>
// 									<Image
// 										src={`/images/leader-${item}.jpg`}
// 										alt={`University leader ${item}`}
// 										fill
// 										className='object-cover'
// 									/>
// 								</div>
// 								<div className='p-6'>
// 									<h3 className='text-xl font-semibold'>Dr. Jane Smith</h3>
// 									<p className='text-gray-500'>University President</p>
// 									<p className='mt-4 text-gray-700'>
// 										With over 25 years of experience in higher education, Dr.
// 										Smith brings vision and leadership to our university
// 										community.
// 									</p>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</section>

// 			{/* Campus Life Section */}
// 			<section className='py-16 bg-white'>
// 				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
// 						<div>
// 							<h2 className='text-3xl font-bold text-gray-900 mb-6'>
// 								Campus Life
// 							</h2>
// 							<p className='text-gray-700 mb-6'>
// 								At Unipix University, learning extends beyond the classroom. Our
// 								vibrant campus community offers students countless opportunities
// 								to engage, grow, and create lasting memories.
// 							</p>
// 							<p className='text-gray-700'>
// 								From student organizations and athletics to cultural events and
// 								community service, there&apos;s something for everyone. Our
// 								campus facilities include modern residence halls, dining options
// 								featuring diverse cuisines, recreational spaces, and quiet study
// 								areas.
// 							</p>
// 						</div>
// 						<div className='grid grid-cols-2 gap-4'>
// 							<div className='aspect-square relative rounded-lg overflow-hidden'>
// 								<Image
// 									src='/images/campus-1.jpg'
// 									alt='Campus life'
// 									fill
// 									className='object-cover'
// 								/>
// 							</div>
// 							<div className='aspect-square relative rounded-lg overflow-hidden'>
// 								<Image
// 									src='/images/campus-2.jpg'
// 									alt='Campus life'
// 									fill
// 									className='object-cover'
// 								/>
// 							</div>
// 							<div className='aspect-square relative rounded-lg overflow-hidden'>
// 								<Image
// 									src='/images/campus-3.jpg'
// 									alt='Campus life'
// 									fill
// 									className='object-cover'
// 								/>
// 							</div>
// 							<div className='aspect-square relative rounded-lg overflow-hidden'>
// 								<Image
// 									src='/images/campus-4.jpg'
// 									alt='Campus life'
// 									fill
// 									className='object-cover'
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</main>
// 	);
// }

// app/about/page.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MissionAndValues from '@/components/home/MisionVision';

export default function AboutUs() {
	return (
		<main className='min-h-screen'>
			{/* Hero Section with Graduation Cap Image */}
			<div className='relative h-64 md:h-80 lg:h-96 w-full'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70 z-10' />
				<Image
					src='/images/graduation-cap.jpg'
					alt='Graduation cap'
					fill
					className='object-cover'
					priority
				/>
				<div className='relative z-20 h-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center'>
						About Us
					</h1>
					<div className='flex items-center justify-center mt-4 text-white'>
						<Link href='/' className='hover:underline'>
							Home
						</Link>
						<span className='mx-2'>›</span>
						<span>About Us</span>
					</div>
				</div>
			</div>

			{/* About University Section */}
			<section className='py-12 md:py-16 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
						<div className='order-2 md:order-1'>
							<h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6'>
								About University
							</h2>
							<div className='aspect-[4/3] relative w-full'>
								<Image
									src='/images/student-laptop.jpg'
									alt='Student with laptop'
									fill
									className='object-cover rounded-lg'
								/>
							</div>
						</div>
						<div className='order-1 md:order-2'>
							<p className='text-gray-700 mb-6'>
								Welcome to Unipix University, where knowledge meets inspiration,
								and every individual&apos;s educational journey is valued.
								Established in 1971, our university has been a bastion of
								learning, innovation, and community for 51 years.
							</p>
							<p className='text-gray-700'>
								We pride ourselves on fostering an environment where students
								can thrive academically while developing the skills and
								character needed for success in an ever-changing world. Our
								commitment to excellence in teaching, research, and community
								engagement sets us apart as a leading institution of higher
								education.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className='py-12 md:py-16 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8'>
						{/* Stat Card 1 */}
						<div className='bg-red-800 text-white p-6 md:p-8 rounded-lg'>
							<h3 className='text-3xl md:text-4xl font-bold mb-2 md:mb-4'>
								20,000
							</h3>
							<p className='text-sm md:text-base'>Students enrolled annually</p>
						</div>

						{/* Stat Card 2 */}
						<div className='bg-red-800 text-white p-6 md:p-8 rounded-lg'>
							<h3 className='text-3xl md:text-4xl font-bold mb-2 md:mb-4'>
								16,214
							</h3>
							<p className='text-sm md:text-base'>Alumni worldwide</p>
						</div>

						{/* Stat Card 3 */}
						<div className='bg-red-800 text-white p-6 md:p-8 rounded-lg'>
							<h3 className='text-3xl md:text-4xl font-bold mb-2 md:mb-4'>
								300k
							</h3>
							<p className='text-sm md:text-base'>Library resources</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our History Section */}
			<section className='py-12 md:py-16 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center'>
						Our History
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
						<div className='bg-gray-50 p-6 rounded-lg'>
							<h3 className='text-xl md:text-2xl font-semibold mb-4'>
								Our Beginnings
							</h3>
							<p className='text-gray-700 mb-6'>
								Founded in 1971, Unipix University began as a small college with
								just 200 students. Our founders envisioned an institution that
								would break barriers in education and provide opportunities for
								students from all backgrounds.
							</p>
							<p className='text-gray-700'>
								Over the decades, we&apos;ve grown from a modest campus to a
								sprawling university with state-of-the-art facilities while
								maintaining our core values of inclusivity, innovation, and
								academic excellence.
							</p>
						</div>
						<div className='bg-gray-50 p-6 rounded-lg'>
							<h3 className='text-xl md:text-2xl font-semibold mb-4'>
								Vision For Tomorrow
							</h3>
							<p className='text-gray-700 mb-6'>
								As we look to the future, Unipix University aims to be at the
								forefront of addressing global challenges through research,
								education, and community partnerships. We&apos;re committed to
								preparing our students for a rapidly changing world.
							</p>
							<p className='text-gray-700'>
								Our strategic plan focuses on enhancing the student experience,
								expanding our research capabilities, strengthening our global
								connections, and contributing to sustainable development in our
								community and beyond.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Mission and Values Section */}
			<MissionAndValues />

			{/* Leadership Section */}
			<section className='py-12 md:py-16 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center'>
						Our Leadership
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
						{[1, 2, 3].map((item) => (
							<div
								key={item}
								className='bg-white rounded-lg shadow overflow-hidden flex flex-col h-full'>
								<div className='h-48 sm:h-56 md:h-64 relative'>
									<Image
										src={`/images/leader-${item}.jpg`}
										alt={`University leader ${item}`}
										fill
										className='object-cover'
									/>
								</div>
								<div className='p-4 md:p-6 flex-grow'>
									<h3 className='text-lg md:text-xl font-semibold'>
										Dr. Jane Smith
									</h3>
									<p className='text-gray-500 text-sm md:text-base'>
										University President
									</p>
									<p className='mt-3 md:mt-4 text-gray-700 text-sm md:text-base'>
										With over 25 years of experience in higher education, Dr.
										Smith brings vision and leadership to our university
										community.
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Campus Life Section */}
			<section className='py-12 md:py-16 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
						<div>
							<h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6'>
								Campus Life
							</h2>
							<p className='text-gray-700 mb-6'>
								At Unipix University, learning extends beyond the classroom. Our
								vibrant campus community offers students countless opportunities
								to engage, grow, and create lasting memories.
							</p>
							<p className='text-gray-700'>
								From student organizations and athletics to cultural events and
								community service, there&apos;s something for everyone. Our
								campus facilities include modern residence halls, dining options
								featuring diverse cuisines, recreational spaces, and quiet study
								areas.
							</p>
						</div>
						<div className='grid grid-cols-2 gap-2 sm:gap-4'>
							<div className='aspect-square relative rounded-lg overflow-hidden'>
								<Image
									src='/images/campus-1.jpg'
									alt='Campus life'
									fill
									className='object-cover'
								/>
							</div>
							<div className='aspect-square relative rounded-lg overflow-hidden'>
								<Image
									src='/images/campus-2.jpg'
									alt='Campus life'
									fill
									className='object-cover'
								/>
							</div>
							<div className='aspect-square relative rounded-lg overflow-hidden'>
								<Image
									src='/images/campus-3.jpg'
									alt='Campus life'
									fill
									className='object-cover'
								/>
							</div>
							<div className='aspect-square relative rounded-lg overflow-hidden'>
								<Image
									src='/images/campus-4.jpg'
									alt='Campus life'
									fill
									className='object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
