import { FormConfigProps, FieldProps } from '../../types';

export default class FormConfig {
  private config: FormConfigProps;
  constructor(config: FormConfigProps) {
    this.config = config || {};
  }
  
  getConfig() {
    return Object.assign({}, this.config);
  }

  getFieldById(id: string) {
    const { fields = [] } = this.config;
    const target = fields.find((item: FieldProps) => item.id === id);
    if (target) {
      return Object.assign({}, target);
    }
    return undefined;
  }

  insertField(field: FieldProps, targetIndex: number) {
    if (!field) {
      throw new TypeError('Field is empty');
    }
    const { fields = [] } = this.config;

    // 插入
    fields.push(field);
    const currentIndex = fields.length - 1;
    // 调整排序
    this.setFieldOrder(currentIndex, targetIndex);
  }

  setFieldById(id: string, callback: (field: FieldProps) => FieldProps) {
    if (!callback || typeof callback !== 'function') {
      throw new TypeError('Callback should be a function');
    }

    const { fields = [] } = this.config;

    const targetFieldIndex = fields.findIndex(item => item.id === id);

    if (targetFieldIndex < 0) {
      throw new Error('Target field is not found');
    }
    const newTargetField = callback(Object.assign({}, fields[targetFieldIndex]));
    fields[targetFieldIndex] = newTargetField;

    return [newTargetField, targetFieldIndex];
  }

  deleteFieldById(id: string) {
    const { fields = [] } = this.config;
    const currentIndex = fields.findIndex(item => item.id === id);
    const removedField = fields.splice(currentIndex, 1);

    if (currentIndex >= 0) {
      return removedField;
    }
    return undefined;
  }

  setFieldOrder(currentIndex: number, targetIndex: number) {
    const { fields = [] } = this.config;
    if (currentIndex < 0 || currentIndex >= fields.length) {
      throw new Error('Current field is not exists');
    }
    if (targetIndex < 0 || targetIndex >= fields.length) {
      throw new Error('Target index is not exists');
    }
    fields.splice(targetIndex, 0, fields.splice(currentIndex, 1)[0]);
  }
}
