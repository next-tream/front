import { IIconLeadingButtonProps } from "@/common/types/button.interface";

export default function IconLeadingButton({ className, children, icon }: IIconLeadingButtonProps) {
	return (
		<button className={className}>
			<div className="text-2xl">{icon}</div>
			{children}
		</button>
	);
}
