// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import {
// 	ArrowRight,
// 	Calendar,
// 	Clock,
// 	Users,
// 	BookOpen,
// 	GraduationCap,
// 	Building,
// 	CheckCircle2,
// 	FileText,
// 	User,
// 	Star,
// } from 'lucide-react';
// import { supabase } from '@/lib/supabase/client';

// interface Module {
// 	year: number;
// 	modules: string[];
// }

// interface Instructor {
// 	name: string;
// 	role: string;
// 	image: string;
// }

// interface Review {
// 	name: string;
// 	rating: number;
// 	comment: string;
// }

// interface CourseDetails {
// 	id: number;
// 	programs_id: number;
// 	duration: string;
// 	start_dates: string[];
// 	study_mode: string;
// 	department: string;
// 	credits: number;
// 	tuition: string;
// 	overview: string;
// 	highlights: string[];
// 	outcomes: string[];
// 	modules: Module[];
// 	instructors: Instructor[];
// 	reviews: Review[];
// 	video_link: string;
// }

// interface AcademicProgram {
// 	id: number;
// 	title: string;
// 	level: string[];
// 	image: string;
// 	description: string;
// 	department: string;
// 	course_details: CourseDetails[];
// }

// export default function CourseDetail() {
// 	const [activeTab, setActiveTab] = useState('overview');
// 	const [course, setCourse] = useState<AcademicProgram | null>(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<string | null>(null);
// 	const [relatedPrograms, setRelatedPrograms] = useState<AcademicProgram[]>([]);

// 	// Get the path and extract the ID manually
// 	const pathname = usePathname();
// 	const courseId = pathname.split('/').pop();

// 	useEffect(() => {
// 		const fetchCourseDetails = async () => {
// 			// Check if ID exists and is valid
// 			if (!courseId) {
// 				console.error('No course ID available in pathname:', pathname);
// 				setError('Course ID is missing');
// 				setLoading(false);
// 				return;
// 			}

// 			console.log('Fetching course details for ID:', courseId);

// 			try {
// 				setLoading(true);
// 				setError(null);

// 				// First verify Supabase client
// 				if (!supabase) {
// 					throw new Error('Supabase client not initialized');
// 				}

// 				// Make sure to parse the ID as a number if your database expects it
// 				const parsedId = parseInt(courseId, 10);

// 				// Check if parsing was successful
// 				if (isNaN(parsedId)) {
// 					throw new Error('Invalid course ID format');
// 				}

// 				// Fetch with error debugging
// 				const { data, error: sbError } = await supabase
// 					.from('academic_programs')
// 					.select(
// 						`
//             *,
//             course_details (
//               *
//             )
//           `
// 					)
// 					.eq('id', parsedId)
// 					.single();

// 				console.log('Supabase response:', { data, error: sbError });

// 				if (sbError) throw sbError;
// 				if (!data) throw new Error('Course not found');

// 				setCourse(data);

// 				// Fetch related programs from the same department
// 				const { data: relatedData, error: relatedError } = await supabase
// 					.from('academic_programs')
// 					.select('*')
// 					.eq('department', data.department)
// 					.neq('id', parsedId)
// 					.limit(3);

