'use client'

import AuthButtons from './AuthButtons';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ className }: { className?: string }) => {

	return (
		<header
			className={`sticky 
            w-[100%] 
            bg-[rgba(0,0,0,0)] backdrop-blur-sm
            flex space-around
            ${className}`}
		>
            <span className='header-left'>
			<Logo /></span>
            <span className='header-center'>
                <NavBar />
            </span>
            <span className='header-right'>
                <AuthButtons />
            </span>
		</header>
	);
};

export default Header;