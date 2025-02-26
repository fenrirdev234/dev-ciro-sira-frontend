import type { Meta, StoryObj } from "@storybook/react";
import { TextWithArrowLeftAnimation } from "./TextWithArrowLeftAnimation";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "ui/TextWithArrowLeftAnimation",
	component: TextWithArrowLeftAnimation,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		backgrounds: {
			default: "Dark",
		},
	},

	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof TextWithArrowLeftAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Green: Story = {
	args: {
		label: "Button",
	},
};