// 				if (relatedError) throw relatedError;
// 				setRelatedPrograms(relatedData || []);
// 			} catch (err) {
// 				console.error('Fetch error:', err);
// 				setError(err instanceof Error ? err.message : 'Failed to load course');
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		if (courseId) {
// 			fetchCourseDetails();
// 		}
// 	}, [courseId, pathname]);

// 	const handleTabChange = (tab: string) => {
// 		setActiveTab(tab);
// 	};

// 	if (loading) {
// 		return (
// 			<div className='flex justify-center items-center min-h-screen'>
// 				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
// 			</div>
// 		);
// 	}

// 	if (error || !course) {
// 		return (
// 			<div className='text-center py-12'>
// 				<div className='text-red-500 mb-4'>{error}</div>
// 				<button
// 					onClick={() => window.location.reload()}
// 					className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
// 					Try Again
// 				</button>
// 				<Link
// 					href='/courses'
// 					className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'>
// 					Back to Courses
// 				</Link>
// 			</div>
// 		);
// 	}

// 	// Extract the first item from course_details array
// 	const courseDetails: CourseDetails =
// 		course.course_details && course.course_details.length > 0
// 			? course.course_details[0]
// 			: {
// 					id: 0,
// 					programs_id: 0,
// 					duration: '',
// 					start_dates: [],
// 					study_mode: '',
// 					department: '',
// 					credits: 0,
// 					tuition: '',
// 					overview: '',
// 					highlights: [],
// 					outcomes: [],
// 					modules: [],
// 					instructors: [],
// 					reviews: [],
// 					video_link: '',
// 			  };

// 	const averageRating =
// 		courseDetails.reviews && courseDetails.reviews.length > 0
// 			? courseDetails.reviews.reduce((acc, review) => acc + review.rating, 0) /
// 			  courseDetails.reviews.length
// 			: 0;

// 	return (
// 		<main className='min-h-screen pt-20'>
// 			{/* Hero Section with Parallax Effect */}
// 			<div className='relative h-96 sm:h-[32rem] md:h-[36rem] flex'>
// 				<div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10' />
// 				<Image
// 					src={course.image || '/api/placeholder/1920/800'}
// 					alt={course.title}
// 					fill
// 					className='object-cover'
// 					priority
// 				/>
// 				<div className='relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center'>
// 					<div className='max-w-4xl'>
// 						<div className='flex flex-wrap gap-2 mb-4 sm:mb-6'>
// 							<div className='bg-white text-blue-700 text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
// 								<GraduationCap className='w-3 h-3 mr-1' />
// 								{Array.isArray(course.level)
// 									? course.level.join(', ')
// 									: course.level}
// 							</div>
// 							<div className='bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full flex items-center'>
// 								{course.department}
// 							</div>
// 						</div>
// 						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
// 							{course.title}
// 						</h1>
// 						<p className='text-lg sm:text-xl text-blue-50 max-w-3xl mb-6 sm:mb-8'>
// 							{course.description}
// 						</p>
// 						<div className='flex items-center mt-4 sm:mt-6 text-white'>
// 							<Link href='/' className='hover:underline'>
// 								Home
// 							</Link>
// 							<span className='mx-2'>›</span>
// 							<Link href='/courses' className='hover:underline'>
// 								Courses
// 							</Link>
// 							<span className='mx-2'>›</span>
// 							<span className='truncate max-w-[150px] sm:max-w-xs md:max-w-md'>
// 								{course.title}
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Key Information Panel */}
// 			<div className='bg-white shadow-md border-b border-gray-100'>
// 				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
// 					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
// 						<div className='flex items-center'>
// 							<Calendar className='w-6 h-6 text-blue-600 mr-3 flex-shrink-0' />
// 							<div className='min-w-0'>
// 								<h3 className='text-sm font-medium text-gray-500'>
// 									Start Dates
// 								</h3>
// 								<p className='text-gray-900 truncate'>
// 									{courseDetails.start_dates &&
// 									courseDetails.start_dates.length > 0
// 										? courseDetails.start_dates.join(', ')
// 										: 'Contact for dates'}
// 								</p>
// 							</div>
// 						</div>
// 						<div className='flex items-center'>
// 							<Clock className='w-6 h-6 text-blue-600 mr-3 flex-shrink-0' />
// 							<div className='min-w-0'>
// 								<h3 className='text-sm font-medium text-gray-500'>Duration</h3>
// 								<p className='text-gray-900 truncate'>
// 									{courseDetails.duration || 'N/A'}
// 								</p>
// 							</div>
// 						</div>
// 						<div className='flex items-center'>
// 							<Users className='w-6 h-6 text-blue-600 mr-3 flex-shrink-0' />
// 							<div className='min-w-0'>
// 								<h3 className='text-sm font-medium text-gray-500'>
// 									Study Mode
// 								</h3>
// 								<p className='text-gray-900 truncate'>
// 									{courseDetails.study_mode || 'N/A'}
// 								</p>
// 							</div>
// 						</div>
// 						<div className='flex items-center'>
// 							<Building className='w-6 h-6 text-blue-600 mr-3 flex-shrink-0' />
// 							<div className='min-w-0'>
// 								<h3 className='text-sm font-medium text-gray-500'>
// 									Department
// 								</h3>
// 								<p className='text-gray-900 truncate'>
// 									{courseDetails.department || course.department || 'N/A'}
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Main Content Area with Tabs */}
// 			<div className='bg-gray-50 py-8 sm:py-12 md:py-16'>
// 				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
// 					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
// 						{/* Main Content - Left Column (2/3 width on large screens) */}
// 						<div className='lg:col-span-2'>
// 							{/* Tab Navigation */}
// 							<div className='border-b border-gray-200 mb-6 sm:mb-8'>
// 								<nav className='flex overflow-x-auto pb-2 -mb-px'>
// 									{['overview', 'curriculum', 'faculty', 'reviews'].map(
// 										(tab) => (
// 											<button
// 												key={tab}
// 												onClick={() => handleTabChange(tab)}
// 												className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium whitespace-nowrap ${
// 													activeTab === tab
// 														? 'border-b-2 border-blue-600 text-blue-600'
// 														: 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
// 												}`}>
// 												{tab.charAt(0).toUpperCase() + tab.slice(1)}
// 											</button>
// 										)
// 									)}
// 								</nav>
// 							</div>

// 							{/* Tab Content */}
// 							<div className='space-y-6 sm:space-y-8'>
// 								{/* Overview Tab */}
// 								{activeTab === 'overview' && (
// 									<div>
// 										<h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
// 											Program Overview
// 										</h2>
// 										<div className='prose prose-blue max-w-none'>
// 											<p className='text-gray-700 mb-4 sm:mb-6'>
// 												{courseDetails.overview}
// 											</p>
// 										</div>

