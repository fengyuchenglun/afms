import { FormConfigProps } from '../../../../../es/types';

const config: FormConfigProps = {
  fields: [
    {
      field: 'switch',
      id: 'switch1',
      defaultValue: true,
      formItem: {
        label: 'Switch',
      },
      decorator: {
        valuePropName: 'checked',
      },
    },
    {
      field: 'switch',
      id: 'switch2',
      status: 'preview',
      value: false,
      formItem: {
        label: 'Switch',
      },
      decorator: {
        valuePropName: 'checked',
      },
    },
    {
      field: 'switch',
      id: 'switch3',
      status: 'disabled',
      formItem: {
        label: 'Switch',
      },
      decorator: {
        valuePropName: 'checked',
      },
    },
  ],
};

export default config;
