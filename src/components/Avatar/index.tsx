import React from 'react';
import style from './style.module.scss';

type AvatarProps = {
  src: string;
  size?: number;
  round?: boolean;
};

export default function Avatar(props: AvatarProps) {
  const properties = {
    '--size': props.size || 4,
    borderRadius: props.round ? '999px' : '13px',
  } as React.CSSProperties;

  return <img className={style.avatar} src={props.src} style={properties} />;
}

/// nest generate resource --no-spec
