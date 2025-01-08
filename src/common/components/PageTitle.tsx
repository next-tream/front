'use client';

import { IPageTitleProps } from '@/common/types/title.interface';
import useActiveSection from '../hooks/useActiveSection';

export default function PageTitle({ id, pointText, title, index }: IPageTitleProps) {
	const { sectionRef } = useActiveSection();

	return (
		<div
			id={id}
			ref={(el) => {
				if (index && el) {
					sectionRef.current[index] = el;
				}
			}}
			className="flex font-semibold lg:text-3xl 2xl:text-4xl"
		>
			{pointText && <p className="text-main">{pointText}</p>}
			<p>{title}</p>
		</div>
	);
}
