import { ISettingCardProps } from '@/common/types/setting.interface';

export default function SettingCard({ children, title }: ISettingCardProps) {
	return (
		<>
			<div className="text-2xl font-bold text-mainWhite">{title}</div>
			<div className="flexCol gap-3 rounded-lg bg-mainWhite p-4">{children}</div>
		</>
	);
}
