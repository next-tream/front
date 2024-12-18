export default function MenuContainer({ menu, container }: { menu: string; container: any }) {
	return (
		<div className="flex aspect-video flex-col gap-3 text-3xl font-semibold">
			<div>{menu}</div>
			<div className="grid h-full w-full grid-cols-3 gap-3">
				{new Array(6).fill(0).map((_, index) => (
					<div key={index}>{container}</div>
				))}
			</div>
		</div>
	);
}
