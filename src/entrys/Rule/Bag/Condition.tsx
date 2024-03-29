import React from 'react';
import { Input, Form, Space } from 'antd';
import type { FormListFieldData } from 'antd/lib/form/FormList';

const { Item } = Form;

export interface ConditionProps {
  field?: FormListFieldData;
  disabled?: boolean;
}

export const Condition: React.FC<ConditionProps> = (props) => {
  const { field, disabled } = props;
  const { key, ...restField } = field!;

  return (
    <Space size={0}>
      <Item {...restField} name={[restField.name, 'a']} rules={[{ required: false }]} style={{ marginBottom: 0 }}>
        <Input disabled={disabled} placeholder="请输入条件1" />
      </Item>
      <Item {...restField} name={[restField.name, 'b']} style={{ marginBottom: 0 }}>
        <Input disabled={disabled} placeholder="请输入条件2" />
      </Item>
      <Item {...restField} name={[restField.name, 'c']} style={{ marginBottom: 0 }}>
        <Input disabled={disabled} placeholder="请输入条件3" />
      </Item>
    </Space>
  );
};
