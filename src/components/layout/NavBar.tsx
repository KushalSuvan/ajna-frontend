import Link from 'next/link';

const links: { [key: string]: string } = {
	Trade: '/trade',
	Learn: '/learn',
	Analysis: '/analysis',
	Blog: '/blog',
	Changelog: '/changelog',
};

const NavBar = ({ className }: { className?: string }) => {
	return (
		<nav className={`${className}`}>
			<ul className="flex justify-around bg-[#ffffff04] border border-[#ffffff25] px-[10px] py-[12px] rounded-[999px]">
				{Object.keys(links).map((key: string) => (
					<li
						key={key}
						className="transition-colors ease-in-out block mx-2 text-[#ffffffe6] hover:text-[#ffffffb6]"
					>
						<Link href={links[key]}>{key}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
