/**
*
* CheckboxField
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';

const CheckboxGroup = Checkbox.Group;

class CheckboxField extends BaseField {
  getComponent = () => {
    const { config } = this.props;
    return (
      <CheckboxGroup {...config} />
    );
  }
  getPreviewStatus = () => {
    const { value } = this.props;
    if (!value) return null;
    return <span className="afms-plain-text">{value.join(', ')}</span>;
  }
}

CheckboxField.defaultProps = {
  type: '',
  status: EDIT,
  defaultValue: [],
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

CheckboxField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.array,
  defaultValue: PropTypes.array,
  status: PropTypes.string,
  formItem: PropTypes.object,
  decorator: PropTypes.object,
  config: PropTypes.object,
  form: PropTypes.object,
};

export default CheckboxField;
