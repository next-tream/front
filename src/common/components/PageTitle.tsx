import { IPageTitleProps } from '@/common/types/title.interface';

export default function PageTitle({ pointText, title }: IPageTitleProps) {
	return (
		<div className="flex font-semibold lg:text-3xl 2xl:text-4xl">
			{pointText && <p className="text-main">{pointText}</p>}
			<p>{title}</p>
		</div>
	);
}
