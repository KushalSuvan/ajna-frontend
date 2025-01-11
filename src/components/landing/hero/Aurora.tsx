const Aurora = ({ className }: { className?: string }) => {
	return (
		<div
			aria-hidden
			className={`absolute top-0 left-0 w-[100%] ${className}`}
		></div>
	);
};

export default Aurora;
