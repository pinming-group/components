var E=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var d=(e,r,o)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,a=(e,r)=>{for(var o in r||(r={}))F.call(r,o)&&d(e,o,r[o]);if(s)for(var o of s(r))p.call(r,o)&&d(e,o,r[o]);return e},m=(e,r)=>f(e,v(r));var D=(e,r)=>{var o={};for(var l in e)F.call(e,l)&&r.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&s)for(var l of s(e))r.indexOf(l)<0&&p.call(e,l)&&(o[l]=e[l]);return o};import{R as t,c as u}from"./index.161a0514.js";import{U as c,h as n}from"./index.52e84606.js";const C=()=>t.createElement(c,{showDivider:!1,onSubmit:e=>new Promise(r=>{setTimeout(()=>{console.log("values",e),r(e)},1e3)}),fields:[{name:"name",label:"\u540D\u79F0",children:t.createElement(n,{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0"})}]}),b=`import React from 'react';\r
import { QueryForm } from '@pms/ui';\r
import { Input } from 'antd';\r
\r
const Demo = () => {\r
  return (\r
    <QueryForm\r
      showDivider={false}\r
      onSubmit={(values) => {\r
        return new Promise((resolve) => {\r
          setTimeout(() => {\r
            console.log('values', values);\r
            resolve(values);\r
          }, 1000);\r
        });\r
      }}\r
      fields={[\r
        {\r
          name: 'name',\r
          label: '\u540D\u79F0',\r
          children: <Input placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0" />,\r
        },\r
      ]}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,B=void 0,w=void 0,g={code:b,title:B,desc:w},y=!0;var A=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:g,isDemo:y,default:C},Symbol.toStringTag,{value:"Module"}));const P=()=>t.createElement(c,{showDivider:!1,onSubmit:e=>new Promise(r=>{setTimeout(()=>{console.log("values",e),r(e)},1e3)}),onReset:()=>new Promise(e=>{setTimeout(()=>{console.log("reset"),e("")},1e3)}),fields:[{name:"name",label:"\u540D\u79F0",children:t.createElement(n,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"age",label:"\u5E74\u9F84",children:t.createElement(n,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})}]}),_=`import React from 'react';\r
import { QueryForm } from '@pms/ui';\r
import { Input } from 'antd';\r
\r
const Demo = () => {\r
  return (\r
    <QueryForm\r
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
        // {\r
        //   name: 'height',\r
        //   label: '\u9AD8\u5EA6',\r
        //   children: <Input allowClear placeholder="\u8BF7\u8F93\u5165" />,\r
        // },\r
      ]}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,I=void 0,T=void 0,S={code:_,title:I,desc:T},M=!0;var $=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:S,isDemo:M,default:P},Symbol.toStringTag,{value:"Module"}));const x=()=>t.createElement(c,{showDivider:!1,onSubmit:e=>new Promise(r=>{setTimeout(()=>{console.log("values",e),r(e)},1e3)}),onReset:()=>new Promise(e=>{setTimeout(()=>{console.log("reset"),e("")},1e3)}),fields:[{name:"name",label:"\u540D\u79F0",children:t.createElement(n,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"age",label:"\u5E74\u9F84",children:t.createElement(n,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"height",label:"\u9AD8\u5EA6",children:t.createElement(n,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"count",label:"\u6570\u91CF",children:t.createElement(n,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})},{name:"time",label:"\u65F6\u95F4",children:t.createElement(n,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165"})}]}),R=`import React from 'react';\r
import { QueryForm } from '@pms/ui';\r
import { Input } from 'antd';\r
\r
const Demo = () => {\r
  return (\r
    <QueryForm\r
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
`,O=void 0,Q=void 0,j={code:R,title:O,desc:Q},N=!0;var X=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:j,isDemo:N,default:x},Symbol.toStringTag,{value:"Module"}));const z=e=>function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),u("div",a({},o))},i=z("Demo"),L={},k="wrapper";function h(o){var l=o,{components:e}=l,r=D(l,["components"]);return u(k,m(a(a({},L),r),{components:e,mdxType:"MDXLayout"}),u("h1",null,"QueryForm"),u("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),u("ul",null,u("li",{parentName:"ul"},"\u641C\u7D22\u8868\u5355\u89E3\u51B3\u65B9\u6848"),u("li",{parentName:"ul"},"\u5355\u641C\u7D22\uFF1A\u4E0D\u663E\u793A label\uFF0C\u53EA\u6709\u67E5\u8BE2\u6309\u94AE"),u("li",{parentName:"ul"},"\u5355\u884C\u641C\u7D22\uFF1A\u663E\u793A\u67E5\u8BE2\u3001\u91CD\u7F6E\u6309\u94AE"),u("li",{parentName:"ul"},"\u591A\u884C\u641C\u7D22\uFF1A\u8D85\u51FA\u884C\u6298\u53E0")),u("h2",null,"demos"),u("p",null,"\u5355\u641C\u7D22"),u(i,m(a({},A),{mdxType:"Demo"})),u("p",null,"\u5355\u884C\u641C\u7D22"),u(i,m(a({},$),{mdxType:"Demo"})),u("p",null,"\u591A\u884C\u641C\u7D22"),u(i,m(a({},X),{mdxType:"Demo"})),u("h2",null,"API"),u("pre",null,u("code",{parentName:"pre",className:"language-ts"},`import type { FormInstance, FormProps } from 'antd/lib/form';

export interface QueryFormProps extends Omit<FormProps, 'fields'> {
  /** \u8868\u5355\u641C\u7D22\u5B57\u6BB5\u914D\u7F6E\uFF0C\u540CFormItem */
  fields: FormItemProps[];
  /** \u8868\u5355\u5B9E\u4F8B */
  form?: FormInstance;
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
`)))}h.isMDXComponent=!0;var U=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));const q={};q.main=U;export{q as default};
