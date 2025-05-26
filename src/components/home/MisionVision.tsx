'use client';

import Image from 'next/image';
// import { useEffect, useState } from 'react';

const MissionAndValues = () => {
	return (
		<section className='py-16 lg:py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12 lg:mb-16'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
						Mission and Values
					</h2>
					<div className='w-20 h-1 bg-red-800 mx-auto rounded-full'></div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative'>
					{/* Left Column */}
					<div className='space-y-12 lg:space-y-16'>
						{/* Innovation */}
						<div className='group'>
							<h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-center'>
								<span className='text-red-800 mr-3 text-lg lg:text-xl'>01</span>
								Innovation
							</h3>
							<div className='relative h-56 lg:h-64 rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300'>
								<Image
									src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8200.jpg'
									alt='Students collaborating on an innovative project'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
									unoptimized
								/>
							</div>
							<p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
								We pursue excellence in teaching and training through
								encouragement and support of creativity, imagination and
								originality. We challenge our students and faculty to explore
								new ideas and push the boundaries of knowledge.
							</p>
						</div>

						{/* Integrity */}
						<div className='group'>
							<h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-center'>
								<span className='text-red-800 mr-3 text-lg lg:text-xl'>02</span>
								Integrity
							</h3>
							<div className='relative h-56 lg:h-64 rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300'>
								<Image
									src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8147.jpg'
									alt='Students demonstrating integrity and honesty'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
									unoptimized
								/>
							</div>
							<p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
								We strive to demonstrate high standards of ethical conduct and
								to cherish honesty, openness and truth. Integrity forms the
								foundation of all our relationships and academic endeavors.
							</p>
						</div>
					</div>

					{/* Center Divider */}
					<div
						className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200'
						style={{ transform: 'translateX(-50%)' }}></div>

					{/* Right Column */}
					<div className='space-y-12 lg:space-y-16'>
						{/* Professionalism */}
						<div className='group'>
							<h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-center'>
								<span className='text-red-800 mr-3 text-lg lg:text-xl'>03</span>
								Professionalism
							</h3>
							<div className='relative h-56 lg:h-64 rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300'>
								<Image
									src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8112.jpg'
									alt='Professional conduct in academic setting'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
									unoptimized
								/>
							</div>
							<p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
								Making sure that staff and students conduct themselves with the
								highest ethical standards and taking responsibility of all their
								actions. We maintain professional excellence in all our
								interactions and commitments.
							</p>
						</div>

						{/* Transparency */}
						<div className='group'>
							<h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-center'>
								<span className='text-red-800 mr-3 text-lg lg:text-xl'>04</span>
								Transparency
							</h3>
							<div className='relative h-56 lg:h-64 rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300'>
								<Image
									src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8103.jpg'
									alt='Transparent academic processes and accountability'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
									unoptimized
								/>
							</div>
							<p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
								Seeking to provide accountability and value for money to Career
								Institute&apos;s stakeholders. We ensure open communication,
								clear processes, and responsible stewardship of resources
								entrusted to us.
							</p>
						</div>
					</div>
				</div>

				{/* Mission Statement */}
				<div className='mt-16 lg:mt-20 text-center max-w-4xl mx-auto bg-gray-50 p-6 lg:p-8 rounded-xl shadow-md'>
					<h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-6'>
						Our Mission
					</h3>
					<div className='w-16 h-1 bg-red-800 mx-auto rounded-full mb-6'></div>
					<p className='text-gray-600 mb-4 text-sm lg:text-base leading-relaxed'>
						At Career Institute, our mission is to provided qualitative all
						round education services, instill professionalism and equip students
						with relevant skills for positive development of society
					</p>
					<p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
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
