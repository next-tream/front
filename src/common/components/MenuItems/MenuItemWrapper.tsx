import MenuItem from '@/common/components/MenuItems/MenuItem';
import { IMenuItemWrapperProps } from '@/common/types/object.interface';

export default function MenuItemWrapper({ items }: { items: IMenuItemWrapperProps[] }) {
	return (
		<div className={`border-darkGray flex flex-col gap-${items[0].anchor ? '6' : '1'}`}>
			{items.map((item) => (
				<MenuItem anchor={item.anchor} key={item.name} name={item.name}>
					{item.icon}
				</MenuItem>
			))}
		</div>
	);
}
