import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  startDirection?: 'lt' | 'rb';
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Float<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    startDirection = 'lt',
    left = 0,
    top = 0,
    right = 0,
    bottom = 0,
    className,
    style,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const [_style, setStyle] = React.useState(style);

  React.useEffect(() => {
    if (startDirection === 'lt') {
      setStyle({
        ...style,
        top: `${top}px`,
        left: `${left}px`,
      });
    } else {
      setStyle({
        ...style,
        bottom: `${bottom}px`,
        right: `${right}px`,
      });
    }
  }, [style, startDirection, left, top, bottom, right]);

  return (
    <ELEMENT
      {...props}
      ref={ref}
      style={_style}
      className={cx('float', className)}
    >
      {children}
    </ELEMENT>
  );
}

export type FloatProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Float) as typeof Float;
