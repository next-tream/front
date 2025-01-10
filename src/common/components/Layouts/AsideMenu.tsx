'use client';

import { usePathname } from 'next/navigation';
import MenuItemWrapper from '@/common/components/MenuItems/MenuItemWrapper';
import {
	mainMenuItems,
	streamerMenuItems,
	userMenuItems,
} from '@/common/constants/menuItems.const';
import { useSession } from 'next-auth/react';

export default function AsideMenu() {
	const path = usePathname();
	const user = useSession();
	const role = user?.data?.user.role;

	return (
		<div>
			{path === '/' ? (
				<MenuItemWrapper items={mainMenuItems} isAside={true} />
			) : role ? (
				<MenuItemWrapper items={streamerMenuItems} isAside={true} />
			) : (
				<MenuItemWrapper items={userMenuItems} isAside={true} />
			)}
		</div>
	);
}
