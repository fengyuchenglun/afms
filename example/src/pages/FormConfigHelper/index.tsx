import React, { useEffect, useState } from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from '../../../../es';
import { FieldProps } from '../../../../es/types';

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
      field: 'select',
      id: 'source',
      formItem: {
        label: 'Source',
      },
      config: {
        placeholder: 'Please select',
      },
    },
  ],
});

let formRef: React.Component<FormComponentProps>;

const FormConfigHelper: React.FC = () => {
  const [formConfig, setFormConfig] = useState(formConfigHelper.getConfig());
  function handleSubmit() {
    const { form } = formRef.props;
    console.log(form.getFieldsValue());
  }
  useEffect(() => {
    formConfigHelper.setFieldById('source', (field: FieldProps) => {
      const item = field;
      if (item.config) {
        item.config.loading = true;
      }
      return item;
    });
    setFormConfig(formConfigHelper.getConfig());
    fetchSourceData().then((data) => {
      formConfigHelper.setFieldById('source', (field: FieldProps) => {
        const item = field;
        if (item.config) {
          item.config.options = data;
          item.config.loading = false;
        }
        return item;
      });
      setFormConfig(formConfigHelper.getConfig());
    });
  }, []);
  return (
    <div>
      <FormRender
        config={formConfig}
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
      />
      <FormItem wrapperCol={{ span: 18, offset: 3 }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormItem>
    </div>
  );
};

FormConfigHelper.propTypes = {
};

export default FormConfigHelper;
