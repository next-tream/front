import Image from 'next/image';
import LiveStatusContainer from '@/common/components/LiveStatusContainer';
import StreamerInfoContainer from '@/common/components/StreamerInfoContainers/StreamerInfoContainer';
import { IVideo } from '@/common/types/data.interface';

export default function Video({ data }: { data: IVideo }) {
	return (
		<div className="flexCol h-full w-full gap-3">
			<div className="relative h-full w-full group">
				<div className="h-full w-full">
					<Image src={data.src} alt="recommend" fill className='rounded-md videoHover' />
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
