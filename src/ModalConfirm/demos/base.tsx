import React from 'react';
import { ModalConfirm } from 'luckybird';
import { Button } from 'antd';

const Demo = () => {
  return (
    <div>
      <ModalConfirm
        content="确定吗"
        onOk={() => {
          console.log('abc');
        }}
      >
        <Button>ModalConfirm</Button>
      </ModalConfirm>
    </div>
  );
};

export default Demo;
