export interface IPrevState {
	email: string;
	nickName: string;
	password: string;
	tel: string;
}

export interface IFormData extends IPrevState {
	errors: { [key: string]: string };
}
