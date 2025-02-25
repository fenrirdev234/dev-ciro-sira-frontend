import { BigLogo } from "@/components/ui/icons/BigLogo";
import { NavSocial } from "@/components/ui/navs/NavSocial";

export const Footer = () => {
	return (
		<footer className='px-6 pb-6'>
			<div className='flex w-full flex-col justify-center gap-14 bg-proyect-purple2 px-6 py-16 lg:gap-10 lg:px-[66px]'>
				<div className='flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-10'>
					<div className='flex justify-center'>
						<BigLogo />
					</div>

					<div className='flex justify-center text-proyect-white'>
						<NavSocial />
					</div>
				</div>
				<p className='flex flex-col gap-2 text-center text-sm font-normal text-proyect-white lg:flex-row'>
					<span>© Copyright Lite-Tech.</span>
					<span>All Rights Reserved</span>
				</p>
			</div>
		</footer>
	);
};
