export default function Earnings({ earnings }: { earnings: number }) {
	return <p className="font-semibold lg:text-5xl 2xl:text-7xl">{earnings.toLocaleString()}원</p>;
}
