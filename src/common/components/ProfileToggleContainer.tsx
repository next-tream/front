'use client';

import MenuItemWrapper from './MenuItems/MenuItemWrapper';
import { streamerMenuItems, userMenuItems } from '@/common/constants/menuItems.const';
import StreamerInfoContainer from './StreamerInfoContainers/StreamerInfoContainer';
import { IUserStateProps } from './UserState';
import { useSession } from 'next-auth/react';

export default function ProfileToggleContainer({ userInfo }: IUserStateProps) {
	const session = useSession();
	return (
		<div className="flexCol absolute right-px mt-4 w-48 gap-2 rounded-2xl border border-main bg-subBlack px-5 py-3.5">
			<StreamerInfoContainer name={userInfo.nickname} category="Lv.99" />
			<MenuItemWrapper
				items={session && session.data?.user.role === 0 ? userMenuItems : streamerMenuItems}
				isAside={false}
			/>
		</div>
	);
}
