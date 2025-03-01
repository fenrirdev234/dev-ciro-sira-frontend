"use client";

import { BigLogo } from "@/components/ui/icons/BigLogo";
import { LittleLogo } from "@/components/ui/icons/LittleLogo";

import { TextWithArrowAnimation } from "@/components/ui/text/TextWithArrowAnimation";
import useModalStore from "@/stores/modalStore";
import Link from "next/link";

export const Header = () => {
	const { toggleModal } = useModalStore();

	return (
		<header
			className={`fixed top-0 z-40 flex w-full justify-center bg-proyect-black opacity-80 backdrop-blur-sm`}
		>
			<div className='flex w-full max-w-[1440px] justify-between px-6 py-4 lg:px-16'>
				<Link href={"/"} aria-label={"go to home"}>
					<div className='lg:hidden'>
						<LittleLogo />
					</div>
					<div className='hidden lg:flex'>
						<BigLogo />
					</div>
				</Link>
				<button
					onClick={() => {
						toggleModal();
					}}
				>
					<TextWithArrowAnimation
						isGreen={true}
						isBlackText={false}
						label='New post'
					/>
				</button>
			</div>
		</header>
	);
};
