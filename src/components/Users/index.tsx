import { useRecoilValue } from 'recoil';
import { PermsList } from '../../lib/type';
import { RoomAtom } from '../../store/RoomAtom';
import Div from '../Div';
import style from './style.module.scss';

export default function Users() {
  const { users } = useRecoilValue(RoomAtom);
  return (
    <Div className={style['users-container']}>
      {users.map((user) => (
        <div key={user.id} style={{ backgroundColor: PermsList[user.perms].color }}>
          {user.username}
        </div>
      ))}
    </Div>
  );
}
