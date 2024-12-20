'use client';

import { useToggle } from '@/common/hooks/useToggle';
import { calendar } from '@/common/constants/menuItems.const';
import MenuItemWrapper from '@/common/components/MenuItems/MenuItemWrapper';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function MonthlyMenu() {
	const { isToggle, onClickToggle } = useToggle(false);

	return (
		<div className="relative w-44">
			<button
				className="betweenCenter h-10 w-full rounded-md border p-4"
				onClick={onClickToggle}
			>
				<p>12월</p>
				{isToggle ? (
					<ChevronUpIcon className="size-6" />
				) : (
					<ChevronDownIcon className="size-6" />
				)}
			</button>
			{isToggle && (
				<div className="bg-mainBlack border-mainWhite flexCol absolute mt-2 w-full gap-2 rounded-md border px-5 py-3.5">
					<MenuItemWrapper items={calendar} isAside={false} />
				</div>
			)}
		</div>
	);
}
