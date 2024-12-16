import Image from 'next/image';
import React from 'react';

interface IMenuItemProps {
	image: string;
	name: string;
	isSelected?: boolean;
}

export default function MenuItem({ image, name, isSelected = false }: IMenuItemProps) {
	return (
		<div className="flex cursor-pointer items-center gap-3">
			<Image src={image} alt={`${image}_icon`} width={20} height={20} />
			<p className={`text-semibold text-base ${isSelected && 'text-main'} `}>{name}</p>
		</div>
	);
}
