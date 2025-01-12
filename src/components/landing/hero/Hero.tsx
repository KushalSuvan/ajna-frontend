'use client';

import Spotlight from './Spotlight';
import HeroText from './HeroText';
import Aurora from './Aurora';

const Hero = ({ className }: { className?: string }) => {
	return (
		<section
			className={`
		relative
		h-[90vh]
		${className}`}
		>
			<Spotlight className='absolute h-[90%] w-[100%]'/>
			<HeroText className="pt-[25vh] lg:pt-[40vh]" />
			<Aurora className='absolute h-[90%] w-[100%] top-0 left-0 z-[-5]'/>
		</section>
	);
};

export default Hero;
