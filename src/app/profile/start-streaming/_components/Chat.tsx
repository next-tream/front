import SubInput from './SubInput';
import Divider from '@/common/components/Divider';
import SponsorshipRanking from './SponsorshipRanking';
import { ChevronLeftIcon, ChevronRightIcon, EllipsisVerticalIcon } from 'lucide-react';
import { IChatProps } from '../type';

export default function Chat({ isToggle, onClickToggle }: IChatProps) {
	return (
		<>
			{isToggle ? (
				<div className="flexCol h-full w-1/3 justify-between gap-3 rounded-md bg-subBlack p-3">
					<div className="h-full w-full">
						<div className="flex justify-between">
							<ChevronRightIcon className="size-6" onClick={onClickToggle} />
							<p>채팅</p>
							<EllipsisVerticalIcon className="size-6" />
						</div>
						<Divider color="lightGray" />
						<div>
							<SponsorshipRanking />
						</div>
						<Divider color="lightGray" />
						<div className="flexCol gap-1 px-3 pt-3">
							{Array.from({ length: 17 }).map((_, index) => (
								<div key={index} className="flex gap-2">
									<p className="text-main">예슬콩</p>안녕하세요. 채팅을
									시작합니다~~~
								</div>
							))}
						</div>
					</div>
					<SubInput placeholder="채팅을 입력해주세요." />
				</div>
			) : (
				<div className="flexCol w-[4%] items-center">
					<ChevronLeftIcon className="size-6" onClick={onClickToggle} />
				</div>
			)}
		</>
	);
}
