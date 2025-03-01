import { Footer } from "@/components/section/footer/Footer";
import { Header } from "@/components/section/header/Header";
import { FormModal } from "@/components/ui/form/FormModal";
import Post1 from "@/markdown/post1.mdx";

import { IPost, IPostPagination } from "@/models/post.model";
import { SocialSection } from "@/components/section/Social/SocialSection";
import { MostViewList } from "@/components/ui/navs/MostViewList";
import { TopBlog } from "@/components/section/top/TopBlog";
import { RelatedPosts } from "@/components/section/relatedPosts/RelatedPosts";

export default async function BlogPost({
	params,
}: {
	params: { slug: string };
}) {
	console.log(`${process.env.NEXT_PUBLIC_API_URL}posts?limit=3`);
	console.log(params);
	const slug = (await params).slug;
	const resId = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${slug}`);
	const resAll = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts?limit=3`);

	const dataId: IPost = await resId.json();
	const dataAll: IPostPagination = await resAll.json();

	return (
		<div className='relative min-h-screen w-full bg-proyect-white'>
			<Header />
			<main className='flex w-full justify-center'>
				<div className='w-full max-w-[1440px]'>
					<TopBlog
						title={dataId.title}
						readingTime={dataId.readingTime}
						postImage={dataId.postImage}
						author={dataId.author}
					/>
					<section className='flex w-full justify-center gap-[30px] px-6 pt-[88px] lg:px-16'>
						<SocialSection />
						<article className='flex w-full max-w-[640px] flex-1 justify-center'>
							<div className='prose prose-quoteless prose-h1:mb-[12px] prose-h1:text-[19px] prose-h1:font-bold prose-h1:leading-[29px] prose-p:my-[0px] prose-p:pb-[64px] prose-p:text-[16px] prose-p:font-normal prose-p:leading-[27px] prose-blockquote:mb-[64px] prose-blockquote:ml-[16px] prose-blockquote:mt-0 prose-blockquote:border-l-[4px] prose-blockquote:border-proyect-green prose-blockquote:p-[16px] prose-blockquote:text-[19px] prose-blockquote:font-bold prose-blockquote:leading-[29px] prose-img:my-[0px] prose-img:aspect-[109/98] sm:prose-img:aspect-auto lg:prose-h1:text-[21px] lg:prose-h1:leading-[32px] lg:prose-p:leading-[29px] lg:prose-blockquote:ml-[32px] lg:prose-blockquote:p-[24px] lg:prose-blockquote:text-[21px] lg:prose-blockquote:not-italic lg:prose-blockquote:leading-[32px]'>
								<Post1 />
							</div>
						</article>
						<MostViewList isDark={true} />
					</section>
					<RelatedPosts posts={dataAll.docs} />
				</div>
			</main>
			<Footer />
			<FormModal />
		</div>
	);
}
