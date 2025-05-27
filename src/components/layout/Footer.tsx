// 'use client';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
// 	Facebook,
// 	Twitter,
// 	Linkedin,
// 	MapPin,
// 	Phone,
// 	Mail,
// 	Clock,
// } from 'lucide-react';

// export default function Footer() {
// 	return (
// 		<footer className='bg-gray-900 text-gray-300'>
// 			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
// 				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
// 					{/* Company Info */}
// 					<div className='space-y-4'>
// 						<div className='relative'>
// 							<div className='float-left mr-4 mb-2'>
// 								<div className='bg-white p-2 rounded-full inline-block shadow-lg'>
// 									<Image
// 										src='/Logo/Screen_logo-2.png'
// 										alt='Company Logo'
// 										width={180}
// 										height={180}
// 										className='h-16 w-auto object-contain'
// 										priority
// 									/>
// 								</div>
// 							</div>
// 							<p className='text-sm text-gray-400 text-justify tracking-tight leading-relaxed'>
// 								Empowering careers through quality education and professional
// 								development. We are committed to providing exceptional learning
// 								experiences that prepare students for successful futures in
// 								their chosen fields.
// 							</p>
// 						</div>
// 						<div className='flex space-x-4 pt-2'>
// 							<a
// 								href='#'
// 								className='text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800'>
// 								<Facebook size={20} />
// 							</a>
// 							<a
// 								href='#'
// 								className='text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800'>
// 								<Twitter size={20} />
// 							</a>
// 							<a
// 								href='#'
// 								className='text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800'>
// 								<Linkedin size={20} />
// 							</a>
// 						</div>
// 					</div>

// 					{/* Quick Links */}
// 					<div>
// 						<h3 className='text-white font-bold mb-6 text-lg border-b border-gray-700 pb-2'>
// 							Quick Links
// 						</h3>
// 						<ul className='space-y-3'>
// 							<li>
// 								<Link
// 									href='/about'
// 									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:pl-2 block'>
// 									About Us
// 								</Link>
// 							</li>
// 							<li>
// 								<Link
// 									href='/courses'
// 									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:pl-2 block'>
// 									Courses
// 								</Link>
// 							</li>
// 							<li>
// 								<Link
// 									href='/contact'
// 									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:pl-2 block'>
// 									Contact
// 								</Link>
// 							</li>
// 							<li>
// 								<Link
// 									href='/blog'
// 									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:pl-2 block'>
// 									Blog
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>

// 					{/* Contact Info */}
// 					<div>
// 						<h3 className='text-white font-bold mb-6 text-lg border-b border-gray-700 pb-2'>
// 							Contact Info
// 						</h3>
// 						<div className='space-y-4'>
// 							<div className='flex items-start space-x-3'>
// 								<div className='bg-gray-800 p-1.5 rounded-lg mt-0.5'>
// 									<MapPin className='w-4 h-4 text-gray-300' />
// 								</div>
// 								<div>
// 									<p className='text-gray-400 text-sm leading-relaxed'>
// 										Conrad Plaza 6th Floor
// 										<br />
// 										Entebbe Road, Kampala
// 									</p>
// 								</div>
// 							</div>

// 							<div className='flex items-start space-x-3'>
// 								<div className='bg-gray-800 p-1.5 rounded-lg mt-0.5'>
// 									<Phone className='w-4 h-4 text-gray-300' />
// 								</div>
// 								<div>
// 									<p className='text-gray-400 text-sm'>
// 										+256 772423212
// 										<br />
// 										+256 414251208
// 									</p>
// 								</div>
// 							</div>

// 							<div className='flex items-start space-x-3'>
// 								<div className='bg-gray-800 p-1.5 rounded-lg mt-0.5'>
// 									<Mail className='w-4 h-4 text-gray-300' />
// 								</div>
// 								<div>
// 									<p className='text-gray-400 text-sm'>
// 										info@careerinstitute.ug
// 									</p>
// 								</div>
// 							</div>

