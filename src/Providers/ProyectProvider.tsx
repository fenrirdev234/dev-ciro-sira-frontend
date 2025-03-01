"use client";

import { Toaster } from "sonner";

interface Props {
	children: React.ReactNode;
}

export const ProyectProvider = ({ children }: Props) => {
	return (
		<>
			{children}
			<Toaster richColors position='top-center' />
		</>
	);
};