// 										{/* Program Video */}
// 										{/* Program Video */}
// 										<div className='mt-6 sm:mt-8 mb-8'>
// 											<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
// 												Program Video
// 											</h3>
// 											<div className='relative w-full rounded-xl overflow-hidden shadow-md aspect-video bg-gray-100'>
// 												{/* Video container with error handling */}
// 												<div className='absolute inset-0 flex items-center justify-center'>
// 													{courseDetails.video_link ? (
// 														<iframe
// 															src={
// 																courseDetails.video_link.includes(
// 																	'youtube.com/watch?v='
// 																)
// 																	? `https://www.youtube.com/embed/${
// 																			courseDetails.video_link
// 																				.split('v=')[1]
// 																				.split('&')[0]
// 																	  }?playsinline=1&rel=0`
// 																	: courseDetails.video_link.includes(
// 																			'youtu.be/'
// 																	  )
// 																	? `https://www.youtube.com/embed/${
// 																			courseDetails.video_link
// 																				.split('youtu.be/')[1]
// 																				.split('?')[0]
// 																	  }?playsinline=1&rel=0`
// 																	: courseDetails.video_link
// 															}
// 															title='Program Overview Video'
// 															frameBorder='0'
// 															allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
// 															allowFullScreen
// 															className='w-full h-full'
// 															loading='lazy'
// 															onError={(e) => {
// 																const target = e.target as HTMLIFrameElement;
// 																target.style.display = 'none';
// 																target.nextElementSibling?.classList.remove(
// 																	'hidden'
// 																);
// 															}}></iframe>
// 													) : (
// 														<div className='flex flex-col items-center justify-center text-gray-500 h-full'>
// 															<p>No video available for this program.</p>
// 														</div>
// 													)}
// 												</div>
// 												{/* Fallback message for video errors */}
// 												<div className='absolute inset-0 flex-col items-center justify-center bg-gray-200 text-gray-500 p-4 text-center hidden'>
// 													<p className='mb-4'>
// 														Unable to load the video. Please try one of the
// 														following options:
// 													</p>
// 													<div className='space-y-2'>
// 														{courseDetails.video_link && (
// 															<a
// 																href={courseDetails.video_link}
// 																target='_blank'
// 																rel='noopener noreferrer'
// 																className='text-blue-600 hover:text-blue-800 inline-flex items-center'>
// 																<span>Watch on YouTube</span>
// 																<ArrowRight className='ml-1 w-3 h-3' />
// 															</a>
// 														)}
// 														<button
// 															onClick={() => window.location.reload()}
// 															className='text-blue-600 hover:text-blue-800 inline-flex items-center'>
// 															<span>Try Again</span>
// 															<ArrowRight className='ml-1 w-3 h-3' />
// 														</button>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										{/* Program Highlights */}
// 										<div className='mt-6 sm:mt-8'>
// 											<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
// 												Program Highlights
// 											</h3>
// 											<ul className='space-y-2 sm:space-y-3'>
// 												{courseDetails.highlights.map((highlight, index) => (
// 													<li key={index} className='flex items-start'>
// 														<CheckCircle2 className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
// 														<span className='text-gray-700'>{highlight}</span>
// 													</li>
// 												))}
// 											</ul>
// 										</div>

// 										{/* Learning Outcomes */}
// 										<div className='mt-6 sm:mt-8'>
// 											<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
// 												Learning Outcomes
// 											</h3>
// 											<ul className='space-y-2 sm:space-y-3'>
// 												{courseDetails.outcomes.map((outcome, index) => (
// 													<li key={index} className='flex items-start'>
// 														<CheckCircle2 className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
// 														<span className='text-gray-700'>{outcome}</span>
// 													</li>
// 												))}
// 											</ul>
// 										</div>
// 									</div>
// 								)}

// 								{/* Curriculum Tab */}
// 								{activeTab === 'curriculum' && (
// 									<div>
// 										<h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
// 											Program Curriculum
// 										</h2>
// 										<div className='space-y-6 sm:space-y-8'>
// 											{courseDetails.modules.map((year, yearIndex) => (
// 												<div
// 													key={yearIndex}
// 													className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
// 													<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
// 														Year {year.year}
// 													</h3>
// 													<ul className='space-y-2 sm:space-y-3'>
// 														{year.modules.map((module, moduleIndex) => (
// 															<li
// 																key={moduleIndex}
// 																className='flex items-start'>
// 																<BookOpen className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
// 																<span className='text-gray-700'>{module}</span>
// 															</li>
// 														))}
// 													</ul>
// 												</div>
// 											))}
// 										</div>
// 									</div>
// 								)}

// 								{/* Faculty Tab */}
// 								{activeTab === 'faculty' && (
// 									<div>
// 										<h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
// 											Program Faculty
// 										</h2>
// 										<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
// 											{courseDetails.instructors?.map((instructor, index) => (
// 												<div
// 													key={index}
// 													className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
// 													<div className='flex items-start'>
// 														<div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden mr-4 sm:mr-6 flex-shrink-0'>
// 															<Image
// 																src={instructor.image}
// 																alt={instructor.name}
// 																width={80}
// 																height={80}
// 																className='w-full h-full object-cover'
// 																unoptimized
// 															/>
// 														</div>
// 														<div className='min-w-0 flex-1'>
// 															<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2'>
// 																{instructor.name}
// 															</h3>
// 															<p className='text-gray-600 mb-2 sm:mb-3'>
// 																{instructor.role}
// 															</p>
// 															<button className='text-sm text-blue-600 hover:text-blue-700 flex items-center'>
// 																<span>View profile</span>
// 																<ArrowRight className='ml-1 w-3 h-3' />
// 															</button>
// 														</div>
// 													</div>
// 												</div>
// 											))}
// 											{(!courseDetails.instructors ||
// 												courseDetails.instructors.length === 0) && (
// 												<p className='text-gray-700 col-span-2'>
// 													Faculty information not available.
// 												</p>
// 											)}
// 										</div>
// 									</div>
// 								)}

// 								{/* Reviews Tab */}
// 								{activeTab === 'reviews' && (
// 									<div>
// 										<h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
// 											Student Reviews
// 										</h2>
// 										<div className='mb-6 sm:mb-8 p-4 sm:p-6 bg-blue-50 rounded-xl'>
// 											<div className='flex items-center mb-3 sm:mb-4'>
// 												<div className='mr-3 sm:mr-4'>
// 													<span className='text-3xl sm:text-4xl font-bold text-blue-900'>
// 														{averageRating.toFixed(1)}
// 													</span>
// 													<div className='flex text-yellow-400 mt-1'>
// 														{[1, 2, 3, 4, 5].map((star) => (
// 															<Star
// 																key={star}
// 																className={`w-4 h-4 fill-current ${
// 																	star <= Math.round(averageRating)
// 																		? ''
// 																		: 'text-yellow-400/50'
// 																}`}
// 															/>
// 														))}
// 													</div>
// 												</div>
// 												<div>
// 													<p className='text-blue-800'>
// 														Based on {courseDetails.reviews?.length || 0}{' '}
// 														student reviews
// 													</p>
// 												</div>
// 											</div>
// 											<button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
// 												Write a Review
// 											</button>
// 										</div>

