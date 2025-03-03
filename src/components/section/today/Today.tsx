"use client";
import { Card } from "@/components/ui/cards/Card";
import { motion } from "motion/react";
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
const myAnimation = {
	initial: { opacity: 0, y: 40 },
	inView: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } },
};
export const Today = () => {
	return (
		<section className='pb-9 md:pb-16'>
			<h2 className='hidden pb-6 text-lg font-semibold text-proyect-white lg:block'>
				Today story
			</h2>
			<motion.div
				initial='initial'
				whileInView='inView'
				viewport={{ once: true }}
				variants={myAnimation}
				className='aspect-[327/378] md:aspect-[1310/544]'
			>
				<Card
					isPrincipal={true}
					title={todayCard.title}
					category={todayCard.category}
					readingTime={todayCard.readingTime}
					postImage={todayCard.postImage}
					postId={todayCard.postId}
				/>
			</motion.div>
		</section>
	);
};
