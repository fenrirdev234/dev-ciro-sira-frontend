import { TextWithArrow } from "../text/TextWithArrow";
import { PaperIcon } from "../icons/PaperIcon";

interface ICardInfo {
	isPrincipal: boolean;
	tag: string;
	title: string;
	readingTime: string;
}

export const CardInfo = ({
	isPrincipal,
	title,
	tag,
	readingTime,
}: ICardInfo) => {
	return (
		<div>
			<div
				className={`inline-block px-6 pt-6 ${isPrincipal ? "bg-proyect-black" : "bg-proyect-white"}`}
			>
				<p className='rounded-full bg-proyect-green px-3 py-1 text-sm font-semibold text-proyect-black'>
					{tag}
				</p>
			</div>
			<div
				className={`w-full max-w-[555px] px-6 py-3 ${isPrincipal ? "lg:p bg-proyect-black" : "bg-proyect-white"}`}
			>
				{isPrincipal ? (
					<h1 className='text-lg font-bold text-proyect-white lg:text-[41px] lg:leading-[54px]'>
						{title}
					</h1>
				) : (
					<h3 className='text-lg font-bold text-proyect-black lg:text-2xl'>
						{title}
					</h3>
				)}
				<div className='flex justify-between pt-[10px]'>
					<TextWithArrow label='Read' isGreen={false} isBlackText={!isPrincipal} />
					<div className='flex items-center gap-2'>
						<PaperIcon />
						<p className='font-normal text-proyect-grey'>{readingTime} read</p>
					</div>
				</div>
			</div>
		</div>
	);
};
