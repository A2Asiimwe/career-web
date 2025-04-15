'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';

interface ProgramCardProps {
	title: string;
	imageSrc: string;
	href: string;
	className?: string;
}

const ProgramCard = ({
	title,
	imageSrc,
	href,
	className = '',
}: ProgramCardProps) => {
	return (
		<Link
			href={href}
			className={`block relative rounded-lg overflow-hidden group h-72 shadow-lg ${className}`}>
			{' '}
			{/* Added shadow-lg */}
			<div className='relative h-full w-full'>
				<Image
					src={imageSrc}
					alt={title}
					fill
					className='object-cover transition-transform duration-500 group-hover:scale-105'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
				<div className='absolute inset-0 bg-white bg-opacity-40 transition-opacity group-hover:bg-opacity-30'></div>
			</div>
			<div className='absolute bottom-0 left-0 right-0 p-4'>
				<h3 className='text-black text-xl font-medium'>{title}</h3>
			</div>
		</Link>
	);
};

const ProgramsSection = () => {
	return (
		<section className='py-28 md:py-36 bg-white'>
			<Container>
				<div className='grid md:grid-cols-2 gap-12 items-start z-20'>
					{/* Left Column: Text Content */}
					<div className='flex flex-col justify-center items-center text-center h-full'>
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6'>
							Our Programs
						</h2>
						<p className='text-gray-600 mb-8'>
							Embark on a journey of knowledge, discovery, and growth at Unipix
							University. Our admissions process is designed to identify bright,
							motivated individuals who are eager to contribute to our dynamic
							academic community.
						</p>

						{/* CTA Button - horizontal and directly under paragraph */}
						<div className='mb-12'>
							<Link
								href='/programs'
								className='inline-flex items-center bg-[#8B0000] hover:bg-[#7A0000] text-white py-3 px-6 rounded transition-colors duration-300'>
								View All Programs
								<ArrowRight size={18} className='ml-2' />
							</Link>
						</div>
					</div>

					{/* Right Column: Asymmetrical Program Cards Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full'>
						{/* Top Left Card */}
						<ProgramCard
							title='Graduate & Undergraduate'
							imageSrc='/images/programs/classroom-discussion.jpg'
							href='/programs/undergraduate'
							className='md:mt-0' // Adjust top margin if needed
						/>

						{/* Top Right Card - Positioned slightly lower */}
						<ProgramCard
							title='Lifelong Learning'
							imageSrc='/images/programs/library-study.jpg'
							href='/programs/lifelong-learning'
							className='md:mt-8' // This creates the staggered effect
						/>

						{/* Bottom Left Card */}
						<ProgramCard
							title='Graduate & Undergraduate'
							imageSrc='/images/programs/student-collaboration.jpg'
							href='/programs/graduate'
							className='md:mt-0' // Adjust top margin if needed
						/>

						{/* Bottom Right Card - Positioned slightly lower */}
						<ProgramCard
							title='Lifelong Learning'
							imageSrc='/images/programs/campus-building.jpg'
							href='/programs/continuing-education'
							className='md:mt-8' // This creates the staggered effect
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ProgramsSection;
