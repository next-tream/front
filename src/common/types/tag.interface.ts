// 오브젝트

export interface ITag {
	id: string;
	name: string;
	icon: string;
}

// 컴포넌트

export interface ITagContainerProps {
	name: string;
	disabled?: boolean;
}

export interface ITagWrapperProps {
	tags: string[];
}
