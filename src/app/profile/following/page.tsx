import FollowerCardContainer from '@/common/components/FollowerCardContainer';

export default function FollowingPage() {
	return (
		<div className="flexCol gap-4">
			<h3 className="font-base text-mainWhite flex text-2xl">
				{/* 로그인한 사용자 이름 넣어줘야함. */}
				<p className="text-main font-semibold">고윤정은류지승</p>님의 팔로잉
			</h3>

			<div className="flexCol gap-5">
				<FollowerCardContainer
					name="샘플"
					description="나는 샘플입니다옹"
					tags={['일상', '코딩', '아자아자']}
				/>
				<FollowerCardContainer
					name="샘플"
					description="나는 샘플입니다옹"
					tags={['일상', '코딩', '아자아자']}
				/>
				<FollowerCardContainer
					name="샘플"
					description="나는 샘플입니다옹"
					tags={['일상', '코딩', '아자아자']}
				/>
			</div>
		</div>
	);
}
