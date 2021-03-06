import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconDisplay: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M6 18a4 4 0 01-3.995-3.8L2 14V7a4 4 0 013.8-3.995L6 3h12a4 4 0 013.995 3.8L22 7v7a4 4 0 01-3.8 3.995L18 18h-5a2 2 0 002 2h3.5v2h-13v-2H9a2 2 0 002-2H6zM18 5H6a2 2 0 00-1.995 1.85L4 7v7a2 2 0 001.85 1.995L6 16h12a2 2 0 001.995-1.85L20 14V7a2 2 0 00-1.85-1.995L18 5z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconDisplay;
