import localFont from 'next/font/local';

const aeonikPro = localFont({
	src: [
		{
			path: './AeonikPro-Bold.otf',
			weight: '700',
			style: 'bold',
		},
		{
			path: './AeonikPro-Light.otf',
			weight: '300',
			style: 'light',
		},
		{
			path: './AeonikPro-Regular.otf',
			weight: '400',
			style: 'normal',
		},
	],
});

export default aeonikPro;
