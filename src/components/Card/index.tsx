import { classNames } from '@/lib/utils';
import React from 'react';

import style from './style.module.scss';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card(props: CardProps) {
  return <div className={classNames(style.card, props.className)}>{props.children}</div>;
}
