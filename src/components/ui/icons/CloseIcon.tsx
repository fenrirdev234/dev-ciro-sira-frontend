import { SVGProps } from "react";

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={48}
		height={48}
		viewBox='0 0 48 48'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M34.9829 12.4709L12.4679 34.9859'
			stroke='black'
			strokeWidth={3}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M34.9983 34.9985L12.4618 12.462'
			stroke='black'
			strokeWidth={3}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
