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

type WalletProps = {
  data: number[];
  label: string;
  color: string;
};

export default function Wallet(props: WalletProps) {
  return (
    <Line
      data={{
        labels: Array.from({ length: props.data.length }, (r, index) => '' + index),
        datasets: [
          {
            label: props.label,
            data: props.data,
            fill: false,
            borderColor: props.color,
            tension: 0.5,
            pointRadius: 0,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          subtitle: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      }}
    />
  );
}
