import { NavSocial } from "@/components/ui/navs/NavSocial";

export const SocialSection = () => {
	return (
		<section className='relative hidden w-full max-w-[250px] xl:block'>
			<div className='sticky top-[148px]'>
				<h4 className='pb-6 text-lg font-bold'>Share on</h4>
				<NavSocial />
			</div>
		</section>
	);
};
