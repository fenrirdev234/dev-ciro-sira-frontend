import { NavSocial } from "@/components/ui/navs/NavSocial";

export const SocialSection = () => {
	return (
		<section className='relative w-full justify-self-start pb-10 xl:max-w-[250px] xl:justify-self-auto'>
			<div className='sticky top-[148px]'>
				<h2 className='pb-6 text-base font-bold lg:text-lg'>Share on</h2>
				<NavSocial />
			</div>
		</section>
	);
};
