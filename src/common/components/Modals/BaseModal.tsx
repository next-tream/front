import BaseButton from '@/common/components/Buttons/BaseButton';
import CloseButton from '@/common/components/Buttons/CloseButton';
import { IBaseModalProps } from '@/common/types/modal.interface';
import { splitByDotAndRenderParagraphs } from '@/common/utils/splitByDotAndRenderParagraphs';

export default function BaseModal({
	children,
	title,
	description,
	mainButtonLabel,
	subButtonLabel,
	showCloseButton = true,
	onMainButtonClick,
	onSubButtonClick,
}: IBaseModalProps) {
	return (
		<div className="relative flex h-[544px] max-h-full w-1/3 max-w-md flex-col gap-8 rounded-2xl bg-mainWhite px-6 pb-4 pt-11">
			{showCloseButton && <CloseButton />}
			<div className="center flex-col gap-7">
				<div className="text-4xl font-bold text-mainBlack">{title}</div>

				{description && (
					<div className="center flex-col font-semibold text-mainBlack">
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
	);
}
