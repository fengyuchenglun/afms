/**
*
* SwitchField
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';


class SwitchField extends BaseField {
  getComponent = () => {
    const { config } = this.props;
    return (
      <Switch {...config} />
    );
  }
}

SwitchField.defaultProps = {
  type: 'switch',
  status: EDIT,
  defaultValue: false,
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

SwitchField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.bool,
  defaultValue: PropTypes.bool,
  status: PropTypes.string,
  formItem: PropTypes.object,
  decorator: PropTypes.object,
  config: PropTypes.object,
  form: PropTypes.object,
};

export default SwitchField;