// 										<div className='space-y-4 sm:space-y-6'>
// 											{(courseDetails.reviews || []).map((review, index) => (
// 												<div
// 													key={index}
// 													className='border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0'>
// 													<div className='flex items-center mb-2 sm:mb-3'>
// 														<User className='w-8 h-8 sm:w-10 sm:h-10 text-gray-400 bg-gray-100 rounded-full p-2 mr-3' />
// 														<div className='min-w-0'>
// 															<h4 className='font-medium text-gray-900 truncate'>
// 																{review.name}
// 															</h4>
// 															<div className='flex text-yellow-400'>
// 																{[...Array(5)].map((_, i) => (
// 																	<Star
// 																		key={i}
// 																		className={`w-4 h-4 ${
// 																			i < review.rating
// 																				? 'fill-current'
// 																				: 'text-gray-300'
// 																		}`}
// 																	/>
// 																))}
// 															</div>
// 														</div>
// 													</div>
// 													<p className='text-gray-700'>{review.comment}</p>
// 												</div>
// 											))}
// 											{(!courseDetails.reviews ||
// 												courseDetails.reviews.length === 0) && (
// 												<p className='text-gray-700'>
// 													No reviews available yet.
// 												</p>
// 											)}
// 										</div>
// 									</div>
// 								)}
// 							</div>
// 						</div>

// 						{/* Sidebar - Right Column (1/3 width on large screens) */}
// 						<div className='lg:col-span-1'>
// 							{/* Application and Info Cards */}
// 							<div className='space-y-4 sm:space-y-6'>
// 								{/* Apply Now Card */}
// 								<div className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
// 									<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
// 										Ready to Apply?
// 									</h3>
// 									<p className='text-gray-700 mb-4 sm:mb-6'>
// 										Start your journey toward a degree in {course.title}.
// 										Applications for the next intake are now open.
// 									</p>
// 									<button className='w-full py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center'>
// 										<span className='font-medium mr-2'>Apply Now</span>
// 										<ArrowRight className='w-4 h-4' />
// 									</button>
// 								</div>

// 								{/* Key Details Card */}
// 								<div className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
// 									<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
// 										Program Details
// 									</h3>
// 									<div className='space-y-3 sm:space-y-4'>
// 										<div>
// 											<h4 className='text-sm font-medium text-gray-500'>
// 												Credits
// 											</h4>
// 											<p className='text-gray-900'>
// 												{courseDetails.credits || 'N/A'}{' '}
// 												{courseDetails.credits ? 'credits' : ''}
// 											</p>
// 										</div>
// 										<div>
// 											<h4 className='text-sm font-medium text-gray-500'>
// 												Tuition
// 											</h4>
// 											<p className='text-gray-900'>
// 												{courseDetails.tuition || 'Contact for details'}
// 											</p>
// 										</div>
// 										<div>
// 											<h4 className='text-sm font-medium text-gray-500'>
// 												Application Deadline
// 											</h4>
// 											<p className='text-gray-900'>June 30, 2025</p>
// 										</div>
// 									</div>
// 									<div className='mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100'>
// 										<a
// 											href='#'
// 											className='text-blue-600 hover:text-blue-700 flex items-center'>
// 											<FileText className='w-4 h-4 mr-2' />
// 											<span>Download Program Brochure</span>
// 										</a>
// 									</div>
// 								</div>

// 								{/* Related Programs Card */}
// 								<div className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
// 									<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
// 										Related Programs
// 									</h3>
// 									<div className='space-y-3 sm:space-y-4'>
// 										{relatedPrograms && relatedPrograms.length > 0 ? (
// 											relatedPrograms.map((program) => (
// 												<Link
// 													key={program.id}
// 													href={`/courses/${program.id}`}
// 													className='flex items-center p-2 sm:p-3 rounded-lg hover:bg-blue-50 transition-colors'>
// 													<div className='w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3 sm:mr-4 flex-shrink-0'>
// 														<BookOpen className='w-5 h-5 sm:w-6 sm:h-6' />
// 													</div>
// 													<div className='min-w-0'>
// 														<h4 className='font-medium text-gray-900 truncate'>
// 															{program.title}
// 														</h4>
// 														<p className='text-sm text-gray-500'>
// 															{program.level.join(', ')}
// 														</p>
// 													</div>
// 												</Link>
// 											))
// 										) : (
// 											<p className='text-gray-500 text-sm'>
// 												No related programs found
// 											</p>
// 										)}
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Contact/Student Support Section */}
// 			<div className='bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 sm:py-12'>
// 				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
// 					<div className='flex flex-col md:flex-row items-center justify-between'>
// 						<div className='md:w-2/3 mb-6 sm:mb-8 md:mb-0'>
// 							<h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>
// 								Have Questions About This Program?
// 							</h2>
// 							<p className='text-blue-100 text-base sm:text-lg mb-4 sm:mb-6'>
// 								Our academic advisors are here to help you make the right
// 								decision for your educational journey.
// 							</p>
// 							<div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
// 								<button className='px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-800 rounded-lg hover:bg-blue-50 transition-colors shadow-md flex items-center justify-center'>
// 									<span className='font-medium'>Contact an Advisor</span>
// 									<ArrowRight className='ml-2 w-4 sm:w-5 h-4 sm:h-5' />
// 								</button>
// 								<button className='px-4 sm:px-6 py-2 sm:py-3 bg-transparent border border-white text-white rounded-lg hover:bg-blue-800/30 transition-colors flex items-center justify-center'>
// 									<span className='font-medium'>Request Information</span>
// 								</button>
// 							</div>
// 						</div>
// 						<div className='md:w-1/3 flex justify-center md:justify-end'>
// 							<div className='w-24 h-24 sm:w-32 sm:h-32 bg-blue-800 rounded-full border-4 border-blue-700 flex items-center justify-center'>
// 								<User className='w-8 h-8 sm:w-12 sm:h-12 text-blue-200' />
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	);
// }
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	ArrowRight,
	Calendar,
	Clock,
	Users,
	BookOpen,
	GraduationCap,
	Building,
	CheckCircle2,
	FileText,
	User,
	Star,
} from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

