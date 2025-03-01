import Link from "next/link";

import { TextWithArrowLeftAnimation } from "../text/TextWithArrowLeftAnimation";
import { CardInfoBlog } from "./CardInfoBlog";
import { IPost } from "@/models/post.model";

type CardBlogType = Pick<
	IPost,
	"title" | "readingTime" | "author" | "postImage"
>;

export const CardBlog = ({
	title,
	readingTime,
	postImage,
	author,
}: CardBlogType) => {
	return (
		<section
			className={`flex h-full w-full items-end bg-cover bg-center bg-no-repeat px-6 pb-10 lg:pb-36 lg:pl-16`}
			style={{
				backgroundImage: `url(${postImage.url})`,
			}}
		>
			<div className='flex flex-col gap-6'>
				<div className='w-fit'>
					<Link href='/'>
						<TextWithArrowLeftAnimation label={"Blog"} />
					</Link>
				</div>
				<CardInfoBlog title={title} readingTime={readingTime} author={author} />
			</div>
		</section>
	);
};
