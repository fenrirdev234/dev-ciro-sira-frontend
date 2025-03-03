import Link from "next/link";

import { TextWithArrowLeftAnimation } from "../text/TextWithArrowLeftAnimation";
import { CardInfoBlog } from "./CardInfoBlog";
import { IPost } from "@/models/post.model";
import Image from "next/image";

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
			className={`relative flex h-full w-full items-end px-6 pb-10 lg:pb-36 lg:pl-16`}
		>
			<Image
				src={postImage.url}
				alt={postImage.alt}
				fill={true}
				className='object-cover object-center'
			/>
			<div className='z-10 flex flex-col gap-6'>
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
