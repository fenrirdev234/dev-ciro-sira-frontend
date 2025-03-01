import Link from "next/link";
import { CardInfo } from "./CardInfo";
import { IPost } from "@/models/post.model";

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
			<article
				className={`flex h-full w-full items-end bg-cover bg-center bg-no-repeat p-6`}
				style={{
					backgroundImage: `url(${postImage.url})`,
				}}
			>
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
