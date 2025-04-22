'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
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
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href={href}
			className={`block relative rounded-lg overflow-hidden group h-48 sm:h-60 md:h-64 lg:h-72 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${className}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<div className='relative h-full w-full'>
				<Image
					src={imageSrc}
					alt={title}
					fill
					className={`object-cover transition-transform duration-500 ${
						isHovered ? 'scale-110' : 'scale-100'
					}`}
					sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
					priority
				/>
				<div
					className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
						isHovered ? 'opacity-90' : 'opacity-70'
					}`}></div>
			</div>
			<div className='absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform transition-transform duration-300'>
				<h3 className='text-white text-base sm:text-lg md:text-xl font-medium transition-all duration-300 group-hover:translate-x-2'>
					{title}
				</h3>
				<div
					className={`flex items-center mt-1 sm:mt-2 transition-all duration-300 ${
						isHovered ? 'opacity-100' : 'opacity-0'
					}`}>
					<span className='text-white text-xs sm:text-sm'>Learn more</span>
					<ArrowRight size={14} className='ml-2 text-white animate-pulse' />
				</div>
			</div>
		</Link>
	);
};

const ProgramsSection = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 }
		);

		const section = document.getElementById('programs-section');
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	return (
		<section
			id='programs-section'
			className='py-12 sm:py-16 md:py-20 lg:py-28 bg-white'>
			<Container>
				<div
					className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start z-20 transition-opacity duration-1000 ${
						isVisible ? 'opacity-100' : 'opacity-0'
					}`}>
					{/* Left Column: Text Content */}
					<div className='flex flex-col justify-center lg:items-start items-center text-center lg:text-left h-full px-4 sm:px-0'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3 sm:mb-4 md:mb-6'>
							Our Programs
						</h2>
						<p className='text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 max-w-lg'>
							Embark on a journey of knowledge, discovery, and growth at Career
							Institute. Our admissions process is designed to identify bright,
							motivated individuals who are eager to contribute to our dynamic
							academic community.
						</p>

						{/* CTA Button */}
						<div className='mb-8 sm:mb-12'>
							<Link
								href='/programs'
								className='inline-flex items-center bg-[#8B0000] hover:bg-[#7A0000] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base'>
								View All Programs
								<ArrowRight
									size={16}
									className='ml-2 transition-transform group-hover:translate-x-1'
								/>
							</Link>
						</div>
					</div>

					{/* Right Column: Program Cards Grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-full px-4 sm:px-0'>
						{/* Top Left Card */}
						<ProgramCard
							title='Graduate & Undergraduate'
							imageSrc='/images/programs/classroom-discussion.jpg'
							href='/programs/undergraduate'
							className='sm:mt-0'
						/>

						{/* Top Right Card */}
						<ProgramCard
							title='Lifelong Learning'
							imageSrc='/images/programs/library-study.jpg'
							href='/programs/lifelong-learning'
							className='mt-0 sm:mt-4 md:mt-8'
						/>

						{/* Bottom Left Card */}
						<ProgramCard
							title='Graduate & Undergraduate'
							imageSrc='/images/programs/student-collaboration.jpg'
							href='/programs/graduate'
							className='sm:mt-0'
						/>

						{/* Bottom Right Card */}
						<ProgramCard
							title='Lifelong Learning'
							imageSrc='/images/programs/campus-building.jpg'
							href='/programs/continuing-education'
							className='mt-0 sm:mt-4 md:mt-8'
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ProgramsSection;
