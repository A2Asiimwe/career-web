// // src/components/layout/Navbar.tsx
// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { ChevronDown, Menu, X, Search, Globe } from 'lucide-react';

// const Navbar = () => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);

// 	const toggleMenu = () => {
// 		setIsMenuOpen(!isMenuOpen);
// 	};

// 	return (
// 		<nav className='bg-[#2a57eb] text-white'>
// 			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
// 				<div className='flex items-center justify-between h-16'>
// 					{/* Logo */}
// 					<div className='flex-shrink-0 flex items-center'>
// 						<Link href='/' className='flex items-center'>
// 							<div className='h-8 w-8 mr-2'>
// 								<Image
// 									src='/images/logo.svg'
// 									alt='Career Institute Logo'
// 									width={32}
// 									height={32}
// 									className='h-8 w-8'
// 								/>
// 							</div>
// 							<div className='font-semibold text-white'>
// 								<div className='text-lg leading-tight'>Career</div>
// 								<div className='text-xs leading-tight'>Institute</div>
// 							</div>
// 						</Link>
// 					</div>

// 					{/* Desktop Navigation */}
// 					<div className='hidden md:flex items-center space-x-2'>
// 						<NavItem label='HOME' href='/' hasDropdown />
// 						<NavItem label='ABOUT' href='/about' hasDropdown />
// 						<NavItem label='COURSES' href='/courses' hasDropdown />
// 						<NavItem label='EVENT' href='/events' hasDropdown />
// 						<NavItem label='BLOG' href='/blog' hasDropdown />
// 						<NavItem label='CONTACT' href='/contact' />
// 						<NavItem label='SUCCESS-STORIES' href='/success-stories' />
// 						<NavItem label='FAQ' href='/faq' />

// 						<div className='pl-4 flex items-center space-x-4'>
// 							<button className='text-white hover:text-gray-200 flex items-center'>
// 								<Globe size={18} />
// 								<span className='ml-1 text-sm'>English</span>
// 							</button>
// 							<button className='text-white hover:text-gray-200'>
// 								<Search size={18} />
// 							</button>
// 						</div>
// 					</div>

// 					{/* Mobile menu button */}
// 					<div className='md:hidden flex items-center space-x-4'>
// 						<button className='text-white hover:text-gray-200'>
// 							<Search size={20} />
// 						</button>
// 						<button
// 							onClick={toggleMenu}
// 							className='text-white hover:text-gray-200 focus:outline-none'>
// 							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Mobile Menu */}
// 			{isMenuOpen && (
// 				<div className='md:hidden bg-[#153fc7] border-t border-[#153bb7] py-2'>
// 					<div className='px-4 pt-2 pb-3 space-y-1'>
// 						<MobileNavItem label='HOME' href='/' />
// 						<MobileNavItem label='ABOUT' href='/about' />
// 						<MobileNavItem label='COURSES' href='/courses' />
// 						<MobileNavItem label='EVENT' href='/events' />
// 						<MobileNavItem label='BLOG' href='/blog' />
// 						<MobileNavItem label='CONTACT' href='/contact' />
// 						<MobileNavItem label='FAQ' href='/faq' />
// 						<div className='pt-2 border-t border-[#153fc7] mt-2'>
// 							<button className='flex items-center text-white py-2'>
// 								<Globe size={18} className='mr-2' />
// 								<span>English</span>
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</nav>
// 	);
// };

// // Desktop Navigation Item
// interface NavItemProps {
// 	label: string;
// 	href: string;
// 	hasDropdown?: boolean;
// }

// const NavItem = ({ label, href, hasDropdown = false }: NavItemProps) => (
// 	<Link
// 		href={href}
// 		className='relative px-3 py-2 text-sm font-medium text-white hover:bg-[#9a1a1a] rounded group'>
// 		<div className='flex items-center'>
// 			{label}
// 			{hasDropdown && <ChevronDown size={16} className='ml-1' />}
// 		</div>
// 		{hasDropdown && (
// 			<div className='absolute hidden group-hover:block top-full left-0 w-48 bg-white text-black rounded shadow-lg z-10'>
// 				<div className='py-1'>
// 					<Link href='#' className='block px-4 py-2 text-sm hover:bg-gray-100'>
// 						Dropdown Item 1
// 					</Link>
// 					<Link href='#' className='block px-4 py-2 text-sm hover:bg-gray-100'>
// 						Dropdown Item 2
// 					</Link>
// 					<Link href='#' className='block px-4 py-2 text-sm hover:bg-gray-100'>
// 						Dropdown Item 3
// 					</Link>
// 				</div>
// 			</div>
// 		)}
// 	</Link>
// );

// // Mobile Navigation Item
// interface MobileNavItemProps {
// 	label: string;
// 	href: string;
// }

// const MobileNavItem = ({ label, href }: MobileNavItemProps) => (
// 	<Link
// 		href={href}
// 		className='block px-3 py-2 text-base font-medium text-white hover:bg-[#153fc7] rounded'>
// 		{label}
// 	</Link>
// );

// export default Navbar;

