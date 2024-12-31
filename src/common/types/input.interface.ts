import { InputHTMLAttributes } from 'react';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	errors?: IValidationErrors;
	title?: string;
	isWhiteTitle?: boolean;
}

export interface IValidationErrors {
	email?: string;
	nickName?: string;
	password?: string;
	tel?: string;
}

export interface IOtpInputProps {
	onChangeOtpHandle: (value: string) => void;
	otpCode: string;
	name: string;
}
