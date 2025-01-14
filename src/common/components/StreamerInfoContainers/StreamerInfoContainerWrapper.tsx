import StreamerInfoContainer from '@/common/components/StreamerInfoContainers/StreamerInfoContainer';

export default function StreamerInfoContainerWrapper({ isVisible }: { isVisible: boolean }) {
	return (
		<div
			className={`flexCol gap-3 py-3 transition-all duration-300 ease-in-out ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top`}
		>
			{new Array(5).fill(0).map((_, index) => (
				<StreamerInfoContainer key={index} name="뷰티풀윤정" category="뷰티/패션" />
			))}
		</div>
	);
}
