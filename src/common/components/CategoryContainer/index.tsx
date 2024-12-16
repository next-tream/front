import Image from 'next/image';

interface ICategoryContainer {
	title: string;
	image: string;
	watchingCount: string;
	isSelected?: boolean;
}

export default function CategoryContainer({
	title,
	image,
	watchingCount,
	isSelected = false,
}: ICategoryContainer) {
	return (
		<div className="relative flex w-[20%] flex-col gap-[0.5rem]">
			<div className="absolute left-[0.5rem] top-[0.5rem] flex items-center justify-center gap-[0.25rem] rounded-[0.25rem] bg-[#121B16] px-[0.25rem] py-[0.125rem]">
				<div className="h-[0.5rem] w-[0.5rem] rounded-full bg-[#e02020]" />
				<p className="text-[0.75rem] font-bold text-white">{watchingCount}</p>
			</div>
			<Image
				src={image}
				alt={`${image}_image`}
				width={0}
				height={0}
				sizes="100vw"
				className={`aspect-[2/3] w-full max-w-[8.75rem] cursor-pointer rounded-[0.75rem] object-cover ${
					isSelected ? 'border-main border-2' : ''
				}`}
			/>
			<p className="text-lightGray text-[1rem] font-semibold">{title}</p>
		</div>
	);
}
