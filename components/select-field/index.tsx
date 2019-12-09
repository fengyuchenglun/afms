/**
 *
 * SelectField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';
import { OptionItem } from '../types';

const Option = Select.Option;

class SelectField extends BaseField {
  getComponent = () => {
    const { config = {} } = this.props;
    const { options = [], ...rest } = config;
    return (
      <Select {...rest}>
        {options.map((item: OptionItem) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    );
  };
  getPreviewStatus = () => {
    const { value, config = {}, emptyContent } = this.props;
    if (value === null || value === undefined) return emptyContent;
    const { options = [] } = config;
    if (Array.isArray(value)) {
      const targets = options.filter((option: OptionItem) => value.indexOf(option.value) !== -1);
      return <span className="plain-text">{targets && targets.map((option: OptionItem) => option.label).join(', ')}</span>;
    }
    const target = options.find((option: OptionItem) => option.value === value);
    return <span className="plain-text">{target && target.label}</span>;
  };
}

SelectField.defaultProps = {
  type: 'select',
  status: EDIT,
  defaultValue: [],
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

SelectField.propTypes = {
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

export default SelectField;
