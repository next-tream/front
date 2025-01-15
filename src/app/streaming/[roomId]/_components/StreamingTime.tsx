import { useStreamingTime } from '@/common/hooks/useStreamingTime';

const StreamingTime = ({ createdAt }: { createdAt: string }) => {
	const streamingTime = useStreamingTime(createdAt);
	return <p>{streamingTime} 스트리밍 중</p>;
};

export default StreamingTime;
