import type { Meta } from "@storybook/react";

import { Topics } from "./Topics";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "section/Topics",
	component: Topics,
} satisfies Meta<typeof Topics>;

export default meta;

export const Primary = {};
