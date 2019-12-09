import { TreeSelect } from 'antd';
import { FormConfigProps } from '../../../../../es/types';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const config: FormConfigProps = {
  fields: [
    {
      field: 'treeSelect',
      id: 'treeSelect1',
      formItem: {
        label: 'TreeSelect',
      },
      config: {
        style: { width: '330px' },
        treeData,
      }
    },
    {
      field: 'treeSelect',
      id: 'treeSelect2',
      formItem: {
        label: 'TreeSelect',
      },
      config: {
        style: { width: '330px' },
        treeData,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
      }
    },
    {
      field: 'treeSelect',
      id: 'treeSelect3',
      defaultValue: ['0-0-0'],
      formItem: {
        label: 'TreeSelect',
      },
      config: {
        style: { width: '330px' },
        treeData,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
      }
    },
    {
      field: 'treeSelect',
      id: 'treeSelect4',
      status: 'preview',
      value: ['0-1-0', '0-1-1'],
      formItem: {
        label: 'TreeSelect',
      },
      config: {
        style: { width: '330px' },
        treeData,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
      }
    },
    {
      field: 'treeSelect',
      id: 'treeSelect5',
      status: 'disabled',
      value: ['0-1-0', '0-1-1'],
      formItem: {
        label: 'TreeSelect',
      },
      config: {
        style: { width: '330px' },
        treeData,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
      }
    },
  ],
};

export default config;
