"use client";

import { BigLogo } from "@/components/ui/icons/BigLogo";
import { LittleLogo } from "@/components/ui/icons/LittleLogo";
import type { Variants } from "framer-motion";
import { TextWithArrowAnimation } from "@/components/ui/text/TextWithArrowAnimation";
import useModalStore from "@/stores/modalStore";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

export const Header = () => {
	const { toggleModal } = useModalStore();

	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();
	const lastYRef = useRef(0);

	useMotionValueEvent(scrollY, "change", (y) => {
		const difference = y - lastYRef.current;
		if (Math.abs(difference) > 180) {
			setHidden(difference > 0);
			lastYRef.current = y;
		}
	});

	return (
		<motion.header
			animate={hidden ? "hidden" : "visible"}
			initial='visible'
			whileHover={hidden ? "peeking" : "visible"}
			onFocusCapture={hidden ? () => setHidden(false) : undefined}
			variants={
				{
					visible: { y: "0%" },
					hidden: { y: "-90%" },
					peeking: { y: "0%", cursor: "pointer" },
				} as Variants
			}
			transition={{ duration: 0.2 }}
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
		</motion.header>
	);
};
