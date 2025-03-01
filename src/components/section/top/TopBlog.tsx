import { CardBlog } from "@/components/ui/cards/CardBlog";
import { IPost } from "@/models/post.model";

type TopBlogType = Pick<
	IPost,
	"title" | "readingTime" | "postImage" | "author"
>;

export const TopBlog = ({
	title,
	readingTime,
	postImage,
	author,
}: TopBlogType) => {
	return (
		<section className='aspect-[375/440] md:aspect-[1440/670]'>
			<CardBlog
				author={author}
				title={title}
				readingTime={readingTime}
				postImage={postImage}
			/>
		</section>
	);
};
