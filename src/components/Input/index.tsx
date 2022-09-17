import { InputHTMLAttributes } from 'react';
import style from './style.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

export default function Input(props: InputProps) {
  const { icon, ...rest } = props;

  return (
    <div className={style.input}>
      <input {...rest} />
      {icon && <img src={icon} />}
    </div>
  );
}
