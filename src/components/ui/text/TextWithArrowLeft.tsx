import { LeftArrowIcon } from "../icons/LeftArrowIcon";

interface TextWithArrowLeft {
	label: string;
}

export const TextWithArrowLeft = ({ label }: TextWithArrowLeft) => {
	return (
		<p className='flex items-center gap-2 text-sm font-bold text-proyect-white'>
			<span>
				<LeftArrowIcon />
			</span>
			<span>{label}</span>
		</p>
	);
};
