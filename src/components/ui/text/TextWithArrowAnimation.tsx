"use client";

import { Vector } from "../icons/Vector";
import { motion } from "motion/react";

interface TextWithArrowProps {
	label: string;
	isGreen?: boolean;
	isBlackText?: boolean;
}

export const TextWithArrowAnimation = ({
	label,
	isGreen = true,
	isBlackText = true,
}: TextWithArrowProps) => {
	return (
		<motion.p
			className='flex cursor-pointer items-center gap-2 text-base font-semibold'
			whileHover='whileHover'
		>
			<motion.span
				className={`${isBlackText ? "text-proyect-black" : "text-proyect-white"}`}
				variants={{
					whileHover: {
						x: "-4px",
					},
				}}
			>
				{label}
			</motion.span>
			<motion.span
				className={` ${isGreen ? "text-proyect-green" : "text-proyect-purple2"}`}
				variants={{
					whileHover: {
						x: "6px",
					},
				}}
			>
				<Vector />
			</motion.span>
		</motion.p>
	);
};
