export interface IPrevState {
	email: string;
	nickName: string;
	password: string;
	checkPassword: string;
	result?: boolean;
}

export interface ILoginPrevState {
	password: string;
	email: string;
	errors: { [key: string]: string };
}

export interface IFormData extends IPrevState {
	errors: { [key: string]: string };
}

export interface IEmailAuthPrevState {
	code?: string;
	email: string;
	isPassword?: boolean;
	errors?: { [key: string]: string };
	result?: boolean;
}

export interface IPasswordChangePrevState {
	email: string;
	password: string;
	checkPassword?: string;
	errors?: { [key: string]: string };
	result?: boolean;
}
