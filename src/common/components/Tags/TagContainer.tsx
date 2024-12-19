import { ITagContainerProps } from '@/common/types/tag.interface';

export default function TagContainer({ name, disabled = true }: ITagContainerProps) {
	return (
		<div
			className={`text-mainWhite text-nowrap rounded-md p-1.5 text-xs font-medium ${disabled ? 'border-mainWhite border bg-[transparent]' : 'bg-main'}`}
		>
			{name}
		</div>
	);
}
