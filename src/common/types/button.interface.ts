import { IChildrenProps } from './children.interface';
import { ITheme } from './object.interface';

export interface IBaseButtonStyleProps extends IChildrenProps {
	className: string;
}

export interface IIconLeadingButtonProps extends IBaseButtonStyleProps {
	icon: string;
}

export interface IThemeSelectionButtonProps {
	theme: ITheme;
	isSelected?: boolean;
	onChangeThemeHandler: (id: string, checked: boolean) => void;
	isTag?: boolean;
}
