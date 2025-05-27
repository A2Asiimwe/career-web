'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	ArrowRight,
	Search,
	BookOpen,
	Award,
	GraduationCap,
	Lightbulb,
	Filter,
	Play,
	X,
} from 'lucide-react';
import { supabase } from '@/lib/supabase/client';
import { motion } from 'framer-motion';

interface AcademicProgram {
	id: number;
	title: string;
	level: string[];
	image: string;
	description: string;
	department: string;
}

export default function AcademicAreas() {
	const [searchQuery, setSearchQuery] = useState('');
	const [departmentFilter, setDepartmentFilter] = useState('All Departments');
	const [academicPrograms, setAcademicPrograms] = useState<AcademicProgram[]>(
		[]
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [isMobile, setIsMobile] = useState(false);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	// const [scrollPosition, setScrollPosition] = useState(0);
	const introRef = useRef<HTMLDivElement>(null);

	// Fetch programs from Supabase
	useEffect(() => {
		const fetchPrograms = async () => {
			try {
				const { data, error } = await supabase
					.from('academic_programs')
					.select('*')
					.order('created_at', { ascending: false });

				if (error) throw error;

				setAcademicPrograms(data || []);
			} catch (err) {
				setError('Failed to load academic programs. Please try again later.');
				console.error('Fetch error:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchPrograms();

		// Set up real-time updates (optional)
		const subscription = supabase
			.channel('academic-programs-changes')
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',
					table: 'academic_programs',
				},
				fetchPrograms
			)
			.subscribe();

		// Set the intro section to visible after mount
		setTimeout(() => {
			setIsVisible(true);
		}, 100);

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	// Handle scroll for animations
	useEffect(() => {
		const handleScroll = () => {
			// setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Handle resize for mobile detection
	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);

			// Auto-close mobile filters when switching to desktop
			if (!mobile) {
				setMobileFiltersOpen(false);
			}
		};

		// Initialize mobile state
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Filter programs
	const filteredPrograms = academicPrograms.filter((program) => {
		const matchesSearch = program.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesDepartment =
			departmentFilter === 'All Departments' ||
			program.department === departmentFilter;
		return matchesSearch && matchesDepartment;
	});

	// Get unique departments
	const departments = [
		'All Departments',
		...Array.from(new Set(academicPrograms.map((p) => p.department))),
	];

	if (loading) {
		return (
			<div className='flex justify-center items-center min-h-screen bg-slate-50'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='text-center py-12 bg-slate-50'>
				<div className='text-red-500 mb-4'>{error}</div>
				<button
					onClick={() => window.location.reload()}
					className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>
					Retry
				</button>
			</div>
		);
	}

	const toggleMobileFilters = () => {
		setMobileFiltersOpen(!mobileFiltersOpen);
	};

	return (
		<div className='min-h-screen'>
			<div className='relative h-64 md:h-80 lg:h-96 w-full'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70 z-10' />
				<Image
					src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8210.jpg'
					alt='Graduation cap'
					fill
					className='object-cover'
					priority
					// unoptimized
				/>
				<div className='relative z-20 h-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center'>
						Our Courses
					</h1>
					<div className='flex items-center justify-center mt-4 text-white'>
						<Link href='/' className='hover:underline'>
							Home
						</Link>
						<span className='mx-2'></span>
						<span>Our Courses</span>
					</div>
				</div>
			</div>
			<div className=' bg-slate-50 '>
				{/* Introduction Section - Full width with gradient background */}
				<div className='relative w-full overflow-hidden mb-12'>
					<div
						ref={introRef}
						className={`relative z-20 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 transition-all duration-1000 ${
							isVisible
								? 'opacity-100 translate-y-0'
								: 'opacity-0 translate-y-10'
						}`}>
						<div className='w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
							<div className='max-w-7xl mx-auto'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
									{/* Left column */}
									<div
										className={`${
											isMobile
												? 'order-2 text-center md:text-left'
												: 'order-2 md:order-1'
										}`}>
										<motion.h2
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.8, ease: 'easeOut' }}
											className='text-3xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-normal text-gray-800'>
											<span className='block'>Discover Your Path to</span>
											<span className='block font-light mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
												Academic Excellence
											</span>
										</motion.h2>
										<motion.p
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.8,
												ease: 'easeOut',
												delay: 0.2,
											}}
											className='text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 max-w-lg'>
											Our comprehensive academic programs are designed to
											prepare you for success in today&apos;s competitive global
											landscape. With expert faculty, cutting-edge resources,
											and industry partnerships, we offer the perfect
											environment for your educational journey.
										</motion.p>
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.8,
												ease: 'easeOut',
												delay: 0.4,
											}}
											className='flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start'>
											<Link
												href='#featured-programs'
												className='inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm'>
												<span>Browse Programs</span>
												<ArrowRight className='ml-2 w-4 h-4' />
											</Link>
											<Link
												href='/advising'
												className='inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors'>
												<span>Get Advising</span>
											</Link>
										</motion.div>
									</div>

									{/* Right column with glowing effect */}
									<div
										className={`${
											isMobile
												? 'order-1 flex justify-center md:justify-end'
												: 'order-1 md:order-2'
										}`}>
										<div className='relative w-full max-w-[90%] md:max-w-none mx-auto'>
											<div className='absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-70'></div>
											<div className='relative aspect-video rounded-xl overflow-hidden shadow-lg'>
												<Image
													src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8082.jpg'
													alt='Academic Programs'
													className='object-cover'
													width={600}
													height={400}
													// unoptimized
												/>
												<div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20'></div>
											</div>
											<div className='absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4'>
												<div className='flex items-center gap-3'>
													<div className='bg-blue-100 p-2 rounded-full'>
														<GraduationCap className='w-6 h-6 text-blue-600' />
													</div>
													<div>
														<div className='text-sm text-slate-500'>
															Programs
														</div>
														<div className='text-lg font-medium text-slate-800'>
															{academicPrograms.length}+
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Main Content */}
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
					{/* Search and Filters - Mobile-optimized */}
					<div className='bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-12'>
						<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
							<div>
								<h3 className='text-xl font-semibold text-slate-800 mb-2'>
									Find Your Program
								</h3>
								<p className='text-slate-600'>
									Filter and search through our academic offerings
								</p>
							</div>

							{/* Mobile filters toggle button */}
							{isMobile && (
								<button
									onClick={toggleMobileFilters}
									className='mt-4 flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors'>
									<Filter className='w-4 h-4 mr-2' />
									<span>Filters</span>
									{mobileFiltersOpen ? (
										<X className='ml-2 w-4 h-4' />
									) : (
										<ArrowRight className='ml-2 w-4 h-4' />
									)}
								</button>
							)}
						</div>

						{/* Desktop filters or Mobile filters when open */}
						{(!isMobile || (isMobile && mobileFiltersOpen)) && (
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='search'
										className='block text-sm font-medium text-slate-700 mb-2'>
										Search Programs
									</label>
									<div className='relative'>
										<input
											id='search'
											type='text'
											placeholder='What interests you?'
											className='w-full p-3 pl-10 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-800 placeholder-gray-500'
											value={searchQuery}
											onChange={(e) => setSearchQuery(e.target.value)}
										/>
										<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
											<Search className='h-5 w-5 text-gray-500' />
										</div>
									</div>
								</div>

								<div>
									<label
										htmlFor='department'
										className='block text-sm font-medium text-slate-700 mb-2'>
										Filter by Department
									</label>
									<div className='relative'>
										<select
											id='department'
											className='w-full p-3 pl-10 border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-800 pr-10'
											value={departmentFilter}
											onChange={(e) => setDepartmentFilter(e.target.value)}>
											{departments.map((dept) => (
												<option
													key={dept}
													value={dept}
													className='text-gray-800'>
													{dept}
												</option>
											))}
										</select>
										<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
											<Filter className='h-5 w-5 text-gray-500' />
										</div>
										<div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
											<svg
												className='h-5 w-5 text-gray-500'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'
												fill='currentColor'>
												<path
													fillRule='evenodd'
													d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
													clipRule='evenodd'
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Featured Programs Section - Responsive grid */}
					<div id='featured-programs' className='mb-12 scroll-mt-24'>
						<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
							<div>
								<div className='flex items-center mb-2'>
									<Award className='w-5 h-5 text-blue-600 mr-2' />
									<h3 className='text-2xl font-semibold text-slate-800'>
										Featured Programs
									</h3>
								</div>
								<p className='text-slate-600'>
									Our most popular and distinguished programs, recognized for
									excellence and career outcomes
								</p>
							</div>
							<Link
								href='#'
								className='flex items-center text-blue-600 hover:text-blue-700 transition group mt-4 md:mt-0'>
								<span className='mr-2'>View All Programs</span>
								<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
							</Link>
						</div>

						<div
							className={`grid grid-cols-1 ${
								isMobile ? '' : 'md:grid-cols-3'
							} gap-6`}>
							{filteredPrograms.slice(0, isMobile ? 2 : 3).map((program) => (
								<div
									key={`featured-${program.id}`}
									className='bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group'>
									<div className='h-48 sm:h-56 overflow-hidden relative'>
										<Image
											src={program.image || '/api/placeholder/400/320'}
											alt={program.title}
											fill
											className='object-cover group-hover:scale-105 transition-transform duration-500'
											sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent'></div>
										<div className='absolute top-4 left-4 flex flex-wrap gap-2'>
											{program.level.map((level, index) => (
												<div
													key={index}
													className='bg-white/90 backdrop-blur-sm text-blue-700 text-xs px-3 py-1 rounded-full flex items-center font-medium'>
													<BookOpen className='w-3 h-3 mr-1' />
													{level}
												</div>
											))}
										</div>
										<div className='absolute top-4 right-4'>
											<div className='bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center font-medium'>
												<Award className='w-3 h-3 mr-1' />
												Featured
											</div>
										</div>
									</div>
									<div className='p-6'>
										<div className='flex items-center mb-3'>
											<div className='bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full'>
												{program.department}
											</div>
										</div>
										<h4 className='text-xl font-bold mb-3 text-slate-800'>
											{program.title}
										</h4>
										<p className='text-slate-600 mb-6'>
											{isMobile
												? `${program.description.substring(0, 100)}...`
												: program.description}
										</p>
										<Link
											href={`/courses/${program.id}`}
											className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group'>
											<span>Explore program</span>
											<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* All Programs Display - Responsive grid */}
					<div className='mb-12'>
						<div className='flex items-center mb-6'>
							<GraduationCap className='w-5 h-5 text-blue-600 mr-2' />
							<h3 className='text-2xl font-semibold text-slate-800'>
								All Programs
							</h3>
						</div>

						<div
							className={`grid grid-cols-1 ${
								isMobile ? 'sm:grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'
							} gap-6`}>
							{filteredPrograms.map((program) => (
								<div
									key={program.id}
									className='bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group'>
									<div className='h-48 sm:h-56 overflow-hidden relative'>
										<Image
											src={program.image || '/api/placeholder/400/320'}
											alt={program.title}
											fill
											className='object-cover group-hover:scale-105 transition-transform duration-500'
											sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent'></div>
										<div className='absolute top-4 left-4 flex flex-wrap gap-2'>
											{program.level.map((level, index) => (
												<div
													key={index}
													className='bg-white/90 backdrop-blur-sm text-blue-700 text-xs px-3 py-1 rounded-full flex items-center font-medium'>
													<GraduationCap className='w-3 h-3 mr-1' />
													{level}
												</div>
											))}
										</div>
									</div>
									<div className='p-6'>
										<div className='flex items-center mb-3'>
											<div className='bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full'>
												{program.department}
											</div>
										</div>
										<h4 className='text-xl font-bold mb-3 text-slate-800'>
											{program.title}
										</h4>
										<p className='text-slate-600 mb-6'>
											{isMobile
												? `${program.description.substring(0, 80)}...`
												: program.description}
										</p>
										<Link
											href={`/courses/${program.id}`}
											className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group'>
											<span>Learn more</span>
											<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
										</Link>
									</div>
								</div>
							))}
						</div>

						{filteredPrograms.length === 0 && (
							<div className='text-center py-12 bg-white rounded-xl shadow-sm border border-slate-100'>
								<div className='flex justify-center mb-4'>
									<div className='bg-blue-50 p-3 rounded-full'>
										<Lightbulb className='h-8 w-8 text-blue-600' />
									</div>
								</div>
								<h3 className='text-xl font-medium text-slate-800 mb-2'>
									No programs match your search criteria
								</h3>
								<p className='text-slate-600 mb-6'>
									Try adjusting your filters or search term
								</p>
								<button
									onClick={() => {
										setSearchQuery('');
										setDepartmentFilter('All Departments');
									}}
									className='px-6 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors'>
									Reset Filters
								</button>
							</div>
						)}
					</div>

					{/* CTA Section - Responsive layout */}
					<div className='bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden'>
						<div
							className={`grid grid-cols-1 ${
								isMobile ? '' : 'md:grid-cols-2'
							}`}>
							<div className='p-8 md:p-12 flex flex-col justify-center'>
								<h3
									className={`${
										isMobile ? 'text-2xl' : 'text-2xl md:text-3xl'
									} font-semibold text-slate-800 mb-4`}>
									Need Academic Guidance?
								</h3>
								<p className='text-slate-600 text-lg mb-6'>
									Schedule a meeting with our academic advisors to discuss
									program options and create your educational pathway.
								</p>
								<div>
									<button className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center'>
										<span className='font-medium'>
											Schedule an Advising Session
										</span>
										<ArrowRight className='ml-2 w-5 h-5' />
									</button>
								</div>
							</div>
							{!isMobile && (
								<div className='relative'>
									<div className='aspect-video md:h-full w-full overflow-hidden'>
										<Image
											src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8342.jpg'
											alt='Career Institute Academic Advising'
											className='object-cover h-full w-full'
											width={800}
											height={450}
											priority
										/>
										<div className='absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent'></div>
										<div className='absolute inset-0 flex items-center justify-center'>
											<div className='w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-white transition-colors'>
												<Play className='w-6 h-6 text-blue-600 ml-1' />
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
