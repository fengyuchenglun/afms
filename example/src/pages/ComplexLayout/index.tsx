import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from 'afms';
import { FormConfigProps } from 'afms/es/types';

const FormItem = Form.Item;

const formConfig: FormConfigProps = {
  layout: 'multi-column',
  column: 3,
  gutter: 10,
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
  fields: [
    {
      field: 'input',
      id: 'field1',
      formItem: {
        label: 'Field1'
      },
    },
    {
      field: 'input',
      id: 'field2',
      formItem: {
        label: 'Field2'
      },
    },
    {
      field: 'input',
      id: 'field3',
      formItem: {
        label: 'Field3'
      },
    },
    {
      field: 'select',
      id: 'field4',
      formItem: {
        label: 'Field4',
        labelCol: {
          span: 2,
        },
        wrapperCol: {
          span: 22,
        },
      },
      colSpan: 2,
    },
    {
      field: 'select',
      id: 'field5',
      formItem: {
        label: 'Field5'
      },
    },
    {
      field: 'datepicker',
      type: 'range',
      id: 'field6',
      formItem: {
        label: 'Field6'
      },
      config: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'select',
      id: 'field7',
      formItem: {
        label: 'Field7',
        labelCol: {
          span: 2,
        },
        wrapperCol: {
          span: 22,
        },
      },
      colSpan: 2,
      config: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'input',
      id: 'field8',
      formItem: {
        label: 'Field8'
      },
    },
    {
      field: 'input',
      id: 'field9',
      formItem: {
        label: 'Field9'
      },
    },
    {
      field: 'input',
      id: 'field10',
      formItem: {
        label: 'Field10',
        labelCol: {
          span: 2,
        },
        wrapperCol: {
          span: 22,
        },
      },
      colSpan: 2,
    },
    {
      field: 'input',
      id: 'field11',
      formItem: {
        label: 'Field11'
      },
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const ComplexLayout: React.FC = () => {
  function handleSubmit() {
    const { form } = formRef.props;
    form.validateFields((error) => {
      if (!error) {
        console.log(form.getFieldsValue());
      }
    });
  }
  function handleReset() {
    const { form } = formRef.props;
    form.resetFields();
  }
  return (
    <div>
      <FormRender
        config={formConfig}
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
      />
      <FormItem wrapperCol={{ span: 24 }} style={{ textAlign: 'right' }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button type="primary" ghost onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset
        </Button>
      </FormItem>
    </div>
  );
};

ComplexLayout.propTypes = {
};

export default ComplexLayout;
