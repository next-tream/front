import { IChildrenProps } from '@/common/types/children.interface';
import Aside from '@/common/layouts/Aside';
import Header from '@/common/layouts/Header/Header';

export default function Layout({ children }: IChildrenProps) {
	return (
		<div className="p-5">
			<Header />
			<div className="flex flex-row">
				<Aside />
				{children}
			</div>
		</div>
	);
}
