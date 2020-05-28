import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconGoogle: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19.071 3a1.93 1.93 0 011.923 1.778l.006.15v14.143a1.93 1.93 0 01-1.778 1.923l-.15.006H4.928a1.93 1.93 0 01-1.923-1.778L3 19.072V4.928a1.93 1.93 0 011.778-1.923L4.928 3h14.143zm-7.103 2c-3.873 0-7 3.127-7 7s3.127 7 7 7c4.039 0 6.774-2.842 6.774-6.836 0-.373-.029-.668-.074-.954l-.036-.215h-6.664v2.408h3.974c-.164 1.03-1.202 3.017-3.974 3.017-2.388 0-4.339-1.978-4.339-4.42 0-3.864 4.471-5.676 6.992-3.461l.135.125 1.906-1.832C15.44 5.692 13.853 5 11.968 5z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconGoogle;
