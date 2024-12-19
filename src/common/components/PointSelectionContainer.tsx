import { useContext } from 'react';
import { IPointSelectionContainerProps } from '@/common/types/modal.interface';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import PointSelectionButtonsWrapper from '@/common/components/Buttons/PointSelectionButtonsWrapper';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function PointSelectionContainer({
	title,
	context,
	onClickPointButtonHandler,
	onChangePointInputHandler,
}: IPointSelectionContainerProps) {
	const { point } = useContext(context);

	return (
		<>
			<div className="betweenCenter flex-1">
				<p className="w-full text-lg font-bold text-darkGray">{title}</p>
				<div className="center w-3/6 rounded-xl bg-[#EBEDF3] p-2">
					<div className="center gap-2">
						<CurrencyDollarIcon className="size-6 text-main" />
						<input
							type="number"
							className="w-full appearance-none bg-[#EBEDF3] text-lg font-semibold text-mainBlack outline-none"
							onChange={onChangePointInputHandler}
							defaultValue={point}
						/>
						<button className="rounded-full bg-lightGray p-0.5">
							<XMarkIcon className="size-4 text-mainBlack" />
						</button>
					</div>
				</div>
			</div>
			<PointSelectionButtonsWrapper point={point} onClick={onClickPointButtonHandler} />
		</>
	);
}
