import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconLocation: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
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
        d="M11.967 1.5c2.06 0 4.12.778 5.69 2.334 3.143 3.111 2.93 7.96 0 11.268l-.622.709c-2.612 2.991-4.066 4.96-5.068 6.937-1.073-2.13-2.682-4.249-5.689-7.646-2.93-3.308-3.143-8.157 0-11.268A8.06 8.06 0 0111.967 1.5zm.032 2a6.072 6.072 0 00-4.3 1.762A5.606 5.606 0 006.002 9.41c.02 1.573.648 3.134 1.766 4.398l.66.752c1.59 1.823 2.717 3.239 3.573 4.503.975-1.437 2.292-3.063 4.233-5.255 1.118-1.264 1.746-2.825 1.766-4.398a5.616 5.616 0 00-1.698-4.15A6.077 6.077 0 0011.999 3.5zM12 6a3.5 3.5 0 110 6.999A3.5 3.5 0 0112 6zm0 2c-.827 0-1.5.673-1.5 1.5S11.173 11 12 11s1.5-.673 1.5-1.5S12.827 8 12 8z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconLocation;
