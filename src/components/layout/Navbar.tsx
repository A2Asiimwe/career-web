'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, User, Bell } from 'lucide-react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
	// 	null
	// );
	const [scrolled, setScrolled] = useState(false);
	const [searchActive, setSearchActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		// setOpenMobileDropdown(null);
		if (!isMenuOpen) setSearchActive(false);
	};

	const toggleSearch = () => {
		setSearchActive(!searchActive);
		if (!searchActive) setIsMenuOpen(false);
	};

	// Remove unused function since it's not being used anywhere in the component
	// const toggleMobileDropdown = (label: string) => {
	//   setOpenMobileDropdown(openMobileDropdown === label ? null : label);
	// };

	const navItems = [
		{ label: 'Home', href: '/', hasDropdown: false },
		{
			label: 'About',
			href: '/about',
			hasDropdown: false, // Disable dropdown for now
		},
		{
			label: 'Courses',
			href: '/courses',
			hasDropdown: false, // Disable dropdown for now
		},
		// { label: 'Events', href: '/events', hasDropdown: true, dropdownItems: [ { label: 'Upcoming Events', href: '/events' }, { label: 'Workshops', href: '/events/workshops' }, { label: 'Webinars', href: '/events/webinars' }, ], },
		// { label: 'Blog', href: '/blog', hasDropdown: false },
		{ label: 'Contact', href: '/contact', hasDropdown: false },
		// { label: 'FAQ', href: '/faq', hasDropdown: false },
	];

	return (
		<nav
			className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md ${
				scrolled
					? 'bg-white/95 shadow-sm py-2'
					: ' bg-blue-950 bg-opacity-60 py-3'
			}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<div className='flex-shrink-0 flex items-center'>
						<Link href='/' className='flex items-center group'>
							<div className='h-10 w-10 mr-3 overflow-hidden transition-all duration-300'>
								<Image
									src='/Logo/screen_logo-2.png'
									alt='Logo'
									width={60}
									height={60}
									className='h-10 w-10 p-2 group-hover:scale-105 transition-transform duration-300 bg-white/95 rounded-full'
								/>
							</div>
							<div
								className={`font-medium ${
									scrolled ? 'text-gray-900' : 'text-white'
								}`}>
								<div className='text-base leading-tight tracking-wide'>
									Career
								</div>
								<div
									className={`text-xs leading-tight ${
										scrolled ? 'text-gray-600' : 'text-gray-300'
									}`}>
									Institute
								</div>
							</div>
						</Link>
					</div>

					{/* Search Bar - Appears when search is active */}
					{searchActive && (
						<div className='fixed inset-0 flex items-center justify-center bg-white/95 backdrop-blur-md px-4 z-20'>
							<div className='relative w-full max-w-3xl'>
								<input
									type='text'
									placeholder='Search courses, events, and more...'
									className='w-full py-2.5 pl-10 pr-10 rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent shadow-sm bg-gray-50'
									autoFocus
								/>
								<Search
									size={18}
									className='absolute left-3.5 top-3 text-gray-400'
								/>
								<button
									onClick={toggleSearch}
									className='absolute right-3.5 top-3 text-gray-400 hover:text-gray-600 transition-colors'>
									<X size={18} />
								</button>
							</div>
						</div>
					)}

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-1'>
						{navItems.map((item, index) => (
							<NavItem
								key={index}
								label={item.label}
								href={item.href}
								hasDropdown={item.hasDropdown}
								// dropdownItems={item.dropdownItems}
								scrolled={scrolled}
							/>
						))}
					</div>

					{/* Desktop Action Items */}
					<div className='hidden md:flex items-center space-x-4 ml-4'>
						<button
							onClick={toggleSearch}
							className={`p-1.5 rounded-full transition-colors ${
								scrolled
									? 'text-gray-700 hover:text-gray-900'
									: 'text-white hover:text-gray-300'
							}`}>
							<Search size={16} />
						</button>

						<button
							className={`p-1.5 rounded-full transition-colors relative ${
								scrolled
									? 'text-gray-700 hover:text-gray-900'
									: 'text-white hover:text-gray-300'
							}`}>
							<Bell size={16} />
							<span className='absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full'></span>
						</button>

						<Link
							href='/login'
							className={`flex items-center px-4 py-1.5 rounded-lg transition-all duration-200 border ${
								scrolled
									? 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
									: 'border-gray-600 hover:border-gray-500 bg-white/10 text-white'
							} hover:bg-white/20 group`}>
							<User
								size={14}
								className={`mr-2 ${
									scrolled
										? 'text-gray-600 group-hover:text-gray-800'
										: 'text-gray-300 group-hover:text-white'
								}`}
							/>
							<span className='text-sm font-medium'>Login</span>
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden flex items-center space-x-3'>
						<button
							onClick={toggleSearch}
							className={`p-1.5 rounded-full transition-colors ${
								scrolled ? 'text-gray-700' : 'text-white'
							}`}>
							<Search size={18} />
						</button>

						<button
							onClick={toggleMenu}
							className={`p-1.5 rounded-full focus:outline-none transition-colors ${
								scrolled ? 'text-gray-700' : 'text-white'
							}`}>
							{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className='md:hidden fixed inset-0 bg-white/95 backdrop-blur-md text-gray-800 shadow-lg overflow-y-auto animate-slideDown w-full z-50'>
					<div className='px-4 py-3 space-y-1'>
						{navItems.map((item, index) => (
							<MobileNavItem key={index} label={item.label} href={item.href} />
						))}

						<div className='pt-3 border-t border-gray-100 mt-3 space-y-3'>
							<Link
								href='/login'
								className='flex items-center justify-center w-full px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 font-medium transition-all duration-200 active:bg-gray-50'>
								<User size={16} className='mr-2 text-gray-500' />
								<span className='text-sm'>Login / Register</span>
							</Link>

							<button
								onClick={toggleSearch}
								className='flex items-center justify-center w-full px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 font-medium transition-all duration-200 active:bg-gray-50'>
								<Search size={16} className='mr-2 text-gray-500' />
								<span className='text-sm'>Search</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

// Desktop Navigation Item Component
const NavItem = ({
	label,
	href,
	hasDropdown = false,
	dropdownItems,
	scrolled,
}: {
	label: string;
	href: string;
	hasDropdown?: boolean;
	dropdownItems?: Array<{ label: string; href: string }>;
	scrolled: boolean;
}) => {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<div
			className='relative'
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}>
			<Link
				href={href}
				className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 flex items-center ${
					scrolled
						? 'text-gray-800 hover:text-gray-900'
						: 'text-white hover:text-gray-300'
				}`}>
				{label}
				{hasDropdown && (
					<ChevronDown
						size={12}
						className={`ml-1 transition-transform duration-200 ${
							isHovering ? 'rotate-180' : ''
						} ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}
					/>
				)}
			</Link>

			{/* Render dropdown only if hasDropdown is true */}
			{hasDropdown && isHovering && (
				<div className='absolute top-full left-0 w-56 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden z-10 mt-1 animate-fadeIn border border-gray-100'>
					<div className='py-1'>
						{dropdownItems?.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className='block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors'>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

// Mobile Navigation Item Component
const MobileNavItem = ({ label, href }: { label: string; href: string }) => (
	<Link
		href={href}
		className='block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors active:bg-gray-100'>
		{label}
	</Link>
);

export default Navbar;
