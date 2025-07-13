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
				<div className='absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-800/85 z-10' />
				<Image
					src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8098.jpg'
					alt='Graduation cap'
					fill
					className='object-cover'
					priority
					// unoptimized
				/>
				<div className='relative z-20 h-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4'>
						About Us
					</h1>
					<div className='flex items-center justify-center text-white text-base'>
						<Link
							href='/'
							className='hover:text-red-300 transition-colors duration-300'>
							Home
						</Link>
						<span className='mx-2'>›</span>
						<span className='text-red-300'>About Us</span>
					</div>
				</div>
			</div>

			{/* About University Section */}
			<section className='py-16 lg:py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
						<div className='order-2 lg:order-1'>
							<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
								About Career Institute
							</h2>
							<div className='aspect-video relative w-full rounded-xl overflow-hidden shadow-xl'>
								<video
									className='w-full h-full object-cover'
									controls
									preload='metadata'
									poster='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8342.jpg'>
									<source
										src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/video//Samson.mp4'
										type='video/mp4'
									/>
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
						<div className='order-1 lg:order-2 space-y-5'>
							<p className='text-gray-600 text-base lg:text-lg leading-relaxed'>
								Welcome to Career Institute, where knowledge meets inspiration,
								and every individual&apos;s educational journey is valued.
								Established in 1993, our Institute has been a bastion of
								learning, innovation, and community for 32 years.
							</p>
							<p className='text-gray-600 text-base lg:text-lg leading-relaxed'>
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
			<section className='py-16 lg:py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
						{/* Stat Card 1 */}
						<div className='bg-red-800 text-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
							<h3 className='text-3xl lg:text-4xl font-bold mb-3'>300+</h3>
							<p className='text-base lg:text-lg font-medium'>
								Students enrolled annually
							</p>
						</div>

						{/* Stat Card 2 */}
						<div className='bg-red-800 text-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
							<h3 className='text-3xl lg:text-4xl font-bold mb-3'>1214+</h3>
							<p className='text-base lg:text-lg font-medium'>
								Alumni worldwide
							</p>
						</div>

						{/* Stat Card 3 */}
						<div className='bg-red-800 text-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
							<h3 className='text-3xl lg:text-4xl font-bold mb-3'>300k+</h3>
							<p className='text-base lg:text-lg font-medium'>
								Library resources
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our History Section */}
			<section className='py-16 lg:py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center'>
						Our History
					</h2>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
						<div className='bg-gray-50 p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
							<h3 className='text-xl lg:text-2xl font-bold mb-4 text-gray-900'>
								Our Beginnings
							</h3>
							<p className='text-gray-600 text-base leading-relaxed mb-4'>
								Founded in 1993, Career Institute began as a small college with
								just 20 students. Our founders envisioned an institution that
								would break barriers in education and provide opportunities for
								students from all backgrounds.
							</p>
							<p className='text-gray-600 text-base leading-relaxed'>
								Over the decades, we&apos;ve grown from a modest campus to a
								sprawling academic giant with state-of-the-art facilities while
								maintaining our core values of inclusivity, innovation, and
								academic excellence.
							</p>
						</div>
						<div className='bg-gray-50 p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
							<h3 className='text-xl lg:text-2xl font-bold mb-4 text-gray-900'>
								Vision For Tomorrow
							</h3>
							<p className='text-gray-600 text-base leading-relaxed mb-4'>
								As we look to the future, Career Institute aims to be at the
								forefront of addressing global challenges through research,
								education, and community partnerships. We&apos;re committed to
								preparing our students for a rapidly changing world.
							</p>
							<p className='text-gray-600 text-base leading-relaxed'>
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
			<section className='py-16 lg:py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center'>
						Our Leadership
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
						{[1, 2, 3].map((item) => (
							<div
								key={item}
								className='bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col h-full transition-shadow duration-300'>
								<div className='h-56 lg:h-64 relative'>
									<Image
										src={
											item === 1
												? '/profile/PROTAZIOBEGUMISA.jpg'
												: item === 2
												? '/profile/Davis.jpg'
												: 'https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8297.jpg'
										}
										alt={`University leader ${item}`}
										fill
										className='object-cover'
										// unoptimized
									/>
								</div>
								<div className='p-5 lg:p-6 flex-grow'>
									<h3 className='text-lg lg:text-xl font-bold text-gray-900 mb-2'>
										{item === 1
											? 'Dr. Begumisa Protazio'
											: item === 2
											? 'CPA. Davis Byabamazima'
											: 'Mr. Samson Karamagi'}
									</h3>
									<p className='text-red-800 font-semibold text-sm lg:text-base mb-3'>
										{item === 1
											? 'Chairman Board of Directors'
											: item === 2
											? 'Director & Board Member'
											: 'Institute Administrator '}
									</p>
									<p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
										{item === 1
											? 'With over 32 years of experience in higher education, Dr. Begumisa Protazio brings vision and leadership to our learning community.'
											: item === 2
											? 'CPA. Davis Byabamazima brings extensive experience in educational management and strategic planning, driving innovation in our academic programs.'
											: 'Mr. Samson Karamagi leads our school with a focus on student success and community engagement, fostering a supportive learning environment.'}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Campus Life Section */}
			<section className='py-16 lg:py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
						<div>
							<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
								Campus Life
							</h2>
							<p className='text-gray-600 text-base lg:text-lg leading-relaxed mb-5'>
								At Career Institute, learning extends beyond the classroom. Our
								vibrant campus community offers students countless opportunities
								to engage, grow, and create lasting memories.
							</p>
							<p className='text-gray-600 text-base lg:text-lg leading-relaxed'>
								From student organizations and athletics to cultural events and
								community service, there&apos;s something for everyone. Our
								campus facilities include modern residence halls, dining options
								featuring diverse cuisines, recreational spaces, and quiet study
								areas.
							</p>
						</div>
						<div className='grid grid-cols-2 gap-3 lg:gap-4'>
							<div className='aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
								<Image
									src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8199.jpg'
									alt='Campus life'
									fill
									className='object-cover hover:scale-105 transition-transform duration-300'
									// unoptimized
								/>
							</div>
							<div className='aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
								<Image
									src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8297.jpg'
									alt='Campus life'
									fill
									className='object-cover hover:scale-105 transition-transform duration-300'
									// unoptimized
								/>
							</div>
							<div className='aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
								<Image
									src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8342.jpg'
									alt='Campus life'
									fill
									className='object-cover hover:scale-105 transition-transform duration-300'
									// unoptimized
								/>
							</div>
							<div className='aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
								<Image
									src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8192.jpg'
									alt='Campus life'
									fill
									className='object-cover hover:scale-105 transition-transform duration-300'
									// unoptimized
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
