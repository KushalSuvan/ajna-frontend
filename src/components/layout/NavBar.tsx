import Link from 'next/link';

const links: { [key: string]: string } = {
	Trade: '/trade',
	Learn: '/learn',
	Analysis: '/analysis',
	Blog: '/blog',
	Changelog: '/changelog',
};

const Burger = ({ className }: { className?: string }) => {
	return (
		<button type="button" className={`${className}`} aria-hidden>
			<div className="h-[1px] w-5 rounded-[999px] bg-white mb-[5px] mx-4"></div>
			<div className="h-[1px] w-5 rounded-[999px] bg-white mb-[5px] mx-4"></div>
			<div className="h-[1px] w-5 rounded-[999px] bg-white mx-4"></div>
		</button>
	);
};

const LargeScreenNav = ({ className }: { className?: string }) => {
	return (
		<nav className={`${className}`}>
			<ul className="flex justify-around bg-[#ffffff04] border border-[#ffffff25] px-[10px] py-[12px] rounded-[999px]">
				{Object.keys(links).map((key: string) => (
					<li
						key={key}
						className="transition-colors ease-in-out block mx-3 text-[#ffffffe6] hover:text-[#ffffffb6]"
					>
						<Link href={links[key]}>{key}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

const NavBar = ({
	className,
	largeScreen,
}: {
	className?: string;
	largeScreen?: boolean;
}) => {
	return largeScreen ? (
		<LargeScreenNav className={className} />
	) : (
		<Burger className={className} />
	);
};

export default NavBar;
