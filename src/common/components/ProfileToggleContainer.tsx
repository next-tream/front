import { userMenuItems } from '../constants/menuItems.const';
import MenuItemWrapper from './MenuItems/MenuItemWrapper';
import StreamerInfoContainer from './StreamerInfoContainers/StreamerInfoContainer';

export default function ProfileToggleContainer() {
	return (
		<div className="bg-subBlack border-main absolute right-px mt-4 flex w-48 flex-col gap-2 rounded-2xl border px-5 py-3.5">
			<StreamerInfoContainer name="치즈루" category="Lv.99" />
			<MenuItemWrapper items={userMenuItems} />
		</div>
	);
}
