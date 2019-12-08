import React from 'react';
import cx from 'classnames';
import bem from '../utils/bem';
import { Check } from '../icon/index';
import './styles/option.css';

const b = bem('x-select-option');

export interface OptionProps {
  [key: string]: any;
  value: any;
  label: React.ReactNode;
  text?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: (value: any) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Option: React.FC<OptionProps> = props => {
  const {
    value,
    label,
    selected,
    disabled,
    onClick,
    className,
    style,
    ...restProps
  } = props;
  const cls = cx(b(), className, {
    [b('', 'selected')]: selected,
    [b('', 'disabled')]: disabled,
  });

  return (
    <div
      {...restProps}
      className={cls}
      style={style}
      data-value={value}
      onClick={onClick}
    >
      <div className={b('item')}>{label}</div>
      {selected && <Check className={b('icon')} />}
    </div>
  );
};

export default Option;