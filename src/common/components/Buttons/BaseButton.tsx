import { IBaseButtonStyleProps } from '@/common/types/button.interface';

export default function BaseButton({ className, children }: IBaseButtonStyleProps) {
	return <button className={className}>{children}</button>;
}
