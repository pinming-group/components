import{R as r,c as e}from"./index.b451a6b4.js";import{at as t}from"./tree.feb2c467.js";import{I as o}from"./index.29e311ad.js";const s=()=>r.createElement(t,{showDivider:!1,onSubmit:n=>new Promise(u=>{setTimeout(()=>{console.log("values",n),u(n)},1e3)}),fields:[{name:"name",label:"\u540D\u79F0",children:r.createElement(o,{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0"})}]}),i=`import React from 'react';
import { QueryForm } from 'luckybird';
import { Input } from 'antd';

const Demo = () => {
  return (
    <QueryForm
      showDivider={false}
      onSubmit={(values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('values', values);
            resolve(values);
          }, 1000);
        });
      }}
      fields={[
        {
          name: 'name',
          label: '\u540D\u79F0',
          children: <Input placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0" />,
        },
      ]}
    />
  );
};

export default Demo;
`,d=void 0,c=void 0,p={code:i,title:d,desc:c},F=!0;var D=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:p,isDemo:F,default:s},Symbol.toStringTag,{value:"Module"}));const h=()=>r.createElement(t,{showDivider:!1,onSubmit:n=>new Promise(u=>{setTimeout(()=>{console.log("values",n),u(n)},1e3)}),onReset:()=>new Promise(n=>{setTimeout(()=>{console.log("reset"),n("")},1e3)}),fields:[{name:"name",label:"\u540D\u79F0",children:r.createElement(o,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"age",label:"\u5E74\u9F84",children:r.createElement(o,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})}]}),f=`import React from 'react';
import { QueryForm } from 'luckybird';
import { Input } from 'antd';

const Demo = () => {
  return (
    <QueryForm
      showDivider={false}
      onSubmit={(values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('values', values);
            resolve(values);
          }, 1000);
        });
      }}
      onReset={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('reset');
            resolve('');
          }, 1000);
        });
      }}
      fields={[
        {
          name: 'name',
          label: '\u540D\u79F0',
          children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,
        },
        {
          name: 'age',
          label: '\u5E74\u9F84',
          children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,
        },
        // {
        //   name: 'height',
        //   label: '\u9AD8\u5EA6',
        //   children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,
        // },
      ]}
    />
  );
};

export default Demo;
`,E=void 0,C=void 0,b={code:f,title:E,desc:C},v=!0;var w=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:b,isDemo:v,default:h},Symbol.toStringTag,{value:"Module"}));const g=()=>r.createElement(t,{showFieldsLength:2,showDivider:!1,onSubmit:n=>new Promise(u=>{setTimeout(()=>{console.log("values",n),u(n)},1e3)}),onReset:()=>new Promise(n=>{setTimeout(()=>{console.log("reset"),n("")},1e3)}),fields:[{name:"name",label:"\u540D\u79F0",children:r.createElement(o,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"age",label:"\u5E74\u9F84",children:r.createElement(o,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"height",label:"\u9AD8\u5EA6",children:r.createElement(o,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"count",label:"\u6570\u91CF",children:r.createElement(o,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"time",label:"\u65F6\u95F4",children:r.createElement(o,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})}]}),y=`import React from 'react';\r
import { QueryForm } from 'luckybird';\r
import { Input } from 'antd';\r
\r
const Demo = () => {\r
  return (\r
    <QueryForm\r
    showFieldsLength={2}\r
      showDivider={false}\r
      onSubmit={(values) => {\r
        return new Promise((resolve) => {\r
          setTimeout(() => {\r
            console.log('values', values);\r
            resolve(values);\r
          }, 1000);\r
        });\r
      }}\r
      onReset={() => {\r
        return new Promise((resolve) => {\r
          setTimeout(() => {\r
            console.log('reset');\r
            resolve('');\r
          }, 1000);\r
        });\r
      }}\r
      fields={[\r
        {\r
          name: 'name',\r
          label: '\u540D\u79F0',\r
          children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,\r
        },\r
        {\r
          name: 'age',\r
          label: '\u5E74\u9F84',\r
          children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,\r
        },\r
        {\r
          name: 'height',\r
          label: '\u9AD8\u5EA6',\r
          children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,\r
        },\r
        {\r
          name: 'count',\r
          label: '\u6570\u91CF',\r
          children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,\r
        },\r
        {\r
          name: 'time',\r
          label: '\u65F6\u95F4',\r
          children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,\r
        },\r
      ]}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,B=void 0,P=void 0,A={code:y,title:B,desc:P},I=!0;var _=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:A,isDemo:I,default:g},Symbol.toStringTag,{value:"Module"}));const T=n=>function(m){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...m})},l=T("Demo"),S={},M="wrapper";function a({components:n,...u}){return e(M,{...S,...u,components:n,mdxType:"MDXLayout"},e("h1",null,"QueryForm"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("ul",null,e("li",{parentName:"ul"},"\u641C\u7D22\u8868\u5355\u89E3\u51B3\u65B9\u6848"),e("li",{parentName:"ul"},"\u5355\u641C\u7D22\uFF1A\u4E0D\u663E\u793A label\uFF0C\u53EA\u6709\u67E5\u8BE2\u6309\u94AE"),e("li",{parentName:"ul"},"\u5355\u884C\u641C\u7D22\uFF1A\u663E\u793A\u67E5\u8BE2\u3001\u91CD\u7F6E\u6309\u94AE"),e("li",{parentName:"ul"},"\u591A\u884C\u641C\u7D22\uFF1A\u8D85\u51FA\u884C\u6298\u53E0")),e("h2",null,"demos"),e("p",null,"\u5355\u641C\u7D22"),e(l,{...D,mdxType:"Demo"}),e("p",null,"\u5355\u884C\u641C\u7D22"),e(l,{...w,mdxType:"Demo"}),e("p",null,"\u591A\u884C\u641C\u7D22"),e(l,{..._,mdxType:"Demo"}),e("h2",null,"API"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import type { FormInstance, FormProps } from 'antd/lib/form';

interface QueryFormProps<Values = any> extends Omit<FormProps<Values>, 'fields'> {
  /** \u8868\u5355\u641C\u7D22\u5B57\u6BB5\u914D\u7F6E\uFF0C\u540CFormItem */
  fields: FormItemProps[];
  /** \u8868\u5355\u5B9E\u4F8B */
  form?: FormInstance<Values>;
  /** \u663E\u793A\u5B57\u6BB5\u957F\u5EA6\uFF0C2/3/4 \u9ED8\u8BA43 */
  showFieldsLength?: number;
  /** \u9ED8\u8BA4\u5C55\u5F00\uFF0C\u9ED8\u8BA4false */
  defaultExpand?: boolean;
  /** \u70B9\u51FB\u67E5\u8BE2\u65F6\u7684\u56DE\u8C03\u51FD\u6570 */
  onSubmit: (values: any) => Promise<void> | undefined;
  /** \u70B9\u51FB\u91CD\u7F6E\u65F6\u7684\u56DE\u8C03\u51FD\u6570 */
  onReset?: () => void;
  /** \u662F\u5426\u663E\u793A\u5206\u5272\u7EBF\uFF0C \u9ED8\u8BA4true */
  showDivider?: boolean;
}
`)))}a.isMDXComponent=!0;var $=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));const x={};x.main=$;export{x as default};
