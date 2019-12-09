/**
*
* RateField
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';


class RateField extends BaseField {
  getComponent = () => {
    const { config } = this.props;
    return (
      <Rate {...config} />
    );
  }
}

RateField.defaultProps = {
  type: 'rate',
  status: EDIT,
  defaultValue: 0,
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

RateField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  status: PropTypes.string,
  formItem: PropTypes.object,
  decorator: PropTypes.object,
  config: PropTypes.object,
  form: PropTypes.object,
};

export default RateField;
