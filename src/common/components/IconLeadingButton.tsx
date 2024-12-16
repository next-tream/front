import { IIconLeadingButtonProps } from '@/common/types/children.interface';
import React from 'react';

export default function IconLeadingButton({ className, children, icon }: IIconLeadingButtonProps) {
	return (
		<button className={className}>
			<div className="text-2xl">{icon}</div>
			{children}
		</button>
	);
}
