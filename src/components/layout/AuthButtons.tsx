import Link from 'next/link';
import styles from './layout.module.css';

const AuthButtons = () => {
	return (
		<>
			<Link
				href="/auth"
				className={`inline-block 
                p-2 mr-2 
                text-[#ffffffe6]`}
			>
				Sign in
			</Link>
			<Link href="/signup" className={`${styles.signUp}`}>
				<span className='hidden lg:inline'>Start Free Trial</span>
                <span className='inline lg:hidden'>Sign Up</span>
			</Link>
		</>
	);
};

export default AuthButtons;
