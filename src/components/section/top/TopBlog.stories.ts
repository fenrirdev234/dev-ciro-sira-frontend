import type { Meta } from "@storybook/react";

import { TopBlog } from "./TopBlog";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "section/TopBlog",
	component: TopBlog,
	args: {
		title: "Your Kid May Already Be Watching AI-Generated Videos on YouTube",
		readingTime: "6 mins",
		author: {
			name: "Natsu Kim",
			photo: { url: "/images/authorImg.webp", alt: "" },
		},
		postImage: {
			url: "/images/exampleImage.webp",
			alt: "Your Kid May Already Be Watching AI-Generated Videos on YouTube",
		},
	},
} satisfies Meta<typeof TopBlog>;

export default meta;

export const Primary = {};
