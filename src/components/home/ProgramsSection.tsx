'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Container from '@/components/layout/Container';
import { motion } from 'framer-motion';

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
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 2.5, ease: 'easeOut' }}
			className={className}>
			<Link
				href={href}
				className={`block relative rounded-lg overflow-hidden group h-48 sm:h-60 md:h-64 lg:h-72 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<div className='relative h-full w-full'>
					<motion.img
						src={imageSrc}
						alt={title}
						className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
							isHovered ? 'scale-110' : 'scale-100'
						}`}
						loading='lazy'
						animate={{
							scale: isHovered ? 1.1 : 1,
							filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
						}}
						transition={{ duration: 2.5, ease: 'easeInOut' }}
					/>
					<motion.div
						className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
							isHovered ? 'opacity-90' : 'opacity-70'
						}`}
						animate={{
							opacity: isHovered ? 0.9 : 0.7,
							background: isHovered
								? 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent)'
								: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)',
						}}
						transition={{ duration: 2.5, ease: 'easeInOut' }}
					/>
				</div>
				<motion.div
					className='absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform transition-transform duration-300'
					animate={{
						y: isHovered ? -5 : 0,
						opacity: isHovered ? 1 : 0.9,
					}}
					transition={{ duration: 2.5, ease: 'easeInOut' }}>
					<h3 className='text-white text-base sm:text-lg md:text-xl font-medium transition-all duration-300 group-hover:translate-x-2'>
						{title}
					</h3>
					<motion.div
						className={`flex items-center mt-1 sm:mt-2 transition-all duration-300 ${
							isHovered ? 'opacity-100' : 'opacity-0'
						}`}
						animate={{
							opacity: isHovered ? 1 : 0,
							x: isHovered ? 5 : 0,
						}}
						transition={{ duration: 2.5, ease: 'easeInOut' }}>
						<span className='text-white text-xs sm:text-sm'>Learn more</span>
						<ArrowRight size={14} className='ml-2 text-white animate-pulse' />
					</motion.div>
				</motion.div>
			</Link>
		</motion.div>
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
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isVisible ? 1 : 0 }}
					transition={{ duration: 3, ease: 'easeOut' }}
					className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start z-20'>
					{/* Left Column: Program Cards Grid */}
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						animate={{
							x: isVisible ? 0 : -50,
							opacity: isVisible ? 1 : 0,
							scale: isVisible ? 1 : 0.95,
						}}
						transition={{ duration: 2.5, delay: 0.5, ease: 'easeOut' }}
						className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-full px-4 sm:px-0'>
						{/* Top Left Card */}
						<ProgramCard
							title='Undergraduate'
							imageSrc='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8056.jpg'
							href='/courses'
							className='sm:mt-0'
						/>

						{/* Top Right Card */}
						<ProgramCard
							title='Lifelong Learning'
							imageSrc='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8057.jpg'
							href='/courses'
							className='mt-0 sm:mt-4 md:mt-8'
						/>

						{/* Bottom Left Card */}
						<ProgramCard
							title='Practical Skilling'
							imageSrc='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8059.jpg'
							href='/courses'
							className='mt-0 sm:mt-4 md:mt-8'
						/>

						{/* Bottom Right Card */}
						<ProgramCard
							title='Certification Programs'
							imageSrc='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8060.jpg'
							href='/courses'
							className='mt-0 sm:mt-4 md:mt-8'
						/>
					</motion.div>

					{/* Right Column: Text Content */}
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						animate={{
							x: isVisible ? 0 : 50,
							opacity: isVisible ? 1 : 0,
							scale: isVisible ? 1 : 0.95,
						}}
						transition={{ duration: 2.5, delay: 0.5, ease: 'easeOut' }}
						className='flex flex-col justify-center lg:items-end items-center text-center lg:text-right h-full px-4 sm:px-0'>
						<motion.h2
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
							transition={{ duration: 2.5, delay: 0.7 }}
							className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3 sm:mb-4 md:mb-6'>
							Our Programs
						</motion.h2>
						<motion.p
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
							transition={{ duration: 2.5, delay: 0.9 }}
							className='text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 max-w-lg'>
							Embark on a journey of knowledge, discovery, and growth at Career
							Institute. Our admissions process is designed to identify bright,
							motivated individuals who are eager to contribute to our dynamic
							academic community.
						</motion.p>

						{/* CTA Button */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{
								y: isVisible ? 0 : 20,
								opacity: isVisible ? 1 : 0,
								scale: isVisible ? 1 : 0.95,
							}}
							transition={{ duration: 2.5, delay: 1.1 }}
							className='mb-8 sm:mb-12 w-full lg:w-auto'>
							<Link
								href='/courses'
								className='inline-flex items-center bg-[#8B0000] hover:bg-[#7A0000] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base'>
								View All Programs
								<ArrowRight
									size={16}
									className='ml-2 transition-transform group-hover:translate-x-1'
								/>
							</Link>
						</motion.div>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	);
};

export default ProgramsSection;
