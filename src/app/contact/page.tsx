// 'use client';

// import { useState } from 'react';
// import { MapPin, Phone, Mail } from 'lucide-react';

// export default function ContactPage() {
// 	const [formData, setFormData] = useState({
// 		name: '',
// 		email: '',
// 		subject: '',
// 		message: '',
// 	});
// 	const [isSubmitting, setIsSubmitting] = useState(false);
// 	type Errors = {
// 		name?: string;
// 		email?: string;
// 		message?: string;
// 	};
// 	const [errors, setErrors] = useState<Errors>({});

// 	const handleChange = (
// 		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// 	) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({
// 			...prev,
// 			[name]: value,
// 		}));
// 	};

// 	const validateForm = (): Errors => {
// 		const newErrors: Errors = {};
// 		if (!formData.name.trim()) newErrors.name = 'Name is required';
// 		if (!formData.email.trim()) newErrors.email = 'Email is required';
// 		if (!/^\S+@\S+\.\S+$/.test(formData.email) && formData.email)
// 			newErrors.email = 'Email is invalid';
// 		if (!formData.message.trim()) newErrors.message = 'Message is required';
// 		return newErrors;
// 	};

// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();

// 		const validationErrors = validateForm();
// 		if (Object.keys(validationErrors).length > 0) {
// 			setErrors(validationErrors);
// 			return;
// 		}

// 		setErrors({});
// 		setIsSubmitting(true);

// 		// Simulate API call
// 		try {
// 			await new Promise((resolve) => setTimeout(resolve, 1500));
// 			setFormData({ name: '', email: '', subject: '', message: '' });
// 		} catch (error) {
// 			console.error('Error submitting form:', error);
// 		} finally {
// 			setIsSubmitting(false);
// 		}
// 	};

// 	return (
// 		<div className='min-h-screen'>
// 			{/* Hero Section */}
// 			<div className='relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16 sm:py-20'>
// 				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 					<h1 className='text-3xl sm:text-4xl md:text-5xl font-serif mb-4'>
// 						Contact Us
// 					</h1>
// 					<p className='text-blue-50 text-lg sm:text-xl max-w-2xl'>
// 						Get in touch with us for any inquiries or assistance.
// 					</p>
// 				</div>
// 			</div>

// 			{/* Main Content */}
// 			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
// 				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
// 					{/* Contact Information */}
// 					<div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
// 						<h2 className='text-2xl font-serif mb-6 text-gray-800'>
// 							Contact Information
// 						</h2>
// 						<div className='space-y-4'>
// 							<div className='flex items-start space-x-4'>
// 								<MapPin className='w-6 h-6 text-blue-600 mt-1' />
// 								<div>
// 									<h3 className='font-medium text-gray-800'>Address</h3>
// 									<p className='text-gray-600'>
// 										123 Education Street, City, Country
// 									</p>
// 								</div>
// 							</div>
// 							<div className='flex items-start space-x-4'>
// 								<Phone className='w-6 h-6 text-blue-600 mt-1' />
// 								<div>
// 									<h3 className='font-medium text-gray-800'>Phone</h3>
// 									<p className='text-gray-600'>+1 234 567 890</p>
// 								</div>
// 							</div>
// 							<div className='flex items-start space-x-4'>
// 								<Mail className='w-6 h-6 text-blue-600 mt-1' />
// 								<div>
// 									<h3 className='font-medium text-gray-800'>Email</h3>
// 									<p className='text-gray-600'>info@careerinstitute.com</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Contact Form */}
// 					<div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
// 						<h2 className='text-2xl font-serif mb-6 text-gray-800'>
// 							Send us a Message
// 						</h2>
// 						<form className='space-y-4' onSubmit={handleSubmit}>
// 							<div>
// 								<label
// 									htmlFor='name'
// 									className='block text-sm font-medium text-gray-700'>
// 									Name
// 								</label>
// 								<input
// 									type='text'
// 									id='name'
// 									name='name'
// 									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
// 									value={formData.name}
// 									onChange={handleChange}
// 								/>
// 								{errors.name && (
// 									<p className='mt-1 text-sm text-red-600'>{errors.name}</p>
// 								)}
// 							</div>
// 							<div>
// 								<label
// 									htmlFor='email'
// 									className='block text-sm font-medium text-gray-700'>
// 									Email
// 								</label>
// 								<input
// 									type='email'
// 									id='email'
// 									name='email'
// 									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
// 									value={formData.email}
// 									onChange={handleChange}
// 								/>
// 								{errors.email && (
// 									<p className='mt-1 text-sm text-red-600'>{errors.email}</p>
// 								)}
// 							</div>
// 							<div>
// 								<label
// 									htmlFor='message'
// 									className='block text-sm font-medium text-gray-700'>
// 									Message
// 								</label>
// 								<textarea
// 									id='message'
// 									name='message'
// 									rows={4}
// 									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
// 									value={formData.message}
// 									onChange={handleChange}></textarea>
// 								{errors.message && (
// 									<p className='mt-1 text-sm text-red-600'>{errors.message}</p>
// 								)}
// 							</div>
// 							<button
// 								type='submit'
// 								disabled={isSubmitting}
// 								className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300'>
// 								{isSubmitting ? 'Sending...' : 'Send Message'}
// 							</button>
// 						</form>
// 					</div>
// 				</div>

