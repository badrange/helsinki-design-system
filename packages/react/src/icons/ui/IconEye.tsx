import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconEye: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M12 4.5c4.05 0 7.717 2.5 11 7.5-3.283 5-6.95 7.5-11 7.5S4.283 17 1 12c3.283-5 6.95-7.5 11-7.5zm0 2c-2.951 0-5.75 1.704-8.425 5.302L3.43 12l.145.198c2.624 3.53 5.368 5.237 8.258 5.3L12 17.5c2.951 0 5.75-1.704 8.425-5.302L20.57 12l-.145-.198c-2.624-3.53-5.368-5.237-8.258-5.3L12 6.5zM12 8a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconEye;
