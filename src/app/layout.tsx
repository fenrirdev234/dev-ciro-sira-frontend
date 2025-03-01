import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "@/lib/font";
import { ProyectProvider } from "@/Providers/ProyectProvider";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${spaceGrotesk.className} antialiased`}>
				<ProyectProvider>{children}</ProyectProvider>
			</body>
		</html>
	);
}