// 							<div className='flex items-start space-x-3'>
// 								<div className='bg-gray-800 p-1.5 rounded-lg mt-0.5'>
// 									<Clock className='w-4 h-4 text-gray-300' />
// 								</div>
// 								<div>
// 									<p className='text-gray-400 text-sm leading-relaxed'>
// 										Mon-Fri: 9AM - 5PM
// 										<br />
// 										Sat: 10AM - 2PM
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Newsletter & Map */}
// 					<div className='space-y-6'>
// 						<div>
// 							<h3 className='text-white font-bold mb-6 text-lg border-b border-gray-700 pb-2'>
// 								Stay Updated
// 							</h3>
// 							<form className='space-y-3'>
// 								<div className='flex flex-col sm:flex-row gap-2'>
// 									<input
// 										type='email'
// 										placeholder='Enter your email'
// 										className='px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 border border-gray-700 text-sm'
// 									/>
// 									<button
// 										type='submit'
// 										className='px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 whitespace-nowrap text-sm border border-gray-600'>
// 										Subscribe
// 									</button>
// 								</div>
// 							</form>
// 						</div>

// 						{/* Mini Map */}
// 						<div>
// 							<h4 className='text-white font-semibold mb-3 text-sm'>
// 								Our Location
// 							</h4>
// 							<div className='bg-gray-800 rounded-lg overflow-hidden border border-gray-700'>
// 								<div className='h-24 w-full'>
// 									<iframe
// 										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.753404314019!2d32.5848137748535!3d0.3258535640611807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb93a0c0b8d5%3A0x3c0d9d976c9a9a1a!2sConrad%20Plaza!5e0!3m2!1sen!2sus!4v1715180189135!5m2!1sen!2sus'
// 										width='100%'
// 										height='100%'
// 										style={{ border: 0 }}
// 										allowFullScreen
// 										loading='lazy'
// 										referrerPolicy='no-referrer-when-downgrade'
// 										className='grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300'
// 									/>
// 								</div>
// 								<div className='p-2 text-center'>
// 									<Link
// 										href='/contact'
// 										className='text-xs text-gray-400 hover:text-white transition-colors duration-300'>
// 										View Details →
// 									</Link>
// 								</div>
// 							</div>
// 						</div>

// 						{/* Legal Links */}
// 						<div className='space-y-2'>
// 							<Link
// 								href='/privacy'
// 								className='text-gray-400 hover:text-white transition-colors duration-300 text-sm block'>
// 								Privacy Policy
// 							</Link>
// 							<Link
// 								href='/terms'
// 								className='text-gray-400 hover:text-white transition-colors duration-300 text-sm block'>
// 								Terms of Service
// 							</Link>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Bottom Bar */}
// 				<div className='mt-12 pt-8 border-t border-gray-800'>
// 					<div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
// 						<p className='text-sm text-gray-400'>
// 							© {new Date().getFullYear()} Career Institute. All rights
// 							reserved.
// 						</p>
// 						<div className='flex items-center space-x-6'>
// 							<span className='text-xs text-gray-500'>
// 								Powered by Excellence
// 							</span>
// 							<div className='h-4 w-px bg-gray-700'></div>
// 							<span className='text-xs text-gray-500'>Kampala, Uganda</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
	Facebook,
	Twitter,
	Linkedin,
	MapPin,
	Phone,
	Mail,
	Clock,
} from 'lucide-react';

