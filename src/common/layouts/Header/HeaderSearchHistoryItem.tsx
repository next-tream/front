import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { IChildrenProps } from '@/common/types/children.interface';

export default function SearchHistoryItem({ children }: IChildrenProps) {
	return (
		<li>
			<div className="flex items-center gap-2">
				<MagnifyingGlassIcon className="size-4" />
				<p className="flex">{children}</p>
			</div>
		</li>
	);
}
