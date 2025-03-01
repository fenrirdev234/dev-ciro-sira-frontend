"use client";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useState } from "react";
import { ExitIcon } from "../icons/ExitIcon";
interface TagTopicsProps {
	label: string;
	isActive?: boolean;
	onClick?: () => void;
}

export const TagTopics = ({
	label = "TagTopics",

	...props
}: TagTopicsProps) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<LayoutGroup>
			<motion.button
				{...props}
				layout
				whileTap={{ scale: 0.95 }}
				className={`text-nowrap rounded-full px-4 py-2 text-base font-normal ${
					isActive
						? "bg-proyect-green"
						: "outline-solid bg-inherit text-proyect-grey outline outline-1 outline-proyect-grey"
				} `}
				onTap={() => setIsActive(!isActive)}
			>
				<AnimatePresence mode='wait' initial={false}>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='flex'
					>
						{isActive ? (
							<span className='flex gap-2'>
								<span>{label}</span>

								<span className='flex items-center'>
									<ExitIcon />
								</span>
							</span>
						) : (
							<span>{label}</span>
						)}
					</motion.span>
				</AnimatePresence>
			</motion.button>
		</LayoutGroup>
	);
};
