import React, { useRef } from 'react';
import { Button, Input, InputNumber } from 'antd';

import { EditableTable, type EditableQueryTableInstance } from 'luckybird';

const Demo = () => {
  const onChange = (value) => {
    console.log('value', value);
  };

  const ref = useRef<EditableQueryTableInstance>();

  return (
    <div>
      <Button
        onClick={() => {
          ref.current?.add({ name: 'abc', age: 123 });
        }}
      >
        联动
      </Button>
      <EditableTable
        onChange={onChange}
        columns={[
          {
            dataIndex: 'name',
            key: 'name',
            title: 'name',
            renderEditNode: () => <Input size="small" />,
            editFormItemProps: {
              rules: [{ required: true, message: '请输入name' }],
            },
          },
          {
            dataIndex: 'age',
            key: 'age',
            title: 'age',
            editFormItemProps: {
              dependency: {
                deps: ['name'],
                disabled: [
                  {
                    condition: ['*'],
                    result: true,
                  },
                ],
              },
            },
            renderEditNode: () => <Input size="small" />,
          },
          {
            dataIndex: 'age2',
            key: 'age2',
            title: 'age2',
            editFormItemProps: {
              dependency: {
                deps: ['name'],
                disabled: {
                  condition: ['*'],
                  result: true,
                },
              },
            },
            renderEditNode: () => <Input size="small" />,
          },
        ]}
        ref={ref}
      />
    </div>
  );
};

export default Demo;
