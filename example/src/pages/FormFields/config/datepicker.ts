import moment from 'moment';
import { FormConfigProps } from '../../../../../es/types';

const config: FormConfigProps = {
  fields: [
    {
      field: 'datepicker',
      id: 'datepicker1',
      defaultValue: moment(),
      formItem: {
        label: 'DatePicker',
      },
      config: {
      },
    },
    {
      field: 'datepicker',
      id: 'datepicker2',
      type: 'range',
      formItem: {
        label: 'DatePicker',
      },
      config: {
      },
    },
    {
      field: 'datepicker',
      id: 'datepicker3',
      type: 'month',
      formItem: {
        label: 'DatePicker',
      },
      config: {
      },
    },
    {
      field: 'datepicker',
      id: 'datepicker4',
      type: 'week',
      formItem: {
        label: 'DatePicker',
      },
      config: {
      },
    },
    {
      field: 'datepicker',
      id: 'datepicker5',
      status: 'preview',
      value: moment(),
      formItem: {
        label: 'DatePicker',
      },
      config: {
        format: 'YYYY-MM-DD HH:mm',
      },
    },
    {
      field: 'datepicker',
      id: 'datepicker6',
      type: 'range',
      status: 'preview',
      value: [moment(), moment().add(1)],
      formItem: {
        label: 'DatePicker',
      },
      config: {
        format: 'YYYY-MM-DD',
      },
    },
    {
      field: 'datepicker',
      id: 'datepicker7',
      status: 'disabled',
      value: moment(),
      formItem: {
        label: 'DatePicker',
      },
      config: {
        format: 'YYYY-MM-DD HH:mm:ss',
        style: {
          width: '332px',
        },
      },
    },
    {
      field: 'datepicker',
      id: 'datepicker8',
      type: 'range',
      status: 'disabled',
      formItem: {
        label: 'DatePicker',
      },
      config: {
      },
    },
  ],
};

export default config;
