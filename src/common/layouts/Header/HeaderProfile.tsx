'use client';

import { ChevronDownIcon, ChevronUpIcon, UserCircle } from 'lucide-react';

import ProfileToggleContainer from '@/common/layouts/Header/HeaderProfileToggleContainer';
import { TJwtPayload } from '@/common/types/jwt.interface';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useToggle } from '@/common/hooks/useToggle';

// 이 인터페이스 새로 생성
export interface IUserStateProps {
	userInfo: TJwtPayload;
	isVisible?: boolean;
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

				{isToggle ? (
					<ChevronUpIcon className="size-6" />
				) : (
					<ChevronDownIcon className="size-6" />
				)}
			</button>
			<ProfileToggleContainer userInfo={userInfo} isVisible={isToggle} />
		</div>
	);
}
