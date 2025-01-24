import { IVideo } from '../types/data.interface';
import MenuVideo from './MenuVideo';

export default function MenuWrapper({ data }: { data: IVideo[] }) {
	return (
		<div className="flexCol aspect-video gap-3 text-3xl font-semibold">
			<div className="grid h-full w-full grid-cols-3 gap-5">
				{data.map((el, index) => (
					<div key={index}>
						<MenuVideo data={el} />
					</div>
				))}
			</div>
		</div>
	);
}
