import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import Button from '@src/components/atoms/Button/Button';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  options?: Array<{
    view: React.ReactNode;
  }>;
};

const ELEMENT = 'button';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function B<T extends React.ElementType = typeof ELEMENT>(
  { children, options = [], className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <Button {...props} className={cx('float-btn', className)}>
      {children}
    </Button>
  );
}

export type { BaseProps as ButtonProps };
export default React.forwardRef(B) as typeof B;