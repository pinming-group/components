import React, { Fragment, useRef } from 'react';
import { ButtonAction, ModalForm, ModalFormInstance } from 'luckybird';

const demo = () => {
  const ref = useRef<ModalFormInstance>();

  return (
    <Fragment>
      <ButtonAction
        onClick={async () => {
          const result = await ref.current?.open({
            title: '弹框',
            width: 800,
            children: <div>abc</div>,
            onOk: async () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }, 2000);
              });
            },
            modalProps: {
              footerRender: (ctx) => {
                return (
                  <ButtonAction
                    onClick={() => {
                      console.log('ctx', ctx);
                    }}
                  >
                    确定
                  </ButtonAction>
                );
              },
            },
          });

          console.log('result', result);
        }}
      >
        弹框表单
      </ButtonAction>
      <ModalForm ref={ref} />
    </Fragment>
  );
};

export default demo;
