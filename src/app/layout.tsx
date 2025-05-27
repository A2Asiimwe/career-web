import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Career Institute',
	description: 'IATA & ICAO Approved Training Center',
	icons: {
		icon: '/Logo/Screen_logo-2.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				suppressHydrationWarning={true}
				className={`${geistSans.variable} ${geistMono.variable} antialiased z-10`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
