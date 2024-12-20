// 오브젝트
export interface IMenuItem {
	anchor?: string;
	name: string;
	icon?: React.ReactNode;
	path?: string;
}

// 컴포넌트
export interface IMenuItemProps {
	anchor?: string;
	children: React.ReactNode;
	name: string;
	isAside: boolean;
	isSelected?: boolean;
	path?: string;
}

export interface IMenuItemWrapper {
	items: IMenuItem[];
	isAside: boolean;
}
