"use client";

import { FacebookIcon } from "../icons/FacebookLogo";
import { LinkedinIcon } from "../icons/LinkedinLogo";
import { XLogo } from "../icons/XLogo";
import { MagneticWrapper } from "../wrapper/MagneticWrapper";

export const NavSocial = () => {
	return (
		<div>
			<ul className='flex gap-8'>
				<li>
					<MagneticWrapper>
						<a
							href={""}
							aria-label={`go to Facebook site`}
							className='transition-colors hover:text-proyect-green'
						>
							<FacebookIcon />
						</a>
					</MagneticWrapper>
				</li>
				<li>
					<MagneticWrapper>
						<a
							href={""}
							aria-label={`go to LinkedIn site`}
							className='transition-colors hover:text-proyect-green'
						>
							<LinkedinIcon />
						</a>
					</MagneticWrapper>
				</li>
				<li>
					<MagneticWrapper>
						<a
							className='transition-colors hover:text-proyect-green'
							href={""}
							aria-label={`go to X site`}
						>
							<XLogo />
						</a>
					</MagneticWrapper>
				</li>
			</ul>
		</div>
	);
};
