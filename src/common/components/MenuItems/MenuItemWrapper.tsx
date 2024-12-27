import MenuItem from '@/common/components/MenuItems/MenuItem';
import { IMenuItemWrapper } from '@/common/types/menuItem.interface';

export default function MenuItemWrapper({ items, isAside }: IMenuItemWrapper) {
	return (
		<div className={`flexCol border-darkGray gap-${isAside ? '4' : '1'}`}>
			{items.map((item) => (
				<MenuItem path={item.path} key={item.name} name={item.name} isAside={isAside}>
					{item.icon}
				</MenuItem>
			))}
		</div>
	);
}
