import { ChevronRightIcon } from 'lucide-react';
import { IProfileSubMenuProps } from '../type';

export default function ProfileSubMenu({ children, color }: IProfileSubMenuProps) {
	return (
		<div className={`flex justify-between bg-${color} rounded-md p-3`}>
			<div>{children}</div>
			<ChevronRightIcon className="size-6" />
		</div>
	);
}
