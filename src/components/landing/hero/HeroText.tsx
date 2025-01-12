'use client';

import styles from './hero.module.css';

import aeonikPro from '@/fonts/aeonik-pro.font';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const textBg =
	'bg-gradient-to-t from-gray-300 to-white bg-clip-text text-transparent';

const HeroText = ({ className }: { className?: string }) => {
	useGSAP(() => {
		gsap.from('.heroText', {
			y: 80,
			duration: 0.8,
			delay: 1.5,
			stagger: 0.17,
			ease: 'power7.out',
		});
	});

	return (
		<h1
			className={`
					text-center
					overflow-hidden
					${aeonikPro.className}
                    ${className}
                `}
		>
			<span className="block lg:inline-block overflow-hidden text-5xl lg:text-7xl m-2">
				<span className="heroText inline-block">
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText1}`}>
						R
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText2}`}>
						i
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText3}`}>
						s
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText4}`}>
						k
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText5}`}>
						s
					</span>
					<span
						className={`inline-block pb-2 mr-3 ${textBg} ${styles.heroText6}`}
					>
						?
					</span>
				</span>
			</span>
			<span className="block lg:inline-block overflow-hidden text-5xl lg:text-7xl m-2">
				<span className="heroText inline-block">
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText7}`}>
						L
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText8}`}>
						e
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText9}`}>
						v
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText10}`}>
						e
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText11}`}>
						r
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText12}`}>
						a
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText13}`}>
						g
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText14}`}>
						e
					</span>
				</span>
				<span className="heroText inline-block">
					<span
						className={`inline-block pb-2 mr-4 ${textBg} ${styles.heroText15}`}
					>
						{' '}
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText16}`}>
						t
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText17}`}>
						h
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText18}`}>
						e
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText19}`}>
						m
					</span>
					<span className={`inline-block pb-2 ${textBg} ${styles.heroText20}`}>
						!
					</span>
				</span>
			</span>
		</h1>
	);
};

export default HeroText;
