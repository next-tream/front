import React from 'react';
import { IPrimaryButtonProps } from '@/common/types/children.interface';

const buttonPropsObject = {
	primary: {
		style: 'flex h-[52px] w-full items-center justify-center rounded-xl text-xl font-bold text-white bg-main',
	},
	sub: {
		style: 'flex h-[52px] w-full items-center justify-center rounded-xl text-xl font-bold text-white bg-gray',
	},
};

export default function BaseButton({ style, children }: IPrimaryButtonProps) {
	return <button className={buttonPropsObject[style].style}>{children}</button>;
}
