"use client";

import { Button } from "@/components/ui/buttons/Button";
import useModalStore from "@/stores/modalStore";
export const Subscribe = () => {
	const { toggleModal } = useModalStore();

	return (
		<section className='flex w-full justify-center bg-proyect-purple2 py-10 lg:p-10'>
			<div className='flex max-w-[247px] flex-col lg:w-full lg:max-w-none lg:flex-row lg:items-center lg:justify-between'>
				<p className='pb-7 text-[27px] font-normal text-proyect-white lg:pb-0'>
					Sign up for our newsletter <strong>and get daily updates</strong>
				</p>
				<Button
					label='Subscribe'
					onClick={() => {
						toggleModal();
					}}
				/>
			</div>
		</section>
	);
};
