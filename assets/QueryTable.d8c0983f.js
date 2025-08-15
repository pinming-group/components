import{R as t,r as k,c as r}from"./index.b451a6b4.js";import{aq as i,T as m,M as d}from"./tree.feb2c467.js";import{r as p,c as y}from"./config.1b5e04c0.js";import{I as f}from"./index.29e311ad.js";import{m as c}from"./index.18e9e184.js";const h=[{name:"senderName",label:"\u53D1\u9001\u4EBA\u59D3\u540D",rules:[{message:"\u8BF7\u8F93\u5165",required:!0}],children:t.createElement(f,{placeholder:"\u8BF7\u8F93\u5165"})}],F=()=>t.createElement(d,{fields:h}),E=[{children:"\u5237\u65B0",type:"primary",onClick:(l,n)=>{var e;(e=n.table.refresh())==null||e.then(()=>{c.success("\u65B0\u5EFA\u6210\u529F")})}},{children:"\u65B0\u589E",type:"primary",onClick:(l,n)=>{n.modal.open({title:"\u65B0\u5EFA",children:t.createElement(F,null),onOk(){n.modal.close(),n.table.refresh()}})}}],A=()=>{const l=e=>[{children:"\u7F16\u8F91",onClick:()=>{e.modal.open({title:"\u7F16\u8F91",initialValues:e.record,children:t.createElement(F,null),onOk(){e.modal.close(),e.table.refresh()}})}},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:()=>new Promise(s=>{setTimeout(()=>{c.success("\u5220\u9664\u6210\u529F"),s("")},1e3)}).then(()=>{e.table.refresh()})}],n=[...y,{key:"operator",title:"\u64CD\u4F5C",render:e=>t.createElement(m,{actions:l(e)})}];return t.createElement(i,{fields:h.map(e=>({...e,rules:[]})),columns:n,actions:E,remoteDataSource:p})},R=`import React from 'react';
import {
  QueryTable,
  TextActions,
  QueryTableActionType,
  QueryTableColumnType,
  FormGroup,
  QueryTableColumnRenderContext,
} from 'luckybird';
import { Input, message } from 'antd';
import { remoteDataSource, columns, type RecordType } from '../../Table/demos/config';

const fields = [
  {
    name: 'senderName',
    label: '\u53D1\u9001\u4EBA\u59D3\u540D',
    rules: [{ message: '\u8BF7\u8F93\u5165', required: true }],
    children: <Input placeholder="\u8BF7\u8F93\u5165" />,
  },
];

const ModalForm = () => {
  return <FormGroup fields={fields} />;
};

const actions: QueryTableActionType[] = [
  {
    children: '\u5237\u65B0',
    type: 'primary',
    onClick: (e, ctx) => {
      ctx.table.refresh()?.then(() => {
        message.success('\u65B0\u5EFA\u6210\u529F');
      });
    },
  },
  {
    children: '\u65B0\u589E',
    type: 'primary',
    onClick: (e, ctx) => {
      ctx.modal.open({
        title: '\u65B0\u5EFA',
        children: <ModalForm />,
        onOk() {
          ctx.modal.close();
          ctx.table.refresh();
        },
      });
    },
  },
];

const Demo = () => {
  const getOperatorActions = (ctx: QueryTableColumnRenderContext) => {
    return [
      {
        children: '\u7F16\u8F91',
        onClick: () => {
          ctx.modal.open({
            title: '\u7F16\u8F91',
            initialValues: ctx.record,
            children: <ModalForm />,
            onOk() {
              ctx.modal.close();
              ctx.table.refresh();
            },
          });
        },
      },
      {
        children: '\u5220\u9664',
        confirm: '\u786E\u8BA4\u5220\u9664?',
        onClick: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              message.success('\u5220\u9664\u6210\u529F');
              resolve('');
            }, 1000);
          }).then(() => {
            ctx.table.refresh();
          });
        },
      },
    ];
  };

  const cols: QueryTableColumnType<RecordType>[] = [
    ...columns,
    {
      key: 'operator',
      title: '\u64CD\u4F5C',
      render: (ctx) => {
        return <TextActions actions={getOperatorActions(ctx)} />;
      },
    },
  ];

  return (
    <QueryTable
      fields={fields.map((item) => ({ ...item, rules: [] }))}
      columns={cols}
      // leftActions={actions}
      actions={actions}
      remoteDataSource={remoteDataSource}
    />
  );
};

export default Demo;
`,Q=void 0,O=void 0,B={code:R,title:Q,desc:O},M=!0;var S=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:B,isDemo:M,default:A},Symbol.toStringTag,{value:"Module"}));const C=[{name:"senderName",label:"\u53D1\u9001\u4EBA\u59D3\u540D",rules:[{message:"\u8BF7\u8F93\u5165",required:!0}],children:t.createElement(f,{placeholder:"\u8BF7\u8F93\u5165"})}],b=()=>t.createElement(d,{fields:C}),P=()=>{const l=k.exports.useRef(),n=[{children:"\u5BFC\u51FA",type:"primary",disabled:()=>{var u;const{table:o}=l.current||{};return o?!((u=o.getSelectedRows())!=null&&u.length):!0},onClick:(o,u)=>{console.log("\u9009\u4E2D\u884C",u.table.getSelectedRowKeys())}},{children:"\u5237\u65B0",type:"primary",onClick:(o,u)=>{var T;(T=u.table.refresh())==null||T.then(()=>{c.success("\u65B0\u5EFA\u6210\u529F")})}},{children:"\u65B0\u589E",type:"primary",onClick:(o,u)=>{u.modal.open({title:"\u65B0\u5EFA",children:t.createElement(b,null),onOk(){u.modal.close(),u.table.refresh()}})}}],e=o=>[{children:"\u7F16\u8F91",onClick:()=>{o.modal.open({title:"\u7F16\u8F91",initialValues:o.record,children:t.createElement(b,null),onOk(){o.modal.close(),o.table.refresh()}})}},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:()=>new Promise(u=>{setTimeout(()=>{c.success("\u5220\u9664\u6210\u529F"),u("")},1e3)}).then(()=>{o.table.refresh()})}],s=[...y,{key:"operator",title:"\u64CD\u4F5C",render:o=>t.createElement(m,{actions:e(o)})}];return t.createElement(i,{ref:l,fields:C.map(o=>({...o,rules:[]})),columns:s,rowSelection:!0,actions:n,remoteDataSource:p})},w=`import React, { useRef } from 'react';
import {
  QueryTable,
  TextActions,
  QueryTableActionType,
  QueryTableColumnType,
  FormGroup,
  QueryTableColumnRenderContext,
  QueryTableInstance,
} from 'luckybird';
import { Input, message } from 'antd';
import { remoteDataSource, columns, type RecordType } from '../../Table/demos/config';

const fields = [
  {
    name: 'senderName',
    label: '\u53D1\u9001\u4EBA\u59D3\u540D',
    rules: [{ message: '\u8BF7\u8F93\u5165', required: true }],
    children: <Input placeholder="\u8BF7\u8F93\u5165" />,
  },
];

const ModalForm = () => {
  return <FormGroup fields={fields} />;
};

const Demo = () => {
  const ref = useRef<QueryTableInstance>();

  const actions: QueryTableActionType[] = [
    {
      children: '\u5BFC\u51FA',
      type: 'primary',
      disabled: () => {
        const { table } = ref.current || {};
        if (!table) return true;
        return !table.getSelectedRows()?.length;
      },
      onClick: (e, ctx) => {
        console.log('\u9009\u4E2D\u884C', ctx.table.getSelectedRowKeys());
      },
    },
    {
      children: '\u5237\u65B0',
      type: 'primary',
      onClick: (e, ctx) => {
        ctx.table.refresh()?.then(() => {
          message.success('\u65B0\u5EFA\u6210\u529F');
        });
      },
    },
    {
      children: '\u65B0\u589E',
      type: 'primary',
      onClick: (e, ctx) => {
        ctx.modal.open({
          title: '\u65B0\u5EFA',
          children: <ModalForm />,
          onOk() {
            ctx.modal.close();
            ctx.table.refresh();
          },
        });
      },
    },
  ];

  const getOperatorActions = (ctx: QueryTableColumnRenderContext) => {
    return [
      {
        children: '\u7F16\u8F91',
        onClick: () => {
          ctx.modal.open({
            title: '\u7F16\u8F91',
            initialValues: ctx.record,
            children: <ModalForm />,
            onOk() {
              ctx.modal.close();
              ctx.table.refresh();
            },
          });
        },
      },
      {
        children: '\u5220\u9664',
        confirm: '\u786E\u8BA4\u5220\u9664?',
        onClick: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              message.success('\u5220\u9664\u6210\u529F');
              resolve('');
            }, 1000);
          }).then(() => {
            ctx.table.refresh();
          });
        },
      },
    ];
  };

  const cols: QueryTableColumnType<RecordType>[] = [
    ...columns,
    {
      key: 'operator',
      title: '\u64CD\u4F5C',
      render: (ctx) => {
        return <TextActions actions={getOperatorActions(ctx)} />;
      },
    },
  ];

  return (
    <QueryTable
      // @ts-expect-error
      ref={ref}
      fields={fields.map((item) => ({ ...item, rules: [] }))}
      columns={cols}
      rowSelection
      // leftActions={actions}
      actions={actions}
      remoteDataSource={remoteDataSource}
    />
  );
};

export default Demo;
`,v=void 0,_=void 0,$={code:w,title:v,desc:_},I=!0;var V=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:$,isDemo:I,default:P},Symbol.toStringTag,{value:"Module"}));const x=[{name:"senderName",label:"\u53D1\u9001\u4EBA\u59D3\u540D",rules:[{message:"\u8BF7\u8F93\u5165",required:!0}],children:t.createElement(f,{placeholder:"\u8BF7\u8F93\u5165"})}],g=()=>t.createElement(d,{fields:x}),N=[{children:"\u5237\u65B0",type:"primary",onClick:(l,n)=>{var e;(e=n.table.refresh())==null||e.then(()=>{c.success("\u65B0\u5EFA\u6210\u529F")})}},{children:"\u65B0\u589E",type:"primary",onClick:(l,n)=>{n.modal.open({title:"\u65B0\u5EFA",children:t.createElement(g,null),onOk(){n.modal.close(),n.table.refresh()}})}}],j=()=>{const l=e=>[{children:"\u7F16\u8F91",onClick:()=>{e.modal.open({title:"\u7F16\u8F91",initialValues:e.record,children:t.createElement(g,null),onOk(){e.modal.close(),e.table.refresh()}})}},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:()=>new Promise(s=>{setTimeout(()=>{c.success("\u5220\u9664\u6210\u529F"),s("")},1e3)}).then(()=>{e.table.refresh()})}],n=[...y,{key:"operator",title:"\u64CD\u4F5C",fixed:"right",width:100,render:e=>t.createElement(m,{actions:l(e)})}];return t.createElement(i,{fields:x.map(e=>({...e,rules:[]})),columns:n,tableProps:{scroll:{x:1300}},actions:N,remoteDataSource:p})},q=`import React from 'react';
import {
  QueryTable,
  TextActions,
  QueryTableActionType,
  QueryTableColumnType,
  FormGroup,
  QueryTableColumnRenderContext,
} from 'luckybird';
import { Input, message } from 'antd';
import { remoteDataSource, columns, type RecordType } from '../../Table/demos/config';

const fields = [
  {
    name: 'senderName',
    label: '\u53D1\u9001\u4EBA\u59D3\u540D',
    rules: [{ message: '\u8BF7\u8F93\u5165', required: true }],
    children: <Input placeholder="\u8BF7\u8F93\u5165" />,
  },
];

const ModalForm = () => {
  return <FormGroup fields={fields} />;
};

const actions: QueryTableActionType[] = [
  {
    children: '\u5237\u65B0',
    type: 'primary',
    onClick: (e, ctx) => {
      ctx.table.refresh()?.then(() => {
        message.success('\u65B0\u5EFA\u6210\u529F');
      });
    },
  },
  {
    children: '\u65B0\u589E',
    type: 'primary',
    onClick: (e, ctx) => {
      ctx.modal.open({
        title: '\u65B0\u5EFA',
        children: <ModalForm />,
        onOk() {
          ctx.modal.close();
          ctx.table.refresh();
        },
      });
    },
  },
];

const Demo = () => {
  const getOperatorActions = (ctx: QueryTableColumnRenderContext) => {
    return [
      {
        children: '\u7F16\u8F91',
        onClick: () => {
          ctx.modal.open({
            title: '\u7F16\u8F91',
            initialValues: ctx.record,
            children: <ModalForm />,
            onOk() {
              ctx.modal.close();
              ctx.table.refresh();
            },
          });
        },
      },
      {
        children: '\u5220\u9664',
        confirm: '\u786E\u8BA4\u5220\u9664?',
        onClick: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              message.success('\u5220\u9664\u6210\u529F');
              resolve('');
            }, 1000);
          }).then(() => {
            ctx.table.refresh();
          });
        },
      },
    ];
  };

  const cols: QueryTableColumnType<RecordType>[] = [
    ...columns,
    {
      key: 'operator',
      title: '\u64CD\u4F5C',
      fixed: 'right',
      width: 100,
      render: (ctx) => {
        return <TextActions actions={getOperatorActions(ctx)} />;
      },
    },
  ];

  return (
    <QueryTable
      fields={fields.map((item) => ({ ...item, rules: [] }))}
      columns={cols}
      tableProps={{
        scroll: {
          x: 1300,
        },
      }}
      // leftActions={actions}
      actions={actions}
      remoteDataSource={remoteDataSource}
    />
  );
};

export default Demo;
`,G=void 0,X=void 0,L={code:q,title:G,desc:X},z=!0;var K=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:L,isDemo:z,default:j},Symbol.toStringTag,{value:"Module"}));const H=l=>function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),r("div",{...e})},a=H("Demo"),J={},U="wrapper";function D({components:l,...n}){return r(U,{...J,...n,components:l,mdxType:"MDXLayout"},r("h1",null,"QueryTable"),r("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),r("ul",null,r("li",{parentName:"ul"},"\u67E5\u8BE2\u8868\u683C\u89E3\u51B3\u65B9\u6848"),r("li",{parentName:"ul"},"\u5185\u7F6E ModalForm\uFF0C\u4F18\u5316\u5F39\u6846\u5904\u7406")),r("h2",null,"demos"),r("p",null,"\u57FA\u7840\u4F7F\u7528"),r(a,{...S,mdxType:"Demo"}),r("p",null,"\u884C\u9009\u62E9"),r(a,{...V,mdxType:"Demo"}),r("p",null,"\u4F7F\u7528 tableProps \u4F20\u9012\u66F4\u591A\u5C5E\u6027"),r(a,{...K,mdxType:"Demo"}),r("h2",null,"\u5B9E\u4F8B\u65B9\u6CD5"),r("pre",null,r("code",{parentName:"pre",className:"language-ts"},`interface QueryTableInstance<RecordType = any, Values = any> {
  form: FormInstance<Values>;
  table: TableInstance<RecordType>;
  modal: ModalFormInstance;
}
`)),r("h2",null,"API"),r("pre",null,r("code",{parentName:"pre",className:"language-ts"},`type QueryTableContext<RecordType = any> = QueryTableInstance<RecordType>;

type OutsideTableType = 'remoteDataSource' | 'columns' | 'rowKey' | 'rowSelection';

interface QueryTableActions<RecordType = any> extends Omit<ButtonActionProps, 'onClick'> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, ctx: QueryTableContext<RecordType>) => void;
}

type QueryTableColumnRenderContext<RecordType = any> = {
  value: RecordType;
  index: number;
  record: RecordType;
} & QueryTableContext<RecordType>;

interface QueryTableColumnType<RecordType> extends Omit<ColumnType<RecordType>, 'render'> {
  render?: (ctx: QueryTableColumnRenderContext) => ReactElement;
}

interface QueryTableProps<RecordType extends Record<string, any> = any, SearchValues = any>
  extends Pick<QueryFormProps<SearchValues>, 'fields' | 'initialValues' | 'showFieldsLength'>,
    Pick<TableProps, Exclude<OutsideTableType, 'columns'>> {
  columns: QueryTableColumnType<RecordType>[];
  tableProps?: Omit<TableProps<RecordType>, OutsideTableType>;
  leftActions?: QueryTableActions<RecordType>[];
  actions?: QueryTableActions<RecordType>[];
  formProps?: Omit<QueryFormProps<SearchValues>, 'fields' | 'initialValues' | 'showFieldsLength'>;
}
`)))}D.isMDXComponent=!0;var W=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const Y={};Y.main=W;export{Y as default};
