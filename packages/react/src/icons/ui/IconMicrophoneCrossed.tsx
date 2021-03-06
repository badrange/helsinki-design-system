import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconMicrophoneCrossed: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M19 11.5a7.002 7.002 0 01-5.999 6.929L13 21h3v2H8v-2h3v-2.57a6.952 6.952 0 01-1.504-.391l1.618-1.617a5 5 0 005.881-4.705L17 11.5h2zm.793-8.707l1.414 1.414-16.5 16.5-1.414-1.414 16.5-16.5zM7 11.5c0 .589.102 1.153.288 1.678L5.77 14.695a6.963 6.963 0 01-.766-2.954L5 11.5h2zM12 1a4.003 4.003 0 013.967 3.499L14 6.464V5.029l-.003-.147A2 2 0 0012 3a1.999 1.999 0 00-1.98 1.7l-.015.153L10 5l-.001 5.465-1.792 1.794a4.062 4.062 0 01-.185-.848l-.016-.206L8 11V4.971l.007-.205A4 4 0 0112 1z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconMicrophoneCrossed;
