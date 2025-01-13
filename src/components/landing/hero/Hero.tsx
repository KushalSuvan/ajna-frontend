'use client';

import styles from './hero.module.css'

import Spotlight from './Spotlight';
import HeroText from './HeroText';
import Aurora from './Aurora';
import GodParticle from './GodParticle';

const Hero = ({ className }: { className?: string }) => {
	return (
		<section
			className={`
		relative
		h-[90vh]
		overflow-hidden
		${styles.heroSection}
		${className}`}
		>
			<Spotlight className='absolute h-[90%] w-[100%] top-0 left-0'/>
			<HeroText className="pt-[25vh] lg:pt-[40vh]" />
			<Aurora className='absolute h-[90%] w-[100%] top-0 left-0 z-[-5]'/>
			<GodParticle className='absolute bg-[#030014] h-[100%] w-[100%] top-0 left-0 z-[-10]'/>
		</section>
	);
};

export default Hero;
