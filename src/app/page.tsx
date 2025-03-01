import { Footer } from "@/components/section/footer/Footer";
import { Header } from "@/components/section/header/Header";
import { PrincipalSection } from "@/components/section/principal/PrincipalSection";
import { Topics } from "@/components/section/topic/Topics";

import { FormModal } from "@/components/ui/form/FormModal";
import { IPostPagination } from "@/models/post.model";

import { Suspense } from "react";
import { MostViewList } from "@/components/ui/navs/MostViewList";
import { Today } from "@/components/section/today/Today";

export default async function Home({
	searchParams,
}: {
	searchParams?: {
		page?: string;
	};
}) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/`);
	const data: IPostPagination = await res.json();
	const currentPage = Number(searchParams?.page) || 1;

	return (
		<div className='relative min-h-screen w-full bg-proyect-black'>
			<Header />
			<main className='flex w-full justify-center'>
				<div className='bottom-14 w-full max-w-[1440px] px-6 pt-14 lg:px-16 lg:pt-[126px]'>
					<Today />
					<Topics />

					<section className='flex gap-[30px]'>
						<Suspense key={currentPage}>
							<PrincipalSection posts={data.docs} currentPage={currentPage} />
						</Suspense>
						<MostViewList isDark={false} />
					</section>
				</div>
			</main>
			<Footer />
			<FormModal />
		</div>
	);
}
