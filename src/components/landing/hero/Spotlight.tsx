import styles from './hero.module.css';

const Spotlight = ({ className }: { className?: string }) => {
	return (
		<div
			className={`
    absolute
    h-[60%]
    w-[100%]
    ${styles.spotlight}
    ${className}`}
		></div>
	);
};

export default Spotlight;
