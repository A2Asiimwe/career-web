'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

const events = [
	{
		id: 1,
		title: 'Cultural Exchange: Building Global Connections Through',
		image: '/api/placeholder/800/600',
		date: 'August 20, 2024',
		location: 'Yarra Park, UK',
		slug: 'cultural-exchange-building-global-connections',
		alt: 'Students sitting on bench outside a building',
	},
	{
		id: 2,
		title: 'Literary Voices: Celebrating Diverse Narratives in',
		image: '/api/placeholder/800/600',
		date: 'August 20, 2024',
		location: 'Yarra Park, UK',
		slug: 'literary-voices-celebrating-diverse-narratives',
		alt: 'Group of diverse students raising hands in a lecture',
	},
	{
		id: 3,
		title: 'Bridging Cultures: Global Perspectives in Contemporary',
		image: '/api/placeholder/800/600',
		date: 'August 20, 2024',
		location: 'Yarra Park, UK',
		slug: 'bridging-cultures-global-perspectives',
		alt: 'Graduate in cap and gown holding diploma',
	},
];

export default function UpcomingEvents() {
	return (
		<section className='bg-gradient-to-b from-white to-indigo-50 py-16 md:py-20 px-4 w-full'>
			<div className='container mx-auto max-w-7xl'>
				{/* Section Header */}
				<div className='flex justify-between items-center mb-8 md:mb-12'>
					<div>
						<h2 className='text-3xl md:text-5xl font-serif text-indigo-900 mb-2'>
							Upcoming Events
						</h2>
						<div className='h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600'></div>
					</div>
					<Link
						href='/events'
						className='inline-flex items-center bg-white text-indigo-700 px-5 py-2 rounded-full hover:bg-blue-50 transition-all shadow-md group border border-indigo-100'>
						View All Events
						<ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
					</Link>
				</div>

				{/* Events Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
					{events.map((event) => (
						<div
							key={event.id}
							className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100'>
							{/* Image Container with Gradient Overlay */}
							<div className='relative h-64 w-full overflow-hidden'>
								<div className='absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent z-10'></div>
								<Image
									src={event.image}
									alt={event.alt}
									fill
									sizes='(max-width: 768px) 100vw, 33vw'
									className='object-cover transition-transform duration-500 group-hover:scale-105'
									priority={event.id === 1}
								/>
							</div>

							{/* Content Container */}
							<div className='p-6 flex flex-col h-48'>
								{/* Event Details */}
								<div className='flex gap-4 text-sm text-gray-600 mb-3'>
									<div className='flex items-center gap-1'>
										<CalendarDays className='w-4 h-4 text-indigo-600' />
										<span>{event.date}</span>
									</div>
									<div className='flex items-center gap-1'>
										<MapPin className='w-4 h-4 text-indigo-600' />
										<span>{event.location}</span>
									</div>
								</div>

								{/* Event Title */}
								<h3 className='text-xl font-serif text-gray-800 mb-auto group-hover:text-indigo-800 transition-colors'>
									{event.title}
								</h3>

								{/* Learn More Button - Updated to match university page style */}
								<Link
									href={`/events/${event.slug}`}
									className='inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md group w-full md:w-auto self-start mt-4'>
									Learn More
									<ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
