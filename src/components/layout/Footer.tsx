'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
	return (
		<footer className='bg-gray-900 text-gray-300'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Company Info */}
					<div className='space-y-4'>
						<Image
							src='/logo.png'
							alt='Company Logo'
							width={120}
							height={40}
							className='h-8 w-auto'
						/>
						<p className='text-sm text-gray-400'>
							Empowering careers through quality education and professional
							development.
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='text-gray-400 hover:text-white transition-colors'>
								<Facebook size={20} />
							</a>
							<a
								href='#'
								className='text-gray-400 hover:text-white transition-colors'>
								<Twitter size={20} />
							</a>
							<a
								href='#'
								className='text-gray-400 hover:text-white transition-colors'>
								<Linkedin size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-white font-semibold mb-4'>Quick Links</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/about'
									className='text-gray-400 hover:text-white transition-colors text-sm'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/courses'
									className='text-gray-400 hover:text-white transition-colors text-sm'>
									Courses
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-400 hover:text-white transition-colors text-sm'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className='text-white font-semibold mb-4'>Resources</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/blog'
									className='text-gray-400 hover:text-white transition-colors text-sm'>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='/faq'
									className='text-gray-400 hover:text-white transition-colors text-sm'>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href='/support'
									className='text-gray-400 hover:text-white transition-colors text-sm'>
									Support
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className='text-white font-semibold mb-4'>Stay Updated</h3>
						<form className='space-y-3'>
							<div className='flex flex-col sm:flex-row gap-2'>
								<input
									type='email'
									placeholder='Enter your email'
									className='px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500'
								/>
								<button
									type='submit'
									className='px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap'>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 pt-8 border-t border-gray-800'>
					<div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
						<p className='text-sm text-gray-400'>
							© {new Date().getFullYear()} Your Company. All rights reserved.
						</p>
						<div className='flex space-x-6'>
							<Link
								href='/privacy'
								className='text-sm text-gray-400 hover:text-white transition-colors'>
								Privacy Policy
							</Link>
							<Link
								href='/terms'
								className='text-sm text-gray-400 hover:text-white transition-colors'>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
