"use client";

import { Card } from "@/components/ui/cards/Card";

import { Subscribe } from "../subscribe/Subscribe";
import { IPostPagination } from "@/models/post.model";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";
import { motion } from "motion/react";
import { Button } from "../../ui/buttons/Button";

export const PrincipalSection = ({ postAll }: { postAll: IPostPagination }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const posts = postAll.docs;
	const handleLoad = useDebouncedCallback((page: string) => {
		const params = new URLSearchParams(searchParams);
		if (page) {
			params.set("page", page);
		} else {
			params.delete(page);
		}
		replace(`${pathname}?${params.toString()}`);
	}, 400);

	const myAnimationLeft = {
		initial: { opacity: 0, x: -40 },
		inView: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.4 } },
	};
	const myAnimationRigth = {
		initial: { opacity: 0, x: 40 },
		inView: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.4 } },
	};

	return (
		<section className='lx:max-w-[974px] flex w-full flex-col items-center gap-8 pb-[56px] md:gap-14 lg:pb-[98px]'>
			{posts[0] && (
				<div className='flex w-full flex-col gap-8 sm:aspect-[974/910] sm:flex-row'>
					<div className='flex w-full sm:w-[55%]'>
						<motion.div
							initial='initial'
							whileInView='inView'
							viewport={{ once: true }}
							variants={myAnimationLeft}
							className='flex aspect-[327/378] flex-1 sm:aspect-auto'
						>
							<Card
								title={posts[0].title}
								category={posts[0].category}
								postImage={posts[0].postImage}
								readingTime={posts[0].readingTime}
								isPrincipal={false}
								postId={posts[0].postId}
							/>
						</motion.div>
					</div>
					{posts[1] && (
						<div className='flex aspect-[327/378] w-full flex-col gap-8 sm:w-[45%]'>
							<motion.div
								initial='initial'
								whileInView='inView'
								viewport={{ once: true }}
								variants={myAnimationRigth}
								className='flex aspect-[327/378] flex-1 sm:aspect-auto'
							>
								<Card
									title={posts[1].title}
									category={posts[1].category}
									postImage={posts[1].postImage}
									readingTime={posts[1].readingTime}
									isPrincipal={false}
									postId={posts[1].postId}
								/>
							</motion.div>
							{posts[2] && (
								<motion.div
									initial='initial'
									whileInView='inView'
									viewport={{ once: true }}
									variants={myAnimationRigth}
									className='flex aspect-[327/378] flex-1 sm:aspect-auto'
								>
									<Card
										title={posts[2].title}
										category={posts[2].category}
										postImage={posts[2].postImage}
										readingTime={posts[2].readingTime}
										isPrincipal={false}
										postId={posts[2].postId}
									/>
								</motion.div>
							)}
						</div>
					)}
				</div>
			)}

			<Subscribe />

			{posts[3] && (
				<div className='flex w-full flex-col gap-8 sm:aspect-[974/910] sm:flex-row'>
					<div className='flex aspect-[327/378] w-full flex-col gap-8 sm:w-[45%]'>
						<motion.div
							initial='initial'
							whileInView='inView'
							viewport={{ once: true }}
							variants={myAnimationLeft}
							className='flex aspect-[327/378] flex-1 sm:aspect-auto'
						>
							<Card
								title={posts[3].title}
								category={posts[3].category}
								postImage={posts[3].postImage}
								readingTime={posts[3].readingTime}
								isPrincipal={false}
								postId={posts[3].postId}
							/>
						</motion.div>

						{posts[4] && (
							<motion.div
								initial='initial'
								whileInView='inView'
								viewport={{ once: true }}
								variants={myAnimationLeft}
								className='flex aspect-[327/378] flex-1 sm:aspect-auto'
							>
								<Card
									title={posts[4].title}
									category={posts[4].category}
									postImage={posts[4].postImage}
									readingTime={posts[4].readingTime}
									isPrincipal={false}
									postId={posts[4].postId}
								/>
							</motion.div>
						)}
					</div>
					{posts[5] && (
						<div className='flex w-full sm:w-[55%]'>
							<motion.div
								initial='initial'
								whileInView='inView'
								viewport={{ once: true }}
								variants={myAnimationRigth}
								className='flex aspect-[327/378] flex-1 sm:aspect-auto'
							>
								<Card
									title={posts[5].title}
									category={posts[5].category}
									postImage={posts[5].postImage}
									readingTime={posts[5].readingTime}
									isPrincipal={false}
									postId={posts[5].postId}
								/>
							</motion.div>
						</div>
					)}
				</div>
			)}

			{posts[6] && (
				<div className='flex w-full flex-col gap-8 sm:aspect-[974/910] sm:flex-row'>
					<div className='flex w-full sm:w-[55%]'>
						<motion.div
							initial='initial'
							whileInView='inView'
							viewport={{ once: true }}
							variants={myAnimationLeft}
							className='flex aspect-[327/378] flex-1 sm:aspect-auto'
						>
							<Card
								title={posts[6].title}
								category={posts[6].category}
								postImage={posts[6].postImage}
								readingTime={posts[6].readingTime}
								isPrincipal={false}
								postId={posts[6].postId}
							/>
						</motion.div>
					</div>
					{posts[7] && (
						<div className='flex aspect-[327/378] w-full flex-col gap-8 sm:w-[45%]'>
							<motion.div
								initial='initial'
								whileInView='inView'
								viewport={{ once: true }}
								variants={myAnimationRigth}
								className='flex aspect-[327/378] flex-1 sm:aspect-auto'
							>
								<Card
									title={posts[7].title}
									category={posts[7].category}
									postImage={posts[7].postImage}
									readingTime={posts[7].readingTime}
									isPrincipal={false}
									postId={posts[7].postId}
								/>
							</motion.div>
							{posts[8] && (
								<motion.div
									initial='initial'
									whileInView='inView'
									viewport={{ once: true }}
									variants={myAnimationRigth}
									className='flex aspect-[327/378] flex-1 sm:aspect-auto'
								>
									<Card
										title={posts[8].title}
										category={posts[8].category}
										postImage={posts[8].postImage}
										readingTime={posts[8].readingTime}
										isPrincipal={false}
										postId={posts[8].postId}
									/>
								</motion.div>
							)}
						</div>
					)}
				</div>
			)}

			{postAll.hasNextPage && (
				<Button
					label='Load more'
					onClick={() => handleLoad(postAll.nextPage.toString())}
				/>
			)}
		</section>
	);
};
