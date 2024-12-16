import Image from 'next/image';
import React from 'react';

interface IMenuItem {
	image: string;
	name: string;
	isSelected?: boolean;
}

export default function MenuItem({ image, name, isSelected = false }: IMenuItem) {
	return (
		<div className="flex cursor-pointer items-center gap-[0.75rem]">
			<Image
				src={image}
				alt={`${image}_icon`}
				width={20}
				height={20}
				className={`text-base ${isSelected ? 'text-main' : ''}`}
			/>
			<p className={`text-semibold text-base ${isSelected ? 'text-main' : ''} `}>{name}</p>
		</div>
	);
}
