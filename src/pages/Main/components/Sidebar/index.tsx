import Avatar from '@/components/Avatar';
import Button from '@/components/Button';

import style from './style.module.scss';

import IconHome from '@/assets/icons/home.svg';
import IconInbox from '@/assets/icons/inbox.svg';
import IconSettings from '@/assets/icons/settings.svg';
import IconFriends from '@/assets/icons/friends.svg';

import Separator from '@/components/Separator';

export default function Sidebar() {
  const sidebarThree = [
    {
      href: '/',
      element: (
        <Button icon={IconHome} background={true}>
          Главная
        </Button>
      ),
    },
    {
      href: '/friends',
      element: <Button icon={IconFriends}>Друзья</Button>,
    },
    {
      href: '/messages',
      element: <Button icon={IconInbox}>Сообщения</Button>,
    },

    {
      element: <Separator />,
    },
    {
      href: '/settings',
      element: <Button icon={IconSettings}>Настройки</Button>,
    },
  ];

  return (
    <aside className={style.sidebar}>
      <div className={style.logo}>
        <Avatar
          src="https://portal.midis.info/upload/resize_cache/main/780/yncs8n7bvk7vd3q8ri9gv59qi4ovpfu0/100_100_2/livesey2.webp"
          size={3}
        />
        App Name
      </div>
      <ul className={style.list}>
        {sidebarThree.map((threeElement) => (
          <li key={threeElement?.href}>{threeElement.element}</li>
        ))}
      </ul>
    </aside>
  );
}
