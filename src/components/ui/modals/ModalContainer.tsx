import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";
import { CloseIcon } from "../icons/CloseIcon";

interface ModalContainerProps {
	isOpen: boolean;
	children?: ReactNode;
	toggleModal: (isOpen: boolean) => void;
}

export const ModalContainer = ({
	isOpen,
	toggleModal,
	children,
}: ModalContainerProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => toggleModal(false)}
					className='fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll p-5'
				>
					<motion.div
						initial={{ scale: 0.4, rotate: "12.5deg" }}
						animate={{ scale: 1, rotate: "0deg" }}
						transition={{ duration: 0.5 }}
						exit={{ scale: 0.4, rotate: "0deg" }}
						onClick={(e) => e.stopPropagation()}
						className='relative w-full max-w-screen-sm cursor-default overflow-hidden border-4 border-proyect-black bg-proyect-green p-10 shadow-proyect-shadow'
					>
						<div className='relative z-10'>
							<div className='flex justify-end p-[10px]'>
								<button onClick={() => toggleModal(false)}>
									<CloseIcon />
								</button>
							</div>
						</div>
						{children && children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
