import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import type { FontWeight, Typo } from './types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children: React.ReactNode;
  typo?: Typo;
  weight?: FontWeight;
  ellipsis?: boolean;
};

const ELEMENT = 'span';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Text<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    typo = 'b1',
    weight = 'regular',
    ellipsis = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('typo', typo, weight, ellipsis && 'ellipsis', className)}
    >
      {children}
    </ELEMENT>
  );
}

export type { BaseProps as ButtonProps };
export default React.forwardRef(Text) as typeof Text;