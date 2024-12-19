import { ButtonHTMLAttributes } from 'react';

export interface IChildrenProps {
	children: React.ReactNode;
}

export interface IBaseButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	tmp?: boolean;
}

export interface IIconLeadingButtonProps extends IBaseButtonStyleProps {
	icon: string;
}

export interface ITheme {
	id: string;
	name: string;
	icon: string;
}

export interface IThemeSelectionButtonProps {
	theme: ITheme;
	isSelected?: boolean;
	onChangeThemeHandler: (id: string, checked: boolean) => void;
}

export interface IMenuItem {
	anchor: string;
	name: string;
	icon: React.ReactNode;
}
