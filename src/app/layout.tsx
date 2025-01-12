import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Responsive from './Responsive';

const inter = Inter({
	variable: '--font-inter-v',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ajna',
	description: 'An Equity and Commodity risk management platform',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Responsive>
				<body
					className={` mx-auto ${inter.className} antialiased`}
				>
					<Header />
					{children}
				</body>
			</Responsive>
		</html>
	);
}
