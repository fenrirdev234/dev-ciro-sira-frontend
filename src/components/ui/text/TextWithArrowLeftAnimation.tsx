"use client";

import { LeftArrowIcon } from "../icons/LeftArrowIcon";
import { motion } from "motion/react";

interface TextWithArrowLeft {
	label: string;
}

export const TextWithArrowLeftAnimation = ({ label }: TextWithArrowLeft) => {
	return (
		<motion.p
			whileHover='whileHover'
			className='flex items-center gap-2 text-sm font-bold text-proyect-white'
		>
			<span>
				<LeftArrowIcon />
			</span>
			<motion.span
				variants={{
					whileHover: {
						x: "4px",
					},
				}}
			>
				{label}
			</motion.span>
		</motion.p>
	);
};
