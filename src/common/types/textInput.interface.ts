import { HTMLInputTypeAttribute } from 'react';
import { ModalKey } from './modal.interface';

export interface ITextInputsWrapperProps {
	type: ModalKey;
}

export interface ITextInput {
	title?: string;
	placeholder?: string;
	type: HTMLInputTypeAttribute;
}