// 				{/* Map Section */}
// 				<div className='bg-white py-16'>
// 					<div className='container mx-auto px-4'>
// 						<h2 className='text-3xl font-bold mb-10 text-center text-gray-800'>
// 							Find Us
// 						</h2>
// 						<div className='aspect-video max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl'>
// 							{/* Placeholder for a map - in a real application, you would integrate with Google Maps or similar */}
// 							<div className='bg-gray-200 w-full h-full flex items-center justify-center'>
// 								<div className='text-center'>
// 									<MapPin className='text-gray-400 w-12 h-12 mx-auto mb-3' />
// 									<p className='text-gray-500 text-lg'>
// 										Map integration would go here
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';

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
		<div className='min-h-screen bg-slate-50'>
			{/* Hero Section */}
			<div className='relative bg-white py-16 sm:py-24 border-b border-slate-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4'>
						Get in Touch
					</h1>
					<div className='w-24 h-1 bg-blue-500 mx-auto mb-6'></div>
					<p className='text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto'>
						We&apos;re here to help with any questions you might have about our
						services.
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Contact Information */}
					<div className='bg-white rounded-xl shadow-sm border border-slate-100 p-8 transform transition-all hover:shadow-md'>
						<h2 className='text-2xl font-serif font-semibold mb-8 text-slate-800'>
							Contact Information
						</h2>
						<div className='space-y-6'>
							<div className='flex items-start'>
								<div className='flex-shrink-0 bg-blue-50 p-3 rounded-full'>
									<MapPin className='w-6 h-6 text-blue-600' />
								</div>
								<div className='ml-4'>
									<h3 className='font-medium text-slate-800'>Address</h3>
									<p className='text-slate-500 mt-1'>
										123 Education Street,
										<br />
										New York, NY 10001
									</p>
								</div>
							</div>
							<div className='flex items-start'>
								<div className='flex-shrink-0 bg-blue-50 p-3 rounded-full'>
									<Phone className='w-6 h-6 text-blue-600' />
								</div>
								<div className='ml-4'>
									<h3 className='font-medium text-slate-800'>Phone</h3>
									<p className='text-slate-500 mt-1'>+1 234 567 890</p>
								</div>
							</div>
							<div className='flex items-start'>
								<div className='flex-shrink-0 bg-blue-50 p-3 rounded-full'>
									<Mail className='w-6 h-6 text-blue-600' />
								</div>
								<div className='ml-4'>
									<h3 className='font-medium text-slate-800'>Email</h3>
									<p className='text-slate-500 mt-1'>
										info@careerinstitute.com
									</p>
								</div>
							</div>
						</div>

						<div className='mt-10 pt-8 border-t border-slate-100'>
							<h3 className='text-lg font-medium text-slate-800 mb-4'>
								Follow Us
							</h3>
							<div className='flex space-x-4'>
								<a
									href='#'
									className='bg-slate-100 hover:bg-blue-100 p-2 rounded-full transition-colors'>
									<svg
										className='w-5 h-5 text-slate-600'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' />
									</svg>
								</a>
								<a
									href='#'
									className='bg-slate-100 hover:bg-blue-100 p-2 rounded-full transition-colors'>
									<svg
										className='w-5 h-5 text-slate-600'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
									</svg>
								</a>
								<a
									href='#'
									className='bg-slate-100 hover:bg-blue-100 p-2 rounded-full transition-colors'>
									<svg
										className='w-5 h-5 text-slate-600'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' />
									</svg>
								</a>
								<a
									href='#'
									className='bg-slate-100 hover:bg-blue-100 p-2 rounded-full transition-colors'>
									<svg
										className='w-5 h-5 text-slate-600'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.898a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z' />
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className='bg-white rounded-xl shadow-sm border border-slate-100 p-8 lg:col-span-2 transform transition-all hover:shadow-md'>
						<h2 className='text-2xl font-serif font-semibold mb-8 text-slate-800'>
							Send us a Message
						</h2>
						<form className='space-y-6' onSubmit={handleSubmit}>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-slate-700 mb-1'>
										Your Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										placeholder='John Doe'
										className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all'
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
										className='block text-sm font-medium text-slate-700 mb-1'>
										Email Address
									</label>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='johndoe@example.com'
										className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all'
										value={formData.email}
										onChange={handleChange}
									/>
									{errors.email && (
										<p className='mt-1 text-sm text-red-600'>{errors.email}</p>
									)}
								</div>
							</div>

							<div>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-slate-700 mb-1'>
									Subject (Optional)
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									placeholder='How can we help you?'
									className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all'
									value={formData.subject}
									onChange={handleChange}
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-slate-700 mb-1'>
									Your Message
								</label>
								<textarea
									id='message'
									name='message'
									rows={6}
									placeholder='Write your message here...'
									className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all'
									value={formData.message}
									onChange={handleChange}></textarea>
								{errors.message && (
									<p className='mt-1 text-sm text-red-600'>{errors.message}</p>
								)}
							</div>

							<div>
								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center font-medium'>
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
							</div>
						</form>
					</div>
				</div>

				{/* Map Section */}
				<div className='mt-16'>
					<h2 className='text-2xl font-serif font-semibold mb-8 text-slate-800 text-center'>
						Our Location
					</h2>
					<div className='bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden'>
						{/* Placeholder for a map - in a real application, you would integrate with Google Maps or similar */}
						<div className='bg-slate-100 w-full h-96 flex items-center justify-center relative'>
							<div className='absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent opacity-40'></div>
							<div className='text-center relative z-10'>
								<div className='bg-white p-4 rounded-full shadow-lg inline-block mb-4'>
									<MapPin className='text-blue-600 w-8 h-8' />
								</div>
								<h3 className='text-slate-800 text-xl font-medium'>
									Career Institute Headquarters
								</h3>
								<p className='text-slate-600 mt-2'>
									123 Education Street, New York, NY 10001
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
