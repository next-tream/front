import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function SubInput({ placeholder }: { placeholder: string }) {
	return (
		<div className="between relative w-full">
			<input
				type="text"
				placeholder={placeholder}
				className="border-darkGray text-mainWhite focus:border-main bg-darkGray placeholder:text-mainWhite h-12 w-full rounded-lg border px-5 text-sm font-medium outline-none"
			/>
			{placeholder.includes('채팅') && (
				<button>
					<PaperAirplaneIcon className="absolute right-2 top-[13px] size-5" />
				</button>
			)}
		</div>
	);
}
