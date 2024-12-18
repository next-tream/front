export default function SearchHistoryList() {
	return (
		<div className="bg-darkGray mt-2 h-auto w-full rounded-md p-3">
			<ul className="flex flex-col gap-1 pb-3">
				<li>바보 예슬</li>
				<li>예슬콩</li>
				<li>강예슬 회장님</li>
			</ul>
			<div className="border-mainWhite between w-full border-t border-solid pt-2">
				<button>자동저장 끄기</button>
				<button>닫기</button>
			</div>
		</div>
	);
}
