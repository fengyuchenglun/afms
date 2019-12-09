import React, { useState } from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { FormRender } from '../../../../es';
import { FieldProps } from '../../../../es/types';
import { RadioChangeEvent } from 'antd/lib/radio';

const FormItem = Form.Item;

const countryData: {
  [key: string]: Array<string>
} = {
  China: ['Beijing', 'Shanghai', 'Nanjing'],
  USA: ['New York', 'San Jose', 'Washton'],
  France: ['Paris', 'Marseille', 'Cannes'],
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
        onChange(form: WrappedFormUtils, value: string, option: React.ReactElement) {
          if (value === 'tsinghua') {
            form.setFieldsValue({
              'income': '$500-$1000',
            });
          }
          if (value === 'peking') {
            form.setFieldsValue({
              'income': '$100-$500',
            });
          }
        }
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
    {
      field: 'select',
      id: 'city',
      formItem: {
        label: 'City',
      },
      config: {},
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
    {
      field: 'input',
      id: 'mobile',
      status: 'none',
      formItem: {
        label: 'Mobile',
      },
    },
  ],
});

let formRef: React.Component<FormComponentProps>;

const FormLinkage: React.FC = () => {
  const [formConfig, setFormConfig] = useState(formConfigHelper.getConfig());
  function handleSubmit() {
    const { form } = formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(values);
    });
  }
  function handleCountryChange(value: string) {
    const citys = countryData[value];
    formConfigHelper.setFieldById('city', (field) => {
      if (field.config) {
        field.config.options = citys.map((city: string) => ({ label: city, value: city }));
      }
      return field;
    });
    formRef.props.form.setFieldsValue({ city: undefined });
    setFormConfig(formConfigHelper.getConfig());
  }
  function handleSexChange(event: RadioChangeEvent) {
    const value = event.target.value;
    formConfigHelper.setFieldById('mobile', (field) => {
      field.status = value === 0 ? 'none' : 'edit';
      return field;
    });
    setFormConfig(formConfigHelper.getConfig());
  }

  function handleFormChange(item: FieldProps, event: any) {
    switch(item.id) {
      case 'country':
        handleCountryChange(event as string);
        break;
      case 'sex':
        handleSexChange(event as RadioChangeEvent); 
        break;
      default:
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
      <FormItem wrapperCol={{ span: 18, offset: 3 }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormItem>
    </div>
  );
};

FormLinkage.propTypes = {
};

export default FormLinkage;
