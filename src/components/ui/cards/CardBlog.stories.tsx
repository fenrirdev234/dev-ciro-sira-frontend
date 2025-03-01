import type { Meta, StoryObj } from "@storybook/react";

import { CardBlog } from "./CardBlog";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "ui/CardBlog",
	component: CardBlog,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes

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
	decorators: [
		(Story) => (
			<div className='flex h-[444px] w-[327px] lg:h-[677px] lg:w-[1440px]'>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof CardBlog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
	args: {},
};
