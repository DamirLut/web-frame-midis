import { useRecoilValue } from 'recoil';
import { PermsList } from '../../lib/type';
import { RoomAtom } from '../../store/RoomAtom';
import style from './style.module.scss';

export default function Users() {
  const { users } = useRecoilValue(RoomAtom);
  return (
    <div className={style['users-container']}>
      {users.map((user) => (
        <div key={user.id} style={{ backgroundColor: PermsList[user.perms].color }}>
          {user.username}
        </div>
      ))}
    </div>
  );
}
