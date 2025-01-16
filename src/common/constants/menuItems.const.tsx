import {
	StarIcon,
	UserIcon,
	PlayIcon,
	HeartIcon,
	ClockIcon,
	Cog6ToothIcon,
	Squares2X2Icon,
	CreditCardIcon,
	HandThumbUpIcon,
	VideoCameraIcon,
	CurrencyDollarIcon,
	PhoneArrowDownLeftIcon,
	ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { IMenuItem } from '../types/menuItem.interface';

export const mainMenuItems: IMenuItem[] = [
	{
		path: '#recommendation',
		name: '추천',
		icon: <HandThumbUpIcon className="size-7" />,
	},
	{
		path: '#category',
		name: '카테고리',
		icon: <Squares2X2Icon className="size-7" />,
	},
	{
		path: '#following',
		name: '팔로잉',
		icon: <HeartIcon className="size-7" />,
	},
	{ path: '#live', name: '라이브', icon: <PlayIcon className="size-7" /> },
];

export const streamerMenuItems: IMenuItem[] = [
	{ name: '내 프로필', icon: <UserIcon className="size-4" />, path: 'profile/my-profile' },
	{
		name: '스트리밍 시작하기',
		icon: <VideoCameraIcon className="size-4" />,
		path: 'profile/start-streaming',
	},
	{
		name: '이벌 달 수익',
		icon: <CurrencyDollarIcon className="size-4" />,
		path: 'profile/earnings',
	},
	{
		name: '최근 스트리밍 영상',
		icon: <PlayIcon className="size-4" />,
		path: 'profile/recent-videos',
	},
	{ name: '설정', icon: <Cog6ToothIcon className="size-4" />, path: 'profile/settings' },
	{
		name: '로그아웃',
		icon: <ArrowRightStartOnRectangleIcon className="size-4" />,
		path: 'logout',
	},
	{
		name: '고객센터',
		icon: <PhoneArrowDownLeftIcon className="size-4" />,
	},
];

export const userMenuItems: IMenuItem[] = [
	{ name: '내 프로필', icon: <UserIcon className="size-4" />, path: 'profile/my-profile' },
	{
		name: '넥스트림 포인트',
		icon: <CreditCardIcon className="size-4" />,
		path: 'profile/point',
	},
	{ name: '내 구독', icon: <StarIcon className="size-4" />, path: 'profile/following' },
	{
		name: '최근 시청 영상',
		icon: <ClockIcon className="size-4" />,
		path: 'profile/recent-videos',
	},
	{ name: '설정', icon: <Cog6ToothIcon className="size-4" /> },
	{
		name: '로그아웃',
		icon: <ArrowRightStartOnRectangleIcon className="size-4" />,
		path: 'logout',
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
