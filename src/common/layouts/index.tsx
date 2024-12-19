import Aside from '@/common/layouts/Aside';
import Header from '@/common/layouts/Header/Header';
import { IChildrenProps } from '@/common/types/children.interface';

export default function Layout({ children }: IChildrenProps) {
	return (
		<div className="relative">
			<Header />
			<div className="flex">
				<Aside />
				<div className="w-full p-5">{children}</div>
			</div>
		</div>
	);
}
