import { INavigationContainerProps } from '../types';

export default function NavigationContainer({
	isUsageView,
	onClickMenuHandler,
}: INavigationContainerProps) {
	const selectedStyles = 'border-b-2 border-b-main text-main';
	return (
		<div className="flex gap-4 text-2xl font-semibold">
			<button
				className={`${isUsageView === true && selectedStyles}`}
				onClick={onClickMenuHandler}
			>
				사용 내역
			</button>
			<button
				className={`${isUsageView === false && selectedStyles}`}
				onClick={onClickMenuHandler}
			>
				구매 내역
			</button>
		</div>
	);
}
