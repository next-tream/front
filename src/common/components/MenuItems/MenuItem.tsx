import Link from 'next/link';

interface IMenuItemProps {
	anchor: string;
	children: React.ReactNode;
	name: string;
	isSelected?: boolean;
}

export default function MenuItem({ anchor, children, name, isSelected = false }: IMenuItemProps) {
	return (
		<Link href={`/#${anchor}`}>
			<div className="flex cursor-pointer items-center gap-3">
				{children}
				<p className={`text-semibold text-xl ${isSelected && 'text-main'} `}>{name}</p>
			</div>
		</Link>
	);
}
