import { IPointSelectionButtonProps } from '@/common/types/modal.interface';

export default function PointSelectionButton({ point, onClick }: IPointSelectionButtonProps) {
	return (
		<button
			value={point}
			onClick={onClick}
			className="baseBtn bg-[#EBEDF3] text-sm text-mainBlack"
		>
			{point.toLocaleString()}
		</button>
	);
}
