import React, { CSSProperties, FC, PropsWithChildren, ReactNode, useState } from 'react';
import { useCombobox, useMultipleSelection, useSelect } from 'downshift';
import isEqual from 'lodash.isequal';

import styles from './Dropdown.module.css';
import classNames from '../../utils/classNames';
import { IconAngleDown, IconCheck, IconAlertCircle } from '../../icons';
import Checkbox from '../checkbox/Checkbox';
import FieldLabel from '../../internal/field-label/FieldLabel';

type OptionType = {
  [key: string]: any;
};

export type DropdownProps = {
  /**
   * Controls the circular keyboard navigation between items. If set to `true`, when first item is highlighted, the Arrow Up will move highlight to the last item, and vice versa using Arrow Down.
   */
  circularNavigation?: boolean;
  /**
   * Additional class names to apply to the dropdown
   */
  className?: string;
  /**
   * Close the menu when the user selects an option
   */
  closeMenuOnSelect?: boolean;
  /**
   * If `true`, the dropdown will be disabled
   */
  disabled?: boolean;
  /**
   * If `true`, the dropdown menu can be filtered
   */
  filterable?: boolean;
  /**
   * Function used to set the `id` prop for menu options (`li`). The returned `string` value will be set a the option `id`
   * @param index Data item index
   */
  getItemId?: (index: number) => string;
  /**
   * The helper text content that will be shown below the dropdown
   */
  helper?: string | ReactNode;
  /**
   * Hides the label above the dropdown
   */
  hideLabel?: boolean;
  /**
   * Item that should be selected when the dropdown is initialized
   */
  defaultValue?: OptionType;
  /**
   * Item(s) that should be selected when the dropdown is initialized. Use this instead of `defaultValue` when `multiselect` is enabled
   */
  defaultValues?: OptionType[];
  /**
   * Used to generate the first part of the id on the elements.
   * You can override this id with one of your own, provided as a prop, or you can override the id for each element using the `getItemId`, `labelId`, `inputId`, `menuId` and `toggleButtonId` props.
   */
  id?: string;
  /**
   * If `true`, the input and `helper` will be displayed in an invalid state
   */
  invalid?: boolean;
  /**
   * A function used to detect whether an option is disabled ([example](/?path=/story/components-dropdown--disabled-options))
   * @param option  Data item
   * @param index   Data item index
   */
  isOptionDisabled?: (option: OptionType, index: number) => boolean;
  /**
   * Sets the data item field that represents the item label.
   * E.g. an `optionLabelField` value of `'foo'` and a data item `{ foo: 'Label', bar: 'value' }`, would display `Label` in the menu for that specific item
   */
  optionLabelField?: string;
  /**
   * Sets the `id` prop for the label element
   */
  labelId?: string;
  /**
   * The label for the dropdown
   */
  label?: string | ReactNode;
  /**
   * Sets the `id` prop for the input element when `filterable` is `true`
   */
  inputId?: string;
  /**
   * Sets the `id` prop for the menu (`ul`)
   */
  menuId?: string;
  /**
   * Enables selecting multiple values if `true`.
   *
   * Note: Using multiselect together with the `filterable` prop is not yet supported. `multiselect` will be ignored if `filterable` is `true`
   */
  multiselect?: boolean;
  /**
   * Callback fired when the state is changed
   * @param selectedItems Selected item(s)
   */
  onChange?: (selectedItems: OptionType | OptionType[]) => void;
  /**
   * Array of options that should be shown in the menu
   */
  options: OptionType[];
  /**
   * Short hint displayed in the dropdown before the user enters a value
   */
  placeholder?: string;
  /**
   * If `true`, the label is displayed as required
   */
  required?: boolean;
  /**
   * The option(s) that should be selected
   */
  selectedOption?: OptionType | OptionType[];
  /**
   * Display selected options as buttons below dropdown
   */
  showSelectedBelow?: boolean;
  /**
   * Override or extend the root styles applied to the component
   */
  style?: CSSProperties;
  /**
   * Sets the `id` prop for the toggle button (`button`)
   */
  toggleButtonId?: string;
  /**
   * Sets the number of options that are visible in the menu before it becomes scrollable
   */
  visibleOptions?: number;
};

