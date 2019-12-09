import React, { useEffect, useState } from 'react';
import { Form, Button, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from '../../../../es';
import { FieldProps } from '../../../../es/types';
import { RadioChangeEvent } from 'antd/lib/radio';

const FormItem = Form.Item;

const fetchSourceData = () => {
  return new Promise((resolve) => {
    setTimeout(() => (
      resolve([{
        label: 'Alipay',
        value: 'Alipay',
      }, {
        label: 'Taobao',
        value: 'Taobao',
      }, {
        label: 'Tmall',
        value: 'Tmall',
      }])
    ), 3000);
  });
};

const formConfigHelper = new FormRender.FormConfig({
  labelCol: {
    span: 3,
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
      field: 'radio',
      id: 'reason',
      formItem: {
        label: 'Reason',
      },
      config: {
        options: [{
          label: 'lonely',
          value: 0,
        }, {
          label: 'boredom',
          value: 1,
        }, {
          label: 'other',
          value: 2,
        }],
      },
    },
    {
      field: 'input',
      id: 'other',
      status: 'none',
      formItem: {
        label: 'Other',
      },
    },
  ],
});

let formRef: React.Component<FormComponentProps>;

const DynamicFormField: React.FC = () => {
  const [formConfig, setFormConfig] = useState(formConfigHelper.getConfig());
  function handleSubmit() {
    const { form } = formRef.props;
    console.log(form.getFieldsValue());
  }
  function handleReasonChange(event: RadioChangeEvent) {
    const value = event.target.value;
    formConfigHelper.setFieldById('other', (field) => {
      field.status = value === 2 ? 'edit' : 'none';
      return field;
    });
    setFormConfig(formConfigHelper.getConfig());
  }
  function handleFormChange(item: FieldProps, event: any) {
    if (item.id === 'reason') {
      handleReasonChange(event as RadioChangeEvent);
    }
  }
  return (
    <div>
      <FormRender
        config={formConfig}
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
        onChange={handleFormChange}
      />
      <FormItem wrapperCol={{ span: 20, offset: 3 }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormItem>
    </div>
  );
};

DynamicFormField.propTypes = {
};

export default DynamicFormField;
