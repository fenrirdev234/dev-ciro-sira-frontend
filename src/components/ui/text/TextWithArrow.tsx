import { Vector } from "../icons/Vector";

interface TextWithArrowProps {
	label: string;
	isGreen?: boolean;
	isBlackText?: boolean;
}

export const TextWithArrow = ({
	label,
	isGreen = true,
	isBlackText = true,
}: TextWithArrowProps) => {
	return (
		<p className='flex items-center gap-2 text-base font-semibold'>
			<span
				className={`${isBlackText ? "text-proyect-black" : "text-proyect-white"}`}
			>
				{label}
			</span>
			<span
				className={` ${isGreen ? "text-proyect-green" : "text-proyect-purple2"}`}
			>
				<Vector />
			</span>
		</p>
	);
};
