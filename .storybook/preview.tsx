import type { Preview } from "@storybook/react";
import { spaceGrotesk } from "../src/lib/font/index";
import "@/app/globals.css";
/* import { useEffect } from "react"; */

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => {
			/* useEffect(() => {
				document.body.classList.add(spaceGrotesk.className, "antialiased");
			}, []); */
			return (
				<div className={`${spaceGrotesk.className} antialiased`}>
					<Story />
				</div>
			);
		},
	],
};

export default preview;
