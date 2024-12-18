import { IBaseButtonStyleProps } from '@/common/types/children.interface';

export default function ProfileEditButton({ className, children }: IBaseButtonStyleProps) {
	return <button className={className}>{children}</button>;
}
