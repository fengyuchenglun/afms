import { FormConfigProps } from '../../../../../es/types';

const config: FormConfigProps = {
  fields: [
    {
      field: 'input',
      id: 'input1',
      defaultValue: 'beyondxgb',
      formItem: {
        label: 'Input',
      },
      config: {
        placeholder: 'Please inpput',
      },
    },
    {
      field: 'input',
      id: 'input2',
      type: 'password',
      formItem: {
        label: 'Input',
      },
      config: {
        placeholder: 'Please inpput',
      },
    },
    {
      field: 'input',
      id: 'input3',
      type: 'textarea',
      formItem: {
        label: 'Input',
      },
      config: {
        placeholder: 'Please inpput',
      },
    },
    {
      field: 'input',
      id: 'input4',
      type: 'inputNumber',
      formItem: {
        label: 'Input',
      },
      config: {
        style: {
          width: '100%',
          placeholder: 'Please inpput',
        },
      },
    },
    {
      field: 'input',
      id: 'input5',
      formItem: {
        label: 'Input',
      },
      config: {
        style: {
          width: '50%',
        },
        extra: 'extra content',
      },
    },
    {
      field: 'input',
      id: 'input6',
      status: 'preview',
      value: 'beyondxgb',
      formItem: {
        label: 'Input',
      },
      config: {
        placeholder: 'Please inpput',
      },
    },
    {
      field: 'input',
      id: 'input7',
      status: 'disabled',
      value: 'beyondxgb',
      formItem: {
        label: 'Input',
      },
      config: {
        placeholder: 'Please inpput',
      },
    },
  ],
};

export default config;
