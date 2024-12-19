import { IPageTitleProps } from '@/common/types/title.interface';

export default function PageTitle({ pointText, title }: IPageTitleProps) {
	return (
		<div className="flex text-3xl font-semibold">
			{pointText && <p className="text-main">{pointText}</p>}
			<p>{title}</p>
		</div>
	);
}
