import CircleImage from '@/common/components/CircleImage';
import { IStreamerInfoContainerProps } from '@/common/types/container.interface';
import { UserCircle } from 'lucide-react';
import { formatRoomTags } from '@/common/utils/formatRoomTags';

/* 요놈은 ssr과 csr을 병합해서 쓸 수 있음 
예를 들어봄 
실질적으로 스트리머 이미지나 스트리머 이름 같은 경우
SEO에 직접적으로 연관이 있음

하지만 잘 보면 해당 컴포넌트는 이벤트 리스너가 불가피함
따라서 데이터 불러오기는 ssr에서 처리하고 props로 데이터를 내려줌 
또는 아마 api를 배열 []로 넘겨줄 예정임 
즉 여기서는 wrapper가 ssr로 처리되고
데이터를 서버단에서 받아옴
이후 csr에서 이벤트 리스너를 처리하는 형식으로 가야함.
*/
export default function StreamerInfoContainer({
	title,
	name,
	category,
	image,
	isLive,
}: IStreamerInfoContainerProps) {
	const roomTags = formatRoomTags(category);
	return (
		<div className="rounded-lg p-1 hover:bg-darkGray hover:bg-opacity-25">
			<div className="flex cursor-pointer gap-2">
				<div className="lg:size-8 2xl:size-14">
					{image ? (
						<CircleImage src={image} isStreaming={isLive} />
					) : (
						<UserCircle className="h-full w-full" />
					)}
				</div>
				<div className="flexCol gap-0.5">
					<p className="font-bold text-mainWhite lg:text-sm 2xl:text-2xl">{title}</p>
					<p className="font-semibold text-mainWhite lg:text-xs 2xl:text-xl">{name}</p>
					<p className="font-medium text-darkGray lg:text-xs 2xl:text-xl">
						{category ? roomTags : 'Lv.99'}
					</p>
				</div>
			</div>
		</div>
	);
}
