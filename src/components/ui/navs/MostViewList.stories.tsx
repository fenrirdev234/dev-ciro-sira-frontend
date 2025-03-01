import type { Meta, StoryObj } from "@storybook/react";
import { MostViewList } from "./MostViewList";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "ui/MostViewList",
	component: MostViewList,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes

	args: {},
	decorators: [
		(Story) => (
			<div className='flex w-[600px]'>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof MostViewList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dark: Story = {
	args: {
		isDark: true,
	},
};

export const Ligth: Story = {
	args: {
		isDark: false,
	},
};
