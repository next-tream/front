import { CHARGE_POINT_OPTIONS } from '@/common/constants/modal.const';
import { IPointSelectionButtonProps } from '@/common/types/modal.interface';
import PointSelectionButton from './PointSelectionButton';

export default function PointSelectionButtonsWrapper({ onClick }: IPointSelectionButtonProps) {
	return (
		<div className="text-semibold flex flex-1 gap-4">
			{CHARGE_POINT_OPTIONS.map((element, index) => (
				<PointSelectionButton key={index} point={element} onClick={onClick} />
			))}
		</div>
	);
}
