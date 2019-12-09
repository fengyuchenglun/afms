/**
*
* CascaderField
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Cascader } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';


class CascaderField extends BaseField {
  getComponent = () => {
    const { config } = this.props;
    return (
      <Cascader {...config} />
    );
  }
  getPreviewStatus = () => {
    const { value, emptyContent } = this.props;
    if (value === null || value === undefined) return emptyContent;
    return <span className="afms-plain-text">{value.join(',')}</span>;
  }
}

CascaderField.defaultProps = {
  type: 'cascader',
  status: EDIT,
  defaultValue: undefined,
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

CascaderField.propTypes = {
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

export default CascaderField;
