// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import {
// 	ArrowRight,
// 	Calendar,
// 	Award,
// 	BookOpen,
// 	Globe,
// 	GraduationCap,
// 	ArrowUp,
// } from 'lucide-react';
// import Link from 'next/link';
// import { supabase } from '@/lib/supabase/client';

// interface AcademicProgram {
// 	id: number;
// 	title: string;
// 	description: string;
// 	image: string;
// 	duration: string;
// 	program_type: string;
// 	created_at: string;
// 	department: string;
// 	// Add other fields as needed
// }

// function CoursesSection() {
// 	// State for storing course data
// 	const [academicPrograms, setAcademicPrograms] = useState<AcademicProgram[]>(
// 		[]
// 	);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<string | null>(null);
// 	const [isMobile, setIsMobile] = useState(false);

// 	// Fetch academic programs
// 	useEffect(() => {
// 		const fetchPrograms = async () => {
// 			try {
// 				const { data, error } = await supabase
// 					.from('academic_programs')
// 					.select('*')
// 					.order('created_at', { ascending: false });

// 				if (error) throw error;

// 				setAcademicPrograms(data || []);
// 			} catch (err) {
// 				setError('Failed to load academic programs. Please try again later.');
// 				console.error('Fetch error:', err);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchPrograms();

// 		// Set up real-time updates (optional)
// 		const subscription = supabase
// 			.channel('academic-programs-changes')
// 			.on(
// 				'postgres_changes',
// 				{
// 					event: '*',
// 					schema: 'public',
// 					table: 'academic_programs',
// 				},
// 				fetchPrograms
// 			)
// 			.subscribe();

// 		return () => {
// 			subscription.unsubscribe();
// 		};
// 	}, []);

// 	// Handle resize for mobile detection
// 	useEffect(() => {
// 		const handleResize = () => {
// 			setIsMobile(window.innerWidth < 768);
// 		};

// 		// Initialize mobile state
// 		handleResize();

// 		window.addEventListener('resize', handleResize);
// 		return () => window.removeEventListener('resize', handleResize);
// 	}, []);

// 	// Filter programs by department
// 	const standardCourses = academicPrograms
// 		.filter(
// 			(program) =>
// 				program.department === 'IATA & FIATA' ||
// 				program.program_type === 'standard'
// 		)
// 		.slice(0, 3);

// 	const advancedCourses = academicPrograms
// 		.filter(
// 			(program) =>
// 				program.department === 'Advanced Certification' ||
// 				program.program_type === 'advanced'
// 		)
// 		.slice(0, 3);

// 	// Loading state
// 	if (loading) {
// 		return (
// 			<div className='flex justify-center items-center min-h-screen'>
// 				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
// 			</div>
// 		);
// 	}

// 	// Error state
// 	if (error) {
// 		return (
// 			<div className='text-center py-12'>
// 				<div className='text-red-500 mb-4'>{error}</div>
// 				<button
// 					onClick={() => window.location.reload()}
// 					className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
// 					Retry
// 				</button>
// 			</div>
// 		);
// 	}

// 	return (
// 		// Programs Section with Light Theme
// 		<div className='relative z-20 bg-gradient-to-b from-white to-blue-50 text-gray-800'>
// 			{/* New Header Section */}
// 			<div className='bg-blue-900 text-white py-16 md:py-20'>
// 				<div className='container mx-auto px-4 sm:px-6'>
// 					<div className='flex flex-col lg:flex-row gap-10 items-center'>
// 						<div className='flex-1'>
// 							<div className='flex items-center mb-4'>
// 								<GraduationCap className='w-8 h-8 mr-3 text-blue-300' />
// 								<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
// 									Professional Training Programs
// 								</h2>
// 							</div>
// 							<p className='text-lg md:text-xl text-blue-100 mb-6 max-w-2xl'>
// 								Expand your career horizons with industry-recognized
// 								certifications and training programs designed for aviation and
// 								tourism professionals.
// 							</p>
// 							<div className='flex flex-wrap gap-4'>
// 								<button className='px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors flex items-center group font-medium'>
// 									<span>Request Program Catalog</span>
// 									<ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
// 								</button>
// 								<button className='px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center group font-medium'>
// 									<span>Schedule Consultation</span>
// 									<ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
// 								</button>
// 							</div>
// 						</div>

