'use client';

import {
	mainMenuItems,
	streamerMenuItems,
	userMenuItems,
} from '@/common/constants/menuItems.const';

import MenuItemWrapper from '@/common/components/MenuItems/MenuItemWrapper';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

// ssr 생각
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
