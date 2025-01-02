'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function CloseButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-lightGray"
		>
			<XMarkIcon className="size-6 text-subBlack" />
		</button>
	);
}
