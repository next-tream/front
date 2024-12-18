export default function MenuContainer({
	category = false,
	menu,
	container,
}: {
	category?: boolean;
	menu: string;
	container: any;
}) {
	return (
		<div
			className={`flex h-${category ? '[300px]' : '[500px]'} w-full flex-col gap-3 text-3xl font-semibold`}
		>
			<div>{menu}</div>
			<div className={`grid h-full w-full grid-cols-${category ? '6' : '3'} gap-3`}>
				{new Array(6).fill(0).map((_, index) => (
					<div key={index}>{container} </div>
				))}
			</div>
		</div>
	);
}
