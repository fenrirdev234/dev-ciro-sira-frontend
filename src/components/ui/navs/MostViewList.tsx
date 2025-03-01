import Image from "next/image";
import Link from "next/link";

interface MostViewListProps {
	isDark: boolean;
}

const items = [
	{
		title: "Your TV Sounds Awful. These Soundbars Can Fix That",
		image: "/images/mostViewImage0.webp",
		link: "/",
		alt: "Image of Your TV Sounds Awful. These Soundbars Can Fix That",
	},
	{
		title: "The Small Company at the Center of 'Gamergate 2.0'",
		image: "/images/mostViewImage1.webp",
		link: "/",
		alt: "Image of The Small Company at the Center of 'Gamergate 2.0",
	},
	{
		title: "Craig Wright Is Not Bitcoin Creator Satoshi Nakamoto, Judge Declares",
		image: "/images/mostViewImage2.webp",
		link: "/",
		alt: "Image of Craig Wright Is Not Bitcoin Creator Satoshi Nakamoto, Judge Declares",
	},
	{
		title:
			"Robert F. Kennedy Jr. Targets a Generation of Politically Disaffected, Extremely Online Men",
		image: "/images/mostViewImage3.webp",
		link: "/",
		alt: "Image of Robert F. Kennedy Jr. Targets a Generation of Politically Disaffected, Extremely Online Men",
	},
];
export const MostViewList = ({ isDark }: MostViewListProps) => {
	return (
		<aside className='relative hidden w-full max-w-[304px] xl:block'>
			<div className='sticky top-[148px]'>
				<h2
					className={`pb-6 text-lg font-semibold ${isDark ? "text-proyect-black" : "text-proyect-white"} `}
				>
					Most viewed
				</h2>

				<ul className='flex flex-col gap-3'>
					{items.length > 0 &&
						items.map((item, index) => (
							<li key={index} className='border-b border-proyect-grey3 pb-3'>
								<Link href={item.link} className='flex w-full gap-2'>
									<p className='text-base font-semibold text-proyect-grey'>
										{item.title}
									</p>
									<Image
										className='h-20 w-20'
										width={80}
										height={80}
										src={item.image}
										alt={item.alt}
									/>
								</Link>
							</li>
						))}
				</ul>
			</div>
		</aside>
	);
};
