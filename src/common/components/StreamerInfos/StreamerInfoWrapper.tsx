import { IVideo } from '@/common/types/data.interface';
import StreamerInfoContainer from '@/common/components/StreamerInfos/StreamerInfoContainer';

export default function StreamerInfoWrapper({
	isVisible,
	data,
}: {
	isVisible: boolean;
	data: IVideo[];
}) {
	return (
		<div
			className={`flexCol durationInOut gap-3 py-3 transition-all ${isVisible ? 'scaleOpacityFull' : 'scaleOpacityNone'}`}
		>
			{data.map((el, index) => (
				<StreamerInfoContainer
					key={index}
					name={el.name}
					category={el.category}
					image={el.streamerImg}
					isLive={el.isLive}
				/>
			))}
		</div>
	);
}
