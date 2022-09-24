import React from 'react';
import { classNames } from '@/lib/utils';
import style from './style.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  background?: boolean | string;
  icon?: string;
  border?: boolean;
};

export default function Button(props: ButtonProps) {
  const properties = {
    background: props.background
      ? typeof props.background === 'string'
        ? props.background
        : 'var(--gradient-primary)'
      : '',
    border: props.border ? '1px solid #fff' : '',
    justifyContent: props.icon ? 'start' : '',
  } as React.CSSProperties;

  return (
    <button
      className={classNames(
        style.button,
        props.className,
        !props.background && style.button__clear,
      )}
      style={properties}>
      {props.icon && <img className={style.icon} src={props.icon} />}
      {props.children}
    </button>
  );
}
