import type { Meta } from "@storybook/react";
import { RelatedPosts } from "./RelatedPosts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "section/RelatedPosts",
	component: RelatedPosts,
} satisfies Meta<typeof RelatedPosts>;

export default meta;

export const Primary = {};
