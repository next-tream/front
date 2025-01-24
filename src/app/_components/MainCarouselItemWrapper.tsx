import { CarouselItem } from '../../common/components/ui/carousel';
import CategoryContainer from '@/common/components/CategoryContainer';
import { ICategory } from '@/common/types/data.interface';

export default function MainCarouselItemWrapper({ data }: { data: ICategory[] }) {
	return (
		<>
			{data.map((el, index) => (
				<CarouselItem key={index} className="pl-1 md:basis-1/6 lg:basis-1/6">
					<div className="p-3">
						<CategoryContainer
							title={el.title}
							image={el.image}
							watchingCount={el.watchingCount}
						/>
					</div>
				</CarouselItem>
			))}
		</>
	);
}
