import { ComponentFieldType } from '../types';

import {
  InputField,
  RadioField,
  CheckboxField,
  SelectField,
  DatePickerField,
  CascaderField,
  TreeSelectField,
  SwitchField,
  RateField,
} from '../index';

const components: ComponentFieldType = {
  input: InputField,
  radio: RadioField,
  checkbox: CheckboxField,
  select: SelectField,
  datepicker: DatePickerField,
  cascader: CascaderField,
  treeSelect: TreeSelectField,
  switch: SwitchField,
  rate: RateField,
};

export default components;