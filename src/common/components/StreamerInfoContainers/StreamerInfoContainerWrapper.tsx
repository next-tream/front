import StreamerInfoContainer from '@/common/components/StreamerInfoContainers/StreamerInfoContainer';

export default function StreamerInfoContainerWrapper() {
	return (
		<div className="flexCol gap-3 py-3">
			{new Array(5).fill(0).map((_, index) => (
				<StreamerInfoContainer key={index} name="뷰티풀윤정" category="뷰티/패션" />
			))}
		</div>
	);
}
