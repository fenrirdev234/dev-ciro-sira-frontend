"use client";
import { Card } from "@/components/ui/cards/Card";
import { TextWithArrowAnimation } from "@/components/ui/text/TextWithArrowAnimation";

import { IPost } from "@/models/post.model";
import useModalStore from "@/stores/modalStore";
import useEmblaCarousel from "embla-carousel-react";

export const RelatedPosts = ({ posts }: { posts: IPost[] }) => {
	const [emblaRef] = useEmblaCarousel({ dragFree: true });
	const { toggleModal } = useModalStore();
	return (
		<section className='mx-6 flex justify-center'>
			<div className='w-full max-w-[1088px]'>
				<div className=''>
					<div className='flex justify-between'>
						<h2 className='text-2xl font-bold'>Related posts</h2>
						<button
							onClick={() => {
								toggleModal();
							}}
						>
							<TextWithArrowAnimation isGreen={false} label='New post' />
						</button>
					</div>
					<div className='flex justify-center pb-12 pt-6 lg:pb-32 lg:pt-2.5'>
						<div ref={emblaRef} className='w-full overflow-x-hidden lg:hidden'>
							<div className='flex gap-8'>
								{posts.map((post, index) => (
									<div key={index} className='aspect-[235/378] lg:aspect-[340/378]'>
										<Card
											isPrincipal={false}
											title={post.title}
											category={post.category}
											readingTime={post.readingTime}
											postImage={post.postImage}
											postId={post.postId}
										/>
									</div>
								))}
							</div>
						</div>
						<div className='hidden overflow-x-hidden lg:block'>
							<div className='flex gap-8'>
								{posts.map((post, index) => (
									<div key={index} className='aspect-[327/378] lg:aspect-[340/378]'>
										<Card
											isPrincipal={false}
											title={post.title}
											category={post.category}
											readingTime={post.readingTime}
											postImage={post.postImage}
											postId={post.postId}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
