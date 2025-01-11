'use client';

import Spotlight from './Spotlight';
import HeroText from './HeroText';

const Hero = ({ className }: { className?: string }) => {
	return (
		<section
			className={`
		relative
		h-[90vh]
		${className}`}
		>
			<Spotlight className='absolute h-[90%] w-[100%]'/>
			<HeroText className="pt-[173px]" />
		</section>
	);
};

export default Hero;
