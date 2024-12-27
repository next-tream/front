import { ITextInputProps } from '@/common/types/input.interface';

export default function TextInput({ errors = {}, title, ...rest }: ITextInputProps) {
	return (
		<div className="flexCol gap-1">
			<div className="flex items-center gap-1">
				<p className="text-sm font-semibold text-mainBlack">{title}</p>
				<p className="text-xs font-medium text-mainRed">{errors[rest.name]}</p>
			</div>
			<input
				name={rest.name}
				type={rest.type}
				placeholder={rest.placeholder}
				className="h-12 w-full rounded-lg border border-lightGray bg-[transparent] px-5 text-sm font-medium text-mainBlack outline-none focus:border-main"
			/>
		</div>
	);
}
