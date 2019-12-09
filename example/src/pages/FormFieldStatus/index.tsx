import React, { useState } from 'react';
import { Form, Button, Row, Col, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from '../../../../es';
import { FormConfigProps, FieldStatus } from '../../../../es/types';
import './index.scss';

const FormItem = Form.Item;

const formData = {
  name: 'beyondxgb',
  phone: '186****8483',
  sex: 0,
  address: 'GuangDong ZhuangZhou',
  country: 'China',
  age: 28,
  memo: null,
};

const formConfig: FormConfigProps = {
  layout: 'multi-column',
  status: 'preview',
  column: 3,
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
  emptyContent: '-',
  fields: [
    {
      field: 'input',
      id: 'name',
      formItem: {
        label: 'Name',
      },
      config: {
        placeholder: 'Please your name',
      },
    },
    {
      field: 'input',
      id: 'phone',
      status: 'preview',
      formItem: {
        label: 'Phone',
      },
      config: {
        placeholder: 'Please input phone number',
      },
    },
    {
      field: 'select',
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
        placeholder: 'Please select',
      },
    },
    {
      field: 'input',
      id: 'address',
      formItem: {
        label: 'Address',
      },
      config: {
        placeholder: 'Please input address',
      },
      previewRender(field) {
        const { value } = field;
        return value.split(' ').join(', ');
      }
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
          label: 'America',
          value: 'America',
        }],
        placeholder: 'Please select',
      },
    },
    {
      field: 'input',
      id: 'age',
      type: 'inputNumber',
      formItem: {
        label: 'Age',
      },
      config: {
        placeholder: 'Please input age',
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'input',
      type: 'textarea',
      id: 'memo',
      formItem: {
        label: 'Memo',
      },
      config: {
        placeholder: 'Please input memo',
      },
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const FormFieldStatus: React.FC = () => {
  const [status, setStatus] = useState<FieldStatus>('preview');
  function toggleStatus() {
    if (status === 'edit') {
      const { form } = formRef.props;
      console.log(form.getFieldsValue());
      // update user info
      // ...
      message.success('Update success');
    }
    setStatus(status === 'preview' ? 'edit' : 'preview');
  }
  const addressField = formConfig.fields.find(field => field.id === 'address');
  formConfig.status = status;
  if (status === 'edit') {
    addressField && (addressField.status = 'disabled');
  } else {
    addressField && (addressField.status = 'preview');
  }
  return (
    <div className="form-field-status">
      <div className={status === 'edit' ? 'form-edit' : 'form-preview'}>
        <div className="user-info">
          <div className="head">
            <img src={`https://wwc.alicdn.com/avatar/getAvatar.do?userId=beyondxgb&width=60&height=60&type=sns`} alt="head" />
          </div>
          <div className="detail">
            <div className="name">
              beyondxgb
            </div>
            <div className="more-info">
              <span>Last update: 2019-11-20 20:59:30</span>
            </div>
          </div>
        </div>
        <FormRender
          config={formConfig}
          data={formData}
          wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
            formRef = c;
          }}
        />
        <div className="btn-wrap">
          <Button type="primary" onClick={toggleStatus}>
            { status === 'preview' ? 'Edit' : 'Save' }
          </Button>
        </div>
      </div>
    </div>
  );
};

FormFieldStatus.propTypes = {
};

export default FormFieldStatus;