type WrapperProps = PropsWithChildren<{
  filterable: boolean;
  getComboboxProps: any;
}>;

/**
 * Wrapper for input and toggle button that applies correct props based on dropdown mode
 * @param filterable        Whether the dropdown is filterable
 * @param getComboboxProps  Prop getter function required by Downshift to work correctly
 * @param children
 */
const Wrapper: FC<WrapperProps> = ({ filterable, getComboboxProps, children }: WrapperProps) =>
  filterable ? (
    <div {...getComboboxProps({ className: styles.wrapper })}>{children}</div>
  ) : (
    <div className={styles.wrapper}>{children}</div>
  );

const Dropdown: FC<DropdownProps> = ({
  circularNavigation = false,
  className,
  closeMenuOnSelect = true,
  defaultValue = null,
  defaultValues = [],
  disabled = false,
  filterable = false,
  getItemId,
  helper,
  hideLabel = false,
  invalid = false,
  isOptionDisabled,
  label,
  labelId,
  id = 'hds',
  inputId,
  menuId,
  multiselect = false,
  onChange = () => {
    // do nothing by default
  },
  optionLabelField = 'label',
  options = [],
  placeholder = '',
  required,
  selectedOption,
  showSelectedBelow = false,
  style,
  toggleButtonId,
  visibleOptions = 5,
}: DropdownProps) => {
  // combobox menu options
  const [inputItems, setInputItems] = useState(options);

  // init multi-select
  const { getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection<OptionType>({
    initialSelectedItems: defaultValues,
    ...(multiselect && selectedOption !== undefined && { selectedItems: (selectedOption as OptionType[]) ?? [] }),
    onSelectedItemsChange: ({ selectedItems: _selectedItems }) => multiselect && onChange(_selectedItems),
  });

  // downshift needs a string representation for each option label
  const itemToString = (item: OptionType): string => (item ? item[optionLabelField] ?? '' : '');

  // handles state changes
  const stateReducer = (state, { type, changes }) => {
    const { selectedItem } = changes;
    // flag for whether an item was selected
    const itemSelection = ((filterable
      ? [useCombobox.stateChangeTypes.InputKeyDownEnter, useCombobox.stateChangeTypes.ItemClick]
      : [
          useSelect.stateChangeTypes.MenuKeyDownEnter,
          useSelect.stateChangeTypes.MenuKeyDownSpaceButton,
          useSelect.stateChangeTypes.ItemClick,
        ]) as string[]).includes(type);

    // update selected items when multiselect is enabled
    if (multiselect && selectedItem && itemSelection) {
      selectedItems.includes(selectedItem) ? removeSelectedItem(selectedItem) : addSelectedItem(selectedItem);
    }
    // prevent the menu from being closed when the user selects an item
    if (!closeMenuOnSelect && itemSelection) {
      return {
        ...changes,
        isOpen: state.isOpen,
        highlightedIndex: state.highlightedIndex,
      };
    }
    return changes;
  };

  // shared props for select and combobox
  const commonProps = {
    circularNavigation,
    getItemId,
    id,
    initialSelectedItem: defaultValue,
    itemToString,
    labelId,
    menuId,
    onSelectedItemChange: ({ selectedItem }) => !multiselect && onChange(selectedItem),
    // selected items are handled by stateReducer when multiselect is enabled
    ...(multiselect && { selectedItem: null }),
    // a value for selectedOption indicates that the dropdown should be controlled
    // don't set selectedItem if it's not, so that downshift can control the selected item(s)
    ...(!multiselect && selectedOption !== undefined && { selectedItem: selectedOption }),
    stateReducer,
    toggleButtonId,
  };

  // init select
  const select = useSelect<OptionType>({
    items: options,
    ...commonProps,
  });

  // init combobox
  const combobox = useCombobox<OptionType>({
    items: inputItems,
    inputId,
    onInputValueChange: ({ inputValue }) =>
      setInputItems(
        options.filter((item) => {
          const input = inputValue.toLowerCase();
          const optionItem = item[optionLabelField]?.toLowerCase() || '';

          return optionItem.includes(input);
        }),
      ),
    ...commonProps,
  });

  // get downshift props based on dropdown mode
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = filterable ? combobox : select;

  // returns the toggle button label based on the dropdown mode
  const getButtonLabel = (): ReactNode => {
    if (filterable) return null;

    const buttonLabel = multiselect
      ? selectedItems.map((item) => item[optionLabelField]).join(', ')
      : selectedItem?.[optionLabelField];

    return <span className={styles.buttonLabel}>{buttonLabel || placeholder}</span>;
  };

  const showSelectedItems = (items: OptionType | OptionType[]) => {
    return items.map((item) => (
      <button type="button" key={item.key} onClick={() => removeSelectedItem(item)}>
        {item.label}
      </button>
    ));
  };

  // menu items
  const menuOptions = filterable ? inputItems : options;
  // show placeholder if no value is selected
  const showPlaceholder = (multiselect && selectedItems.length === 0) || (!multiselect && !selectedItem);

  return (
    <div
      className={classNames(
        styles.root,
        invalid && styles.invalid,
        disabled && styles.disabled,
        isOpen && styles.open,
        className,
      )}
      style={style}
    >
      {/* LABEL */}
      {label && <FieldLabel inputId={id} hidden={hideLabel} label={label} required={required} {...getLabelProps()} />}
      {/* WRAPPER */}
      <Wrapper filterable={filterable} getComboboxProps={combobox.getComboboxProps}>
        {/* COMBOBOX INPUT */}
        {filterable && (
          <input
            {...combobox.getInputProps({
              ...getDropdownProps(),
              type: 'text',
              className: styles.dropdown,
              disabled,
              placeholder,
            })}
          />
        )}
        {/* TOGGLE BUTTON */}
        <button
          type="button"
          {...getToggleButtonProps({
            // add downshift dropdown props for non-combobox multi-select dropdowns
            ...(!filterable && multiselect && { ...getDropdownProps() }),
            // add aria attribute to button for combobox dropdowns
            ...(filterable && { 'aria-labelledby': labelId || `${id}-label` }),
            disabled,
            className: classNames(!filterable && styles.buttonDropdown, showPlaceholder && styles.placeholder),
          })}
        >
          {getButtonLabel()}
          <IconAngleDown className={styles.angleIcon} />
        </button>
        {invalid && <IconAlertCircle className={styles.invalidIcon} />}
      </Wrapper>
      {/* MENU */}
      <ul
        {...getMenuProps({
          className: classNames(styles.menu, menuOptions.length > visibleOptions && styles.overflow),
          style: { maxHeight: `calc(var(--dropdown-height) * ${visibleOptions})` },
        })}
      >
        {isOpen &&
          menuOptions.map((item, index) => {
            const optionLabel = item[optionLabelField];
            const selected = multiselect ? selectedItems.includes(item) : isEqual(selectedItem, item);
            const optionDisabled = typeof isOptionDisabled === 'function' ? isOptionDisabled(item, index) : false;

            return (
              <li
                {...getItemProps({
                  key: `item-${index}`,
                  index,
                  item,
                  disabled: optionDisabled,
                  className: classNames(
                    styles.menuItem,
                    highlightedIndex === index && styles.highlighted,
                    isEqual(selectedItem, item) && styles.selected,
                    optionDisabled && styles.disabled,
                  ),
                })}
              >
                {multiselect ? (
                  <Checkbox
                    className={styles.checkbox}
                    id={optionLabel}
                    label={optionLabel}
                    checked={selected}
                    disabled={optionDisabled}
                  />
                ) : (
                  <>
                    {optionLabel}
                    {selected && <IconCheck className={styles.selectedIcon} />}
                  </>
                )}
              </li>
            );
          })}
      </ul>
      {showSelectedBelow && showSelectedItems(selectedItems)}
      {helper && <div className={styles.helperText}>{helper}</div>}
    </div>
  );
};

export default Dropdown;
