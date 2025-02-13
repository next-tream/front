import CircleImage from '@/common/components/CircleImage';
import FollowingButton from './FollowingButton';
import { IStreamerCardProps } from '../_types/broadcasting.interface';
import LikeButton from './LikeButton';
import NumberOfViewers from './NumberOfViewers';
import OtherMenuButton from './OtherMenuButton';
import PageTitle from '@/common/components/PageTitle';
import StreamingTime from './StreamingTime';
import { formatRoomTags } from '@/common/utils/formatRoomTags';

export default function StreamerCard({ broadcasting }: IStreamerCardProps) {
	const roomTags = formatRoomTags(broadcasting.roomTags);

	return (
		<div className="flexCol gap-5">
			<PageTitle title={broadcasting.roomName} />
			<div className="flex justify-between">
				<div className="flex gap-4">
					<div className="size-28">
						<CircleImage
							src={broadcasting.streamerImage}
							isStreaming={broadcasting.isLive}
						/>
					</div>
					<div className="flexCol justify-center gap-1">
						<p className="text-2xl font-extrabold">{broadcasting.nickname}</p>
						<div className="flex text-base font-semibold">
							<p className="pr-2 text-main">{roomTags}</p>:
							<p className="pl-2 text-mainWhite">{broadcasting.roomContent}</p>
						</div>
						<div className="flex gap-3 text-xs font-semibold">
							<NumberOfViewers participantsLength={broadcasting.participantsLength} />
							<StreamingTime createdAt={broadcasting.createdAt} />
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
