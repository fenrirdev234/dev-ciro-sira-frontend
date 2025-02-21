import { SVGProps } from "react";

export const Check = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={16}
			height={13}
			viewBox='0 0 16 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M15.5172 0.456856C15.8172 0.742496 15.8288 1.21723 15.5432 1.5172L5.46084 12.1053L0.441301 6.50035C0.164967 6.19178 0.191095 5.71763 0.49966 5.4413C0.808225 5.16496 1.28238 5.19109 1.55871 5.49965L5.49464 9.89466L14.4569 0.482804C14.7425 0.182833 15.2172 0.171216 15.5172 0.456856Z'
				fill='#383837'
			/>
		</svg>
	);
};
