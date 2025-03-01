import type { Meta } from "@storybook/react";

import { SocialSection } from "./SocialSection";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "section/SocialSection",
	component: SocialSection,
} satisfies Meta<typeof SocialSection>;

export default meta;

export const Primary = {};
