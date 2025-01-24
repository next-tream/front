import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ITag } from './tag.interface';

export interface IBaseButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	tmp?: boolean;
}

export interface IIconLeadingButtonProps extends IBaseButtonStyleProps {
	icon: ReactNode;
}

export interface ITagSelectionButtonProps {
	tag: ITag;
	isSelected?: boolean;
	onChangeTagHandler: (id: number, checked: boolean) => void;
	isTag?: boolean;
}

export interface ITagSelectionButtonsWrapperProps {
	isTag?: boolean;
	selectedTags: number[];
	onChangeTagHandler: (id: number, checked: boolean) => void;
}
