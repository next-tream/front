import { IMenuItemWrapper } from '@/common/types/menuItem.interface';
import MenuItem from '@/common/components/MenuItems/MenuItem';

export default function MenuItemWrapper({ items, isAside }: IMenuItemWrapper) {
	return (
		<div className={`flexCol border-darkGray gap-${isAside ? '2' : '1'}`}>
			{items.map((item) => (
				<MenuItem path={item.path} key={item.name} name={item.name} isAside={isAside}>
					{item.icon}
				</MenuItem>
			))}
		</div>
	);
}
