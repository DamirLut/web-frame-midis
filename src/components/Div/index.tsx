import React from 'react';

import style from './style.module.scss';

type DivProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Div(props: DivProps) {
  return <div className={[style['Div'], props.className].join(' ')}>{props.children}</div>;
}
