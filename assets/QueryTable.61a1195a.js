var M=Object.defineProperty,S=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var C=(t,r,e)=>r in t?M(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,s=(t,r)=>{for(var e in r||(r={}))x.call(r,e)&&C(t,e,r[e]);if(m)for(var e of m(r))D.call(r,e)&&C(t,e,r[e]);return t},a=(t,r)=>S(t,v(r));var E=(t,r)=>{var e={};for(var u in t)x.call(t,u)&&r.indexOf(u)<0&&(e[u]=t[u]);if(t!=null&&m)for(var u of m(t))r.indexOf(u)<0&&D.call(t,u)&&(e[u]=t[u]);return e};import{R as l,a as P,c as o}from"./index.161a0514.js";import{V as p,h as y,m as i,f as F}from"./index.52e84606.js";import{T as f}from"./index.f26b28ec.js";import{r as b,c as T}from"./config.70aae31f.js";const B=[{name:"senderName",label:"\u53D1\u9001\u4EBA\u59D3\u540D",rules:[{message:"\u8BF7\u8F93\u5165",required:!0}],children:l.createElement(y,{placeholder:"\u8BF7\u8F93\u5165"})}],g=()=>l.createElement(F,{fields:B}),w=[{children:"\u5237\u65B0",type:"primary",onClick:(t,r)=>{var e;(e=r.table.refresh())==null||e.then(()=>{i.success("\u65B0\u5EFA\u6210\u529F")})}},{children:"\u65B0\u589E",type:"primary",onClick:(t,r)=>{r.modal.open({title:"\u65B0\u5EFA",children:l.createElement(g,null),onOk(){r.modal.close(),r.table.refresh()}})}}],_=()=>{const t=e=>[{children:"\u7F16\u8F91",onClick:()=>{e.modal.open({title:"\u7F16\u8F91",initialValues:e.record,children:l.createElement(g,null),onOk(){e.modal.close(),e.table.refresh()}})}},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:()=>new Promise(u=>{setTimeout(()=>{i.success("\u5220\u9664\u6210\u529F"),u("")},1e3)}).then(()=>{e.table.refresh()})}],r=[...T,{key:"operator",title:"\u64CD\u4F5C",render:e=>l.createElement(f,{actions:t(e)})}];return l.createElement(p,{fields:B.map(e=>a(s({},e),{rules:[]})),columns:r,actions:w,remoteDataSource:b})},$=`import React from 'react';\r
import {\r
  QueryTable,\r
  TextActions,\r
  QueryTableActions,\r
  QueryTableColumnType,\r
  FormGroup,\r
  QueryTableColumnRenderContext,\r
} from '@pms/ui';\r
import { Input, message } from 'antd';\r
import { remoteDataSource, columns, type RecordType } from '../../Table/demos/config';\r
\r
const fields = [\r
  {\r
    name: 'senderName',\r
    label: '\u53D1\u9001\u4EBA\u59D3\u540D',\r
    rules: [{ message: '\u8BF7\u8F93\u5165', required: true }],\r
    children: <Input placeholder="\u8BF7\u8F93\u5165" />,\r
  },\r
];\r
\r
const ModalForm = () => {\r
  return <FormGroup fields={fields} />;\r
};\r
\r
const actions: QueryTableActions[] = [\r
  {\r
    children: '\u5237\u65B0',\r
    type: 'primary',\r
    onClick: (e, ctx) => {\r
      ctx.table.refresh()?.then(() => {\r
        message.success('\u65B0\u5EFA\u6210\u529F');\r
      });\r
    },\r
  },\r
  {\r
    children: '\u65B0\u589E',\r
    type: 'primary',\r
    onClick: (e, ctx) => {\r
      ctx.modal.open({\r
        title: '\u65B0\u5EFA',\r
        children: <ModalForm />,\r
        onOk() {\r
          ctx.modal.close();\r
          ctx.table.refresh();\r
        },\r
      });\r
    },\r
  },\r
];\r
\r
const Demo = () => {\r
  const getOperatorActions = (ctx: QueryTableColumnRenderContext) => {\r
    return [\r
      {\r
        children: '\u7F16\u8F91',\r
        onClick: () => {\r
          ctx.modal.open({\r
            title: '\u7F16\u8F91',\r
            initialValues: ctx.record,\r
            children: <ModalForm />,\r
            onOk() {\r
              ctx.modal.close();\r
              ctx.table.refresh();\r
            },\r
          });\r
        },\r
      },\r
      {\r
        children: '\u5220\u9664',\r
        confirm: '\u786E\u8BA4\u5220\u9664?',\r
        onClick: () => {\r
          return new Promise((resolve) => {\r
            setTimeout(() => {\r
              message.success('\u5220\u9664\u6210\u529F');\r
              resolve('');\r
            }, 1000);\r
          }).then(() => {\r
            ctx.table.refresh();\r
          });\r
        },\r
      },\r
    ];\r
  };\r
\r
  const cols: QueryTableColumnType<RecordType>[] = [\r
    ...columns,\r
    {\r
      key: 'operator',\r
      title: '\u64CD\u4F5C',\r
      render: (ctx) => {\r
        return <TextActions actions={getOperatorActions(ctx)} />;\r
      },\r
    },\r
  ];\r
\r
  return (\r
    <QueryTable\r
      fields={fields.map((item) => ({ ...item, rules: [] }))}\r
      columns={cols}\r
      // leftActions={actions}\r
      actions={actions}\r
      remoteDataSource={remoteDataSource}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,I=void 0,N=void 0,V={code:$,title:I,desc:N},j=!0;var G=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:V,isDemo:j,default:_},Symbol.toStringTag,{value:"Module"}));const k=[{name:"senderName",label:"\u53D1\u9001\u4EBA\u59D3\u540D",rules:[{message:"\u8BF7\u8F93\u5165",required:!0}],children:l.createElement(y,{placeholder:"\u8BF7\u8F93\u5165"})}],A=()=>l.createElement(F,{fields:k}),q=()=>{const t=P.exports.useRef(),r=[{children:"\u5BFC\u51FA",type:"primary",disabled:()=>{var c;const{table:n}=t.current||{};return n?!((c=n.getSelectedRows())!=null&&c.length):!0},onClick:(n,c)=>{console.log("\u9009\u4E2D\u884C",c.table.getSelectedRowKeys())}},{children:"\u5237\u65B0",type:"primary",onClick:(n,c)=>{var h;(h=c.table.refresh())==null||h.then(()=>{i.success("\u65B0\u5EFA\u6210\u529F")})}},{children:"\u65B0\u589E",type:"primary",onClick:(n,c)=>{c.modal.open({title:"\u65B0\u5EFA",children:l.createElement(A,null),onOk(){c.modal.close(),c.table.refresh()}})}}],e=n=>[{children:"\u7F16\u8F91",onClick:()=>{n.modal.open({title:"\u7F16\u8F91",initialValues:n.record,children:l.createElement(A,null),onOk(){n.modal.close(),n.table.refresh()}})}},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:()=>new Promise(c=>{setTimeout(()=>{i.success("\u5220\u9664\u6210\u529F"),c("")},1e3)}).then(()=>{n.table.refresh()})}],u=[...T,{key:"operator",title:"\u64CD\u4F5C",render:n=>l.createElement(f,{actions:e(n)})}];return l.createElement(p,{ref:t,fields:k.map(n=>a(s({},n),{rules:[]})),columns:u,rowSelection:!0,actions:r,remoteDataSource:b})},X=`import React, { useRef } from 'react';\r
