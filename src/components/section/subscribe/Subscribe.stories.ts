import type { Meta } from "@storybook/react";
import { Subscribe } from "./Subscribe";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "section/Subscribe",
	component: Subscribe,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	/* tags: ["autodocs"], */
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Subscribe>;

export default meta;

export const Primary = {};
