import React from 'react';

interface IMenuItemProps {
	children: React.ReactNode;
	name: string;
	isSelected?: boolean;
}

export default function MenuItem({ children, name, isSelected = false }: IMenuItemProps) {
	return (
		<div className="flex cursor-pointer items-center gap-3">
			{children}
			<p className={`text-semibold text-xl ${isSelected && 'text-main'} `}>{name}</p>
		</div>
	);
}
