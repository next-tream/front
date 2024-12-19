import { IBaseButtonStyleProps } from "@/common/types/button.interface";

export default function ProfileEditButton({ className, children }: IBaseButtonStyleProps) {
	return <button className={className}>{children}</button>;
}
