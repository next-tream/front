'use client';

import { streamerMenuItems, userMenuItems } from '@/common/constants/menuItems.const';

import { IUserStateProps } from './HeaderProfile';
import MenuItemWrapper from '../../components/MenuItems/MenuItemWrapper';
import StreamerInfoContainer from '../../components/StreamerInfoContainers/StreamerInfoContainer';
import { useSession } from 'next-auth/react';

export default function ProfileToggleContainer({ userInfo, isVisible }: IUserStateProps) {
	const session = useSession();
	return (
		<div
			className={`durationInOut absolute right-px mt-4 w-48 transform overflow-hidden rounded-2xl border border-main bg-subBlack px-5 py-3.5 transition-all ${isVisible ? 'scaleOpacityFull' : 'scaleOpacityNone'}`}
		>
			<StreamerInfoContainer name={userInfo.nickname} />
			<MenuItemWrapper
				items={session && session.data?.user.role === 0 ? userMenuItems : streamerMenuItems}
				isAside={false}
			/>
		</div>
	);
}
