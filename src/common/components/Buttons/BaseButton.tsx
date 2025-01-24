'use client';

import { IBaseButtonStyleProps } from '@/common/types/button.interface';
import { useFormStatus } from 'react-dom';

export default function BaseButton({ className, children, type, ...rest }: IBaseButtonStyleProps) {
	const { pending } = useFormStatus();

	return (
		<>
			{pending ? (
				<button className={className} onClick={rest.onClick} type={type} disabled={pending}>
					{children}
				</button>
			) : (
				<div>loading ui</div>
			)}
		</>
	);
}
