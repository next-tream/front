import { InputHTMLAttributes } from 'react';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string;
}

export default function TextInput({ title, ...rest }: ITextInputProps) {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center gap-1">
				<p className="text-sm font-semibold text-mainBlack">{title}</p>
				{/* <p className="font-medium text-xs text-error">error</p> */}
			</div>
			<input
				type={rest.type}
				placeholder={rest.placeholder}
				className="h-12 w-full rounded-lg border border-lightGray bg-[transparent] px-5 text-sm font-medium text-mainBlack outline-none focus:border-main"
			/>
		</div>
	);
}
