'use client';
// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add subscription logic here
		console.log('Subscribed with:', email);
		setEmail('');
	};

	return (
		<footer className='bg-black text-white'>
			{/* Newsletter subscription */}
			<div className='bg-white w-full mb-8'>
				<div className='bg-red-900 p-8 mx-auto max-w-7xl mb-8'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<div className='mb-4 md:mb-0'>
							<h2 className='text-2xl font-serif'>
								Don&apos;t Miss Awesome Story
							</h2>
							<h3 className='text-2xl font-serif'>From Our Alumni</h3>
						</div>

						<form
							onSubmit={handleSubmit}
							className='flex flex-col md:flex-row gap-4'>
							<input
								type='email'
								placeholder='Enter Your mail'
								className='px-4 py-2 rounded-full bg-transparent border border-white text-white'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<button
								type='submit'
								className='bg-white text-red-900 px-6 py-2 rounded-full flex items-center justify-center'>
								Subscribe
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4 ml-2'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Main Footer Content */}
			<div className='max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
				{/* Logo & Contact Info */}
				<div className='md:col-span-1'>
					<div className='flex items-center mb-4'>
						<Image
							src='/Logo/screen_logo-2.png'
							alt='UNIPIX University Logo'
							width={40}
							height={40}
							className='mr-2 bg-white p-2 rounded-full'
						/>
						<div>
							<h2 className='font-bold text-lg'>CAREER INSTITUTE</h2>
						</div>
					</div>

					<p className='text-sm text-gray-400 mb-4 text-justify'>
						We believe in the transformative power of education. That&apos;s why
						we&apos;re dedicated to delivering exceptional learning resources
						that empower students from every walk of life.
					</p>

					<div className='text-sm text-gray-400 space-y-2'>
						<p className='flex items-center text-justify'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4 mr-2'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
								/>
							</svg>
							Conrad Plaza 6 Th Floor Plot 22 Entebbe Road, Kampala
						</p>
						<p className='flex items-center text-justify'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4 mr-2'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
								/>
							</svg>
							+256414251208 / +256772423212
						</p>
					</div>
				</div>

				{/* Our Campus Links */}
				<div>
					<h3 className='font-bold text-white mb-4'>Our Campus</h3>
					<ul className='space-y-3'>
						<li>
							<Link href='/academic' className='text-gray-400 hover:text-white'>
								Academic
							</Link>
						</li>
						<li>
							<Link
								href='/athletics'
								className='text-gray-400 hover:text-white'>
								Athletics
							</Link>
						</li>
						<li>
							<Link
								href='/campus-life'
								className='text-gray-400 hover:text-white'>
								Campus life
							</Link>
						</li>
						<li>
							<Link href='/research' className='text-gray-400 hover:text-white'>
								Research
							</Link>
						</li>
						<li>
							<Link
								href='/academic-area'
								className='text-gray-400 hover:text-white'>
								Academic Area
							</Link>
						</li>
					</ul>
				</div>

				{/* Our Pages Links */}
				<div>
					<h3 className='font-bold text-white mb-4'>Our Pages</h3>
					<ul className='space-y-3'>
						<li>
							<Link href='/about' className='text-gray-400 hover:text-white'>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/tuition-fee'
								className='text-gray-400 hover:text-white'>
								Tuition Fee
							</Link>
						</li>
						<li>
							<Link href='/alumni' className='text-gray-400 hover:text-white'>
								Alumni
							</Link>
						</li>
						<li>
							<Link
								href='/faculty-staff'
								className='text-gray-400 hover:text-white'>
								Faculty Staff
							</Link>
						</li>
						<li>
							<Link href='/event' className='text-gray-400 hover:text-white'>
								Event
							</Link>
						</li>
					</ul>
				</div>

				{/* Recent Posts */}
				<div>
					<h3 className='font-bold text-white mb-4'>Recent Posts</h3>
					<div className='space-y-4'>
						<div className='flex gap-3'>
							<div className='w-16 h-16 bg-gray-700 relative flex-shrink-0'>
								<Image
									src='/blog-1.jpg'
									alt='Blog post'
									fill
									className='object-cover'
								/>
							</div>
							<div>
								<p className='text-xs text-gray-400'>August 6, 2024</p>
								<Link
									href='/blog/inequalities'
									className='text-sm hover:text-red-400'>
									Those Inequalities Are Inequalities That
								</Link>
							</div>
						</div>

						<div className='flex gap-3'>
							<div className='w-16 h-16 bg-gray-700 relative flex-shrink-0'>
								<Image
									src='/blog-2.jpg'
									alt='Blog post'
									fill
									className='object-cover'
								/>
							</div>
							<div>
								<p className='text-xs text-gray-400'>July 4, 2024</p>
								<Link
									href='/blog/cardiovascular'
									className='text-sm hover:text-red-400'>
									After Decades Of Improvement, Cardiovascular
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='border-t border-gray-800 mt-8'>
				<div className='max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-sm text-gray-500 mb-4 md:mb-0'>
						© {new Date().getFullYear()} Career Institute. All rights reserved.
					</p>
					<div className='flex space-x-4'>
						<a href='#' className='text-gray-500 hover:text-white'>
							<svg
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'>
								<path
									fillRule='evenodd'
									d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
						<a href='#' className='text-gray-500 hover:text-white'>
							<svg
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'>
								<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
							</svg>
						</a>
						<a href='#' className='text-gray-500 hover:text-white'>
							<svg
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'>
								<path
									fillRule='evenodd'
									d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
