import React, { useState, useMemo } from 'react';
import { Form, Button, Row, Col, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from '../../../../es';
import { FormConfigProps } from '../../../../es/types';

const FormItem = Form.Item;

const baseFormConfig: FormConfigProps = {
  layout: 'multi-column',
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
  column: 3,
  gutter: 20,
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
        label: 'Field4'
      },
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
      field: 'datepicker',
      type: 'range',
      id: 'field7',
      formItem: {
        label: 'Field7'
      },
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
        label: 'Field10'
      },
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const SimpleForm: React.FC = () => {
  const [expand, setExpand] = useState(false);
  function handleSearch() {
    const { form } = formRef.props;
    console.log(form.getFieldsValue());
  }
  function handleReset() {
    const { form } = formRef.props;
    form.resetFields();
  }
  function toggleExpand() {
    setExpand(!expand);
  }
  const formConfig = Object.assign({}, baseFormConfig);
  formConfig.fields = expand ? formConfig.fields.slice(0) : formConfig.fields.slice(0, 6);
  return (
    <div>
      <FormRender
        config={formConfig}
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
      />
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleReset}>
            Clear
          </Button>
          <a style={{ marginLeft: 8, fontSize: 12 }} onClick={toggleExpand}>
            Collapse <Icon type={expand ? 'up' : 'down'} />
          </a>
        </Col>
      </Row>
    </div>
  );
};

SimpleForm.propTypes = {
};

export default SimpleForm;
