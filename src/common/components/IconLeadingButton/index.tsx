import { IIconLeadingButtonProps } from '@/common/types/children.interface';
import React from 'react';

const buttonPropsObject = {
	primary: {
		style: 'h-[52px] w-full rounded-3xl text-xl font-bold text-white flex justify-center items-center bg-main gap-1',
	},
	sub: {
		style: 'h-[52px] w-full rounded-3xl text-xl font-bold text-black flex justify-center items-center bg-lightGray gap-1',
	},
};

export default function IconLeadingButton({ style, children, icon }: IIconLeadingButtonProps) {
	return (
		<button className={buttonPropsObject[style].style}>
			<div className="text-2xl">{icon}</div>
			{children}
		</button>
	);
}