// 						<div className='relative w-full lg:w-1/3 h-64 md:h-80'>
// 							<div className='absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20'></div>
// 							<div className='absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400 rounded-full opacity-20'></div>
// 							<div className='relative h-full w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white'>
// 								<iframe
// 									src='https://www.youtube.com/embed/qD6UTehdoLg?'
// 									className='absolute top-0 left-0 h-full w-full'
// 									title='YouTube video player'
// 									frameBorder='0'
// 									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
// 									allowFullScreen></iframe>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Stats/Benefits Bar */}
// 					<div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-t border-blue-800'>
// 						<div className='flex items-start'>
// 							<Globe className='w-10 h-10 p-2 bg-blue-800 rounded-lg text-blue-300 mr-4' />
// 							<div>
// 								<h4 className='font-bold text-xl'>IATA Certified</h4>
// 								<p className='text-blue-200'>
// 									Internationally recognized credentials
// 								</p>
// 							</div>
// 						</div>
// 						<div className='flex items-start'>
// 							<Award className='w-10 h-10 p-2 bg-blue-800 rounded-lg text-blue-300 mr-4' />
// 							<div>
// 								<h4 className='font-bold text-xl'>Industry Experts</h4>
// 								<p className='text-blue-200'>
// 									Learn from experienced professionals
// 								</p>
// 							</div>
// 						</div>
// 						<div className='flex items-start'>
// 							<BookOpen className='w-10 h-10 p-2 bg-blue-800 rounded-lg text-blue-300 mr-4' />
// 							<div>
// 								<h4 className='font-bold text-xl'>9+ Programs</h4>
// 								<p className='text-blue-200'>Specialized training options</p>
// 							</div>
// 						</div>
// 						<div className='flex items-start'>
// 							<Calendar className='w-10 h-10 p-2 bg-blue-800 rounded-lg text-blue-300 mr-4' />
// 							<div>
// 								<h4 className='font-bold text-xl'>Flexible Schedule</h4>
// 								<p className='text-blue-200'>Full-time and part-time options</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24'>
// 				{/* Section header with View All link */}
// 				<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
// 					<div>
// 						<h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6'>
// 							<span className='border-b-2 border-blue-500 pb-1'>
// 								IATA & FIATA
// 							</span>{' '}
// 							AUTHORISED TRAINING CENTRE
// 						</h3>
// 						<p className='text-base sm:text-lg text-gray-600 max-w-2xl'>
// 							Explore our comprehensive training programs designed for
// 							professionals in travel, tourism, and air cargo handling.
// 						</p>
// 					</div>
// 					<Link
// 						href='/courses'
// 						className='flex items-center text-blue-600 hover:text-blue-700 transition group mt-4 md:mt-0'>
// 						<span className='mr-2'>View All Programs</span>
// 						<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
// 					</Link>
// 				</div>

// 				{/* Course Cards Grid */}
// 				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0'>
// 					{standardCourses.map((course, index) => (
// 						<div
// 							key={index}
// 							className='bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100'>
// 							<div className='relative h-48 overflow-hidden'>
// 								<Image
// 									src={course.image}
// 									alt={course.title}
// 									fill
// 									className='object-cover transform hover:scale-105 transition-transform duration-300'
// 								/>
// 								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
// 								<div className='absolute bottom-0 left-0 right-0 p-4'>
// 									<h3 className='text-lg font-semibold text-white'>
// 										{course.title}
// 									</h3>
// 								</div>
// 							</div>
// 							<div className='p-4'>
// 								<p className='text-gray-600 text-sm line-clamp-2 mb-4'>
// 									{course.description}
// 								</p>
// 								<Link
// 									href={`/courses/${course.id}`}
// 									className='inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors'>
// 									Learn more
// 									<ArrowRight size={16} className='ml-1' />
// 								</Link>
// 							</div>
// 						</div>
// 					))}
// 				</div>

