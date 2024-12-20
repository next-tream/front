import HistoryColumnItem from './HistoryColumnItem';

export default function HistoryColumnItemsWrapper({ items }: { items: string[] }) {
	return (
		<div className="flex w-full gap-4 border-b border-b-darkGray bg-subBlack px-8 py-2">
			{items.map((element, index) => (
				<HistoryColumnItem key={index} name={element} />
			))}
		</div>
	);
}
