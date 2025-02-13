import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CloseButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-lightGray"
			type="button"
		>
			<XMarkIcon className="size-6 text-subBlack" />
		</button>
	);
}
