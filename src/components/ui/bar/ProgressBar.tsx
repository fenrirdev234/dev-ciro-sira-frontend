import { Check } from "../icons/Check";

interface IProgressBar {
	percent: number;
	isError: boolean;
	abortFetch: () => void;
	resetForm: () => void;
}

export const ProgressBar = ({
	percent = 0,
	isError = false,
	abortFetch,
	resetForm,
}: IProgressBar) => {
	return (
		<div className='w-full'>
			{isError ? (
				<div className='flex flex-col gap-2'>
					<p className='text-base font-medium'>Failed to upload your file</p>
					<div className='flex h-2.5 w-full bg-proyect-grey'>
						<div className='h-2.5 bg-proyect-red' style={{ width: `100%` }} />
					</div>
					<div className='flex justify-end'>
						<button
							type='button'
							className='w-fit text-base font-semibold'
							onClick={resetForm}
						>
							Retry
						</button>
					</div>
				</div>
			) : percent >= 100 ? (
				<div className='flex flex-col gap-2'>
					<p className='flex items-center gap-2 pb-3 text-base font-medium'>
						<span>Upload successful</span>
						<Check />
					</p>
					<div className='flex h-2.5 w-full bg-proyect-grey'>
						<div className='h-2.5 bg-proyect-black' style={{ width: "100%" }} />
					</div>
				</div>
			) : (
				<div className='flex flex-col gap-2'>
					<p className='text-base font-medium'>Loading image {percent}%</p>
					<div className='flex h-2.5 w-full bg-proyect-grey'>
						<div
							className='h-2.5 bg-proyect-black'
							style={{ width: `${percent}%` }}
						/>
					</div>
					<div className='flex justify-end'>
						<button
							type='button'
							onClick={abortFetch}
							className='w-fit text-base font-semibold'
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
