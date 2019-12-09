import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from '../../../../es';
import { FormConfigProps } from '../../../../es/types';

const FormItem = Form.Item;

const formConfig: FormConfigProps = {
  fields: [
    {
      field: 'input',
      id: 'name',
      config: {
        placeholder: 'UserName',
      },
    },
    {
      field: 'input',
      id: 'password',
      type: 'password',
      config: {
        placeholder: 'Password',
      },
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const SimpleForm: React.FC = () => {
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
      />
      <FormItem>
        <Button type="primary" onClick={handleSubmit}>
          Login
        </Button>
      </FormItem>
    </div>
  );
};

SimpleForm.propTypes = {
};

export default SimpleForm;
