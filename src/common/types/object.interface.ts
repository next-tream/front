export interface ITheme {
	id: string;
	name: string;
	icon: string;
}

export interface IMenuItemWrapperProps {
	anchor?: string;
	name: string;
	icon: React.ReactNode;
}
