import Link from 'next/link';
import { IMenuItemProps } from '@/common/types/menuItem.interface';

export default function MenuItem({ children, name, isAside, path, onClick }: IMenuItemProps) {
	return (
		<Link href={`/${path}`} className="flex cursor-pointer items-center gap-3 hover:text-main">
			{children}
			<button onClick={onClick} className={`text-semibold text-${isAside ? 'xl' : 'base'} `}>
				{name}
			</button>
		</Link>
	);
}
