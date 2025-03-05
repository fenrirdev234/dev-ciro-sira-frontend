import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	/* config options here */
	crossOrigin: "anonymous",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*", // Allow images from all domains
			},
			{
				protocol: "http",
				hostname: "*", // Allow images from all domains
			},
		],
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
