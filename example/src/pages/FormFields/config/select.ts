import { FormConfigProps } from '../../../../../es/types';

const config: FormConfigProps = {
  fields: [
    {
      field: 'select',
      id: 'select1',
      formItem: {
        label: 'Select',
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
      field: 'select',
      id: 'select2',
      defaultValue: 'Banana',
      formItem: {
        label: 'Select',
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
      field: 'select',
      id: 'select3',
      defaultValue: ['Apple', 'Banana'],
      formItem: {
        label: 'Select',
      },
      config: {
        mode: 'multiple',
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
      field: 'select',
      id: 'select4',
      status: 'preview',
      value: 'Banana',
      formItem: {
        label: 'Select',
      },
      config: {
        mode: 'multiple',
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
      field: 'select',
      id: 'select5',
      status: 'preview',
      value: ['Orange', 'Apple'],
      formItem: {
        label: 'Select',
      },
      config: {
        mode: 'multiple',
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
      field: 'select',
      id: 'select6',
      status: 'disabled',
      value: 'Orange',
      formItem: {
        label: 'Select',
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
