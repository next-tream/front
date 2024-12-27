import Link from 'next/link';
import { IMenuItemProps } from '@/common/types/menuItem.interface';

export default function MenuItem({
	// anchor,
	children,
	name,
	isAside,
	isSelected = false,
	path,
}: IMenuItemProps) {
	return (
		<Link href={`/${path}`} className="flex cursor-pointer items-center gap-3 hover:text-main">
			{children}
			<p
				className={`text-semibold text-${isAside ? 'xl' : 'base'} ${isSelected && 'text-main'}`}
			>
				{name}
			</p>
		</Link>
	);
}