import {\r
  QueryTable,\r
  TextActions,\r
  QueryTableActions,\r
  QueryTableColumnType,\r
  FormGroup,\r
  QueryTableColumnRenderContext,\r
  QueryTableInstance,\r
} from '@pms/ui';\r
import { Input, message } from 'antd';\r
import { remoteDataSource, columns, type RecordType } from '../../Table/demos/config';\r
\r
const fields = [\r
  {\r
    name: 'senderName',\r
    label: '\u53D1\u9001\u4EBA\u59D3\u540D',\r
    rules: [{ message: '\u8BF7\u8F93\u5165', required: true }],\r
    children: <Input placeholder="\u8BF7\u8F93\u5165" />,\r
  },\r
];\r
\r
const ModalForm = () => {\r
  return <FormGroup fields={fields} />;\r
};\r
\r
const Demo = () => {\r
  const ref = useRef<QueryTableInstance>();\r
\r
  const actions: QueryTableActions[] = [\r
    {\r
      children: '\u5BFC\u51FA',\r
      type: 'primary',\r
      disabled: () => {\r
        const { table } = ref.current || {};\r
        if (!table) return true;\r
        return !table.getSelectedRows()?.length;\r
      },\r
      onClick: (e, ctx) => {\r
        console.log('\u9009\u4E2D\u884C', ctx.table.getSelectedRowKeys());\r
      },\r
    },\r
    {\r
      children: '\u5237\u65B0',\r
      type: 'primary',\r
      onClick: (e, ctx) => {\r
        ctx.table.refresh()?.then(() => {\r
          message.success('\u65B0\u5EFA\u6210\u529F');\r
        });\r
      },\r
    },\r
    {\r
      children: '\u65B0\u589E',\r
      type: 'primary',\r
      onClick: (e, ctx) => {\r
        ctx.modal.open({\r
          title: '\u65B0\u5EFA',\r
          children: <ModalForm />,\r
          onOk() {\r
            ctx.modal.close();\r
            ctx.table.refresh();\r
          },\r
        });\r
      },\r
    },\r
  ];\r
\r
  const getOperatorActions = (ctx: QueryTableColumnRenderContext) => {\r
    return [\r
      {\r
        children: '\u7F16\u8F91',\r
        onClick: () => {\r
          ctx.modal.open({\r
            title: '\u7F16\u8F91',\r
            initialValues: ctx.record,\r
            children: <ModalForm />,\r
            onOk() {\r
              ctx.modal.close();\r
              ctx.table.refresh();\r
            },\r
          });\r
        },\r
      },\r
      {\r
        children: '\u5220\u9664',\r
        confirm: '\u786E\u8BA4\u5220\u9664?',\r
        onClick: () => {\r
          return new Promise((resolve) => {\r
            setTimeout(() => {\r
              message.success('\u5220\u9664\u6210\u529F');\r
              resolve('');\r
            }, 1000);\r
          }).then(() => {\r
            ctx.table.refresh();\r
          });\r
        },\r
      },\r
    ];\r
  };\r
\r
  const cols: QueryTableColumnType<RecordType>[] = [\r
    ...columns,\r
    {\r
      key: 'operator',\r
      title: '\u64CD\u4F5C',\r
      render: (ctx) => {\r
        return <TextActions actions={getOperatorActions(ctx)} />;\r
      },\r
    },\r
  ];\r
\r
  return (\r
    <QueryTable\r
      ref={ref}\r
      fields={fields.map((item) => ({ ...item, rules: [] }))}\r
      columns={cols}\r
      rowSelection\r
      // leftActions={actions}\r
      actions={actions}\r
      remoteDataSource={remoteDataSource}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,L=void 0,z=void 0,K={code:X,title:L,desc:z},H=!0;var J=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:K,isDemo:H,default:q},Symbol.toStringTag,{value:"Module"}));const R=[{name:"senderName",label:"\u53D1\u9001\u4EBA\u59D3\u540D",rules:[{message:"\u8BF7\u8F93\u5165",required:!0}],children:l.createElement(y,{placeholder:"\u8BF7\u8F93\u5165"})}],Q=()=>l.createElement(F,{fields:R}),U=[{children:"\u5237\u65B0",type:"primary",onClick:(t,r)=>{var e;(e=r.table.refresh())==null||e.then(()=>{i.success("\u65B0\u5EFA\u6210\u529F")})}},{children:"\u65B0\u589E",type:"primary",onClick:(t,r)=>{r.modal.open({title:"\u65B0\u5EFA",children:l.createElement(Q,null),onOk(){r.modal.close(),r.table.refresh()}})}}],W=()=>{const t=e=>[{children:"\u7F16\u8F91",onClick:()=>{e.modal.open({title:"\u7F16\u8F91",initialValues:e.record,children:l.createElement(Q,null),onOk(){e.modal.close(),e.table.refresh()}})}},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:()=>new Promise(u=>{setTimeout(()=>{i.success("\u5220\u9664\u6210\u529F"),u("")},1e3)}).then(()=>{e.table.refresh()})}],r=[...T,{key:"operator",title:"\u64CD\u4F5C",fixed:"right",width:100,render:e=>l.createElement(f,{actions:t(e)})}];return l.createElement(p,{fields:R.map(e=>a(s({},e),{rules:[]})),columns:r,tableProps:{scroll:{x:1300}},actions:U,remoteDataSource:b})},Y=`import React from 'react';\r
import {\r
  QueryTable,\r
  TextActions,\r
  QueryTableActions,\r
  QueryTableColumnType,\r
  FormGroup,\r
  QueryTableColumnRenderContext,\r
} from '@pms/ui';\r
import { Input, message } from 'antd';\r
import { remoteDataSource, columns, type RecordType } from '../../Table/demos/config';\r
\r
const fields = [\r
  {\r
    name: 'senderName',\r
    label: '\u53D1\u9001\u4EBA\u59D3\u540D',\r
    rules: [{ message: '\u8BF7\u8F93\u5165', required: true }],\r
    children: <Input placeholder="\u8BF7\u8F93\u5165" />,\r
  },\r
];\r
\r
const ModalForm = () => {\r
  return <FormGroup fields={fields} />;\r
};\r
\r
const actions: QueryTableActions[] = [\r
  {\r
    children: '\u5237\u65B0',\r
    type: 'primary',\r
    onClick: (e, ctx) => {\r
      ctx.table.refresh()?.then(() => {\r
        message.success('\u65B0\u5EFA\u6210\u529F');\r
      });\r
    },\r
  },\r
  {\r
    children: '\u65B0\u589E',\r
    type: 'primary',\r
    onClick: (e, ctx) => {\r
      ctx.modal.open({\r
        title: '\u65B0\u5EFA',\r
        children: <ModalForm />,\r
        onOk() {\r
          ctx.modal.close();\r
          ctx.table.refresh();\r
        },\r
      });\r
    },\r
  },\r
];\r
\r
const Demo = () => {\r
  const getOperatorActions = (ctx: QueryTableColumnRenderContext) => {\r
    return [\r
      {\r
        children: '\u7F16\u8F91',\r
        onClick: () => {\r
          ctx.modal.open({\r
            title: '\u7F16\u8F91',\r
            initialValues: ctx.record,\r
            children: <ModalForm />,\r
            onOk() {\r
              ctx.modal.close();\r
              ctx.table.refresh();\r
            },\r
          });\r
        },\r
      },\r
      {\r
        children: '\u5220\u9664',\r
        confirm: '\u786E\u8BA4\u5220\u9664?',\r
        onClick: () => {\r
          return new Promise((resolve) => {\r
            setTimeout(() => {\r
              message.success('\u5220\u9664\u6210\u529F');\r
              resolve('');\r
            }, 1000);\r
          }).then(() => {\r
            ctx.table.refresh();\r
          });\r
        },\r
      },\r
    ];\r
  };\r
\r
  const cols: QueryTableColumnType<RecordType>[] = [\r
    ...columns,\r
    {\r
      key: 'operator',\r
      title: '\u64CD\u4F5C',\r
      fixed: 'right',\r
      width: 100,\r
      render: (ctx) => {\r
        return <TextActions actions={getOperatorActions(ctx)} />;\r
      },\r
    },\r
  ];\r
\r
  return (\r
    <QueryTable\r
      fields={fields.map((item) => ({ ...item, rules: [] }))}\r
      columns={cols}\r
      tableProps={{\r
        scroll: {\r
          x: 1300,\r
        },\r
      }}\r
      // leftActions={actions}\r
      actions={actions}\r
      remoteDataSource={remoteDataSource}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,Z=void 0,ee=void 0,re={code:Y,title:Z,desc:ee},te=!0;var oe=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:re,isDemo:te,default:W},Symbol.toStringTag,{value:"Module"}));const ue=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),o("div",s({},e))},d=ue("Demo"),le={},ne="wrapper";function O(e){var u=e,{components:t}=u,r=E(u,["components"]);return o(ne,a(s(s({},le),r),{components:t,mdxType:"MDXLayout"}),o("h1",null,"QueryTable"),o("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),o("ul",null,o("li",{parentName:"ul"},"\u67E5\u8BE2\u8868\u683C\u89E3\u51B3\u65B9\u6848"),o("li",{parentName:"ul"},"\u5185\u7F6E ModalForm\uFF0C\u4F18\u5316\u5F39\u6846\u5904\u7406")),o("h2",null,"demos"),o("p",null,"\u57FA\u7840\u4F7F\u7528"),o(d,a(s({},G),{mdxType:"Demo"})),o("p",null,"\u884C\u9009\u62E9"),o(d,a(s({},J),{mdxType:"Demo"})),o("p",null,"\u4F7F\u7528 tableProps \u4F20\u9012\u66F4\u591A\u5C5E\u6027"),o(d,a(s({},oe),{mdxType:"Demo"})),o("h2",null,"\u5B9E\u4F8B\u65B9\u6CD5"),o("pre",null,o("code",{parentName:"pre",className:"language-ts"},`export interface QueryTableInstance<RecordType = any> {
  form: FormInstance;
  table: TableInstance<RecordType>;
  modal: ModalFormInstance;
}
`)),o("h2",null,"API"),o("pre",null,o("code",{parentName:"pre",className:"language-ts"},`export type QueryTableContext<RecordType = any> = QueryTableInstance<RecordType>;

