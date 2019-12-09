import React, { ChangeEvent } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { InputSizes } from 'antd/lib/input/Input';

const { Option } = Select;

export interface PriceInputValue {
  number?: number;
  currency?: string;
}

export interface PriceInputProps {
  size?: (typeof InputSizes)[number];
  value?: PriceInputValue;
  onChange?: (value: PriceInputValue) => void
}

interface PriceInputState {
  number: number;
  currency: string;
}

export default class PriceInput extends React.Component<PriceInputProps, PriceInputState> {
  static getDerivedStateFromProps(nextProps: PriceInputProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props: PriceInputProps) {
    super(props);

    const value = props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  }

  handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value || '0', 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  };

  handleCurrencyChange = (currency: string) => {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  };

  triggerChange = (changedValue: { [key: string]: string | number })=> {
    // Should provide an event to pass value to Form.
    const { onChange } = this.props;
    if (onChange) {
      onChange({
        ...this.state,
        ...changedValue,
      });
    }
  };

  render() {
    const { size } = this.props;
    const { currency, number } = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}