// 				{/* Advanced Certification Section with enhanced design */}
// 				<div className='py-8 sm:py-12 md:py-16 border-t border-gray-200'>
// 					{/* Section header with View All link */}
// 					<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
// 						<div>
// 							<div className='flex items-center mb-4'>
// 								<Award className='w-6 h-6 text-blue-600 mr-2' />
// 								<h3 className='text-xl sm:text-2xl md:text-3xl font-bold'>
// 									<span className='border-b-2 border-blue-500 pb-1'>
// 										Advanced
// 									</span>{' '}
// 									Certification Programs
// 								</h3>
// 							</div>
// 							<p className='text-base sm:text-lg text-gray-600 max-w-2xl'>
// 								Enhance your professional credentials with our specialized
// 								advanced courses designed for industry professionals.
// 							</p>
// 						</div>
// 						<Link
// 							href='/courses/advanced'
// 							className='flex items-center text-blue-600 hover:text-blue-700 transition group mt-4 md:mt-0'>
// 							<span className='mr-2'>View All Certifications</span>
// 							<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
// 						</Link>
// 					</div>

// 					{/* Advanced Certification Cards - from database */}
// 					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
// 						{advancedCourses.length > 0 ? (
// 							advancedCourses.map((course) => (
// 								<div
// 									key={course.id}
// 									className='bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md border border-gray-100'>
// 									<div className='h-48 sm:h-56 overflow-hidden relative'>
// 										<Image
// 											src={course.image || '/api/placeholder/400/320'}
// 											alt={course.title}
// 											fill
// 											className='object-cover group-hover:scale-105 transition-transform duration-500'
// 											sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
// 										/>
// 										<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
// 										<div className='absolute top-4 left-4 flex gap-2'>
// 											<div className='bg-white text-blue-700 text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
// 												<BookOpen className='w-3 h-3 mr-1' />
// 												{course.duration || '6 Month Program'}
// 											</div>
// 											<div className='bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
// 												<Award className='w-3 h-3 mr-1' />
// 												Advanced
// 											</div>
// 										</div>
// 									</div>
// 									<div className='p-6'>
// 										<h4 className='text-xl font-bold mb-3 text-blue-900'>
// 											{course.title}
// 										</h4>
// 										<p className='text-gray-600'>{course.description}</p>
// 										<a
// 											href={`/courses/${course.id}`}
// 											className='mt-6 px-6 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center group'>
// 											<span>Explore program </span>
// 											<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
// 										</a>
// 									</div>
// 								</div>
// 							))
// 						) : (
// 							<div className='col-span-3 text-center py-12'>
// 								<p className='text-gray-500'>
// 									No advanced courses available at the moment.
// 								</p>
// 							</div>
// 						)}
// 					</div>
// 				</div>

// 				{/* Academic Programs Section - Added new section */}
// 				{academicPrograms.length > 0 && (
// 					<div className='py-8 sm:py-12 md:py-16 border-t border-gray-200'>
// 						{/* Section header with View All link */}
// 						<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
// 							<div>
// 								<div className='flex items-center mb-4'>
// 									<GraduationCap className='w-6 h-6 text-blue-600 mr-2' />
// 									<h3 className='text-xl sm:text-2xl md:text-3xl font-bold'>
// 										<span className='border-b-2 border-blue-500 pb-1'>
// 											Academic
// 										</span>{' '}
// 										Programs
// 									</h3>
// 								</div>
// 								<p className='text-base sm:text-lg text-gray-600 max-w-2xl'>
// 									Discover our comprehensive academic programs designed for
// 									career advancement and professional development.
// 								</p>
// 							</div>
// 							<Link
// 								href='/academic-programs'
// 								className='flex items-center text-blue-600 hover:text-blue-700 transition group mt-4 md:mt-0'>
// 								<span className='mr-2'>View All Academic Programs</span>
// 								<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
// 							</Link>
// 						</div>

