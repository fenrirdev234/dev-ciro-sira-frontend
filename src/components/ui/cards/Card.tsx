import Link from "next/link";
import { CardInfo } from "./CardInfo";

interface CardProps {
	isPrincipal: boolean;
	tag: string;
	title: string;
	readingTime: string;

	backgroundImage: string;
	postLink: string;
}
export const Card = ({
	title,
	tag,
	readingTime,
	backgroundImage,
	isPrincipal,
	postLink,
}: CardProps) => {
	return (
		<Link href={`/${postLink}`}>
			<article
				className={`flex flex-1 items-end bg-cover bg-no-repeat p-6`}
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			>
				<CardInfo
					isPrincipal={isPrincipal}
					title={title}
					readingTime={readingTime}
					tag={tag}
				/>
			</article>
		</Link>
	);
};
