"use client";

import { TagTopics } from "@/components/ui/tag/TagTopics";
import useEmblaCarousel from "embla-carousel-react";

const topicsList = [
	"All",
	"Diversity & Inclusion",
	"Tech companies",
	"Crypto",
	"Security",
	"Global",
	"Leaks",
];

export const Topics = () => {
	const [emblaRef] = useEmblaCarousel({ dragFree: true });
	return (
		<section className='flex flex-col gap-6 pb-6 lg:flex-row lg:items-center lg:pb-14'>
			<h2 className='flex items-center text-lg font-bold text-proyect-white lg:pb-0'>
				Topics
			</h2>
			<div className='w-full overflow-x-hidden' ref={emblaRef}>
				<div className='flex gap-2 py-2 pl-2'>
					{topicsList.map((topic, index) => (
						<TagTopics key={index} label={topic} />
					))}
				</div>
			</div>
		</section>
	);
};
