'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import '../../styles/slick.css';
import '../../styles/slick-theme.css';

const carouselImages = [
	{
		url: 'https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8060.jpg',
	},
	{
		url: 'https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8061.jpg',
	},
	{
		url: 'https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures/_G3A8062.jpg',
	},
];

const HeroHeader = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
	};

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
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 2.5,
				ease: 'easeOut',
			},
		},
	};

	const buttonVariants = {
		hidden: { scale: 0.95, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 2.5,
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

	const logoVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 2.5,
				ease: 'easeOut',
			},
		},
	};

	return (
		<div className='relative w-full h-[500px] sm:h-[650px] md:h-[800px] lg:h-[900px] overflow-hidden'>
			{/* Carousel Container */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3 }}
				className='h-full'>
				<Slider {...settings} className='h-full'>
					{carouselImages.map((image, index) => (
						<div key={index} className='h-full'>
							<div className='relative h-full'>
								<motion.div
									initial={{ scale: 1.1 }}
									animate={{ scale: 1 }}
									transition={{ duration: 3 }}
									className='absolute inset-0 w-full h-full bg-cover bg-center'
									style={{
										backgroundImage: `url('${image.url}')`,
										backgroundSize: 'cover',
										backgroundPosition: 'center center',
									}}
								/>
								{/* Gradient Overlay */}
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 2.5 }}
									className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70'></motion.div>
							</div>
						</div>
					))}
				</Slider>
			</motion.div>

			{/* Content overlay */}
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='visible'
				className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 z-10 pointer-events-none'>
				{/* University Logo */}
				<motion.div variants={logoVariants} className='mb-4 sm:mb-6'>
					<div className='bg-white p-2 rounded-full'>
						<Image
							src='/Logo/Screen_logo-2.png'
							alt='University Logo'
							width={100}
							height={100}
							className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28'
							priority
						/>
					</div>
				</motion.div>

				{/* Heading */}
				<motion.h1
					variants={itemVariants}
					className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4 max-w-3xl'>
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 2.5, delay: 0.7 }}
						className='block'>
						Career Institute
					</motion.span>
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 2.5, delay: 1.2 }}
						className='block mt-1 sm:mt-2'>
						Building Your Career
					</motion.span>
				</motion.h1>

				{/* Subheading */}
				<motion.p
					variants={itemVariants}
					className='text-white text-sm sm:text-base mb-6 sm:mb-8 max-w-xl px-4 sm:px-0'>
					Empowering students with quality education and professional
					development opportunities for a successful future.
				</motion.p>

				{/* CTA Button */}
				<motion.div
					variants={buttonVariants}
					whileHover='hover'
					className='pointer-events-auto'>
					<Link
						href='#programs-section'
						className='inline-flex items-center bg-[#8B0000] hover:bg-[#7A0000] text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded transition-colors duration-300 text-sm sm:text-base'>
						View Our Programs
						<ArrowRight size={16} className='ml-2' />
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default HeroHeader;
