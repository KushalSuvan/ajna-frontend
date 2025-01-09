'use client';

import MediaSizeContext from '@/contexts/MediaSizeContext';
import { useState, useEffect, useCallback } from 'react';

const maxWidthCutoff = 1200;

const debounce = (func: (params: string) => void, delay: number) => {
	let timeout: number | NodeJS.Timeout | undefined = undefined;
	return (params: string) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func(params);
		}, delay);
	};
};

const Responsive = ({ children }: { children: React.ReactNode }) => {
	const [screenSize, setScreenSize] = useState('lg');
	const debouncedSetScreenSize = useCallback(
		debounce((params: string) => {
			setScreenSize(params);
		}, 150),
		[debounce, setScreenSize]
	);

	useEffect(() => {
		setScreenSize(window.innerWidth > maxWidthCutoff ? 'lg' : 'sm');
		
		const handleResize = () => {
			if (window.innerWidth > maxWidthCutoff) debouncedSetScreenSize('lg');
			else if (window.innerWidth <= maxWidthCutoff)
				debouncedSetScreenSize('sm');
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [debouncedSetScreenSize]);

	return (
		<MediaSizeContext.Provider value={screenSize}>
			{children}
		</MediaSizeContext.Provider>
	);
};

export default Responsive;
