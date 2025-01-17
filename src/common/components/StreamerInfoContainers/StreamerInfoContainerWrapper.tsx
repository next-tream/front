import StreamerInfoContainer from '@/common/components/StreamerInfoContainers/StreamerInfoContainer';
import { IVideo } from '@/common/types/data.interface';

export default function StreamerInfoContainerWrapper({
	isVisible,
	data,
}: {
	isVisible: boolean;
	data: IVideo[];
}) {
	return (
		<div
			className={`durationInOut flexCol gap-3 py-3 transition-all ${isVisible ? 'scaleOpacityFull' : 'scaleOpacityNone'}`}
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
