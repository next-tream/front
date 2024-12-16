import Image from 'next/image';

interface ICircleImageProps {
	src: string;
	size?: 'm' | 'l';
	isStreaming?: boolean;
}

export default function CircleImage({ src, size = 'm', isStreaming = false }: ICircleImageProps) {
	const imageSize = size === 'm' ? 'size-8' : 'size-10';
	return (
		<div className={`rounded-full ${isStreaming && 'border-main border-2'}`}>
			<Image
				src={src}
				alt={`${src}_image`}
				width={0}
				height={0}
				sizes="100vw"
				className={`${imageSize} rounded-full object-cover`}
			/>
		</div>
	);
}
