export default function HistoryRowItem({ data }: { data: object }) {
	const values = Object.values(data);
	const rowKeys = Object.keys(data);

	return (
		<div className="flex w-full gap-4 border-b border-b-darkGray px-8 py-2">
			{values.map((value, index) => (
				<p
					key={rowKeys[index]}
					className={`center w-1/6 text-base font-light text-mainWhite ${rowKeys.length - 1 === index && 'flex-grow'}`}
				>
					{value}
				</p>
			))}
		</div>
	);
}
