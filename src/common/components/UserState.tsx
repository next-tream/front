'use client';
import { useToggle } from '@/common/hooks/useToggle';
import ProfileToggleContainer from './ProfileToggleContainer';
import { ChevronDownIcon, ChevronUpIcon, UserCircle } from 'lucide-react';

export default function UserState() {
	const { isToggle, onClickToggle } = useToggle(false);

	return (
		<div className="relative">
			<button className="center flex-row gap-2" onClick={onClickToggle}>
				<UserCircle className="size-8" />
				<div>
					{isToggle ? (
						<ChevronUpIcon className="size-6" />
					) : (
						<ChevronDownIcon className="size-6" />
					)}
				</div>
			</button>
			{isToggle && <ProfileToggleContainer />}
		</div>
	);
}
