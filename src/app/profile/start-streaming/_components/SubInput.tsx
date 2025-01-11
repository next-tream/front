import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function SubInput({
	placeholder,
	onClick,
}: {
	placeholder: string;
	onClick?: () => void;
}) {
	return (
		<div className="between relative w-full">
			<input
				type="text"
				placeholder={placeholder}
				className="h-12 w-full rounded-lg border border-darkGray bg-darkGray px-5 text-sm font-medium text-mainWhite outline-none placeholder:text-mainWhite focus:border-main"
			/>
			{placeholder.includes('채팅') && (
				<button onClick={onClick}>
					<PaperAirplaneIcon className="absolute right-2 top-[13px] size-5 cursor-pointer" />
				</button>
			)}
		</div>
	);
}
