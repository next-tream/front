import { IBaseButtonStyleProps } from '@/common/types/children.interface';

export default function BaseButton({ className, children }: IBaseButtonStyleProps) {
	return <button className={className}>{children}</button>;
}
