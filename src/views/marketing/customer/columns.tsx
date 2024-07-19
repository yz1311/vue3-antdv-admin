import moment from 'dayjs';
import { Tag } from 'ant-design-vue';
import type { TableColumn } from '@/components/core/dynamic-table';
import { formatToDateTime } from '@/utils/dateUtil';

export type TableListItem = API.CustomerDto;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '顾客姓名',
    width: 200,
    dataIndex: 'name',
  },
  {
    title: '顾客类型',
    width: 150,
    dataIndex: 'customerType',
  },
  {
    title: '相识日期',
    width: 150,
    dataIndex: 'acquaintanceDate',
    formItemProps: {
      component: 'RangePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
      },
      transform([startDate, endDate] = []) {
        console.log('vvvvv', startDate, endDate);
        if (startDate && endDate) {
          return [
            dayjs(startDate).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            dayjs(startDate).endOf('day').format('YYYY-MM-DD HH:mm:ss'),
          ];
        }
      },
    },
  },
  {
    title: '访问日期',
    width: 150,
    dataIndex: 'accessDate',
    formItemProps: {
      component: 'RangePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
      },
      transform([startDate, endDate] = []) {
        if (startDate && endDate) {
          return [
            dayjs(startDate).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            dayjs(endDate).endOf('day').format('YYYY-MM-DD HH:mm:ss'),
          ];
        }
      },
    },
    customRender: ({ record }) => {
      return moment(Number(record.accessDate + '000')).format('YYYY-MM-DD HH:mm:ss');
    },
  },
  {
    title: '生日',
    width: 150,
    dataIndex: 'birthDate',
    formItemProps: {
      component: 'RangePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
      },
      transform([startDate, endDate] = []) {
        if (startDate && endDate) {
          return [
            dayjs(startDate).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            dayjs(startDate).endOf('day').format('YYYY-MM-DD HH:mm:ss'),
          ];
        }
      },
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    formItemProps: {
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '启用',
            value: 1,
          },
          {
            label: '禁用',
            value: 0,
          },
        ],
      },
    },
    customRender: ({ record }) => {
      const enable = ~~record.status === 1;
      return <Tag color={enable ? 'green' : 'red'}>{enable ? '启用' : '停用'}</Tag>;
    },
  },
  {
    title: '备注',
    dataIndex: 'remark',
    hideInSearch: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    hideInSearch: true,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    hideInSearch: true,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];
