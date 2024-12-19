import { ButtonHTMLAttributes } from 'react';
import { ITheme } from './object.interface';

export interface IBaseButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	tmp?: boolean;
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
