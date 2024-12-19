import { InputHTMLAttributes } from 'react';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string;
}

export default function TextInput({ title, ...rest }: ITextInputProps) {
	return (
		<div className="flexCol gap-1">
			<div className="flex items-center gap-1">
				<p className="text-mainBlack text-sm font-semibold">{title}</p>
				{/* <p className="font-medium text-xs text-error">error</p> */}
			</div>
			<input
				type={rest.type}
				placeholder={rest.placeholder}
				className="border-lightGray text-mainBlack focus:border-main h-12 w-full rounded-lg border bg-[transparent] px-5 text-sm font-medium outline-none"
			/>
		</div>
	);
}
