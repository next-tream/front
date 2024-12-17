import { IChildrenProps } from '../types/children.interface';
import Aside from './Aside';
import Header from './Header/Header';

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
