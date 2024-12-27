import { InputHTMLAttributes } from 'react';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	errors?: IValidationErrors;
	title?: string;
}

export interface IValidationErrors {
	email?: string;
	nickName?: string;
	password?: string;
	tel?: string;
}
