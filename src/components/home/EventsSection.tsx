// // components/UpcomingEvents.jsx
// import Image from 'next/image';
// import Link from 'next/link';
// import { CalendarDays, MapPin, ArrowUpRight } from 'lucide-react';

// const events = [
// 	{
// 		id: 1,
// 		title: 'Cultural Exchange: Building Global Connections Through',
// 		image: '/images/events/cultural-exchange.jpg',
// 		date: 'August 20, 2024',
// 		location: 'Yarra Park, UK',
// 		slug: 'cultural-exchange-building-global-connections',
// 		alt: 'Students sitting on bench outside a building',
// 	},
// 	{
// 		id: 2,
// 		title: 'Literary Voices: Celebrating Diverse Narratives in',
// 		image: '/images/events/literary-voices.jpg',
// 		date: 'August 20, 2024',
// 		location: 'Yarra Park, UK',
// 		slug: 'literary-voices-celebrating-diverse-narratives',
// 		alt: 'Group of diverse students raising hands in a lecture',
// 	},
// 	{
// 		id: 3,
// 		title: 'Bridging Cultures: Global Perspectives in Contemporary',
// 		image: '/images/events/bridging-cultures.jpg',
// 		date: 'August 20, 2024',
// 		location: 'Yarra Park, UK',
// 		slug: 'bridging-cultures-global-perspectives',
// 		alt: 'Graduate in cap and gown holding diploma',
// 	},
// ];

// export default function UpcomingEvents() {
// 	return (
// 		<section className='py-16 px-4 bg-white w-full'>
// 			<div className='flex justify-between items-center mb-8 max-w-7xl mx-auto'>
// 				<h2 className='text-3xl md:text-4xl font-serif'>UPCOMING EVENT</h2>
// 				<Link
// 					href='/events'
// 					className='text-sm font-medium text-red-600 flex items-center gap-1 hover:underline'>
// 					View All
// 					<ArrowUpRight className='w-4 h-4' />
// 				</Link>
// 			</div>

// 			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
// 				{events.map((event) => (
// 					<div
// 						key={event.id}
// 						className='border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
// 						<div className='relative h-56 w-full'>
// 							<Image
// 								src={event.image}
// 								alt={event.alt}
// 								fill
// 								sizes='(max-width: 768px) 100vw, 33vw'
// 								className='object-cover'
// 								priority={event.id === 1}
// 							/>
// 						</div>

// 						<div className='p-6'>
// 							<div className='flex gap-6 text-sm text-gray-600 mb-3'>
// 								<div className='flex items-center gap-1'>
// 									<CalendarDays className='w-4 h-4' />
// 									<span>{event.date}</span>
// 								</div>
// 								<div className='flex items-center gap-1'>
// 									<MapPin className='w-4 h-4' />
// 									<span>{event.location}</span>
// 								</div>
// 							</div>

// 							<h3 className='text-xl font-serif mb-6'>{event.title}</h3>

// 							<Link
// 								href={`/events/${event.slug}`}
// 								className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors'
// 								aria-label={`Learn more about ${event.title}`}>
// 								<ArrowUpRight className='w-4 h-4' />
// 							</Link>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// }

import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MapPin, ArrowUpRight } from 'lucide-react';

const events = [
	{
		id: 1,
		title: 'Cultural Exchange: Building Global Connections Through',
		image: '/images/events/cultural-exchange.jpg',
		date: 'August 20, 2024',
		location: 'Yarra Park, UK',
		slug: 'cultural-exchange-building-global-connections',
		alt: 'Students sitting on bench outside a building',
	},
	{
		id: 2,
		title: 'Literary Voices: Celebrating Diverse Narratives in',
		image: '/images/events/literary-voices.jpg',
		date: 'August 20, 2024',
		location: 'Yarra Park, UK',
		slug: 'literary-voices-celebrating-diverse-narratives',
		alt: 'Group of diverse students raising hands in a lecture',
	},
	{
		id: 3,
		title: 'Bridging Cultures: Global Perspectives in Contemporary',
		image: '/images/events/bridging-cultures.jpg',
		date: 'August 20, 2024',
		location: 'Yarra Park, UK',
		slug: 'bridging-cultures-global-perspectives',
		alt: 'Graduate in cap and gown holding diploma',
	},
];

export default function UpcomingEvents() {
	return (
		<section className='py-20 px-4 bg-white w-full'>
			<div className='flex justify-between items-center mb-10 max-w-7xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-serif'>UPCOMING EVENT</h2>
				<Link
					href='/events'
					className='text-sm font-medium text-red-600 flex items-center gap-1 hover:underline'>
					View All
					<ArrowUpRight className='w-4 h-4' />
				</Link>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
				{events.map((event) => (
					<div
						key={event.id}
						className='border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
						<div className='relative h-80 w-full'>
							<Image
								src={event.image}
								alt={event.alt}
								fill
								sizes='(max-width: 768px) 100vw, 33vw'
								className='object-cover'
								priority={event.id === 1}
							/>
						</div>

						<div className='p-6'>
							<div className='flex gap-6 text-sm text-gray-600 mb-3'>
								<div className='flex items-center gap-1'>
									<CalendarDays className='w-4 h-4' />
									<span>{event.date}</span>
								</div>
								<div className='flex items-center gap-1'>
									<MapPin className='w-4 h-4' />
									<span>{event.location}</span>
								</div>
							</div>

							<h3 className='text-xl font-serif mb-6'>{event.title}</h3>

							<Link
								href={`/events/${event.slug}`}
								className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors'
								aria-label={`Learn more about ${event.title}`}>
								<ArrowUpRight className='w-4 h-4' />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
