import React from 'react';
import style from './style.module.scss';

type AvatarProps = {
  src: string;
  size?: number;
};

export default function Avatar(props: AvatarProps) {
  const properties = {
    '--size': props.size || 4,
  } as React.CSSProperties;

  return <img className={style.avatar} src={props.src} style={properties} />;
}

/// nest generate resource --no-spec
