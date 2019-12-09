/**
 *
 * DatePickerField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker } from 'antd';
import BaseField from '../base-field';
import { EDIT } from '../utils/consts';
import { ComponentFieldType} from '../types';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// 日期组件类型 普通、月、周、区间
const COMPONENT_TYPE: ComponentFieldType = {
  date: DatePicker,
  month: MonthPicker,
  week: WeekPicker,
  range: RangePicker,
};

class DatePickerField extends BaseField {
  getComponent = () => {
    const { type = 'date', config } = this.props;
    const TargetComponent = COMPONENT_TYPE[type];
    return <TargetComponent {...config} />;
  };
  getPreviewStatus = () => {
    const { value, config = {} } = this.props;
    const { format = 'YYYY-MM-DD' } = config;
    if (!value) return null;
    if (Array.isArray(value)) {
      if (value[0] && value[1]) {
        return (
          <span className="afms-plain-text">
            {moment(value[0]).format(format)} ~ {moment(value[1]).format(format)}
          </span>
        );
      }
      return <span className="afms-plain-text">{JSON.stringify(value)}</span>;
    }
    return <span className="afms-plain-text">{moment(value).format(format)}</span>;
  };
}

DatePickerField.defaultProps = {
  type: 'date',
  status: EDIT,
  defaultValue: undefined,
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
};

DatePickerField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.any,
  defaultvlue: PropTypes.any,
  status: PropTypes.string,
  formItem: PropTypes.object,
  decorator: PropTypes.object,
  config: PropTypes.object,
  form: PropTypes.object,
};

export default DatePickerField;
