import {
	ArrowRightStartOnRectangleIcon,
	ClockIcon,
	Cog6ToothIcon,
	CreditCardIcon,
	CurrencyDollarIcon,
	HandThumbUpIcon,
	HeartIcon,
	PhoneArrowDownLeftIcon,
	PlayIcon,
	Squares2X2Icon,
	StarIcon,
	UserIcon,
	VideoCameraIcon,
} from '@heroicons/react/24/outline';

import { IMenuItems } from '@/common/types/object.interface';

export const mainMenuItems: IMenuItems[] = [
	{ anchor: 'recommendation', name: '추천', icon: <HandThumbUpIcon className="size-7" /> },
	{ anchor: 'category', name: '카테고리', icon: <Squares2X2Icon className="size-7" /> },
	{ anchor: 'following', name: '팔로잉', icon: <HeartIcon className="size-7" /> },
	{ anchor: 'live', name: '라이브', icon: <PlayIcon className="size-7" /> },
];

export const streamerMenuItems: IMenuItems[] = [
	{ name: '내 프로필', icon: <UserIcon className="size-4" /> },
	{
		name: '스트리밍 시작하기',
		icon: <VideoCameraIcon className="size-4" />,
	},
	{ name: '이벌 달 수익', icon: <CurrencyDollarIcon className="size-4" /> },
	{ name: '최근 스트리밍 영상', icon: <PlayIcon className="size-4" /> },
	{ name: '설정', icon: <Cog6ToothIcon className="size-4" /> },
	{
		name: '로그아웃',
		icon: <ArrowRightStartOnRectangleIcon className="size-4" />,
	},
	{
		name: '고객센터',
		icon: <PhoneArrowDownLeftIcon className="size-4" />,
	},
];

export const userMenuItems: IMenuItems[] = [
	{ name: '내 프로필', icon: <UserIcon className="size-4" /> },
	{ name: '넥스트림 포인트', icon: <CreditCardIcon className="size-4" /> },
	{ name: '내 구독', icon: <StarIcon className="size-4" /> },
	{ name: '최근 시청 영상', icon: <ClockIcon className="size-4" /> },
	{ name: '설정', icon: <Cog6ToothIcon className="size-4" /> },
	{
		name: '로그아웃',
		icon: <ArrowRightStartOnRectangleIcon className="size-4" />,
	},
	{
		name: '고객센터',
		icon: <PhoneArrowDownLeftIcon className="size-4" />,
	},
];

export const calendar = [
	{ name: '1월' },
	{ name: '2월' },
	{ name: '3월' },
	{ name: '4월' },
	{ name: '5월' },
	{ name: '6월' },
	{ name: '7월' },
	{ name: '8월' },
	{ name: '9월' },
	{ name: '10월' },
	{ name: '11월' },
	{ name: '12월' },
];
