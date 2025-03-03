import { BigLogo } from "@/components/ui/icons/BigLogo";
import { NavSocial } from "@/components/ui/navs/NavSocial";

export const Footer = () => {
	return (
		<footer className='mx-6 mb-6 flex justify-center bg-proyect-purple2'>
			<div className='flex w-full max-w-[1440px] flex-col justify-center gap-14 bg-proyect-purple2 px-6 py-16 md:gap-10 md:px-[66px]'>
				<div className='flex flex-col gap-14 md:flex-row md:justify-between md:gap-10'>
					<div className='flex justify-center'>
						<BigLogo />
					</div>

					<div className='flex justify-center text-proyect-white'>
						<NavSocial />
					</div>
				</div>
				<p className='flex flex-col gap-2 text-center text-sm font-normal text-proyect-white md:flex-row'>
					<span>© Copyright Lite-Tech.</span>
					<span>All Rights Reserved</span>
				</p>
			</div>
		</footer>
	);
};
