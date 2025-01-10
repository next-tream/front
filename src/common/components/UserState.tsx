'use client';

import { useToggle } from '@/common/hooks/useToggle';
import ProfileToggleContainer from './ProfileToggleContainer';
import { ChevronDownIcon, ChevronUpIcon, UserCircle } from 'lucide-react';
import { TJwtPayload } from '../types/jwt.interface';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export interface IUserStateProps {
	userInfo: TJwtPayload;
}

export default function UserState({ userInfo }: IUserStateProps) {
	const { isToggle, setIsToggle, onClickToggle } = useToggle(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsToggle(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

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
			{isToggle && <ProfileToggleContainer userInfo={userInfo} />}
		</div>
	);
}
