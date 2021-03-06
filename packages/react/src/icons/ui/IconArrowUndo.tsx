import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconArrowUndo: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M9.707 3.293L4 9l5.707 5.707 1.414-1.414L7.83 10h5.829l.123.002c2.13.066 3.84 1.829 3.84 3.998 0 2.17-1.71 3.932-3.84 3.998l-.123.002H9.876v2h3.782l.151-.002c3.225-.08 5.812-2.737 5.812-5.998s-2.587-5.917-5.812-5.998L13.658 8h-5.83l3.293-3.293-1.414-1.414z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconArrowUndo;
