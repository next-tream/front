export default function Screen({ isLive }: { isLive: boolean }) {
	return (
		<div>
			{!isLive && (
				<div className="bg-subBlack center aspect-video lg:text-xl 2xl:text-3xl">
					스트리밍이 중지되었습니다.
				</div>
			)}
		</div>
	);
}
