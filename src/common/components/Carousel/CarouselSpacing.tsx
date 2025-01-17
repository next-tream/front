import { category } from '@/common/constants/data';
import CarouselItemWrapper from './CarouselItemWrapper';
import { Carousel, CarouselContent, CarouselNext } from '@/components/ui/carousel';

export function CarouselSpacing() {
	return (
		<Carousel className="w-[98%]">
			<CarouselContent>
				<CarouselItemWrapper data={category} />
			</CarouselContent>
			<CarouselNext />
		</Carousel>
	);
}
