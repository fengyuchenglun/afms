/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputNumber } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';
import { ComponentFieldType } from '../types';

const COMPONENT_TYPE: ComponentFieldType = {
  input: Input,
  textarea: Input.TextArea,
  password: Input.Password,
  inputNumber: InputNumber,
};

class InputField extends BaseField {
  getComponent = () => {
    const { type = 'input', config } = this.props;
    const TargetComponent = COMPONENT_TYPE[type];
    return (
      <TargetComponent {...config} />
    );
  };
}

InputField.defaultProps = {
  type: 'input',
  status: EDIT,
  defaultValue: undefined,
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

InputField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.any,
  defaultValue: PropTypes.string,
  status: PropTypes.string,
  formItem: PropTypes.object,
  decorator: PropTypes.object,
  config: PropTypes.object,
  form: PropTypes.object,
};

export default InputField;
