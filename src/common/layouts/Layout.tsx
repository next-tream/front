import Aside from '@/common/layouts/Aside/Aside';
import Header from '@/common/layouts/Header/Header';
import { IChildrenProps } from '@/common/types/children.interface';

export default function Layout({ children }: IChildrenProps) {
	return (
		<div className="relative w-full">
			<Header />
			<div className="flex w-full">
				<Aside />
				<div className="ml-[17%] mt-24 w-5/6 p-5">{children}</div>
			</div>
		</div>
	);
}
