import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconArrowRedo: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M13.914 3.293L19.621 9l-5.707 5.707-1.414-1.414L15.793 10h-5.83l-.123.002C7.71 10.068 6 11.83 6 14c0 2.17 1.71 3.932 3.84 3.998l.124.002h3.781v2H9.964l-.152-.002C6.587 19.918 4 17.261 4 14s2.587-5.917 5.812-5.998L9.964 8h5.829L12.5 4.707l1.414-1.414z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconArrowRedo;
