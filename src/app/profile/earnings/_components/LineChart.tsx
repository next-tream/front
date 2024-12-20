'use client';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// 명시적으로 필요한 스케일 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	maintainAspectRatio: false, // 비율 유지하지 않음 (컨테이너에 맞게 크기 변경)
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
		},
	},
};

const labels = [
	'2024-12-01',
	'2024-12-02',
	'2024-12-03',
	'2024-12-04',
	'2024-12-05',
	'2024-12-06',
	'2024-12-07',
]; //x축 기준

export const data = {
	labels,
	datasets: [
		{
			label: '월별 수입', //그래프 분류되는 항목
			data: [150000, 55000, 100000, 250000, 60000, 120000, 300000], //실제 그려지는 데이터(Y축 숫자)
			borderColor: '#FC6B2D', //그래프 선 color
			backgroundColor: '#FC6B2D', //마우스 호버시 나타나는 분류네모 표시 bg
		},
	],
};

export default function LineChart() {
	return (
		<div className="h-full w-full">
			<Line options={options} data={data} />
		</div>
	);
}
