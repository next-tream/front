import { IChildrenProps } from '@/common/types/children.interface';
import { MODAL_CONSTANTS } from '@/common/constants/modal.const';
import { ITextInput } from './textInput.interface';

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
}
