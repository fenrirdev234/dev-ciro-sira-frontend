import type { Meta, StoryObj } from "@storybook/react";

import { CardInfo } from "./CardInfo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "ui/CardInfo",
	component: CardInfo,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes

	args: {
		title: "Your Kid May Already Be Watching AI-Generated Videos on YouTube",
		tag: "Diversity & Inclusion",
		readingTime: "6 mins",
	},
} satisfies Meta<typeof CardInfo>;

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
