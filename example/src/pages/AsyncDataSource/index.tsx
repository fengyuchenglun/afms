import React, { useEffect, useState } from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from 'afms';
import { FormConfigProps } from 'afms/es/types';

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

const baseFormConfig: FormConfigProps = {
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
        loading: true,
        placeholder: 'Please select',
      },
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const AsyncDataSource: React.FC = () => {
  const [formConfig, setFormConfig] = useState(baseFormConfig);
  function handleSubmit() {
    const { form } = formRef.props;
    console.log(form.getFieldsValue());
  }
  useEffect(() => {
    fetchSourceData().then((data) => {
      const config = Object.assign({}, formConfig);
      const sourceField = config.fields.find(item => item.id === 'source');
      if (sourceField && sourceField.config) {
        sourceField.config.options = data;
        sourceField.config.loading = false;
      }
      setFormConfig(config);
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

AsyncDataSource.propTypes = {
};

export default AsyncDataSource;
