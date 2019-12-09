import { FormConfigProps } from '../../../../../es/types';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const config: FormConfigProps = {
  fields: [
    {
      field: 'cascader',
      id: 'cascader1',
      formItem: {
        label: 'Cascader',
      },
      config: {
        style: { width: '330px' },
        options,
      }
    },
    {
      field: 'cascader',
      id: 'cascader2',
      defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
      formItem: {
        label: 'Cascader',
      },
      config: {
        style: { width: '330px' },
        options,
      }
    },
    {
      field: 'cascader',
      id: 'cascader3',
      status: 'preview',
      value: ['zhejiang', 'hangzhou', 'xihu'],
      formItem: {
        label: 'Cascader',
      },
      config: {
        style: { width: '330px' },
        options,
      }
    },
    {
      field: 'cascader',
      id: 'cascader4',
      status: 'disabled',
      value: ['zhejiang', 'hangzhou', 'xihu'],
      formItem: {
        label: 'Cascader',
      },
      config: {
        style: { width: '330px' },
        options,
      }
    },
  ],
};

export default config;
