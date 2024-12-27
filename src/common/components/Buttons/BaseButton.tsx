import { IBaseButtonStyleProps } from '@/common/types/button.interface';

export default function BaseButton({ className, children, ...rest }: IBaseButtonStyleProps) {
	return (
		<button className={className} onClick={rest.onClick}>
			{children}
		</button>
	);
}
