/**
*
* TreeSelectField
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { TreeSelect } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';


class TreeSelectField extends BaseField {
  getComponent = () => {
    const { config } = this.props;
    return (
      <TreeSelect {...config} />
    );
  }
  getPreviewStatus = () => {
    const { value, emptyContent } = this.props;
    if (value === null || value === undefined) return emptyContent;
    return <span className="afms-plain-text">{value.join(', ')}</span>;
  }
}

TreeSelectField.defaultProps = {
  type: 'treeSelect',
  status: EDIT,
  defaultValue: undefined,
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

TreeSelectField.propTypes = {
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

export default TreeSelectField;
