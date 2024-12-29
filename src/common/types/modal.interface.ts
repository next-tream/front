import { Context, MouseEvent } from 'react';

import { IChildrenProps } from '@/common/types/children.interface';
import { ITextInput } from './textInput.interface';
import { MODAL_CONSTANTS } from '@/common/constants/modal.const';
import { TInputChangeEvent } from './handler.type';

export type ModalKey = keyof typeof MODAL_CONSTANTS;

export interface IModalConfig {
	readonly title: string;
	readonly description: string;
	readonly mainButtonLabel: string;
	readonly subButtonLabel: string;
	readonly inputs: readonly ITextInput[];
}

export type TModal = Record<ModalKey, IModalConfig>;

export interface IBaseModalProps extends IChildrenProps {
	type: ModalKey;
	showCloseButton?: boolean;
	onMainButtonClick?: () => void;
	onSubButtonClick?: () => void;
}

export interface IKakaoAuthModalProps {
	authenticationTime: number;
	email?: string;
}

export interface IPointChargeModalProps {
	amount: number;
}

export interface IPointSelectionContainerProps {
	title: string;
	context: Context<{
		point: number;
		amount: number;
	}>;
	onClickPointButtonHandler: (event: MouseEvent<HTMLButtonElement>) => void;
	onChangePointInputHandler: (event: TInputChangeEvent) => void;
}

export interface IPointSelectionButtonProps {
	point: number;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ITimerProps {
	time: number;
}
