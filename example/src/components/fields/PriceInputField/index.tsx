import React from 'react';
import { BaseField } from 'afms';
import PriceInput from './PriceInput';

export default class PriceInputField extends BaseField {
  getComponent = () => {
    const { config } = this.props;
    return <PriceInput {...config} />;
  };
  getPreviewStatus = () => {
    const { value } = this.props;
    const { number, currency } = value;
    return <span className="plain-text">{number} {currency}</span>;
  };
  getDisabledStatus = () => null;
  getReadOnlyStatus = () => null;
}