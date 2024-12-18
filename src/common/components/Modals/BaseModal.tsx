import { IChildrenProps } from '@/common/types/children.interface';
import BaseButton from '@/common/components/Buttons/BaseButton';
import CloseButton from '@/common/components/Buttons/CloseButton';

interface IBaseModalProps extends IChildrenProps {
	title: string;
	description?: string;
	mainButtonLabel?: string;
	subButtonLabel?: string;
	showCloseButton?: boolean;
}

export default function BaseModal({
	children,
	title,
	description,
	mainButtonLabel,
	subButtonLabel,
	showCloseButton = true,
}: IBaseModalProps) {
	return (
		<div className="relative flex h-[544px] max-h-full w-1/3 max-w-md flex-col gap-8 rounded-2xl bg-mainWhite px-6 pb-4 pt-11">
			{showCloseButton && <CloseButton />}
			<div className="center flex-col gap-7">
				<h3 className="text-4xl font-bold text-mainBlack">{title}</h3>

				{description && (
					<div className="center flex-col font-semibold text-mainBlack">
						{description
							.split('.')
							.map((part, index) => part.trim() && <p key={index}>{part.trim()}.</p>)}
					</div>
				)}
			</div>

			<div className="h-full">{children}</div>

			<div className="flex gap-5">
				{subButtonLabel && (
					<BaseButton className="roundBtn baseSubBtn">{subButtonLabel}</BaseButton>
				)}
				{mainButtonLabel && (
					<BaseButton className="roundBtn basePrimaryBtn">{mainButtonLabel}</BaseButton>
				)}
			</div>
		</div>
	);
}