export default function Footer() {
	return (
		<footer className='bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 relative overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent'></div>
				<div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl'></div>
				<div className='absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl'></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{/* Company Info */}
					<div className='space-y-6'>
						<div className='relative'>
							<div className='flex items-start space-x-4 mb-6'>
								<div className='bg-gradient-to-br from-white to-gray-100 p-3 rounded-2xl shadow-2xl ring-4 ring-white/10'>
									<Image
										src='/Logo/Screen_logo-2.png'
										alt='Company Logo'
										width={180}
										height={180}
										className='h-12 w-auto object-contain'
										priority
									/>
								</div>
								<div className='flex-1'>
									<h3 className='text-white font-bold text-xl mb-2'>
										Career Institute
									</h3>
									<p className='text-gray-400 text-sm leading-relaxed'>
										Empowering careers through quality education and
										professional development.
									</p>
								</div>
							</div>
							<p className='text-gray-400 text-sm leading-relaxed'>
								We are committed to providing exceptional learning experiences
								that prepare students for successful futures in their chosen
								fields.
							</p>
						</div>
						<div className='flex space-x-3'>
							<a
								href='#'
								className='group relative bg-gray-800/50 hover:bg-blue-600 transition-all duration-300 p-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20'>
								<Facebook
									size={18}
									className='text-gray-400 group-hover:text-white transition-colors'
								/>
							</a>
							<a
								href='#'
								className='group relative bg-gray-800/50 hover:bg-blue-500 transition-all duration-300 p-3 rounded-xl border border-gray-700/50 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20'>
								<Twitter
									size={18}
									className='text-gray-400 group-hover:text-white transition-colors'
								/>
							</a>
							<a
								href='#'
								className='group relative bg-gray-800/50 hover:bg-blue-700 transition-all duration-300 p-3 rounded-xl border border-gray-700/50 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/20'>
								<Linkedin
									size={18}
									className='text-gray-400 group-hover:text-white transition-colors'
								/>
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-white font-bold mb-6 text-lg border-b border-gray-700 pb-2'>
							Quick Links
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/about'
									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:pl-2 block'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/courses'
									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:pl-2 block'>
									Courses
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:pl-2 block'>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:pl-2 block'>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className='text-white font-bold mb-6 text-lg border-b border-gray-700 pb-2'>
							Contact Info
						</h3>
						<div className='space-y-4'>
							<div className='flex items-start space-x-3'>
								<div className='bg-gray-800 p-1.5 rounded-lg mt-0.5'>
									<MapPin className='w-4 h-4 text-gray-300' />
								</div>
								<div>
									<p className='text-gray-400 text-sm leading-relaxed'>
										Conrad Plaza 6th Floor
										<br />
										Entebbe Road, Kampala
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<div className='bg-gray-800 p-1.5 rounded-lg mt-0.5'>
									<Phone className='w-4 h-4 text-gray-300' />
								</div>
								<div>
									<p className='text-gray-400 text-sm'>
										+256 772423212
										<br />
										+256 414251208
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<div className='bg-gray-800 p-1.5 rounded-lg mt-0.5'>
									<Mail className='w-4 h-4 text-gray-300' />
								</div>
								<div>
									<p className='text-gray-400 text-sm'>
										info@careerinstitute.ug
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<div className='bg-gray-800 p-1.5 rounded-lg mt-0.5'>
									<Clock className='w-4 h-4 text-gray-300' />
								</div>
								<div>
									<p className='text-gray-400 text-sm leading-relaxed'>
										Mon-Fri: 9AM - 5PM
										<br />
										Sat: 10AM - 2PM
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Newsletter & Map */}
					<div className='space-y-6'>
						<div>
							<h3 className='text-white font-bold mb-6 text-lg border-b border-gray-700 pb-2'>
								Stay Updated
							</h3>
							<form className='space-y-3'>
								<div className='flex flex-col sm:flex-row gap-2'>
									<input
										type='email'
										placeholder='Enter your email'
										className='px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 border border-gray-700 text-sm'
									/>
									<button
										type='submit'
										className='px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 whitespace-nowrap text-sm border border-gray-600'>
										Subscribe
									</button>
								</div>
							</form>
						</div>

						{/* Mini Map */}
						<div>
							<h4 className='text-white font-semibold mb-3 text-sm'>
								Our Location
							</h4>
							<div className='bg-gray-800 rounded-lg overflow-hidden border border-gray-700'>
								<div className='h-24 w-full'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.753404314019!2d32.5848137748535!3d0.3258535640611807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb93a0c0b8d5%3A0x3c0d9d976c9a9a1a!2sConrad%20Plaza!5e0!3m2!1sen!2sus!4v1715180189135!5m2!1sen!2sus'
										width='100%'
										height='100%'
										style={{ border: 0 }}
										allowFullScreen
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
										className='grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300'
									/>
								</div>
								<div className='p-2 text-center'>
									<Link
										href='/contact'
										className='text-xs text-gray-400 hover:text-white transition-colors duration-300'>
										View Details →
									</Link>
								</div>
							</div>
						</div>

						{/* Legal Links */}
						{/* <div className='space-y-2'>
							<Link
								href='/privacy'
								className='text-gray-400 hover:text-white transition-colors duration-300 text-sm block'>
								Privacy Policy
							</Link>
							<Link
								href='/terms'
								className='text-gray-400 hover:text-white transition-colors duration-300 text-sm block'>
								Terms of Service
							</Link>
						</div> */}
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 pt-8 border-t border-gray-800'>
					<div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
						<p className='text-sm text-gray-400'>
							© {new Date().getFullYear()} Career Institute. All rights
							reserved.
						</p>
						<div className='flex items-center space-x-6'>
							<span className='text-xs text-gray-500'>
								Powered by Excellence
							</span>
							<div className='h-4 w-px bg-gray-700'></div>
							<span className='text-xs text-gray-500'>Kampala, Uganda</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
