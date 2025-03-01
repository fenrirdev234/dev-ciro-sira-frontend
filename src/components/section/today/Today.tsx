import { Card } from "@/components/ui/cards/Card";
const todayCard = {
	title: "Your Kid May Already Be Watching AI-Generated Videos on YouTube",
	category: "Diversity & Inclusion",
	readingTime: "6 mins",
	postImage: {
		url: "/images/exampleImage.webp",
		alt: "Your Kid May Already Be Watching AI-Generated Videos on YouTube",
	},
	postId: "/",
};

export const Today = () => {
	return (
		<section className='pb-9 md:pb-16'>
			<h2 className='hidden pb-6 text-lg font-semibold text-proyect-white lg:block'>
				Today story
			</h2>
			<div className='aspect-[327/378] md:aspect-[1310/544]'>
				<Card
					isPrincipal={true}
					title={todayCard.title}
					category={todayCard.category}
					readingTime={todayCard.readingTime}
					postImage={todayCard.postImage}
					postId={todayCard.postId}
				/>
			</div>
		</section>
	);
};
