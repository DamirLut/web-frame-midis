import Card from '@/components/Card';
import style from './style.module.scss';
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
import ChartLine from '@/components/ChartLine';

import IconGreenGraph from '@/assets/icons/greenGraph.svg';
import IconRedGraph from '@/assets/icons/redGraph.svg';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Wallet() {
  return (
    <div className={style['wallet-container']}>
      <h1>Мой кошелек</h1>
      <Card className={style['wallet-card']}>
        <div
          style={{
            color: 'var(--color-text)',
          }}>
          Баланс
        </div>
        <span className={style['wallet-coin-name']}>
          ЦГН <span>21.533.10</span>
        </span>

        <div className={style['wallet-charts']}>
          <div className={style['wallet-chart-card']}>
            <div className={style['wallet-chart-type']}>
              <img src={IconGreenGraph} />
              <span>Покупка</span>
            </div>

            <div className={style['wallet-chart-cost']}>
              <span
                style={{
                  color: 'var(--color-success)',
                }}>
                7.048
              </span>{' '}
              ЦГН
            </div>

            <ChartLine
              data={Array.from({ length: 10 }, (r, index) => Math.random() * 1000)}
              label="Покупка"
              color="#0ddb84"
            />
          </div>
          <div className={style['wallet-chart-card']}>
            <div className={style['wallet-chart-type']}>
              <img src={IconRedGraph} />
              <span>Продажа</span>
            </div>

            <div className={style['wallet-chart-cost']}>
              <span
                style={{
                  color: 'var(--color-danger)',
                }}>
                7.048
              </span>{' '}
              ЦГН
            </div>

            <ChartLine
              data={Array.from({ length: 10 }, (r, index) => Math.random() * 1000)}
              label="Продажа"
              color="#ff0000"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
