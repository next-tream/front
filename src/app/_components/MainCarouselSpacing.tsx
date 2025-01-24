import { Carousel, CarouselContent, CarouselNext } from '@/common/components/ui/carousel';

import MainCarouselItemWrapper from './MainCarouselItemWrapper';
import { category } from '@/common/constants/data';

export function MainCarouselSpacing() {
	return (
		<Carousel className="w-[98%]">
			<CarouselContent>
				<MainCarouselItemWrapper data={category} />
			</CarouselContent>
			<CarouselNext />
		</Carousel>
	);
}
