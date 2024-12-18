import {
	StarIcon,
	UserIcon,
	PlayIcon,
	HeartIcon,
	ClockIcon,
	Cog6ToothIcon,
	CreditCardIcon,
	Squares2X2Icon,
	VideoCameraIcon,
	HandThumbUpIcon,
	CurrencyDollarIcon,
	PhoneArrowDownLeftIcon,
	ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { IMenuItem } from '../types/object.interface';

export const mainMenuItems: IMenuItem[] = [
	{ anchor: 'recommendation', name: '추천', icon: <HandThumbUpIcon className="size-7" /> },
	{ anchor: 'category', name: '카테고리', icon: <Squares2X2Icon className="size-7" /> },
	{ anchor: 'following', name: '팔로잉', icon: <HeartIcon className="size-7" /> },
	{ anchor: 'live', name: '라이브', icon: <PlayIcon className="size-7" /> },
];

export const streamerMenuItems: IMenuItem[] = [
	{ anchor: 'profile', name: '내 프로필', icon: <UserIcon className="size-7" /> },
	{
		anchor: 'startStreaming',
		name: '스트리밍 시작하기',
		icon: <VideoCameraIcon className="size-7" />,
	},
	{ anchor: 'income', name: '이벌 달 수익', icon: <CurrencyDollarIcon className="size-7" /> },
	{ anchor: 'recentVideo', name: '최근 스트리밍 영상', icon: <PlayIcon className="size-7" /> },
	{ anchor: 'setting', name: '설정', icon: <Cog6ToothIcon className="size-7" /> },
	{
		anchor: 'logout',
		name: '로그아웃',
		icon: <ArrowRightStartOnRectangleIcon className="size-7" />,
	},
	{
		anchor: 'customerService',
		name: '고객센터',
		icon: <PhoneArrowDownLeftIcon className="size-7" />,
	},
];

export const userMenuItems: IMenuItem[] = [
	{ anchor: 'profile', name: '내 프로필', icon: <UserIcon className="size-7" /> },
	{ anchor: 'point', name: '넥스트림 포인트', icon: <CreditCardIcon className="size-7" /> },
	{ anchor: 'subscription', name: '내 구독', icon: <StarIcon className="size-7" /> },
	{ anchor: 'recentVideo', name: '최근 시청 영상', icon: <ClockIcon className="size-7" /> },
	{ anchor: 'setting', name: '설정', icon: <Cog6ToothIcon className="size-7" /> },
	{
		anchor: 'logout',
		name: '로그아웃',
		icon: <ArrowRightStartOnRectangleIcon className="size-7" />,
	},
	{
		anchor: 'customerService',
		name: '고객센터',
		icon: <PhoneArrowDownLeftIcon className="size-7" />,
	},
];
