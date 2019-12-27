import simpleForm from '!!raw-loader!../pages/SimpleForm/index';
import basicForm from '!!raw-loader!../pages/BasicForm/index';
import formLayout from '!!raw-loader!../pages/FormLayout/index';
import advancedSearchForm from '!!raw-loader!../pages/AdvancedSearchForm/index';
import formFieldStatus from '!!raw-loader!../pages/FormFieldStatus/index';
import asyncDataSource from '!!raw-loader!../pages/AsyncDataSource/index';
import formConfigHelper from '!!raw-loader!../pages/FormConfigHelper/index';
import validation from '!!raw-loader!../pages/Validation/index';
import formLinkage from '!!raw-loader!../pages/FormLinkage/index';
import customFormField from '!!raw-loader!../pages/CustomFormField/index';
import multipleForm from '!!raw-loader!../pages/MultipleForm/index';
import dynamicFormField from '!!raw-loader!../pages/DynamicFormField/index';
import complexLayout from '!!raw-loader!../pages/ComplexLayout/index';
import assembleFormField from '!!raw-loader!../pages/AssembleFormField/index';
import formFields from '!!raw-loader!../pages/FormFields/index';
import registerFormField from '!!raw-loader!../pages/RegisterFormField/index';

export default {
  'basic': {
    title: 'BasicForm',
    code: [basicForm],
  },
  'simple': {
    title: 'Simple',
    code: [simpleForm],
  },
  'form-layout': {
    title: 'FormLayout',
    code: [formLayout],
  },
  'advanced-search-form': {
    title: 'AdvancedSearchForm',
    code: [advancedSearchForm],
  },
  'form-field-status': {
    title: 'FormFieldStatus',
    code: [formFieldStatus],
  },
  'async-data-source': {
    title: 'AsyncDataSource',
    code: [asyncDataSource],
  },
  'form-config-helper': {
    title: 'FormConfigHelper',
    code: [formConfigHelper],
  },
  'validation': {
    title: 'Validation',
    code: [validation],
  },
  'form-linkage': {
    title: 'FormLinkage',
    code: [formLinkage],
  },
  'custom-form-field': {
    title: 'CustomFormField',
    code: [customFormField],
  },
  'multiple-form': {
    title: 'MultipleForm',
    code: [multipleForm],
  },
  'dynamic-form-field': {
    title: 'DynamicFormField',
    code: [dynamicFormField],
  },
  'complex-layout': {
    title: 'ComplexLayout',
    code: [complexLayout],
  },
  'assemble-form-field': {
    title: 'AssembleFormField',
    code: [assembleFormField],
  },
  'form-fields': {
    title: 'FormFields',
    code: [formFields],
  },
  'register-form-field': {
    title: 'RegisterFormField',
    code: [registerFormField],
  },
}