import { Carousel, CarouselContent, CarouselNext } from '../ui/carousel';

import CarouselItemWrapper from './CarouselItemWrapper';
import { category } from '@/common/constants/data';

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
