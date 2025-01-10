export default function HistoryColumnItem({ name }: { name: string }) {
	return (
		<p
			className={`center w-1/6 text-base font-semibold text-mainWhite ${name === '후원 메시지' && 'flex-grow'}`}
		>
			{name}
		</p>
	);
}
