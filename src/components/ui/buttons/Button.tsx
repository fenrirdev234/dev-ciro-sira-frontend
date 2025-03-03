interface ButttonProps {
	/** Button contents */
	label: string;
	/** Button variants */
	variant?: "primary" | "secondary";
	/** Optional click handler */
	onClick?: () => void;
}

export const Button = ({
	label,
	variant = "primary",
	...props
}: ButttonProps) => {
	return (
		<button
			{...props}
			className='leg:w-auto w-full gap-1 bg-proyect-green px-8 py-5 text-lg font-medium text-proyect-black2 transition-colors hover:bg-proyect-black hover:text-proyect-white focus:outline-2 active:text-proyect-white disabled:bg-inherit disabled:text-proyect-grey lg:w-fit'
		>
			{label}
		</button>
	);
};
