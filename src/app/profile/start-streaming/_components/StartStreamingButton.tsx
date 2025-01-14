export default function StartStreamingButton({
	title,
	onClick,
}: {
	title: string;
	onClick: () => void;
}) {
	return (
		<button
			className="h-12 w-full rounded-lg border bg-lightGray px-5 text-base font-semibold text-mainBlack"
			onClick={onClick}
		>
			{title}
		</button>
	);
}
