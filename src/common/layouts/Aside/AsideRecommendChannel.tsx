'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import Divider from '@/common/components/Divider';
import StreamerInfoContainerWrapper from '@/common/components/StreamerInfos/StreamerInfoWrapper';
import { recommendVideo } from '@/common/constants/data';
import { usePathname } from 'next/navigation';
import { useToggle } from '@/common/hooks/useToggle';

// ssr 생각
// 무조건 컴포넌트 내에는 UI 코드만 존재해야함!
export default function AsideRecommendChannel() {
	const { isToggle, onClickToggle } = useToggle(true);
	const path = usePathname();

	const PATH_LIST = ['/', '/streaming/67875d27db452996f1683f84/'];

	const onClickTest = async () => {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/tag`, {
			method: 'POST',
		});
		const data = await response.json();
	};

	return (
		PATH_LIST.includes(path) && (
			<div className="w-ful flexCol gap-2">
				<Divider color="lightGray" />
				{/* 
					ssr 생각하면 이 부분은 컴포넌트화 시켜야함 
					외우는 게 좋을 듯
					이벤트 리스너가 발생한다 싶으면 그냥 컴포넌트화를 시켜야한다고!

					좀 더 자세히 작성해보겠습니다. 
					이벤트 리스너는 결국 broswer에서만 동작하는 거
					이미지랑 링크 카톡방에 올려놨는데 

					이벤트 리스너다 ? 그럼 그냥 컴포넌트 쪼갭시다. 
					ssr을 최대한 활용하는 게 무조건 좋음 (사실 적재적소에 활용하는 게 제일 베스트긴 하지만)
				*/}
				<div className="betweenCenter flex-row text-xl">
					<p onClick={onClickTest}>추천 채널</p>
					<button onClick={onClickToggle}>
						{isToggle ? (
							<ChevronUpIcon className="size-6" />
						) : (
							<ChevronDownIcon className="size-6" />
						)}
					</button>
				</div>
				<StreamerInfoContainerWrapper data={recommendVideo} isVisible={isToggle} />
			</div>
		)
	);
}
