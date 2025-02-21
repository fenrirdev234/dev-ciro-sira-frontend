import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"proyect-green": "#D8F34E",
				"proyect-black": "#000000",
				"proyect-black2": "#240F35",
				"proyect-white": "#FFFFFF",
				"proyect-white2": "#FEFDF9",
				"proyect-grey": "#8C8C8C",
				"proyect-grey2": "#F6F6F6",
				"proyect-red": "#FF2F2F",
				"proyect-purple": "#B97BE6",
				"proyect-purple2": "#9C73F7",
			},
		},
	},
	plugins: [],
} satisfies Config;
