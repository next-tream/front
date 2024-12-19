import Image from 'next/image';
import LiveStatusContainer from '@/common/components/LiveStatusContainer';
import StreamerInfoContainer from '@/common/components/StreamerInfoContainers/StreamerInfoContainer';

export default function RecommendVideo() {
	return (
		<div className="flexCol h-full w-full gap-3">
			<div className="relative h-full w-full">
				<div className="h-full w-full">
					<Image src="/images/main.png" alt="recommend" fill />
				</div>
				<LiveStatusContainer watchingCount={986} />
			</div>
			<div>
				<StreamerInfoContainer
					title="여러분 안녕하세요!!"
					name="뷰티풀윤정"
					category="뷰티/패션"
				/>
			</div>
		</div>
	);
}
