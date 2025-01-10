'use client';

import styles from './layout.module.css';

import AuthButtons from './AuthButtons';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ className }: { className?: string }) => {
	return (
		<header
			className={`fixed
			top-0 left-0 
            w-[100%] p-[20px] pl-[4%]
            bg-[rgba(0,0,0,0)] backdrop-blur-sm
            flex justify-between lg:justify-around items-center

            text-[14px]

			z-[108]

			${styles.header}
            ${className}`}
		>
			<span className="header-left">
				<Logo />
			</span>
			<span className="header-center hidden lg:inline">
				<NavBar largeScreen={true} />
			</span>
			<span className="header-right flex items-center justify-between">
				<AuthButtons />
				<NavBar largeScreen={false} className="inline lg:hidden" />
			</span>
		</header>
	);
};

export default Header;
