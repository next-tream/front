export default function StartStreamingButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			className="h-12 w-full rounded-lg border bg-lightGray px-5 text-base font-semibold text-mainBlack"
			onClick={onClick}
		>
			스트리밍 시작
		</button>
	);
}
