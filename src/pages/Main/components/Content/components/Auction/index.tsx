import Avatar from '@/components/Avatar';
import Card from '@/components/Card';

import style from './style.module.scss';

import huita from '@/assets/images/huita.png';
import IconHeart from '@/assets/icons/heart.svg';
import Button from '@/components/Button';

export default function Auction() {
  return (
    <div>
      <h1>Продам Есуса</h1>
      <Card className={style.card}>
        <img className={style['image-embed']} src={huita} />
        <img className={style.heart} src={IconHeart} />
        <div>
          <h2>Макаренко Костя</h2>
          <div className={style.profile}>
            <Avatar
              src={
                'https://portal.midis.info/upload/resize_cache/main/780/yncs8n7bvk7vd3q8ri9gv59qi4ovpfu0/100_100_2/livesey2.webp'
              }
              round
            />
            <div className={style.info}>
              <span>Damir Lutfrakhmanov</span>
              <a className={style.tag} href="#">
                @DamirLut
              </a>
            </div>
          </div>
          <div className={style['price-info']}>
            <div className={style['price']}>
              <div>Цена за раба</div>
              <span>80 Цыганиум</span>
            </div>
            <div className={style['price']}>
              <div>Starts in</div>
              <span>01h 32m 44s</span>
            </div>
          </div>
          <div className={style.buttons}>
            <Button className={style['view-rewards']}>View Rewards</Button>
            <Button border>View Collection</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
