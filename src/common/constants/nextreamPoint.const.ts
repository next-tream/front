export const POINT_USAGE_HISTORY_COLUMNS = [
	'사용 일시',
	'사용 포인트',
	'사용 내용',
	'사용 채널',
	'후원 메시지',
];

export const POINT_USAGE_HISTORY_SAMPLE = [
	{
		date: '2024. 12. 20 08:42',
		amount: '1000',
		contents: '채팅 후원',
		channel: '최홍식과 함께 춤을',
		donationMessage: '정말 멋진 춤이에요!',
	},
	{
		date: '2024. 12. 20 08:42',
		amount: '1000',
		contents: '채팅 후원',
		channel: '최홍식과 함께 춤을',
		donationMessage: '정말 멋진 춤이에요!',
	},
	{
		date: '2024. 12. 20 08:42',
		amount: '1000',
		contents: '채팅 후원',
		channel: '최홍식과 함께 춤을',
		donationMessage: '정말 멋진 춤이에요!',
	},
];

export const PURCHASE_HISTORY_COLUMNS = [
	'충전 일시', // chargeDate
	'충전 방식', // chargeMethod
	'충전 포인트', // chargePoint
	'잔여 포인트', // remainingPoint
	'결제 수단', // paymentMethod
	'결제 금액', // paymentAmount
	'유효 기간', // validityPeriod
	'구매 취소', // cancelPurchase
];

export const PURCHASE_HISTORY_SAMPLE = [
	{
		chargeDate: '2024. 12. 21 08:43',
		chargeMethod: '일반 충전',
		chargePoint: '10,000 P',
		remainingPoint: '15,000 P',
		paymentMethod: '카드',
		paymentAmount: '11,000원',
		validityPeriod: '2029. 12. 21 23:59',
		cancelPurchase: '',
	},
	{
		chargeDate: '2024. 12. 21 09:43',
		chargeMethod: '일반 충전',
		chargePoint: '30,000 P',
		remainingPoint: '45,000 P',
		paymentMethod: '카드',
		paymentAmount: '33,000원',
		validityPeriod: '2029. 12. 21 23:59',
		cancelPurchase: '',
	},
];

export const USAGE_GUIDE_CONST = [
	'충전한 포인트를 사용하여 라이브 방송 중 스트리머에게 후원할 수 있습니다. (단, 모바일 웹에서는 사용 불가)',
	'멤버십 구매 시 10%의 부가가치세가 부과됩니다.',
	'구매한 멤버십의 유효기간은 구매일로부터 5년입니다.',
	'결제 상세내역은 넥스트림 멤버십 > 구매 내역에서 확인 가능합니다.',
	'1일 멤버십 결제 한도는 결제 수단별 정책에 따라 상이하며, 충전된 포인트를 활용한 1회 후원 한도는 300만 원입니다.',
	'포인트 충전 및 사용내역은 넥스트림 멤버십 > 사용 내역에서 확인할 수 있습니다.',
	'기타 포인트 충전 관련 문의는 넥스트림 고객센터를 이용해 주세요.',
];

export const REFUND_GUIDE_CONST = [
	'후원에 이미 사용한 포인트는 구매 취소 및 환불이 불가합니다.',
	'웹을 통해 결제한 포인트는 구매 후 7일 이내에 전액을 사용하지 않은 경우 고객센터를 통해 환불이 가능합니다.',
	'인앱결제를 통해 구매한 멤버십에 대한 환불은 구매한 앱 마켓의 환불 정책에 따릅니다.',
	'이미 후원에 사용한 포인트를 앱 마켓을 통해 환불받을 경우, 사용한 포인트 후원이 회수될 수 있습니다. 단, 후원 후 환불이 반복적이거나 과도한 경우 넥스트림 서비스 이용이 일부 또는 전부 제한될 수 있습니다.',
	'미성년자가 법정대리인 동의 없이 계약을 체결한 경우, 미성년자 또는 법정대리인이 이를 취소할 수 있습니다.',
	'넥스트림 회원 탈퇴 시 보유한 잔여 포인트에 대하여 환불을 신청할 수 있고, 환불 신청 없이 탈퇴한 경우 회원 탈퇴가 완료된 이후에는 포인트의 복구 또는 환불이 불가능합니다.',
];
