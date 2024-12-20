import { ButtonHTMLAttributes } from 'react';
import { ITag } from './object.interface';

export interface IBaseButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	tmp?: boolean;
}

export interface IIconLeadingButtonProps extends IBaseButtonStyleProps {
	icon: string;
}

export interface ITagSelectionButtonProps {
	tag: ITag;
	isSelected?: boolean;
	onChangeTagHandler: (id: string, checked: boolean) => void;
	isTag?: boolean;
}
