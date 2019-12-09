import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender, FormRenderCore } from '../../../../es';
import { FormConfigProps } from '../../../../es/types';
import inputConfig from './config/input';
import radioConfig from './config/radio';
import checkboxConfig from './config/checkbox';
import selectConfig from './config/select';
import datePickerConfig from './config/datepicker';
import cascaderConfig from './config/cascader';
import treeSelectConfig from './config/treeSelect';
import rateConfig from './config/rate';
import switchConfig from './config/switch';
import './index.scss';

const FormItem = Form.Item;

const formConfig: FormConfigProps = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 12,
  },
};

let formRef: React.Component<FormComponentProps>;

const FormFields: React.FC = () => {
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
    <div className="form-fields-container">
      <FormRender
        config={formConfig}
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
      >
        <h3>Input</h3>
        <FormRenderCore
          config={inputConfig}
        />
        <h3>Radio</h3>
        <FormRenderCore
          config={radioConfig}
        />
        <h3>Select</h3>
        <FormRenderCore
          config={selectConfig}
        />
        <h3>Checkbox</h3>
        <FormRenderCore
          config={checkboxConfig}
        />
        <h3>DatePicker</h3>
        <FormRenderCore
          config={datePickerConfig}
        />
        <h3>Cascader</h3>
        <FormRenderCore
          config={cascaderConfig}
        />
        <h3>TreeSelect</h3>
        <FormRenderCore
          config={treeSelectConfig}
        />
        <h3>Rate</h3>
        <FormRenderCore
          config={rateConfig}
        />
        <h3>Switch</h3>
        <FormRenderCore
          config={switchConfig}
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

FormFields.propTypes = {
};

export default FormFields;
