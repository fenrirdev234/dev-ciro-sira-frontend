import type { Meta } from "@storybook/react";
import { Today } from "./Today";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "section/Today",
	component: Today,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	/* tags: ["autodocs"], */
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Today>;

export default meta;

export const Primary = {};
