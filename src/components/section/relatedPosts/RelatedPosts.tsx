"use client";
import { TextWithArrowAnimation } from "@/components/ui/text/TextWithArrowAnimation";
import { TextWithArrowLeftAnimation } from "@/components/ui/text/TextWithArrowLeftAnimation";
import { IPost } from "@/models/post.model";
import useEmblaCarousel from "embla-carousel-react";

export const RelatedPosts = ({ posts }: { posts: IPost[] }) => {
	const [emblaRef] = useEmblaCarousel({ dragFree: true });
	return (
		<section className='flex justify-center'>
			<div className='px-[176px] pb-12 pl-6 pt-10'>
				<div className='flex max-w-[1080px] justify-between'>
					<h2 className='text-2xl font-bold'>Related posts</h2>
					<TextWithArrowAnimation isGreen={false} label='New post' />
				</div>
			</div>
		</section>
	);
};
