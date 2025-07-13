'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	type Errors = {
		name?: string;
		email?: string;
		message?: string;
	};

	const [errors, setErrors] = useState<Errors>({});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validateForm = (): Errors => {
		const newErrors: Errors = {};
		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.email.trim()) newErrors.email = 'Email is required';
		if (!/^\S+@\S+\.\S+$/.test(formData.email) && formData.email)
			newErrors.email = 'Email is invalid';
		if (!formData.message.trim()) newErrors.message = 'Message is required';
		return newErrors;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setErrors({});
		setIsSubmitting(true);

		// Simulate API call
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setFormData({ name: '', email: '', subject: '', message: '' });
			setIsSuccess(true);
			setTimeout(() => setIsSuccess(false), 3000);
		} catch (error) {
			console.error('Error submitting form:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<div className='relative h-64 md:h-80 lg:h-96 w-full'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70 z-10' />
				<Image
					src='https://zdmexvtrwcwpbcdpsfdc.supabase.co/storage/v1/object/public/pictures//_G3A8199.jpg'
					alt='Graduation cap'
					fill
					className='object-cover'
					priority
					unoptimized
				/>
				<div className='relative z-20 h-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center'>
						Contact Us
					</h1>
					<div className='flex items-center justify-center mt-4 text-white'>
						<Link href='/' className='hover:underline'>
							Home
						</Link>
						<span className='mx-2'>›</span>
						<span>Contact Us</span>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='w-full bg-slate-50 py-12 sm:py-16 md:py-20'>
				<div className='w-full px-4 sm:px-6 lg:px-8'>
					<div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
						{/* Contact Information */}
						<div className='lg:col-span-1 bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6 sm:p-8 rounded-lg shadow-xl'>
							<h2 className='text-2xl sm:text-3xl font-serif mb-6'>
								Contact Information
							</h2>
							<div className='space-y-6'>
								<div className='flex items-start space-x-4'>
									<div className='bg-blue-800/50 p-2 rounded-lg'>
										<MapPin className='w-5 h-5 text-blue-300' />
									</div>
									<div>
										<h3 className='text-lg font-medium text-blue-100 mb-1'>
											Address
										</h3>
										<p className='text-blue-200 leading-relaxed'>
											Career Institute
											<br />
											Conrad Plaza 6th Floor Entebbe Road
											<br />
											P.O. Box 23711 Kampala
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='bg-blue-800/50 p-2 rounded-lg'>
										<Phone className='w-5 h-5 text-blue-300' />
									</div>
									<div>
										<h3 className='text-lg font-medium text-blue-100 mb-1'>
											Phone
										</h3>
										<p className='text-blue-200'>
											+256 772423212
											<br /> +256 414251208
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='bg-blue-800/50 p-2 rounded-lg'>
										<Mail className='w-5 h-5 text-blue-300' />
									</div>
									<div>
										<h3 className='text-lg font-medium text-blue-100 mb-1'>
											Email
										</h3>
										<p className='text-blue-200'>
											careerinstitute00@gmail.com
											<br />
											info@careerinstitute.ug
											<br />
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='bg-blue-800/50 p-2 rounded-lg'>
										<Clock className='w-5 h-5 text-blue-300' />
									</div>
									<div>
										<h3 className='text-lg font-medium text-blue-100 mb-1'>
											Office Hours
										</h3>
										<p className='text-blue-200'>
											Monday - Friday: 9:00 AM - 5:00 PM
											<br />
											Saturday: 10:00 AM - 2:00 PM
											<br />
											Sunday: Closed
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className='lg:col-span-2 bg-white p-6 sm:p-8 rounded-lg shadow-xl'>
							<h2 className='text-2xl sm:text-3xl font-serif mb-6 text-gray-800'>
								Send us a Message
							</h2>
							<form className='space-y-6' onSubmit={handleSubmit}>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Full Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400'
											placeholder='John Doe'
											value={formData.name}
											onChange={handleChange}
										/>
										{errors.name && (
											<p className='mt-1 text-sm text-red-600'>{errors.name}</p>
										)}
									</div>
									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Email Address
										</label>
										<input
											type='email'
											id='email'
											name='email'
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400'
											placeholder='john@example.com'
											value={formData.email}
											onChange={handleChange}
										/>
										{errors.email && (
											<p className='mt-1 text-sm text-red-600'>
												{errors.email}
											</p>
										)}
									</div>
								</div>

								<div>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Subject
									</label>
									<input
										type='text'
										id='subject'
										name='subject'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400'
										placeholder='How can we help you?'
										value={formData.subject}
										onChange={handleChange}
									/>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										rows={4}
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400'
										placeholder='Please provide details about your inquiry...'
										value={formData.message}
										onChange={handleChange}></textarea>
									{errors.message && (
										<p className='mt-1 text-sm text-red-600'>
											{errors.message}
										</p>
									)}
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl'>
									{isSubmitting ? (
										<>
											<Loader2 className='w-5 h-5 mr-2 animate-spin' />
											Sending...
										</>
									) : isSuccess ? (
										<span className='flex items-center'>
											Message Sent Successfully
											<svg
												className='w-5 h-5 ml-2 text-green-200'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M5 13l4 4L19 7'
												/>
											</svg>
										</span>
									) : (
										<>
											<Send className='w-5 h-5 mr-2' />
											Send Message
										</>
									)}
								</button>
							</form>
						</div>
					</div>

					{/* Map Section */}
					<div className='mt-16'>
						<h2 className='text-2xl font-serif font-semibold mb-8 text-slate-800 text-center'>
							Our Location
						</h2>
						<div className='bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden'>
							<div className='w-full h-96'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.753404314019!2d32.5848137748535!3d0.3258535640611807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb93a0c0b8d5%3A0x3c0d9d976c9a9a1a!2sConrad%20Plaza!5e0!3m2!1sen!2sus!4v1715180189135!5m2!1sen!2sus'
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									className='rounded-lg'></iframe>
							</div>
							<div className='p-6 text-center bg-white'>
								<h3 className='text-slate-800 text-xl font-medium'>
									Career Institute Headquarters
								</h3>
								<p className='text-slate-600 mt-2'>
									Conrad Plaza 6th Floor Entebbe Road P.O. Box 23711 Kampala
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
