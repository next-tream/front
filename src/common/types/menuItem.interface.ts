// 오브젝트
export interface IMenuItem {
	anchor?: string;
	name: string;
	icon?: React.ReactNode;
}

// 컴포넌트

export interface IMenuItemProps {
	anchor?: string;
	children: React.ReactNode;
	name: string;
	isAside: boolean;
	isSelected?: boolean;
}

export interface IMenuItemWrapper {
	items: IMenuItem[];
	isAside: boolean;
}