// 						{/* Academic Programs Cards */}
// 						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
// 							{academicPrograms.slice(0, 3).map((program) => (
// 								<div
// 									key={program.id}
// 									className='bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md border border-gray-100'>
// 									<div className='h-48 sm:h-56 overflow-hidden relative'>
// 										<Image
// 											src={program.image || '/api/placeholder/400/320'}
// 											alt={program.title}
// 											fill
// 											className='object-cover group-hover:scale-105 transition-transform duration-500'
// 											sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
// 										/>
// 										<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
// 										<div className='absolute top-4 left-4 flex gap-2'>
// 											<div className='bg-white text-blue-700 text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
// 												<Calendar className='w-3 h-3 mr-1' />
// 												{program.duration || '1 Year Program'}
// 											</div>
// 											<div className='bg-indigo-600 text-white text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
// 												<GraduationCap className='w-3 h-3 mr-1' />
// 												Academic
// 											</div>
// 										</div>
// 									</div>
// 									<div className='p-6'>
// 										<h4 className='text-xl font-bold mb-3 text-blue-900'>
// 											{program.title}
// 										</h4>
// 										<p className='text-gray-600'>{program.description}</p>
// 										<a
// 											href={`/courses/${program.id}`}
// 											className='mt-6 px-6 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center group'>
// 											<span>Program details</span>
// 											<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
// 										</a>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				)}

// 				{/* Mobile Floating Action Button */}
// 				{isMobile && (
// 					<div className='fixed bottom-6 right-6 z-50 md:hidden'>
// 						<button
// 							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// 							className='bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'>
// 							<ArrowUp size={24} />
// 						</button>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default CoursesSection;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
	ArrowRight,
	Calendar,
	Award,
	BookOpen,
	Globe,
	GraduationCap,
	ArrowUp,
} from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';

interface AcademicProgram {
	id: number;
	title: string;
	description: string;
	image: string;
	duration: string;
	program_type: string;
	created_at: string;
	department: string;
	// Add other fields as needed
}

