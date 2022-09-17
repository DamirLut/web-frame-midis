import Avatar from '@/components/Avatar';
import Input from '@/components/Input';
import style from './style.module.scss';

import IconSearch from '@/assets/icons/search.svg';

export default function Header() {
  return (
    <header className={style.header}>
      <div>
        <Input placeholder="Search" icon={IconSearch} />
      </div>
      <div>
        <Avatar
          src="https://portal.midis.info/upload/resize_cache/main/780/yncs8n7bvk7vd3q8ri9gv59qi4ovpfu0/100_100_2/livesey2.webp"
          size={3}
        />
      </div>
    </header>
  );
}
