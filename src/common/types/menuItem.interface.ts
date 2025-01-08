// 오브젝트
export interface IMenuItem {
	anchor?: string;
	name: string;
	icon?: React.ReactNode;
	path?: string;
}

// 컴포넌트
export interface IMenuItemProps {
	children: React.ReactNode;
	name: string;
	isAside: boolean;
	path?: string;
	onClick?: () => void;
}

export interface IMenuItemWrapper {
	items: IMenuItem[];
	isAside: boolean;
}
