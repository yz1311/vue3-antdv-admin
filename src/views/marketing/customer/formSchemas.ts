import type { FormSchema } from '@/components/core/schema-form/';

export const customerSchemas: FormSchema<API.CustomerDto>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '顾客姓名',
    rules: [{ required: true, type: 'string' }],
    colProps: {
      span: 12,
    },
  },
  {
    field: 'acquaintanceDate',
    component: 'DatePicker',
    label: '相识日期',
    rules: [{ required: true, type: 'string' }],
    colProps: {
      span: 12,
    },
  },
  {
    field: 'accessDate',
    component: 'DatePicker',
    label: '访问日期',
    rules: [{ required: true, type: 'string' }],
    colProps: {
      span: 12,
    },
  },
  {
    field: 'birthDate',
    component: 'DatePicker',
    label: '生日',
    rules: [{ required: true, type: 'string' }],
    colProps: {
      span: 12,
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
  },
  {
    field: 'remark',
    component: 'InputTextArea',
    label: '备注',
  },
];