interface Module {
	year: number;
	modules: string[];
}

interface Instructor {
	name: string;
	role: string;
	image: string;
}

interface Review {
	name: string;
	rating: number;
	comment: string;
}

interface CourseDetails {
	id: number;
	programs_id: number;
	duration: string;
	start_dates: string[];
	study_mode: string;
	department: string;
	credits: number;
	tuition: string;
	overview: string;
	highlights: string[];
	outcomes: string[];
	modules: Module[];
	instructors: Instructor[];
	reviews: Review[];
	video_link: string;
	brochure_url?: string;
}

interface AcademicProgram {
	id: number;
	title: string;
	level: string[];
	image: string;
	description: string;
	department: string;
	course_details: CourseDetails[];
}

export default function CourseDetail() {
	const [activeTab, setActiveTab] = useState('overview');
	const [course, setCourse] = useState<AcademicProgram | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [relatedPrograms, setRelatedPrograms] = useState<AcademicProgram[]>([]);

	const pathname = usePathname();
	const courseId = pathname.split('/').pop();

	useEffect(() => {
		const fetchCourseDetails = async () => {
			if (!courseId) {
				console.error('No course ID available in pathname:', pathname);
				setError('Course ID is missing');
				setLoading(false);
				return;
			}

			console.log('Fetching course details for ID:', courseId);

			try {
				setLoading(true);
				setError(null);

				if (!supabase) {
					throw new Error('Supabase client not initialized');
				}

				const parsedId = parseInt(courseId, 10);
				if (isNaN(parsedId)) {
					throw new Error('Invalid course ID format');
				}

				const { data, error: sbError } = await supabase
					.from('academic_programs')
					.select(
						`
            *,
            course_details (
              *
            )
          `
					)
					.eq('id', parsedId)
					.single();

				console.log('Supabase response:', { data, error: sbError });

				if (sbError) throw sbError;
				if (!data) throw new Error('Course not found');

				setCourse(data);

				const { data: relatedData, error: relatedError } = await supabase
					.from('academic_programs')
					.select('*')
					.eq('department', data.department)
					.neq('id', parsedId)
					.limit(3);

				if (relatedError) throw relatedError;
				setRelatedPrograms(relatedData || []);
			} catch (err) {
				console.error('Fetch error:', err);
				setError(err instanceof Error ? err.message : 'Failed to load course');
			} finally {
				setLoading(false);
			}
		};

		if (courseId) {
			fetchCourseDetails();
		}
	}, [courseId, pathname]);

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	if (loading) {
		return (
			<div className='flex justify-center items-center min-h-screen'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
			</div>
		);
	}

	if (error || !course) {
		return (
			<div className='text-center py-12'>
				<div className='text-red-500 mb-4'>{error}</div>
				<button
					onClick={() => window.location.reload()}
					className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
					Try Again
				</button>
				<Link
					href='/courses'
					className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'>
					Back to Courses
				</Link>
			</div>
		);
	}

	const courseDetails: CourseDetails =
		course.course_details && course.course_details.length > 0
			? course.course_details[0]
			: {
					id: 0,
					programs_id: 0,
					duration: '',
					start_dates: [],
					study_mode: '',
					department: '',
					credits: 0,
					tuition: '',
					overview: '',
					highlights: [],
					outcomes: [],
					modules: [],
					instructors: [],
					reviews: [],
					video_link: '',
			  };

	const averageRating =
		courseDetails.reviews && courseDetails.reviews.length > 0
			? courseDetails.reviews.reduce((acc, review) => acc + review.rating, 0) /
			  courseDetails.reviews.length
			: 0;

	return (
		<main className='min-h-screen pt-20'>
			{/* Hero Section */}
			<div className='relative h-96 sm:h-[32rem] md:h-[36rem] flex'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 z-10' />
				<Image
					src={course.image || '/api/placeholder/1920/800'}
					alt={course.title}
					fill
					className='object-cover'
					priority
				/>
				<div className='relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center'>
					<div className='max-w-4xl'>
						<div className='flex flex-wrap gap-2 mb-4 sm:mb-6'>
							<div className='bg-white text-blue-700 text-sm px-3 py-1 rounded-full flex items-center font-medium shadow-sm'>
								<GraduationCap className='w-3 h-3 mr-1' />
								{Array.isArray(course.level)
									? course.level.join(', ')
									: course.level}
							</div>
							<div className='bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full flex items-center'>
								{course.department}
							</div>
						</div>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
							{course.title}
						</h1>
						<p className='text-lg sm:text-xl text-blue-50 max-w-3xl mb-6 sm:mb-8'>
							{course.description}
						</p>
						<div className='flex items-center mt-4 sm:mt-6 text-white'>
							<Link href='/' className='hover:underline'>
								Home
							</Link>
							<span className='mx-2'>›</span>
							<Link href='/courses' className='hover:underline'>
								Courses
							</Link>
							<span className='mx-2'>›</span>
							<span className='truncate max-w-[150px] sm:max-w-xs md:max-w-md'>
								{course.title}
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Key Information Panel */}
			<div className='bg-white shadow-md border-b border-gray-100'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
						<div className='flex items-center'>
							<Calendar className='w-6 h-6 text-blue-600 mr-3 flex-shrink-0' />
							<div className='min-w-0'>
								<h3 className='text-sm font-medium text-gray-500'>
									Start Dates
								</h3>
								<p className='text-gray-900 truncate'>
									{courseDetails.start_dates &&
									courseDetails.start_dates.length > 0
										? courseDetails.start_dates.join(', ')
										: 'Contact for dates'}
								</p>
							</div>
						</div>
						<div className='flex items-center'>
							<Clock className='w-6 h-6 text-blue-600 mr-3 flex-shrink-0' />
							<div className='min-w-0'>
								<h3 className='text-sm font-medium text-gray-500'>Duration</h3>
								<p className='text-gray-900 truncate'>
									{courseDetails.duration || 'N/A'}
								</p>
							</div>
						</div>
						<div className='flex items-center'>
							<Users className='w-6 h-6 text-blue-600 mr-3 flex-shrink-0' />
							<div className='min-w-0'>
								<h3 className='text-sm font-medium text-gray-500'>
									Study Mode
								</h3>
								<p className='text-gray-900 truncate'>
									{courseDetails.study_mode || 'N/A'}
								</p>
							</div>
						</div>
						<div className='flex items-center'>
							<Building className='w-6 h-6 text-blue-600 mr-3 flex-shrink-0' />
							<div className='min-w-0'>
								<h3 className='text-sm font-medium text-gray-500'>
									Department
								</h3>
								<p className='text-gray-900 truncate'>
									{courseDetails.department || course.department || 'N/A'}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content Area */}
			<div className='bg-gray-50 py-8 sm:py-12 md:py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
						{/* Main Content - Left Column */}
						<div className='lg:col-span-2'>
							{/* Tab Navigation */}
							<div className='border-b border-gray-200 mb-6 sm:mb-8'>
								<nav className='flex overflow-x-auto pb-2 -mb-px'>
									{['overview', 'curriculum', 'faculty', 'reviews'].map(
										(tab) => (
											<button
												key={tab}
												onClick={() => handleTabChange(tab)}
												className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium whitespace-nowrap ${
													activeTab === tab
														? 'border-b-2 border-blue-600 text-blue-600'
														: 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
												}`}>
												{tab.charAt(0).toUpperCase() + tab.slice(1)}
											</button>
										)
									)}
								</nav>
							</div>

							{/* Tab Content */}
							<div className='space-y-6 sm:space-y-8'>
								{/* Overview Tab */}
								{activeTab === 'overview' && (
									<div>
										<h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
											Program Overview
										</h2>
										<div className='prose prose-blue max-w-none'>
											<p className='text-gray-700 mb-4 sm:mb-6'>
												{courseDetails.overview}
											</p>
										</div>

										{/* Program Video */}
										<div className='mt-6 sm:mt-8 mb-8'>
											<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
												Program Video
											</h3>
											<div className='relative w-full rounded-xl overflow-hidden shadow-md aspect-video bg-gray-100'>
												<div className='absolute inset-0 flex items-center justify-center'>
													{courseDetails.video_link ? (
														<iframe
															src={
																courseDetails.video_link.includes(
																	'youtube.com/watch?v='
																)
																	? `https://www.youtube.com/embed/${
																			courseDetails.video_link
																				.split('v=')[1]
																				.split('&')[0]
																	  }?playsinline=1&rel=0`
																	: courseDetails.video_link.includes(
																			'youtu.be/'
																	  )
																	? `https://www.youtube.com/embed/${
																			courseDetails.video_link
																				.split('youtu.be/')[1]
																				.split('?')[0]
																	  }?playsinline=1&rel=0`
																	: courseDetails.video_link
															}
															title='Program Overview Video'
															frameBorder='0'
															allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
															allowFullScreen
															className='w-full h-full'
															loading='lazy'
															onError={(e) => {
																const target = e.target as HTMLIFrameElement;
																target.style.display = 'none';
																target.nextElementSibling?.classList.remove(
																	'hidden'
																);
															}}></iframe>
													) : (
														<div className='flex flex-col items-center justify-center text-gray-500 h-full'>
															<p>No video available for this program.</p>
														</div>
													)}
												</div>
												<div className='absolute inset-0 flex-col items-center justify-center bg-gray-200 text-gray-500 p-4 text-center hidden'>
													<p className='mb-4'>
														Unable to load the video. Please try one of the
														following options:
													</p>
													<div className='space-y-2'>
														{courseDetails.video_link && (
															<a
																href={courseDetails.video_link}
																target='_blank'
																rel='noopener noreferrer'
																className='text-blue-600 hover:text-blue-800 inline-flex items-center'>
																<span>Watch on YouTube</span>
																<ArrowRight className='ml-1 w-3 h-3' />
															</a>
														)}
														<button
															onClick={() => window.location.reload()}
															className='text-blue-600 hover:text-blue-800 inline-flex items-center'>
															<span>Try Again</span>
															<ArrowRight className='ml-1 w-3 h-3' />
														</button>
													</div>
												</div>
											</div>
										</div>

										{/* Program Highlights */}
										<div className='mt-6 sm:mt-8'>
											<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
												Program Highlights
											</h3>
											<ul className='space-y-2 sm:space-y-3'>
												{courseDetails.highlights.map((highlight, index) => (
													<li key={index} className='flex items-start'>
														<CheckCircle2 className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
														<span className='text-gray-700'>{highlight}</span>
													</li>
												))}
											</ul>
										</div>

										{/* Learning Outcomes */}
										<div className='mt-6 sm:mt-8'>
											<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
												Learning Outcomes
											</h3>
											<ul className='space-y-2 sm:space-y-3'>
												{courseDetails.outcomes.map((outcome, index) => (
													<li key={index} className='flex items-start'>
														<CheckCircle2 className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
														<span className='text-gray-700'>{outcome}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								)}

								{/* Curriculum Tab */}
								{activeTab === 'curriculum' && (
									<div>
										<h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
											Program Curriculum
										</h2>
										<div className='space-y-6 sm:space-y-8'>
											{courseDetails.modules.map((year, yearIndex) => (
												<div
													key={yearIndex}
													className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
													<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
														Year {year.year}
													</h3>
													<ul className='space-y-2 sm:space-y-3'>
														{year.modules.map((module, moduleIndex) => (
															<li
																key={moduleIndex}
																className='flex items-start'>
																<BookOpen className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
																<span className='text-gray-700'>{module}</span>
															</li>
														))}
													</ul>
												</div>
											))}
										</div>
									</div>
								)}

								{/* Faculty Tab */}
								{activeTab === 'faculty' && (
									<div>
										<h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
											Program Faculty
										</h2>
										<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
											{courseDetails.instructors?.map((instructor, index) => (
												<div
													key={index}
													className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
													<div className='flex items-start'>
														<div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden mr-4 sm:mr-6 flex-shrink-0'>
															<Image
																src={instructor.image}
																alt={instructor.name}
																width={80}
																height={80}
																className='w-full h-full object-cover'
																unoptimized
															/>
														</div>
														<div className='min-w-0 flex-1'>
															<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2'>
																{instructor.name}
															</h3>
															<p className='text-gray-600 mb-2 sm:mb-3'>
																{instructor.role}
															</p>
															<button className='text-sm text-blue-600 hover:text-blue-700 flex items-center'>
																<span>View profile</span>
																<ArrowRight className='ml-1 w-3 h-3' />
															</button>
														</div>
													</div>
												</div>
											))}
											{(!courseDetails.instructors ||
												courseDetails.instructors.length === 0) && (
												<p className='text-gray-700 col-span-2'>
													Faculty information not available.
												</p>
											)}
										</div>
									</div>
								)}

								{/* Reviews Tab */}
								{activeTab === 'reviews' && (
									<div>
										<h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
											Student Reviews
										</h2>
										<div className='mb-6 sm:mb-8 p-4 sm:p-6 bg-blue-50 rounded-xl'>
											<div className='flex items-center mb-3 sm:mb-4'>
												<div className='mr-3 sm:mr-4'>
													<span className='text-3xl sm:text-4xl font-bold text-blue-900'>
														{averageRating.toFixed(1)}
													</span>
													<div className='flex text-yellow-400 mt-1'>
														{[1, 2, 3, 4, 5].map((star) => (
															<Star
																key={star}
																className={`w-4 h-4 fill-current ${
																	star <= Math.round(averageRating)
																		? ''
																		: 'text-yellow-400/50'
																}`}
															/>
														))}
													</div>
												</div>
												<div>
													<p className='text-blue-800'>
														Based on {courseDetails.reviews?.length || 0}{' '}
														student reviews
													</p>
												</div>
											</div>
											<button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
												Write a Review
											</button>
										</div>

										<div className='space-y-4 sm:space-y-6'>
											{(courseDetails.reviews || []).map((review, index) => (
												<div
													key={index}
													className='border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0'>
													<div className='flex items-center mb-2 sm:mb-3'>
														<User className='w-8 h-8 sm:w-10 sm:h-10 text-gray-400 bg-gray-100 rounded-full p-2 mr-3' />
														<div className='min-w-0'>
															<h4 className='font-medium text-gray-900 truncate'>
																{review.name}
															</h4>
															<div className='flex text-yellow-400'>
																{[...Array(5)].map((_, i) => (
																	<Star
																		key={i}
																		className={`w-4 h-4 ${
																			i < review.rating
																				? 'fill-current'
																				: 'text-gray-300'
																		}`}
																	/>
																))}
															</div>
														</div>
													</div>
													<p className='text-gray-700'>{review.comment}</p>
												</div>
											))}
											{(!courseDetails.reviews ||
												courseDetails.reviews.length === 0) && (
												<p className='text-gray-700'>
													No reviews available yet.
												</p>
											)}
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Sidebar - Right Column */}
						<div className='lg:col-span-1'>
							<div className='space-y-4 sm:space-y-6'>
								{/* Apply Now Card */}
								<div className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
									<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
										Ready to Apply?
									</h3>
									<p className='text-gray-700 mb-4 sm:mb-6'>
										Start your journey toward a degree in {course.title}.
										Applications for the next intake are now open.
									</p>
									<button className='w-full py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center'>
										<span className='font-medium mr-2'>Apply Now</span>
										<ArrowRight className='w-4 h-4' />
									</button>
								</div>

								{/* Entry Requirements Card */}
								<div className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
									<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
										Entry Requirements
									</h3>

									{/* Certificate Programs Requirements */}
									<div className='mb-4 sm:mb-6'>
										<h4 className='font-semibold text-blue-700 mb-2 sm:mb-3'>
											Certificate Programs:
										</h4>
										<ul className='space-y-2'>
											<li className='flex items-start'>
												<CheckCircle2 className='w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
												<span className='text-gray-700'>
													O & A Level qualifications
												</span>
											</li>
											<li className='flex items-start'>
												<CheckCircle2 className='w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
												<span className='text-gray-700'>2 passport photos</span>
											</li>
											<li className='flex items-start'>
												<CheckCircle2 className='w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
												<span className='text-gray-700'>
													Registration fee: UGX 30,000
												</span>
											</li>
										</ul>
									</div>

									{/* Diploma Programs Requirements */}
									<div>
										<h4 className='font-semibold text-blue-700 mb-2 sm:mb-3'>
											Diploma Programs:
										</h4>
										<ul className='space-y-2'>
											<li className='flex items-start'>
												<CheckCircle2 className='w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
												<span className='text-gray-700'>
													O & A Level qualifications
												</span>
											</li>
											<li className='flex items-start'>
												<CheckCircle2 className='w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
												<span className='text-gray-700'>2 passport photos</span>
											</li>
											<li className='flex items-start'>
												<CheckCircle2 className='w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0' />
												<span className='text-gray-700'>
													Registration fee: UGX 30,000
												</span>
											</li>
										</ul>
									</div>
								</div>

								{/* Key Details Card */}
								<div className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
									<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
										Program Details
									</h3>
									<div className='space-y-3 sm:space-y-4'>
										<div>
											<h4 className='text-sm font-medium text-gray-500'>
												Credits
											</h4>
											<p className='text-gray-900'>
												{courseDetails.credits || 'N/A'}{' '}
												{courseDetails.credits ? 'credits' : ''}
											</p>
										</div>
										<div>
											<h4 className='text-sm font-medium text-gray-500'>
												Tuition
											</h4>
											<p className='text-gray-900'>
												{courseDetails.tuition || 'Contact for details'}
											</p>
										</div>
										<div>
											<h4 className='text-sm font-medium text-gray-500'>
												Application Deadline
											</h4>
											<p className='text-gray-900'>June 30, 2025</p>
										</div>
									</div>
									{/* <div className='mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100'>
										<a
											href='#'
											className='text-blue-600 hover:text-blue-700 flex items-center'>
											<FileText className='w-4 h-4 mr-2' />
											<span>Download Program Brochure</span>
										</a>
									</div> */}
									<div className='mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100'>
										<a
											href='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/brochure//EDITED%20BROCHURE.pdf'
											download='EDITED_BROCHURE.pdf'
											target='_blank'
											rel='noopener noreferrer'
											className='text-blue-600 hover:text-blue-700 flex items-center'>
											<FileText className='w-4 h-4 mr-2' />
											<span>Download Program Brochure</span>
										</a>
									</div>
								</div>

								{/* Related Programs Card */}
								<div className='bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100'>
									<h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
										Related Programs
									</h3>
									<div className='space-y-3 sm:space-y-4'>
										{relatedPrograms && relatedPrograms.length > 0 ? (
											relatedPrograms.map((program) => (
												<Link
													key={program.id}
													href={`/courses/${program.id}`}
													className='flex items-center p-2 sm:p-3 rounded-lg hover:bg-blue-50 transition-colors'>
													<div className='w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3 sm:mr-4 flex-shrink-0'>
														<BookOpen className='w-5 h-5 sm:w-6 sm:h-6' />
													</div>
													<div className='min-w-0'>
														<h4 className='font-medium text-gray-900 truncate'>
															{program.title}
														</h4>
														<p className='text-sm text-gray-500'>
															{program.level.join(', ')}
														</p>
													</div>
												</Link>
											))
										) : (
											<p className='text-gray-500 text-sm'>
												No related programs found
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact/Student Support Section */}
			<div className='bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 sm:py-12'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col md:flex-row items-center justify-between'>
						<div className='md:w-2/3 mb-6 sm:mb-8 md:mb-0'>
							<h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>
								Have Questions About This Program?
							</h2>
							<p className='text-blue-100 text-base sm:text-lg mb-4 sm:mb-6'>
								Our academic advisors are here to help you make the right
								decision for your educational journey.
							</p>
							<div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
								<button className='px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-800 rounded-lg hover:bg-blue-50 transition-colors shadow-md flex items-center justify-center'>
									<span className='font-medium'>Contact an Advisor</span>
									<ArrowRight className='ml-2 w-4 sm:w-5 h-4 sm:h-5' />
								</button>
								<button className='px-4 sm:px-6 py-2 sm:py-3 bg-transparent border border-white text-white rounded-lg hover:bg-blue-800/30 transition-colors flex items-center justify-center'>
									<span className='font-medium'>Request Information</span>
								</button>
							</div>
						</div>
						<div className='md:w-1/3 flex justify-center md:justify-end'>
							<div className='w-24 h-24 sm:w-32 sm:h-32 bg-blue-800 rounded-full border-4 border-blue-700 flex items-center justify-center'>
								<User className='w-8 h-8 sm:w-12 sm:h-12 text-blue-200' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
