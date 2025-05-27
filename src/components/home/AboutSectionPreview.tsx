'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const AboutSectionPreview = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [
		'https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8063.jpg',
		'https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8146.jpg',
		'https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8065.jpg',
		'https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8066.jpg',
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % images.length);
		}, 8000); // Changed from 5000 to 8000 - each image stays for 8 seconds

		return () => clearInterval(interval);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.8,
				delayChildren: 0.5,
				duration: 2.5,
			},
		},
	};

	const itemVariants = {
		hidden: { x: -50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 2.5,
				ease: 'easeOut',
			},
		},
	};

	const imageVariants = {
		hidden: { x: 50, opacity: 0, scale: 0.95 },
		visible: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				duration: 2.5,
				ease: 'easeOut',
			},
		},
		exit: {
			x: -50,
			opacity: 0,
			transition: {
				duration: 2.5,
				ease: 'easeIn',
			},
		},
	};

	const buttonVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 2.5,
				delay: 1.2,
				ease: 'easeOut',
			},
		},
		hover: {
			scale: 1.05,
			transition: {
				duration: 2.5,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<section className='py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-100px' }}
					className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
					{/* Left Column: Text Content */}
					<motion.div
						variants={itemVariants}
						className='text-center lg:text-left'>
						<motion.h2
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 2.5, delay: 0.7 }}
							className='text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-gray-900'>
							About Career Institute
						</motion.h2>
						<motion.p
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 2.5, delay: 0.9 }}
							className='text-gray-600 mb-6 sm:mb-8'>
							Discover our rich history, mission, and commitment to excellence
							in education. We are dedicated to nurturing talent and fostering
							innovation in every student.
						</motion.p>
						<motion.div variants={buttonVariants} whileHover='hover'>
							<Link
								href='/about'
								className='inline-flex items-center bg-[#8B0000] hover:bg-[#7A0000] text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base'>
								Learn More About Us
								<ArrowRight size={16} className='ml-2' />
							</Link>
						</motion.div>
					</motion.div>

					{/* Right Column: Image Gallery */}
					<motion.div
						variants={imageVariants}
						className='relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl group'>
						<AnimatePresence initial={false} mode='popLayout'>
							<motion.div
								key={currentImageIndex}
								initial={{ x: '100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: '-100%', opacity: 0 }}
								transition={{
									duration: 2.5,
									ease: [0.4, 0, 0.2, 1],
									opacity: { duration: 2.5 },
								}}
								className='absolute inset-0'>
								<Image
									src={images[currentImageIndex]}
									alt='About Career Institute'
									fill
									sizes='(max-width: 768px) 100vw, 50vw'
									className='object-cover transition-transform duration-700 group-hover:scale-105'
									priority
									// unoptimized
								/>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 2.5 }}
									className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'
								/>
							</motion.div>
						</AnimatePresence>

						{/* Image Navigation Dots */}
						<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
							{images.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentImageIndex(index)}
									className={`w-2 h-2 rounded-full transition-all duration-300 ${
										currentImageIndex === index
											? 'bg-white w-4'
											: 'bg-white/50 hover:bg-white/75'
									}`}
									aria-label={`Go to image ${index + 1}`}
								/>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSectionPreview;
