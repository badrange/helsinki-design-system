import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconCalendarClock: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
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
        d="M17 12a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm0-12a1 1 0 011 1v1h4l.002 9.103A7.018 7.018 0 0020 11.674L20 11H4v8l6.071.001a6.95 6.95 0 00.603 2L2 21V4h4V3a1 1 0 112 0v1h8V3a1 1 0 011-1zm.5 13v2.94l1.53 1.53-1.06 1.06L16 18.56V15h1.5zM20 6H4v3h16V6z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconCalendarClock;
