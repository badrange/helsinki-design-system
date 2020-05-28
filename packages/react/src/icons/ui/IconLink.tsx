import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconLink: React.FC<IconProps> = ({ size = 's', className = '', style = {} }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M11.489 6.42l2.074-2.055A4.575 4.575 0 0116.698 3a4.142 4.142 0 013.072 1.21 4.157 4.157 0 011.229 3.071 4.565 4.565 0 01-1.255 3.023l-.109.112-3.432 3.432a4.575 4.575 0 01-3.135 1.364 4.142 4.142 0 01-3.071-1.21l.2-.195c.353-.348.997-.993 1.235-1.24.84.86 2.36.848 3.3-.002l.087-.082 3.394-3.45c.95-.95.988-2.483.084-3.387-.84-.86-2.36-.848-3.3.002l-.087.082-2.055 2.055-1.366-1.365zm-7.201 7.202L7.6 10.327c1.685-1.704 4.422-1.72 6.106-.035l-.567.576c-.343.343-.71.708-.818.81-.88-.88-2.324-.899-3.247-.062l-.085.08-3.314 3.314c-.917.917-.926 2.425-.019 3.332.88.88 2.324.898 3.248.062l.085-.08 1.984-2.004 1.37 1.389-1.985 1.984a4.38 4.38 0 01-3.06 1.283 4.282 4.282 0 01-3.046-1.248c-1.652-1.634-1.669-4.298-.062-6.007l.097-.1z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconLink;
