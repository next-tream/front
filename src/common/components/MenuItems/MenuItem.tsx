import Link from 'next/link';
import { IMenuItemProps } from '@/common/types/menuItem.interface';

export default function MenuItem({ anchor, children, name, isSelected = false }: IMenuItemProps) {
	return (
		<Link href={`/#${anchor}`}>
			<div className="hover:text-main flex cursor-pointer items-center gap-3">
				{children}
				<p
					className={`text-semibold text-${anchor ? 'xl' : 'base'} ${isSelected && 'text-main'}`}
				>
					{name}
				</p>
			</div>
		</Link>
	);
}
