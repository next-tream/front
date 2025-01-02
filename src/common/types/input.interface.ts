import { InputHTMLAttributes, MouseEvent } from 'react';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	errors?: IValidationErrors;
	title?: string;
	isWhiteTitle?: boolean;
	trailingIcon?: React.ReactNode;
	onClickTrailingIconHandler?: (event: MouseEvent<HTMLDivElement>) => void;
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
