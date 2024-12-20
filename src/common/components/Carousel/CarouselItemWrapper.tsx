import { CarouselItem } from '@/components/ui/carousel';
import CategoryContainer from '@/common/components/CategoryContainer';

export default function CarouselItemWrapper() {
	return (
		<>
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
		</>
	);
}
