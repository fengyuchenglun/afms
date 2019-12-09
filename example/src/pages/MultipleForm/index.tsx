import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender, FormRenderCore } from '../../../../es';
import { FormConfigProps } from '../../../../es/types';
import './index.scss';

const FormItem = Form.Item;

const form1Config: FormConfigProps = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 12,
  },
  fields: [
    {
      field: 'input',
      id: 'name',
      formItem: {
        label: 'Name',
      },
    },
    {
      field: 'input',
      id: 'mobile',
      formItem: {
        label: 'Mobile',
      },
    },
    {
      field: 'input',
      id: 'password',
      type: 'password',
      formItem: {
        label: 'Password',
      },
    },
    {
      field: 'radio',
      id: 'sex',
      formItem: {
        label: 'Sex',
      },
      config: {
        options: [{
          label: 'Male',
          value: 0,
        }, {
          label: 'Female',
          value: 1,
        }],
      },
    },
  ],
};

const form2Config: FormConfigProps = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 12,
  },
  fields: [
    {
      field: 'select',
      id: 'school',
      formItem: {
        label: 'School',
      },
      config: {
        options: [{
          label: 'Tsinghua University',
          value: 'tsinghua',
        }, {
          label: 'Peking University',
          value: 'peking',
        }],
      }
    },
    {
      field: 'select',
      id: 'income',
      formItem: {
        label: 'Income',
      },
      config: {
        options: [{
          label: '$50-$100',
          value: '$50-$100'
        }, {
          label: '$100-$500',
          value: '$100-$500',
        }, {
          label: '$500-$1000',
          value: '$500-$1000',
        }]
      },
    },
    {
      field: 'select',
      id: 'country',
      formItem: {
        label: 'Country',
      },
      config: {
        options: [{
          label: 'China',
          value: 'China',
        }, {
          label: 'USA',
          value: 'USA',
        }, {
          label: 'France',
          value: 'France',
        }],
      },
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const MultipleForm: React.FC = () => {
  function handleSubmit() {
    const { form } = formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(values);
    });
  }
  return (
    <div className="multiple-form-container">
      <FormRender
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
      >
        <h3>BaseInfo</h3>
        <FormRenderCore
          className="form-panel"
          config={form1Config}
        />
        <h3>MoreInfo</h3>
        <FormRenderCore
          className="form-panel"
          config={form2Config}
        />
      </FormRender>
      <FormItem wrapperCol={{ span: 18, offset: 2 }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormItem>
    </div>
  );
};

MultipleForm.propTypes = {
};

export default MultipleForm;
