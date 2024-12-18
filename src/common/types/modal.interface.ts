import { IChildrenProps } from '@/common/types/children.interface';
import MODAL_CONSTANTS from '@/common/constants/modal.const';

export interface IBaseModalProps extends IChildrenProps {
	type: keyof typeof MODAL_CONSTANTS;
	showCloseButton?: boolean;
	onMainButtonClick?: () => void;
	onSubButtonClick?: () => void;
}

export interface IKakaoAuthModalProps {
	authenticationTime: number;
}
