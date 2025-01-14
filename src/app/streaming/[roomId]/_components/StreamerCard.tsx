import CircleImage from '@/common/components/CircleImage';
import FollowingButton from './FollowingButton';
import LikeButton from './LikeButton';
import OtherMenuButton from './OtherMenuButton';
import PageTitle from '@/common/components/PageTitle';

export default function StreamerCard() {
	return (
		<div className="flexCol gap-5">
			<PageTitle title="제목입니다." />

			<div className="flex justify-between">
				<div className="flex gap-4">
					<div className="size-28">
						<CircleImage src="/images/sample.jpg" isStreaming={true} />
					</div>
					<div className="flexCol justify-center gap-1">
						<p className="text-2xl font-extrabold">스트리머 이름</p>
						<p className="text-base font-semibold text-main">컨텐츠 내용</p>
						<div className="flex gap-3 text-xs font-semibold">
							<p>9,621명 시청중</p>
							<p>13:39:22 스트리밍 중</p>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<LikeButton />
					<FollowingButton />
					<OtherMenuButton />
				</div>
			</div>
		</div>
	);
}
