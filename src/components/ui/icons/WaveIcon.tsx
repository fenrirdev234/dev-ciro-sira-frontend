import { SVGProps } from "react";

export const WaveIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={25}
			height={24}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M18 8C18 8 19.5 9.5 19.5 12C19.5 14.5 18 16 18 16M21 5C21 5 23.5 7.5 23.5 12C23.5 16.5 21 19 21 19'
				stroke='#F78253'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
