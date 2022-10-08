import { PermsList, User } from '../../lib/type';
import style from './style.module.scss';

export type MessageProps = {
  text: string;
  user: User;
  avatar: string;
};

export default function Message(props: MessageProps) {
  return (
    <div className={style.message}>
      <img className={style.avatar} src={props.avatar} width="48" />
      <div>
        <span className={style.user} style={{ color: PermsList[props.user.perms].color }}>
          {props.user.username}{' '}
        </span>
        <div className={style.text}>{props.text}</div>
      </div>
    </div>
  );
}
