export default function Divider({ color }: { color: string }) {
	return <div className={`bg-${color} h-[0.5px] w-full`}></div>;
}
