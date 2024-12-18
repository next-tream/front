import React from 'react';
import CircleImage from '@/common/components/CircleImage';

interface IStreamerInfoContainerProps {
	title?: string;
	name: string;
	category: string;
}

export default function StreamerInfoContainer({
	title,
	name,
	category,
}: IStreamerInfoContainerProps) {
	return (
		<div className="flex cursor-pointer gap-2">
			<CircleImage src="/images/sample.jpg" size={title ? 'l' : 'm'} />
			<div className="flex flex-col gap-0.5">
				<p className="text-mainWhite text-sm font-bold">{title}</p>
				<p className="text-mainWhite text-xs font-semibold">{name}</p>
				<p className="text-darkGray text-xs font-medium">{category}</p>
			</div>
		</div>
	);
}
