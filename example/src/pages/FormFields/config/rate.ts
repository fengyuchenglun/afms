import { FormConfigProps } from '../../../../../es/types';

const config: FormConfigProps = {
  fields: [
    {
      field: 'rate',
      id: 'rate1',
      defaultValue: 2,
      formItem: {
        label: 'Rate',
      },
    },
    {
      field: 'rate',
      id: 'rate2',
      status: 'preview',
      value: 3,
      formItem: {
        label: 'Rate',
      },
    },
    {
      field: 'rate',
      id: 'rate3',
      status: 'disabled',
      defaultValue: 2,
      formItem: {
        label: 'Rate',
      },
    },
  ],
};

export default config;
