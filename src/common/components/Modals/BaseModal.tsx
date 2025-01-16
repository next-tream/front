'use client';

import BaseButton from '@/common/components/Buttons/BaseButton';
import CloseButton from '@/common/components/Buttons/CloseButton';
import { IBaseModalProps } from '@/common/types/modal.interface';
import MODAL_CONFIG from '@/common/constants/modal.const';
import { splitByDotAndRenderParagraphs } from '@/common/utils/splitByDotAndRenderParagraphs';
import { useEffect } from 'react';
import { useToggle } from '@/common/hooks/useToggle';
import { useRouter } from 'next/navigation';

export default function BaseModal({
	children,
	type,
	isCloseButton = true,
	onMainButtonClick,
	onSubButtonClick,
}: IBaseModalProps) {
	const router = useRouter();
	const { title, description, mainButtonLabel, subButtonLabel } = MODAL_CONFIG[type];
	const { isToggle: isOpen, onClickToggle } = useToggle(true);

	const onClickCloseHandler = () => {
		onClickToggle();
		if (type === 'logout' || type === 'pointCharge') router.back();
		else router.push('/');
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isOpen]);

	return (
		<>
			<div className="fixed inset-0 z-40 bg-mainBlack bg-opacity-50" />
			<div className="center fixed inset-0 z-50">
				<div className="flexCol relative h-1/2 min-h-[544px] w-1/3 min-w-[350px] max-w-md gap-8 rounded-2xl bg-mainWhite px-6 pb-4 pt-11">
					{isCloseButton && <CloseButton onClick={onClickCloseHandler} />}
					<div className="flexColCenter gap-7">
						<div className="text-4xl font-bold text-mainBlack">{title}</div>

						{description && (
							<div className="flexColCenter font-semibold text-mainBlack">
								{splitByDotAndRenderParagraphs(description)}
							</div>
						)}
					</div>

					<div className="h-full">{children}</div>

					<div className="flex gap-5">
						{subButtonLabel && (
							<BaseButton
								className="baseSubBtn"
								onClick={onSubButtonClick}
								type="button"
							>
								{subButtonLabel}
							</BaseButton>
						)}
						{mainButtonLabel && (
							<BaseButton
								className="basePrimaryBtn"
								onClick={onMainButtonClick}
								type="submit"
							>
								{mainButtonLabel}
							</BaseButton>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
