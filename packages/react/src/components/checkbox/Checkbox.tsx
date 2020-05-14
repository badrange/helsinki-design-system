import React, { ChangeEventHandler, CSSProperties, FC, InputHTMLAttributes, RefObject } from 'react';

import styles from './Checkbox.module.css';
import classNames from '../../utils/classNames';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * If `true`, the component is checked
   */
  checked?: boolean;
  /**
   * Additional class names to apply to the checkbox
   */
  className?: string;
  /**
   * If `true`, the checkbox will be disabled
   */
  disabled?: boolean;
  /**
   * The id of the input element
   */
  id: string;
  /**
   * The label for the checkbox
   */
  labelText?: string;
  /**
   * Callback fired when the state is changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Override or extend the styles applied to the component. See checkbox [tokens](https://city-of-helsinki.github.io/helsinki-design-system/components/checkbox#tokens) for available CSS variables
   */
  style?: CSSProperties;
  /**
   * The value of the component
   */
  value?: string;
};

const Checkbox: FC<CheckboxProps> = React.forwardRef(
  (
    {
      checked = false,
      className,
      disabled = false,
      id,
      labelText,
      onChange = () => null,
      style,
      value,
      ...rest
    }: CheckboxProps,
    ref: RefObject<HTMLInputElement>,
  ) => (
    <div className={classNames(styles.checkbox, className)} style={style}>
      <input
        ref={ref}
        id={id}
        className={classNames(styles.input)}
        onChange={onChange}
        value={value}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        aria-checked={checked}
        {...rest}
      />
      <label htmlFor={id} className={classNames(styles.label)}>
        {labelText}
      </label>
    </div>
  ),
);

export default Checkbox;