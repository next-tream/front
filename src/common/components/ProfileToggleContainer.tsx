'use client';

import MenuItemWrapper from './MenuItems/MenuItemWrapper';
import { streamerMenuItems, userMenuItems } from '@/common/constants/menuItems.const';
import StreamerInfoContainer from './StreamerInfoContainers/StreamerInfoContainer';

import { useSession } from 'next-auth/react';
import { IUserStateProps } from './UserState';

export default function ProfileToggleContainer({ userInfo, isVisible }: IUserStateProps) {
	const session = useSession();
	return (
		<div
			className={`absolute right-px mt-4 w-48 transform overflow-hidden rounded-2xl border border-main bg-subBlack px-5 py-3.5 transition-all duration-300 ease-in-out ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top`}
		>
			<StreamerInfoContainer name={userInfo.nickname} category="Lv.99" />
			<MenuItemWrapper
				items={session && session.data?.user.role === 0 ? userMenuItems : streamerMenuItems}
				isAside={false}
			/>
		</div>
	);
}
