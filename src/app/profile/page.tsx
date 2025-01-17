import Link from 'next/link';

const page = () => {
	return (
		<div className="flexColCenter h-[80vh] w-full">
			<div className="flexColCenter w-1/2 gap-4">
				<p className="text-5xl">🛠️ 페이지 점검 중 🛠️</p>
				<p className="mb-6">페이지 리뉴얼 중입니다. 빠른 시일내에 찾아뵙겠습니다.</p>
				<Link href="/" className="baseSubBtn">
					Return Home
				</Link>
			</div>
		</div>
	);
};

export default page;
