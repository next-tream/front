import { IChildrenProps } from '@/common/types/children.interface';

export interface IBaseModalProps extends IChildrenProps {
	title: string;
	description?: string;
	mainButtonLabel?: string;
	subButtonLabel?: string;
	showCloseButton?: boolean;
	onMainButtonClick?: () => void;
	onSubButtonClick?: () => void;
}

export interface IKakaoAuthModalProps {
	authenticationTime: number;
}
