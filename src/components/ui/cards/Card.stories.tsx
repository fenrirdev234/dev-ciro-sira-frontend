import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "ui/Card",
	component: Card,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes

	args: {
		title: "Your Kid May Already Be Watching AI-Generated Videos on YouTube",
		tag: "Diversity & Inclusion",
		readingTime: "6 mins",
		backgroundImage: "/images/exampleImage.webp",
		postLink: "/",
	},
	decorators: [
		(Story) => (
			<div className='flex w-[600px]'>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
	args: {
		isPrincipal: true,
	},
};

export const Secondary: Story = {
	args: {
		isPrincipal: false,
	},
};
