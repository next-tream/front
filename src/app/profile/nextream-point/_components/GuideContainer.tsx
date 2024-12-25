import { IGuideContainerProps } from '../types';

export default function GuideContainer({ title, items }: IGuideContainerProps) {
	return (
		<div className="flexCol w-full gap-1">
			<span className="text-lg font-semibold text-mainWhite">{title}</span>
			<div className="px-2">
				{items.map((element, index) => (
					<p key={index}>• {element}</p>
				))}
			</div>
		</div>
	);
}
