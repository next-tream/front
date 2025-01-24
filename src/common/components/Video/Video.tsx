import { IVideo } from '@/common/types/data.interface';
import Image from 'next/image';
import LiveStatusContainer from '@/common/components/LiveStatusContainer';
import StreamerInfoContainer from '@/common/components/StreamerInfos/StreamerInfoContainer';

export default function Video({ data }: { data: IVideo }) {
	return (
		<div className="flexCol h-full w-full gap-3">
			<div className="group relative h-full w-full">
				<div className="h-full w-full">
					<Image src={data.src} alt="recommend" fill className="videoHover rounded-md" />
				</div>
				{data.isLive && <LiveStatusContainer watchingCount={data.watchingCount} />}
			</div>
			<div>
				<StreamerInfoContainer
					title={data.title}
					name={data.name}
					category={data.category}
					image={data.streamerImg}
					isLive={data.isLive}
				/>
			</div>
		</div>
	);
}
