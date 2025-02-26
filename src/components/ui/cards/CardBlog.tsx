import Link from "next/link";

import { TextWithArrowLeftAnimation } from "../text/TextWithArrowLeftAnimation";
import { CardInfoBlog } from "./CardInfoBlog";
import { CardInfo } from "./CardInfo";

interface CardProps {
	isPrincipal: boolean;
	title: string;
	tag: string;
	readingTime: string;
	backgroundImage: string;
	author: {
		name: string;
		image: string;
	};
}

export const CardBlog = ({
	title,
	tag,
	readingTime,
	backgroundImage,
	author,
	isPrincipal,
}: CardProps) => {
	return (
		<section
			className={`flex flex-1 items-end bg-cover bg-no-repeat px-6 pb-10`}
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		>
			<div className='pb-2.5 lg:pb-36 lg:pl-10'>
				<Link href='/'>
					<TextWithArrowLeftAnimation label={"Blog"} />
				</Link>
				<CardInfoBlog title={title} readingTime={readingTime} author={author} />
			</div>
		</section>
	);
};
