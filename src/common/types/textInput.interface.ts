import { HTMLInputTypeAttribute } from 'react';
import { ModalKey } from './modal.interface';
import { IValidationErrors } from './input.interface';

export interface ITextInputsWrapperProps {
	type: ModalKey;
	errors?: IValidationErrors;
}

export interface ITextInput {
	title?: string;
	placeholder?: string;
	type: HTMLInputTypeAttribute;
	name?: string;
}
