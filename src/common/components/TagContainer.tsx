import { ITagContainerProps } from '@/common/types/tag.interface';

export default function TagContainer({ name, disabled = true }: ITagContainerProps) {
	return (
		<div
			className={`text-nowrap rounded-md p-1.5 text-xs font-medium text-mainWhite ${disabled ? 'border border-mainWhite bg-[transparent]' : 'bg-main'}`}
		>
			{name}
		</div>
	);
}
