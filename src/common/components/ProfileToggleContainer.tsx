import MenuItemWrapper from './MenuItems/MenuItemWrapper';
import { streamerMenuItems } from '@/common/constants/menuItems.const';
import StreamerInfoContainer from './StreamerInfoContainers/StreamerInfoContainer';
import { IUserStateProps } from './UserState';

export default function ProfileToggleContainer({ userInfo }: IUserStateProps) {
	return (
		<div className="flexCol absolute right-px mt-4 w-48 gap-2 rounded-2xl border border-main bg-subBlack px-5 py-3.5">
			<StreamerInfoContainer name={userInfo.nickname} category="Lv.99" />
			<MenuItemWrapper items={streamerMenuItems} isAside={false} />
		</div>
	);
}
