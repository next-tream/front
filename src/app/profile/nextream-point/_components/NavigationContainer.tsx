import { INavigationContainerProps } from '@/common/types/container.interface';

export default function NavigationContainer({
	selectedMenu,
	onClickMenuHandler,
}: INavigationContainerProps) {
	const selectedStyles = 'border-b-2 border-b-main text-main';
	return (
		<div className="flex gap-4 text-2xl font-semibold">
			<button
				className={`${selectedMenu === 'pointUsage' && selectedStyles}`}
				onClick={() => onClickMenuHandler('pointUsage')}
			>
				사용 내역
			</button>
			<button
				className={`${selectedMenu === 'purchase' && selectedStyles}`}
				onClick={() => onClickMenuHandler('purchase')}
			>
				구매 내역
			</button>
		</div>
	);
}
