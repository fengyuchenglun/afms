import { FormConfigProps } from '../../../../../es/types';

const config: FormConfigProps = {
  fields: [
    {
      field: 'radio',
      id: 'radio1',
      formItem: {
        label: 'Radio',
      },
      config: {
        options: [{
          label: 'Apple',
          value: 'Apple',
        }, {
          label: 'Banana',
          value: 'Banana',
        }, {
          label: 'Orange',
          value: 'Orange',
        }],
      },
    },
    {
      field: 'radio',
      id: 'radio3',
      defaultValue: 'Orange',
      formItem: {
        label: 'Radio',
      },
      config: {
        options: [{
          label: 'Apple',
          value: 'Apple',
        }, {
          label: 'Banana',
          value: 'Banana',
        }, {
          label: 'Orange',
          value: 'Orange',
        }],
      },
    },
    {
      field: 'radio',
      id: 'radio4',
      status: 'preview',
      value: 'Orange',
      formItem: {
        label: 'Radio',
      },
      config: {
        options: [{
          label: 'Apple',
          value: 'Apple',
        }, {
          label: 'Banana',
          value: 'Banana',
        }, {
          label: 'Orange',
          value: 'Orange',
        }],
      },
    },
    {
      field: 'radio',
      id: 'radio5',
      status: 'disabled',
      value: 'Orange',
      formItem: {
        label: 'Radio',
      },
      config: {
        options: [{
          label: 'Apple',
          value: 'Apple',
        }, {
          label: 'Banana',
          value: 'Banana',
        }, {
          label: 'Orange',
          value: 'Orange',
        }]
      },
    },
  ],
};

export default config;
