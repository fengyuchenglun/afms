import { FormConfigProps } from '../../../../../es/types';

const config: FormConfigProps = {
  fields: [
    {
      field: 'checkbox',
      id: 'checkbox1',
      formItem: {
        label: 'Checkbox',
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
      field: 'checkbox',
      id: 'checkbox2',
      defaultValue: ['Apple'],
      formItem: {
        label: 'Checkbox',
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
      field: 'checkbox',
      id: 'checkbox3',
      status: 'preview',
      value: ['Apple', 'Orange'],
      formItem: {
        label: 'Checkbox',
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
      field: 'checkbox',
      id: 'checkbox4',
      status: 'disabled',
      formItem: {
        label: 'Checkbox',
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