type OutsideTableType = 'remoteDataSource' | 'columns' | 'rowKey' | 'rowSelection';

export interface QueryTableActions<RecordType = any> extends Omit<ButtonActionProps, 'onClick'> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, ctx: QueryTableContext<RecordType>) => void;
}

export type QueryTableColumnRenderContext<RecordType = any> = {
  value: RecordType;
  index: number;
  record: RecordType;
} & QueryTableContext<RecordType>;

export interface QueryTableColumnType<RecordType> extends Omit<ColumnType<RecordType>, 'render'> {
  render?: (ctx: QueryTableColumnRenderContext) => ReactElement;
}

export interface QueryTableProps<RecordType extends Record<string, any> = any>
  extends Pick<QueryFormProps, 'fields' | 'initialValues' | 'showFieldsLength'>,
    Pick<TableProps, Exclude<OutsideTableType, 'columns'>> {
  columns: QueryTableColumnType<RecordType>[];
  tableProps?: Omit<TableProps<RecordType>, OutsideTableType>;
  leftActions?: QueryTableActions<RecordType>[];
  actions?: QueryTableActions<RecordType>[];
  formProps?: Omit<QueryFormProps, 'fields' | 'initialValues' | 'showFieldsLength'>;
}
`)))}O.isMDXComponent=!0;var ce=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const se={};se.main=ce;export{se as default};
