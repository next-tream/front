'use client';

import { ChevronDownIcon, ChevronUpIcon, UserCircle } from 'lucide-react';
import ProfileToggleContainer from './ProfileToggleContainer';
import { useToggle } from '@/common/hooks/useToggle';

export default function UserState() {
	const { isToggle, onClickToggle } = useToggle(false);

	return (
		<div className="relative">
			<div className="center flex-row gap-2">
				<UserCircle className="size-8" />
				<div onClick={onClickToggle}>
					{isToggle ? (
						<ChevronUpIcon className="size-6" />
					) : (
						<ChevronDownIcon className="size-6" />
					)}
				</div>
			</div>
			{isToggle && <ProfileToggleContainer />}
		</div>
	);
}
