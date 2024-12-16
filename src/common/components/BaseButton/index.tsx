import React from 'react';
import { IBaseButtonProps } from '@/common/types/children.interface';

const buttonStyles = {
	primary: {
		style: 'flex h-[52px] w-full items-center justify-center rounded-xl text-xl font-bold text-white bg-main',
	},
	sub: {
		style: 'flex h-[52px] w-full items-center justify-center rounded-xl text-xl font-bold text-white bg-gray',
	},
};

export default function BaseButton({ style, children }: IBaseButtonProps) {
	return <button className={buttonStyles[style].style}>{children}</button>;
}
