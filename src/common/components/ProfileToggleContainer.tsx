import MenuItemWrapper from './MenuItems/MenuItemWrapper';
import { streamerMenuItems } from '@/common/constants/menuItems.const';
import StreamerInfoContainer from './StreamerInfoContainers/StreamerInfoContainer';

export default function ProfileToggleContainer() {
	return (
		<div className="flexCol absolute right-px mt-4 w-48 gap-2 rounded-2xl border border-main bg-subBlack px-5 py-3.5">
			<StreamerInfoContainer name="치즈루" category="Lv.99" />
			<MenuItemWrapper items={streamerMenuItems} isAside={false} />
		</div>
	);
}
