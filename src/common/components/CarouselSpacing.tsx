import * as React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext } from '@/components/ui/carousel';
import CategoryContainer from './CategoryContainer';

export function CarouselSpacing() {
	return (
		<Carousel className="w-[98%]">
			<CarouselContent>
				{Array.from({ length: 12 }).map((_, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/6 lg:basis-1/6">
						<div className="p-3">
							<CategoryContainer
								title="바람의나라"
								image="/images/sample.jpg"
								watchingCount={125679}
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext />
		</Carousel>
	);
}
