import { mainMenuItems } from '@/common/constants/menuItems.const';
import MenuItem from '@/common/components/MenuItem';

export default function MenuItemWrapper() {
	return (
		<div className="border-darkGray flex flex-col gap-6 border-b border-solid pb-5">
			{mainMenuItems.map((item) => (
				<MenuItem anchor={item.anchor} key={item.name} name={item.name}>
					{item.icon}
				</MenuItem>
			))}
		</div>
	);
}
