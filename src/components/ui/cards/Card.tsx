import Link from "next/link";
import { CardInfo } from "./CardInfo";
import { IPost } from "@/models/post.model";
import Image from "next/image";
type CardType = Pick<
	IPost,
	"title" | "readingTime" | "postImage" | "category" | "postId" | "postImage"
> & { isPrincipal: boolean };

export const Card = ({
	title,
	category,
	readingTime,
	postImage,
	isPrincipal,
	postId,
}: CardType) => {
	return (
		<Link href={`/${postId}`} className='flex-1'>
			<article className={`relative flex h-full w-full items-end p-6`}>
				<Image
					src={postImage.url}
					alt={postImage.alt}
					fill={true}
					className='object-cover object-center'
				/>
				<CardInfo
					isPrincipal={isPrincipal}
					title={title}
					readingTime={readingTime}
					category={category}
				/>
			</article>
		</Link>
	);
};
