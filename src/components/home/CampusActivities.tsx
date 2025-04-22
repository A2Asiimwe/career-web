import {
	ArrowRight,
	BookOpen,
	Calendar,
	Coffee,
	Music,
	Users,
} from 'lucide-react';
import React from 'react';
import Image from 'next/image';

function CampusActivities() {
	return (
		<div>
			{/* Campus Activities Section */}
			<div className='relative z-20 bg-gradient-to-b from-blue-50 to-white text-gray-800'>
				<div className='container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24'>
					{/* Section header */}
					<div className='text-center mb-12 md:mb-16'>
						<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
							<span className='border-b-2 border-blue-500 pb-1'>Student</span>{' '}
							Activities & Campus Life
						</h3>
						<p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto'>
							At Career Institute, learning extends beyond the classroom. Engage
							in a variety of activities that enrich your educational
							experience.
						</p>
					</div>

					{/* Activity cards in a responsive grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
						{/* Student Clubs Card */}
						<div className='bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md border border-gray-100'>
							<div className='h-48 sm:h-56 overflow-hidden relative'>
								<Image
									src='/api/placeholder/400/320'
									alt='Student Clubs and Organizations'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
								<div className='absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
									<Users className='w-3 h-3 mr-1' />
									Student Life
								</div>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold mb-3 text-blue-900'>
									Student Clubs & Organizations
								</h4>
								<p className='text-gray-600'>
									Join one of our many student-led clubs focused on professional
									development, cultural exchange, and special interests.
								</p>
								<ul className='mt-4 space-y-2 text-gray-600'>
									<li className='flex items-center'>
										<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
										Professional Development Society
									</li>
									<li className='flex items-center'>
										<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
										Travel & Tourism Club
									</li>
									<li className='flex items-center'>
										<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
										International Students Association
									</li>
								</ul>
								<button className='mt-6 px-6 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center group'>
									<span>Explore Clubs</span>
									<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
								</button>
							</div>
						</div>

						{/* Campus Events Card */}
						<div className='bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md border border-gray-100'>
							<div className='h-48 sm:h-56 overflow-hidden relative'>
								<Image
									src='/api/placeholder/400/320'
									alt='Campus Events and Activities'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
								<div className='absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
									<Calendar className='w-3 h-3 mr-1' />
									Events
								</div>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold mb-3 text-blue-900'>
									Campus Events & Activities
								</h4>
								<p className='text-gray-600'>
									Participate in year-round events including industry seminars,
									cultural celebrations, and professional networking sessions.
								</p>
								<div className='mt-4 space-y-3'>
									<div className='flex items-start'>
										<Calendar className='w-4 h-4 text-blue-600 mt-1 flex-shrink-0' />
										<div className='ml-2'>
											<p className='font-medium text-gray-700'>
												Annual Industry Expo
											</p>
											<p className='text-sm text-gray-500'>
												Connect with industry leaders and explore career
												opportunities
											</p>
										</div>
									</div>
									<div className='flex items-start'>
										<Calendar className='w-4 h-4 text-blue-600 mt-1 flex-shrink-0' />
										<div className='ml-2'>
											<p className='font-medium text-gray-700'>
												Cultural Festival
											</p>
											<p className='text-sm text-gray-500'>
												Celebrate diversity through food, performances and
												exhibitions
											</p>
										</div>
									</div>
								</div>
								<button className='mt-6 px-6 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center group'>
									<span>View Calendar</span>
									<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
								</button>
							</div>
						</div>

						{/* Campus Facilities Card */}
						<div className='bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md border border-gray-100'>
							<div className='h-48 sm:h-56 overflow-hidden relative'>
								<Image
									src='/api/placeholder/400/320'
									alt='Campus Facilities'
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
								<div className='absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
									<Coffee className='w-3 h-3 mr-1' />
									Facilities
								</div>
							</div>
							<div className='p-6'>
								<h4 className='text-xl font-bold mb-3 text-blue-900'>
									Modern Campus Facilities
								</h4>
								<p className='text-gray-600'>
									Enjoy state-of-the-art facilities designed to enhance your
									learning experience and campus life.
								</p>
								<div className='mt-4 grid grid-cols-2 gap-3'>
									<div className='bg-blue-50 p-3 rounded-lg text-center'>
										<Coffee className='w-5 h-5 text-blue-600 mx-auto mb-1' />
										<p className='text-sm font-medium'>Student Lounge</p>
									</div>
									<div className='bg-blue-50 p-3 rounded-lg text-center'>
										<BookOpen className='w-5 h-5 text-blue-600 mx-auto mb-1' />
										<p className='text-sm font-medium'>Digital Library</p>
									</div>
									<div className='bg-blue-50 p-3 rounded-lg text-center'>
										<Music className='w-5 h-5 text-blue-600 mx-auto mb-1' />
										<p className='text-sm font-medium'>Recreation Area</p>
									</div>
									<div className='bg-blue-50 p-3 rounded-lg text-center'>
										<Users className='w-5 h-5 text-blue-600 mx-auto mb-1' />
										<p className='text-sm font-medium'>Study Rooms</p>
									</div>
								</div>
								<button className='mt-6 px-6 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center group'>
									<span>Tour Facilities</span>
									<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CampusActivities;
