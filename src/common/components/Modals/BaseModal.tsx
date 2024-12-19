import BaseButton from '@/common/components/Buttons/BaseButton';
import CloseButton from '@/common/components/Buttons/CloseButton';
import { IBaseModalProps } from '@/common/types/modal.interface';
import MODAL_CONFIG from '@/common/constants/modal.const';
import { splitByDotAndRenderParagraphs } from '@/common/utils/splitByDotAndRenderParagraphs';

export default function BaseModal({
	children,
	type,
	showCloseButton = true,
	onMainButtonClick,
	onSubButtonClick,
}: IBaseModalProps) {
	const { title, description, mainButtonLabel, subButtonLabel } = MODAL_CONFIG[type];

	return (
		<>
			<div className="bg-mainBlack fixed inset-0 z-40 bg-opacity-50" />
			<div className="center fixed inset-0 z-50">
				<div className="flexCol bg-mainWhite relative h-1/2 min-h-[544px] w-1/3 max-w-md gap-8 rounded-2xl px-6 pb-4 pt-11">
					{showCloseButton && <CloseButton />}
					<div className="flexColCenter gap-7">
						<div className="text-mainBlack text-4xl font-bold">{title}</div>

						{description && (
							<div className="flexColCenter text-mainBlack font-semibold">
								{splitByDotAndRenderParagraphs(description)}
							</div>
						)}
					</div>

					<div className="h-full">{children}</div>

					<div className="flex gap-5">
						{subButtonLabel && (
							<BaseButton className="baseSubBtn" onClick={onSubButtonClick}>
								{subButtonLabel}
							</BaseButton>
						)}
						{mainButtonLabel && (
							<BaseButton className="basePrimaryBtn" onClick={onMainButtonClick}>
								{mainButtonLabel}
							</BaseButton>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