// src/components/layout/Navbar.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X, Search, Globe } from 'lucide-react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Track which dropdown is open on mobile
	const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
		null
	);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		// Close any open dropdown when toggling the menu
		setOpenMobileDropdown(null);
	};

	const toggleMobileDropdown = (label: string) => {
		if (openMobileDropdown === label) {
			setOpenMobileDropdown(null);
		} else {
			setOpenMobileDropdown(label);
		}
	};

	// About dropdown items
	const aboutDropdownItems = [
		{ label: 'About Us', href: '/about' },
		{ label: 'Our Team', href: '/about/team' },
		{ label: 'Success Stories', href: '/success-stories' },
	];

	return (
		<nav className='bg-[#2a57eb] text-white z-10'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<div className='flex-shrink-0 flex items-center'>
						<Link href='/' className='flex items-center'>
							<div className='h-8 w-8 mr-2 rounded-full overflow-hidden'>
								<Image
									src='https://media.istockphoto.com/id/2154104764/vector/flag-of-uganda-ugandan-flag-flag-icon-standard-color-circle-icon-flag-computer-illustration.jpg?s=612x612&w=0&k=20&c=iZ3dXGFSxGZbMSlILLd8oRI_vp7ILHNYabpGUTOdCLY='
									alt=' Logo'
									width={70}
									height={70}
									className='h-8 w-8'
								/>
							</div>
							<div className='font-semibold text-white'>
								{/* <div className='text-lg leading-tight'>Career</div>
								<div className='text-xs leading-tight'>Institute</div> */}
							</div>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-2 ml-8'>
						<NavItem label='HOME' href='/' hasDropdown />
						<NavItem
							label='ABOUT'
							href='/about'
							hasDropdown
							dropdownItems={aboutDropdownItems}
						/>
						<NavItem label='COURSES' href='/courses' hasDropdown />
						<NavItem label='EVENT' href='/events' hasDropdown />
						<NavItem label='BLOG' href='/blog' hasDropdown />
						<NavItem label='CONTACT' href='/contact' />
						<NavItem label='FAQ' href='/faq' />

						<div className='pl-4 flex items-center space-x-4  ml-8'>
							<button className='text-white hover:text-gray-200 flex items-center'>
								<Globe size={18} />
								<span className='ml-1 text-sm'>English</span>
							</button>
							<button className='text-white hover:text-gray-200'>
								<Search size={18} />
							</button>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden flex items-center space-x-4'>
						<button className='text-white hover:text-gray-200'>
							<Search size={20} />
						</button>
						<button
							onClick={toggleMenu}
							className='text-white hover:text-gray-200 focus:outline-none'>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className='md:hidden bg-[#153fc7] border-t border-[#153bb7] py-2'>
					<div className='px-4 pt-2 pb-3 space-y-1'>
						<MobileNavItem label='HOME' href='/' />
						<MobileNavItemWithDropdown
							label='ABOUT'
							isOpen={openMobileDropdown === 'ABOUT'}
							toggleDropdown={() => toggleMobileDropdown('ABOUT')}
							dropdownItems={aboutDropdownItems}
						/>
						<MobileNavItem label='COURSES' href='/courses' />
						<MobileNavItem label='EVENT' href='/events' />
						<MobileNavItem label='BLOG' href='/blog' />
						<MobileNavItem label='CONTACT' href='/contact' />
						<MobileNavItem label='FAQ' href='/faq' />
						<div className='pt-2 border-t border-[#153fc7] mt-2'>
							<button className='flex items-center text-white py-2'>
								<Globe size={18} className='mr-2' />
								<span>English</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

// Desktop Navigation Item
interface NavItemProps {
	label: string;
	href: string;
	hasDropdown?: boolean;
	dropdownItems?: Array<{ label: string; href: string }>;
}

const NavItem = ({
	label,
	href,
	hasDropdown = false,
	dropdownItems,
}: NavItemProps) => (
	<Link
		href={href}
		className='relative px-3 py-2 text-sm font-medium text-white hover:bg-[#153fc7] rounded group'>
		<div className='flex items-center'>
			{label}
			{hasDropdown && <ChevronDown size={16} className='ml-1' />}
		</div>
		{hasDropdown && (
			<div className='absolute hidden group-hover:block top-full left-0 w-48 bg-white text-black rounded shadow-lg z-10'>
				<div className='py-1'>
					{dropdownItems ? (
						dropdownItems.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className='block px-4 py-2 text-sm hover:bg-gray-100'>
								{item.label}
							</Link>
						))
					) : (
						<>
							<Link
								href='#'
								className='block px-4 py-2 text-sm hover:bg-gray-100'>
								Dropdown Item 1
							</Link>
							<Link
								href='#'
								className='block px-4 py-2 text-sm hover:bg-gray-100'>
								Dropdown Item 2
							</Link>
							<Link
								href='#'
								className='block px-4 py-2 text-sm hover:bg-gray-100'>
								Dropdown Item 3
							</Link>
						</>
					)}
				</div>
			</div>
		)}
	</Link>
);

// Mobile Navigation Item
interface MobileNavItemProps {
	label: string;
	href: string;
}

const MobileNavItem = ({ label, href }: MobileNavItemProps) => (
	<Link
		href={href}
		className='block px-3 py-2 text-base font-medium text-white hover:bg-[#153fc7] rounded'>
		{label}
	</Link>
);

// Mobile Navigation Item with Dropdown
interface MobileNavItemWithDropdownProps {
	label: string;
	isOpen: boolean;
	toggleDropdown: () => void;
	dropdownItems: Array<{ label: string; href: string }>;
}

const MobileNavItemWithDropdown = ({
	label,
	isOpen,
	toggleDropdown,
	dropdownItems,
}: MobileNavItemWithDropdownProps) => (
	<div>
		<button
			onClick={toggleDropdown}
			className='w-full flex items-center justify-between px-3 py-2 text-base font-medium text-white hover:bg-[#153fc7] rounded'>
			<span>{label}</span>
			<ChevronDown
				size={16}
				className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
			/>
		</button>
		{isOpen && (
			<div className='ml-4 mt-1 space-y-1 border-l-2 border-[#3960cf] pl-2'>
				{dropdownItems.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className='block px-3 py-1 text-sm font-medium text-white hover:bg-[#153fc7] rounded'>
						{item.label}
					</Link>
				))}
			</div>
		)}
	</div>
);

export default Navbar;
