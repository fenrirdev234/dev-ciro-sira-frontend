import { ACCEPTED_IMAGE_MIME_TYPES, FIELDSIZE } from "@/config/constants";
import { z } from "zod";

export const postFormSchema = z.object({
	title: z
		.string()
		.nonempty()
		.min(3, "Title must be at least 3 characters long")
		.max(128, "Title must be less than 128 characters long"),

	image: z
		.any()
		.refine((files) => {
			return files?.[0]?.size <= FIELDSIZE;
		}, `Max image size is 4MB.`)
		.refine(
			(files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
			"Only .jpg, .jpeg, .png and .webp formats are supported.",
		),
});

export type PostFormType = z.infer<typeof postFormSchema>;

export interface IPostPagination {
	docs: IPost[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: number;
	nextPage: number;
}

export interface IPost {
	author: Author;
	postImage: PostImage;
	title: string;
	readingTime: string;
	category: string;
	postId: string;
	createdAt: string;
}

export interface Author {
	photo: Photo;
	name: string;
}

export interface Photo {
	url: string;
	alt: string;
}

export interface PostImage {
	url: string;
	alt: string;
}

export interface BlurHash {
	hash: string;
	width: number;
	height: number;
}
