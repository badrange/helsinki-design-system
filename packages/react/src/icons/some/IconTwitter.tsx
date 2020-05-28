import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconTwitter: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
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
        d="M19.071 3a1.93 1.93 0 011.923 1.778l.006.15v14.143a1.93 1.93 0 01-1.778 1.923l-.15.006H4.928a1.93 1.93 0 01-1.923-1.778L3 19.072V4.928a1.93 1.93 0 011.778-1.923L4.928 3h14.143zm-4.38 3.437a2.868 2.868 0 00-2.869 2.869c0 .222.027.444.071.657a8.156 8.156 0 01-5.916-3.002c-.249.426-.39.915-.39 1.448 0 .995.506 1.874 1.278 2.39a2.888 2.888 0 01-1.13-.279l-.167-.086v.036a2.87 2.87 0 002.301 2.816c-.24.062-.497.097-.755.097-.186 0-.364-.018-.542-.044a2.874 2.874 0 002.683 1.99 5.746 5.746 0 01-3.562 1.226c-.24 0-.462-.01-.693-.036a8.108 8.108 0 004.406 1.288c5.277 0 8.164-4.37 8.164-8.164 0-.124 0-.248-.01-.373A6.168 6.168 0 0019 7.787a5.752 5.752 0 01-1.652.444 2.862 2.862 0 001.261-1.581 5.65 5.65 0 01-1.821.693 2.862 2.862 0 00-2.096-.906z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconTwitter;
