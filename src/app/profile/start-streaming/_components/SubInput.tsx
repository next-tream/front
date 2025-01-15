import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { ISubInputProps } from '../type';

export default function SubInput({ onClickSubmit, ...rest }: ISubInputProps) {
	return (
		<form onSubmit={onClickSubmit} className="w-full">
			<input
				{...rest}
				type="text"
				className="h-12 w-full rounded-lg border border-darkGray bg-darkGray px-5 text-sm font-medium text-mainWhite outline-none placeholder:text-mainWhite focus:border-main"
			/>
			{rest.placeholder && rest.placeholder.includes('채팅') && (
				<button type="submit">
					<PaperAirplaneIcon className="absolute right-2 top-[13px] size-5 cursor-pointer" />
				</button>
			)}
		</form>
	);
}
