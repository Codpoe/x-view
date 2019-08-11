import React from 'react';
import cx from 'classnames';
import bem from '../utils/bem';
import Input, { InputProps } from '../input/index';
import Button from '../button/index';
import { Minus, Plus } from '../icon/index';
import './styles/input-number.css';

const b = bem('x-input-number');

type InputNumberPropsFromInput = Pick<
  InputProps,
  | 'defaultValue'
  | 'value'
  | 'name'
  | 'placeholder'
  | 'round'
  | 'size'
  | 'autoFocus'
  | 'readOnly'
  | 'disabled'
  | 'className'
  | 'style'
  | 'onChange'
>;

export interface InputNumberProps extends InputNumberPropsFromInput {
  step?: number;
  min?: number;
  max?: number;
  editable?: boolean;
}

export interface InputNumberState {
  value: any;
  validValue: number | '';
}

export default class InputNumber extends React.Component<
  InputNumberProps,
  InputNumberState
> {
  static defaultProps: InputNumberProps = {
    defaultValue: '',
    step: 1,
    min: -Infinity,
    max: Infinity,
    editable: true,
  };

  static getDerivedStateFromProps(props: InputNumberProps) {
    if (typeof props.value !== 'undefined') {
      return { value: props.value };
    }
    return null;
  }

  constructor(props: InputNumberProps) {
    super(props);
    const { value, defaultValue } = props;
    const stateValue = typeof value !== 'undefined' ? value : defaultValue;

    this.state = {
      value: stateValue,
      validValue: this.toValid(stateValue),
    };
  }

  toValid(value: any) {
    const { min, max } = this.props;
    value = parseFloat(value);

    if (Number.isNaN(value) || !Number.isFinite(value)) {
      return '';
    }

    if (value < (min as number)) {
      value = min;
    } else if (value > (max as number)) {
      value = max;
    }

    return value;
  }

  toFixed(value: number) {
    const { step } = this.props;
    const decimalPlaces = (`${step}`.split('.')[1] || '').length;

    return +value.toFixed(decimalPlaces);
  }

  handleChange: InputNumberProps['onChange'] = value => {
    const { disabled, readOnly, onChange } = this.props;

    if (disabled || readOnly) {
      return;
    }

    this.setState({ validValue: this.toValid(value) });

    if (typeof this.props.value === 'undefined') {
      this.setState({ value });
    }

    if (onChange) {
      onChange(value);
    }
  };

  handleMinus = () => {
    const { step, min, disabled, readOnly, onChange } = this.props;
    const value = this.toFixed(
      Math.max(+this.state.value - (step as number), min as number)
    );

    if (disabled || readOnly) {
      return;
    }

    this.setState({ validValue: this.toValid(value) });

    if (typeof this.props.value === 'undefined') {
      this.setState({ value });
    }

    if (onChange) {
      onChange(value);
    }
  };

  handlePlus = () => {
    const { step, max, disabled, readOnly, onChange } = this.props;
    const value = this.toFixed(
      Math.min(+this.state.value + (step as number), max as number)
    );

    if (disabled || readOnly) {
      return;
    }

    this.setState({ validValue: this.toValid(value) });

    if (typeof this.props.value === 'undefined') {
      this.setState({ value });
    }

    if (onChange) {
      onChange(value);
    }
  };

  handleBlur = () => {
    const { onChange } = this.props;
    const { value, validValue } = this.state;

    if (value === validValue) {
      return;
    }

    if (typeof this.props.value === 'undefined') {
      this.setState({ value: validValue });
    }

    if (onChange) {
      onChange(validValue);
    }
  };

  renderMinus() {
    const { min, disabled } = this.props;
    const { value } = this.state;

    return (
      <Button
        className={b('fix')}
        text
        disabled={disabled || value <= (min as number)}
      >
        <Minus />
      </Button>
    );
  }

  renderPlus() {
    const { max, disabled } = this.props;
    const { value } = this.state;

    return (
      <Button
        className={b('fix')}
        text
        disabled={disabled || value >= (max as number)}
      >
        <Plus />
      </Button>
    );
  }

  render() {
    const {
      name,
      size,
      round,
      readOnly,
      autoFocus,
      editable,
      disabled,
      className,
      style,
    } = this.props;
    const { value } = this.state;

    const cls = cx(b(), className, {
      [b(['disabled'])]: disabled,
    });

    return (
      <Input
        className={cls}
        style={style}
        name={name}
        value={value}
        size={size}
        round={round}
        readOnly={readOnly || !editable}
        autoFocus={autoFocus}
        disabled={disabled}
        noPadding
        prefix={this.renderMinus()}
        suffix={this.renderPlus()}
        onChange={this.handleChange}
        onPrefixClick={this.handleMinus}
        onSuffixClick={this.handlePlus}
        onBlur={this.handleBlur}
      />
    );
  }
}
