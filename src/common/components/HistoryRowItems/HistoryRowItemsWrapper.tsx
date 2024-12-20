import HistoryRowItem from './HistoryRowItem';

export default function HistoryRowItemsWrapper({ items }: { items: object[] }) {
	return (
		<>
			{items.map((element, index) => (
				<HistoryRowItem key={index} data={element} />
			))}
		</>
	);
}
