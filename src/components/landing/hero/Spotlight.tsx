import styles from './hero.module.css';

const Spotlight = ({ className }: { className?: string }) => {
	return (
		<div
			className={`
    ${styles.spotlight}
    ${className}`}
		></div>
	);
};

export default Spotlight;
