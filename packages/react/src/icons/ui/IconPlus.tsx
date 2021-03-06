import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconPlus: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path fill="currentColor" d="M13 6v5h5v2h-5v5h-2v-5H6v-2h5V6z" />
    </g>
  </svg>
);

export default IconPlus;
