import styles from './hero.module.css'

const Aurora = ({ className }: { className?: string }) => {
	return (
		<div
			aria-hidden
			className={`${styles.aurora1} ${className}`}
		></div>
	);
};

export default Aurora;
