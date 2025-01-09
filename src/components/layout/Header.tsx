'use client';

import AuthButtons from './AuthButtons';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ className }: { className?: string }) => {
	return (
		<header
			className={`sticky 
            w-[100%] p-[20px]
            bg-[rgba(0,0,0,0)] backdrop-blur-sm
            flex justify-between items-center

            text-[14px]
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
