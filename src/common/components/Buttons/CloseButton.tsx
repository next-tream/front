import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CloseButton() {
	return (
		<div className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-lightGray">
			<XMarkIcon className="size-6 text-subBlack" />
		</div>
	);
}
