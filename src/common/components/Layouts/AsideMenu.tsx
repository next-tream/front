'use client';

import { usePathname } from 'next/navigation';
import MenuItemWrapper from '@/common/components/MenuItems/MenuItemWrapper';
import { mainMenuItems, streamerMenuItems } from '@/common/constants/menuItems.const';

export default function AsideMenu() {
	const path = usePathname();
	return (
		<div>
			{path === '/' && <MenuItemWrapper items={mainMenuItems} isAside={true} />}
			{path.includes('profile') && (
				<MenuItemWrapper items={streamerMenuItems} isAside={true} />
			)}
		</div>
	);
}
