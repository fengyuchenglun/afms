import React, { useEffect, useState } from 'react';
import { Form, Button } from 'antd';
import { FormRender, InputField, RadioField, FormRenderCore } from '../../../../es';
import { FormComponentProps } from 'antd/lib/form';
import PriceInputField from 'components/fields/PriceInputField';
import { FormConfigProps } from '../../../../es/types';

const FormItem = Form.Item;

let formRef: React.Component<FormComponentProps>;

const formConfig: FormConfigProps = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 12,
  },
};

const moreInfoConfig: FormConfigProps = {
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

const AssembleFormField: React.FC = () => {
  function handleSubmit() {
    const { form } = formRef.props;
    console.log(form.getFieldsValue());
  }
  return (
    <div>
      <FormRender
        config={formConfig}
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
      >
        <InputField
          id="name"
          formItem={{
            label: 'Name',
          }}
        />
        <InputField
          id="mobile"
          formItem={{
            label: 'Mobile',
          }}
        />
        <InputField
          id="password"
          type="password"
          formItem={{
            label: 'Password',
          }}
        />
        <RadioField
          id="sex"
          formItem={{
            label: 'Radio',
          }}
          config={{
            options: [{
              label: 'Male',
              value: 0,
            }, {
              label: 'Female',
              value: 1,
            }]
          }}
        />
        <PriceInputField
          id="income"
          formItem={{
            label: 'Income',
          }}
        />
        <FormRenderCore
          config={moreInfoConfig}
        />
        <FormItem wrapperCol={{ span: 21, offset: 3 }}>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </FormItem>
      </FormRender>
    </div>
  );
};

AssembleFormField.propTypes = {
};

export default AssembleFormField;
