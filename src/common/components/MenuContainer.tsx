import PageTitle from './PageTitle';
import { IMenuContainerProps } from '@/common/types/container.interface';

export default function MenuContainer({ menu, children }: IMenuContainerProps) {
	return (
		<div className="flexCol aspect-video gap-3 text-3xl font-semibold">
			{menu && <PageTitle title={menu} />}
			<div className="grid h-full w-full grid-cols-3 gap-3">
				{new Array(6).fill(0).map((_, index) => (
					<div key={index}>{children}</div>
				))}
			</div>
		</div>
	);
}
