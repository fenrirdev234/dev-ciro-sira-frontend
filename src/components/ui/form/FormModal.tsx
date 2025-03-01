"use client";
import useModalStore from "@/stores/modalStore";
import { ModalContainer } from "../modals/ModalContainer";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";

import { postFormSchema, PostFormType } from "@/models/post.model";
import { POST_API_ENDPOINTS } from "@/services/endpoints";
import { postAxios } from "@/services/posts.services";
import { ProgressBar } from "../bar/ProgressBar";
import { VectorUp } from "../icons/VectorUp";
import { loadAbort } from "@/utils/loadAbort.utils";
import { motion } from "motion/react";

type formStateType = "INIT" | "LOAD" | "FINISH";

export const FormModal = () => {
	const AbortFormFetch = loadAbort();

	const { isOpen, toggleModal } = useModalStore();
	const [uploadProgresss, setUploadProgress] = useState(0);
	const [fetchError, setFetchError] = useState(false);
	const [formState, setFormState] = useState<formStateType>("INIT");

	const {
		reset,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<PostFormType>({
		resolver: zodResolver(postFormSchema),
		defaultValues: {
			title: "",
			image: undefined,
		},
		mode: "onSubmit",
	});

	const resetForm = () => {
		reset();
		setFetchError(false);
		setFormState("INIT");
	};

	const onHandleSubmit: SubmitHandler<PostFormType> = async ({
		title,
		image,
	}) => {
		try {
			setFormState("LOAD");
			setFetchError(false);
			const imageFile = image[0];

			const formData = new FormData();
			formData.append("image", imageFile);
			formData.append("title", title);
			formData.append("authorName", "Natsu Kim");
			formData.append("authorPhotoUrl", "/images/authorImg.webp");
			formData.append("authorPhotoAlt", "Photo of Natsu Kim");
			formData.append("category", "DIVERSITY");
			formData.append("postImageDescription", "Lorem itsus");
			formData.append("readingTime", "5 mins");

			await postAxios.post(POST_API_ENDPOINTS.Posts, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress: (data) => {
					//Set the progress value to show the progress bar

					setUploadProgress(Math.round((100 * data.loaded) / data.total));
				},
				signal: AbortFormFetch.signal,
			});

			setFormState("FINISH");
		} catch (error) {
			console.log(error);
			setFetchError(true);
		} finally {
			reset();
		}
	};

	const onError = (error: FieldErrors<PostFormType>) => {
		error.title && toast.error(error.title?.message);
		error.image && toast.error(error.image?.message);
	};

	return (
		<ModalContainer isOpen={isOpen} toggleModal={toggleModal}>
			{formState === "FINISH" ? (
				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='flex flex-col items-center gap-12'
				>
					<h3 className='pb-2 text-center text-4xl font-medium'>
						Your post was successfully uploaded!
					</h3>
					<button
						type='button'
						className='w-full bg-proyect-black px-8 py-4 text-lg font-medium text-proyect-white md:w-fit'
						onClick={() => {
							toggleModal();
							resetForm();
						}}
					>
						Done
					</button>
				</motion.section>
			) : (
				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<h3 className='pb-2 text-center text-4xl font-medium'>Upload your post</h3>
					<p className='mb-6 text-center font-normal text-proyect-grey3'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam vitae,
						sapiente ducimus eveniet in velit.
					</p>
					<form
						onSubmit={handleSubmit(onHandleSubmit, onError)}
						className='flex flex-col items-center'
					>
						<div className='flex w-full max-w-[400px] flex-col items-center'>
							<div className='flex w-full flex-col pb-6'>
								<input
									{...register("title", { required: true })}
									className={`w-full border-2 border-proyect-black px-4 py-3.5 text-base font-medium text-proyect-black2 outline-none focus:shadow-proyect-blur-purple ${errors.title ? "border-proyect-red" : "border-proyect-black"}`}
									type='text'
								/>
								{errors.title && (
									<p className='pt-1 font-medium text-proyect-red'>
										{errors.title.message}
									</p>
								)}
							</div>

							{formState == "LOAD" ? (
								<ProgressBar
									percent={uploadProgresss}
									isError={fetchError}
									abortFetch={AbortFormFetch.abort}
									resetForm={resetForm}
								/>
							) : (
								<motion.label
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									htmlFor='image'
									className={`flex w-full cursor-pointer justify-center border-2 border-proyect-black py-4`}
								>
									<span className='flex gap-2.5 font-medium text-proyect-black'>
										<span className=''>Upload Image</span>
										<VectorUp />
									</span>
									<input
										id='image'
										type='file'
										className='sr-only'
										{...register("image", { required: true })}
									/>
								</motion.label>
							)}

							<button
								type='submit'
								className='mt-10 w-full bg-proyect-black px-8 py-4 text-lg font-medium text-proyect-white md:w-fit'
							>
								Confirm
							</button>
						</div>
					</form>
				</motion.section>
			)}
		</ModalContainer>
	);
};
