'use client';

import { usePathname } from 'next/navigation';
import MenuItemWrapper from '@/common/components/MenuItems/MenuItemWrapper';
import { mainMenuItems, streamerMenuItems } from '@/common/constants/menuItems.const';
import { ASIDE_LAYOUT_PATHS } from '@/common/constants/layout.const';

export default function AsideMenu() {
	const path = usePathname();
	return (
		<div>
			{ASIDE_LAYOUT_PATHS.includes(path) && (
				<MenuItemWrapper items={mainMenuItems} isAside={true} />
			)}
			{path.includes('profile') && (
				<MenuItemWrapper items={streamerMenuItems} isAside={true} />
			)}
		</div>
	);
}
