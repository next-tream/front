import { IMessage } from '../type';

export default function ChatMessageList({ chatMessageList }: { chatMessageList: IMessage[] }) {
	return (
		<div className="scrollbar-none flexCol h-full max-h-[80%] flex-1 flex-col-reverse gap-4 overflow-y-auto p-3">
			{[...chatMessageList].reverse().map((element, index) => (
				<p key={index} className="w-full whitespace-pre-wrap break-words">
					<b className="mr-2" style={{ color: `${element.color}` }}>
						{element.nickname}
					</b>
					{element.message}
				</p>
			))}
		</div>
	);
}
