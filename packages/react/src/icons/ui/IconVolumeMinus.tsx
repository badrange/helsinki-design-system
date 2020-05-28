import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconVolumeMinus: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
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
        d="M15 2.5v19L9.273 17H6a5 5 0 01-.14-9.998L9.273 7 15 2.5zm-2 4.311l-3 2.115v6.147l3 2.115V6.811zM8 9H6.027L5.915 9a3 3 0 00-.027 5.997L6 15h2V9zm16 2v2h-7v-2h7z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconVolumeMinus;
