import type { ColumnType } from 'antd/lib/table';
import type { FormInstance } from 'antd/lib/form';
import type { FormItemProps } from '../../FormItem';

export type EditableTableAddPosition = 'top' | 'bottom';

export type EditableTableColumnType<T> = ColumnType<T> & {
  editFormItemProps?: FormItemProps;
  renderEditNode?: (ctx: { form: FormInstance; record: T; index: number }) => React.ReactNode;
  render?: (ctx: { value: any; record: T; index: number }) => React.ReactNode;
  children?: EditableTableColumnType<T>[];
  editable?: (record: T, index: number) => boolean;
};
