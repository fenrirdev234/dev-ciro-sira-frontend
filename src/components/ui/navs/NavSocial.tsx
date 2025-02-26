import { FacebookIcon } from "../icons/FacebookLogo";
import { LinkedinIcon } from "../icons/LinkedinLogo";
import { XLogo } from "../icons/XLogo";

const social = [
	{ name: "Facebook", url: "", logo: <FacebookIcon /> },
	{ name: "LinkedIn", url: "", logo: <LinkedinIcon /> },
	{ name: "X", url: "", logo: <XLogo /> },
];

export const NavSocial = () => {
	return (
		<div>
			<ul className='flex gap-6'>
				{social.map((item, index) => (
					<li key={index} className='transition-colors hover:text-proyect-green'>
						<a href={item.url}>{item.logo}</a>
					</li>
				))}
			</ul>
		</div>
	);
};
