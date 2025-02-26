import { PaperIcon } from "../icons/PaperIcon";
import { WaveIcon } from "../icons/WaveIcon";

interface ICardInfoBlogProps {
	title: string;
	readingTime: string;
	author: {
		name: string;
		image: string;
	};
}

export const CardInfoBlog = ({
	title,
	readingTime,
	author,
}: ICardInfoBlogProps) => {
	return (
		<div>
			<div
				className={`flex w-fit items-center gap-4 bg-proyect-white px-4 pt-4 lg:px-6 lg:pt-6`}
			>
				<div className='flex items-center gap-2'>
					<div
						className='text-proyect-grey3 h-10 w-10 rounded-full bg-cover bg-no-repeat'
						style={{
							backgroundImage: `url(${author.image})`,
						}}
					/>
					<p>By {author.name}</p>
				</div>
				<WaveIcon className='lg:hidden' />
			</div>
			<div className={`w-full max-w-[555px] bg-proyect-white p-4 lg:p-6`}>
				<h1 className='text-2xl font-bold text-proyect-black lg:text-[35px] lg:leading-[42px]'>
					{title}
				</h1>

				<div className='flex pt-2.5 lg:pt-4'>
					<div className='flex items-center gap-2.5'>
						<PaperIcon />
						<p className='text-proyect-grey3 font-normal'>{readingTime} read</p>
					</div>
				</div>
			</div>
		</div>
	);
};
