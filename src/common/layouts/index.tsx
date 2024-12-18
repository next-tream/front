import Aside from '@/common/layouts/Aside';
import Header from '@/common/layouts/Header/Header';
import { IChildrenProps } from '@/common/types/children.interface';

export default function Layout({ children }: IChildrenProps) {
	return (
		<>
			<Header />
			<div className="flex">
				<Aside />
				<div className="w-full">{children}</div>
			</div>
		</>
	);
}
