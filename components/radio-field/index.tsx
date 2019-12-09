/**
 *
 * RadioField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';
import { OptionItem } from '../types';

const RadioGroup = Radio.Group;

class RadioField extends BaseField {
  getComponent = () => {
    const { config } = this.props;
    return <RadioGroup {...config} />;
  };
  getPreviewStatus = () => {
    const { value, config = {} } = this.props;
    const target = config.options && config.options.find((option: OptionItem) => option.value === value);
    return <span className="afms-plain-text">{target && target.label}</span>;
  };
}

RadioField.defaultProps = {
  type: 'input',
  status: EDIT,
  defaultValue: undefined,
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

RadioField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  status: PropTypes.string,
  formItem: PropTypes.object,
  decorator: PropTypes.object,
  config: PropTypes.object,
  form: PropTypes.object,
};

export default RadioField;
