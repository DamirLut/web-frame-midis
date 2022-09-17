import React from 'react';
import { classNames } from '@/lib/utils';
import style from './style.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  background?: boolean;
  icon?: string;
};

export default function Button(props: ButtonProps) {
  const properties = {
    background: props.background ? 'var(--gradient-primary)' : '',
  } as React.CSSProperties;

  return (
    <button
      className={classNames(
        style.button,
        props.className,
        !props.background && style.button__clear,
      )}
      style={properties}>
      {props.icon ? (
        <img className={style.icon} src={props.icon} />
      ) : (
        <div className={style.icon} />
      )}
      {props.children}
    </button>
  );
}
