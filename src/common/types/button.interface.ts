import { ButtonHTMLAttributes } from 'react';
import { ITag } from './tag.interface';

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
