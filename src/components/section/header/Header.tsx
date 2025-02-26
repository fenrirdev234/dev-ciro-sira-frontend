"use client";

import { BigLogo } from "@/components/ui/icons/BigLogo";
import { LittleLogo } from "@/components/ui/icons/LittleLogo";

import { TextWithArrowAnimation } from "@/components/ui/text/TextWithArrowAnimation";
import useModalStore from "@/stores/modalStore";
import Link from "next/link";

interface IHeader {
	isSticky: boolean;
}
export const Header = ({ isSticky }: IHeader) => {
	const { toggleModal } = useModalStore();

	return (
		<header
			className={`flex justify-between bg-proyect-black px-6 py-4 opacity-80 backdrop-blur-sm lg:px-16 ${isSticky ? "sticky top-0 z-40" : ""} `}
		>
			<Link href={"/"}>
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
		</header>
	);
};
