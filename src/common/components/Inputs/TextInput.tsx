import { ITextInputProps } from '@/common/types/input.interface';

export default function TextInput({
	errors = {},
	title,
	isWhiteTitle,
	trailingIcon,
	onClickTrailingIconHandler,
	...rest
}: ITextInputProps) {
	return (
		<div className="flexCol w-full gap-1">
			<div className="flex items-center gap-1">
				<p
					className={`text-sm font-semibold ${isWhiteTitle ? `text-mainWhite` : `text-mainBlack`}`}
				>
					{title}
				</p>
				<p className="text-xs font-medium text-mainRed">
					{errors[rest.name as keyof typeof errors]}
				</p>
			</div>

			<div className="relative w-full">
				<input
					className={`h-12 w-full rounded-lg border border-lightGray bg-[transparent] px-5 text-sm font-medium outline-none focus:border-main ${isWhiteTitle ? 'text-mainWhite' : 'text-mainBlack'}`}
					{...rest}
				/>
				<div className="cursor-pointer" onClick={onClickTrailingIconHandler}>
					{trailingIcon}
				</div>
			</div>
		</div>
	);
}
