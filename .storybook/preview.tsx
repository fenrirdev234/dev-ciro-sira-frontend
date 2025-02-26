import type { Preview } from "@storybook/react";
import { spaceGrotesk } from "../src/lib/font/index";
import "@/app/globals.css";

import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const projectViewports = {
	proyectMobile: {
		name: "Proyect Mobile",
		styles: {
			width: "375px",
			height: "667px",
		},
	},
	proyectDesk: {
		name: "proyect Desk",
		styles: {
			width: "1440px",
			height: "1366px",
		},
	},
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		viewport: {
			viewports: {
				...projectViewports,
				...MINIMAL_VIEWPORTS,
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
