import Image from 'next/image';
import { ICircleImageProps } from '@/common/types/image.interface';

export default function CircleImage({ src, isStreaming = false }: ICircleImageProps) {
	return (
		<div className={`h-full w-full rounded-full ${isStreaming && 'border-main border-2'}`}>
			<Image
				src={src}
				alt={`${src}_image`}
				width={0}
				height={0}
				sizes="100vw"
				className={`h-full w-full rounded-full object-cover`}
			/>
		</div>
	);
}
