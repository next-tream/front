export default function Screen({ isLive }: { isLive: boolean }) {
	return (
		<div className="w-full">
			{!isLive && (
				<div className="center aspect-video w-full bg-subBlack lg:text-xl 2xl:text-3xl">
					스트리밍이 중지되었습니다.
				</div>
			)}
		</div>
	);
}
