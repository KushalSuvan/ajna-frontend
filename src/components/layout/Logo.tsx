import Image from 'next/image';
import Link from 'next/link';
import { IBM_Plex_Sans } from 'next/font/google';

const iBM_Plex_Sans = IBM_Plex_Sans({
	variable: '--work-sans',
	subsets: ['latin'],
	weight: '400',
});

const Logo = ({ className }: { className?: string }) => {
	return (
		<span className={`block ${className}`}>
			<Link
				href="/"
				className="items-center space-between mr-[20px] leading-[40px]"
			>
				<Image
					alt="Ajna logo"
					src="/logo.png"
					width="40"
					height="40"
					className="inline"
				/>
				<span
					className={`inline ml-2 text-[20px] align-baseline leading-normal ${iBM_Plex_Sans.className}`}
				>
					Ajna
				</span>
			</Link>
		</span>
	);
};

export default Logo;
