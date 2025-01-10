import aeonikPro from '@/fonts/aeonik-pro.font';
import Spotlight from './Spotlight';

const Hero = ({ className }: { className?: string }) => {
	return (
		<section
			className={`
		relative
		h-[90vh]
		${className}`}
		>
			<Spotlight />
			<h1
				className={`pt-[173px] 
					text-center
					text-transparent bg-gradient-to-t from-gray-300 to-white bg-clip-text 
					${aeonikPro.className}`}
			>
				<span className="block lg:inline-block text-5xl lg:text-7xl pb-1 m-2">
					Risks?
				</span>
				<span className="block lg:inline-block text-5xl lg:text-7xl pb-1 m-2">
					Leverage them!
				</span>
			</h1>
		</section>
	);
};

export default Hero;