function CoursesSection() {
	// State for storing course data
	const [academicPrograms, setAcademicPrograms] = useState<AcademicProgram[]>(
		[]
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [isMobile, setIsMobile] = useState(false);
	// Helper function to handle different image path formats
	const handleImagePath = (imagePath: string): string => {
		if (!imagePath) return '/api/placeholder/400/320';

		// Remove any quotes that might be in the database value
		imagePath = imagePath.replace(/['"]+/g, '');

		// Handle truncated URLs (ending with ...) or invalid characters
		if (imagePath.includes('â€¦') || imagePath.includes('...')) {
			return '/api/placeholder/400/320'; // Use placeholder for broken URLs
		}

		// If it's a full URL, return it directly
		if (imagePath.startsWith('http')) {
			return imagePath;
		}

		// For relative paths, keep as is (Next.js will resolve from public directory)
		return imagePath;
	};

	// Fetch academic programs
	useEffect(() => {
		const fetchPrograms = async () => {
			try {
				const { data, error } = await supabase
					.from('academic_programs')
					.select('*')
					.order('created_at', { ascending: false });

				if (error) throw error;

				// Log the data to inspect image paths
				console.log('Database response:', data);

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

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	// Handle resize for mobile detection
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initialize mobile state
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Filter programs by department
	const standardCourses = academicPrograms
		.filter(
			(program) =>
				program.department === 'IATA & FIATA' ||
				program.program_type === 'standard'
		)
		.slice(0, 3);

	const advancedCourses = academicPrograms
		.filter(
			(program) =>
				program.department === 'Advanced Certification' ||
				program.program_type === 'advanced'
		)
		.slice(0, 3);

	// Loading state
	if (loading) {
		return (
			<div className='flex justify-center items-center min-h-screen'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
			</div>
		);
	}

	// Error state
	if (error) {
		return (
			<div className='text-center py-12'>
				<div className='text-red-500 mb-4'>{error}</div>
				<button
					onClick={() => window.location.reload()}
					className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
					Retry
				</button>
			</div>
		);
	}

	return (
		// Programs Section with Light Theme
		<div className='relative z-20 bg-gradient-to-b from-white to-blue-50 text-gray-800'>
			{/* New Header Section */}
			<div className='bg-blue-900 text-white py-16 md:py-20'>
				<div className='container mx-auto px-4 sm:px-6'>
					<div className='flex flex-col lg:flex-row gap-10 items-center'>
						<div className='flex-1'>
							<div className='flex items-center mb-4'>
								<GraduationCap className='w-8 h-8 mr-3 text-blue-300' />
								<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
									Professional Training Programs
								</h2>
							</div>
							<p className='text-lg md:text-xl text-blue-100 mb-6 max-w-2xl'>
								Expand your career horizons with industry-recognized
								certifications and training programs designed for aviation and
								tourism professionals.
							</p>
							<div className='flex flex-wrap gap-4'>
								<button className='px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors flex items-center group font-medium'>
									<span>Request Program Catalog</span>
									<ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
								</button>
								<button className='px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center group font-medium'>
									<span>Schedule Consultation</span>
									<ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
								</button>
							</div>
						</div>

						<div className='relative w-full lg:w-1/3 h-64 md:h-80'>
							<div className='absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20'></div>
							<div className='absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400 rounded-full opacity-20'></div>
							<div className='relative h-full w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white'>
								<iframe
									src='https://www.youtube.com/embed/qD6UTehdoLg?'
									className='absolute top-0 left-0 h-full w-full'
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen></iframe>
							</div>
						</div>
					</div>

					{/* Stats/Benefits Bar */}
					<div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-t border-blue-800'>
						<div className='flex items-start'>
							<Globe className='w-10 h-10 p-2 bg-blue-800 rounded-lg text-blue-300 mr-4' />
							<div>
								<h4 className='font-bold text-xl'>IATA Certified</h4>
								<p className='text-blue-200'>
									Internationally recognized credentials
								</p>
							</div>
						</div>
						<div className='flex items-start'>
							<Award className='w-10 h-10 p-2 bg-blue-800 rounded-lg text-blue-300 mr-4' />
							<div>
								<h4 className='font-bold text-xl'>Industry Experts</h4>
								<p className='text-blue-200'>
									Learn from experienced professionals
								</p>
							</div>
						</div>
						<div className='flex items-start'>
							<BookOpen className='w-10 h-10 p-2 bg-blue-800 rounded-lg text-blue-300 mr-4' />
							<div>
								<h4 className='font-bold text-xl'>9+ Programs</h4>
								<p className='text-blue-200'>Specialized training options</p>
							</div>
						</div>
						<div className='flex items-start'>
							<Calendar className='w-10 h-10 p-2 bg-blue-800 rounded-lg text-blue-300 mr-4' />
							<div>
								<h4 className='font-bold text-xl'>Flexible Schedule</h4>
								<p className='text-blue-200'>Full-time and part-time options</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24'>
				{/* Section header with View All link */}
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
					<div>
						<h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6'>
							<span className='border-b-2 border-blue-500 pb-1'>
								IATA & FIATA
							</span>{' '}
							AUTHORISED TRAINING CENTRE
						</h3>
						<p className='text-base sm:text-lg text-gray-600 max-w-2xl'>
							Explore our comprehensive training programs designed for
							professionals in travel, tourism, and air cargo handling.
						</p>
					</div>
					<Link
						href='/courses'
						className='flex items-center text-blue-600 hover:text-blue-700 transition group mt-4 md:mt-0'>
						<span className='mr-2'>View All Programs</span>
						<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
					</Link>
				</div>

				{/* Course Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0'>
					{standardCourses.map((course, index) => (
						<div
							key={index}
							className='bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100'>
							<div className='relative h-48 overflow-hidden'>
								<Image
									src={handleImagePath(course.image)}
									alt={course.title}
									fill
									className='object-cover transform hover:scale-105 transition-transform duration-300'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
								<div className='absolute bottom-0 left-0 right-0 p-4'>
									<h3 className='text-lg font-semibold text-white'>
										{course.title}
									</h3>
								</div>
							</div>
							<div className='p-4'>
								<p className='text-gray-600 text-sm line-clamp-2 mb-4'>
									{course.description}
								</p>
								<Link
									href={`/courses/${course.id}`}
									className='inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors'>
									Learn more
									<ArrowRight size={16} className='ml-1' />
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Advanced Certification Section with enhanced design */}
				<div className='py-8 sm:py-12 md:py-16 border-t border-gray-200'>
					{/* Section header with View All link */}
					<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
						<div>
							<div className='flex items-center mb-4'>
								<Award className='w-6 h-6 text-blue-600 mr-2' />
								<h3 className='text-xl sm:text-2xl md:text-3xl font-bold'>
									<span className='border-b-2 border-blue-500 pb-1'>
										Advanced
									</span>{' '}
									Certification Programs
								</h3>
							</div>
							<p className='text-base sm:text-lg text-gray-600 max-w-2xl'>
								Enhance your professional credentials with our specialized
								advanced courses designed for industry professionals.
							</p>
						</div>
						<Link
							href='/courses/advanced'
							className='flex items-center text-blue-600 hover:text-blue-700 transition group mt-4 md:mt-0'>
							<span className='mr-2'>View All Certifications</span>
							<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
						</Link>
					</div>

					{/* Advanced Certification Cards - from database */}
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
						{advancedCourses.length > 0 ? (
							advancedCourses.map((course) => (
								<div
									key={course.id}
									className='bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md border border-gray-100'>
									<div className='h-48 sm:h-56 overflow-hidden relative'>
										<Image
											src={handleImagePath(course.image)}
											alt={course.title}
											fill
											className='object-cover group-hover:scale-105 transition-transform duration-500'
											sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
										<div className='absolute top-4 left-4 flex gap-2'>
											<div className='bg-white text-blue-700 text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
												<BookOpen className='w-3 h-3 mr-1' />
												{course.duration || '6 Month Program'}
											</div>
											<div className='bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
												<Award className='w-3 h-3 mr-1' />
												Advanced
											</div>
										</div>
									</div>
									<div className='p-6'>
										<h4 className='text-xl font-bold mb-3 text-blue-900'>
											{course.title}
										</h4>
										<p className='text-gray-600'>{course.description}</p>
										<a
											href={`/courses/${course.id}`}
											className='mt-6 px-6 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center group'>
											<span>Explore program </span>
											<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
										</a>
									</div>
								</div>
							))
						) : (
							<div className='col-span-3 text-center py-12'>
								<p className='text-gray-500'>
									No advanced courses available at the moment.
								</p>
							</div>
						)}
					</div>
				</div>

				{/* Academic Programs Section - Added new section */}
				{academicPrograms.length > 0 && (
					<div className='py-8 sm:py-12 md:py-16 border-t border-gray-200'>
						{/* Section header with View All link */}
						<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
							<div>
								<div className='flex items-center mb-4'>
									<GraduationCap className='w-6 h-6 text-blue-600 mr-2' />
									<h3 className='text-xl sm:text-2xl md:text-3xl font-bold'>
										<span className='border-b-2 border-blue-500 pb-1'>
											Academic
										</span>{' '}
										Programs
									</h3>
								</div>
								<p className='text-base sm:text-lg text-gray-600 max-w-2xl'>
									Discover our comprehensive academic programs designed for
									career advancement and professional development.
								</p>
							</div>
							<Link
								href='/academic-programs'
								className='flex items-center text-blue-600 hover:text-blue-700 transition group mt-4 md:mt-0'>
								<span className='mr-2'>View All Academic Programs</span>
								<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
							</Link>
						</div>

						{/* Academic Programs Cards */}
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
							{academicPrograms.slice(0, 3).map((program) => (
								<div
									key={program.id}
									className='bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group shadow-md border border-gray-100'>
									<div className='h-48 sm:h-56 overflow-hidden relative'>
										<Image
											src={handleImagePath(program.image)}
											alt={program.title}
											fill
											className='object-cover group-hover:scale-105 transition-transform duration-500'
											sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
										<div className='absolute top-4 left-4 flex gap-2'>
											<div className='bg-white text-blue-700 text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
												<Calendar className='w-3 h-3 mr-1' />
												{program.duration || '1 Year Program'}
											</div>
											<div className='bg-indigo-600 text-white text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
												<GraduationCap className='w-3 h-3 mr-1' />
												Academic
											</div>
										</div>
									</div>
									<div className='p-6'>
										<h4 className='text-xl font-bold mb-3 text-blue-900'>
											{program.title}
										</h4>
										<p className='text-gray-600'>{program.description}</p>
										<a
											href={`/courses/${program.id}`}
											className='mt-6 px-6 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors flex items-center group'>
											<span>Program details</span>
											<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Mobile Floating Action Button */}
				{isMobile && (
					<div className='fixed bottom-6 right-6 z-50 md:hidden'>
						<button
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							className='bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'>
							<ArrowUp size={24} />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default CoursesSection;
