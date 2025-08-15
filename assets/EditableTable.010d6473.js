import{r as l,R as o,c as n}from"./index.b451a6b4.js";import{H as u,b2 as m}from"./tree.feb2c467.js";import{I as d}from"./index.29e311ad.js";import{I as s}from"./index.14158b9b.js";const c=[{dataIndex:"name",key:"name",title:"name",renderEditNode:()=>o.createElement(d,{size:"small"}),editFormItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165name"}]}},{dataIndex:"age",key:"age",title:"age",renderEditNode:()=>o.createElement(s,{size:"small"})}],i=()=>{const r=e=>{console.log("value",e)},t=l.exports.useRef();return o.createElement("div",null,o.createElement(u,{onClick:()=>{var e;(e=t.current)==null||e.add({name:"abc",age:123})}},"\u5916\u90E8\u6DFB\u52A0"),o.createElement(m,{onChange:r,columns:c,ref:t}))},p=`import React, { useRef } from 'react';\r
import { Button, Input, InputNumber } from 'antd';\r
\r
import { EditableTable, type EditableQueryTableInstance } from 'luckybird';\r
\r
const columns = [\r
  {\r
    dataIndex: 'name',\r
    key: 'name',\r
    title: 'name',\r
    renderEditNode: () => <Input size="small" />,\r
    editFormItemProps: {\r
      rules: [{ required: true, message: '\u8BF7\u8F93\u5165name' }],\r
    },\r
  },\r
  {\r
    dataIndex: 'age',\r
    key: 'age',\r
    title: 'age',\r
    renderEditNode: () => <InputNumber size="small" />,\r
  },\r
];\r
\r
const Demo = () => {\r
  const onChange = (value) => {\r
    console.log('value', value);\r
  };\r
\r
  const ref = useRef<EditableQueryTableInstance>();\r
\r
  return (\r
    <div>\r
      <Button\r
        onClick={() => {\r
          ref.current?.add({ name: 'abc', age: 123 });\r
        }}\r
      >\r
        \u5916\u90E8\u6DFB\u52A0\r
      </Button>\r
      <EditableTable onChange={onChange} columns={columns} ref={ref} />\r
    </div>\r
  );\r
};\r
\r
export default Demo;\r
`,f=void 0,b=void 0,g={code:p,title:f,desc:b},E=!0;var y=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:g,isDemo:E,default:i},Symbol.toStringTag,{value:"Module"}));const D=r=>function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),n("div",{...e})},I=D("Demo"),v={},C="wrapper";function a({components:r,...t}){return n(C,{...v,...t,components:r,mdxType:"MDXLayout"},n("h1",null,"EditableTable"),n("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),n("h2",null,"demos"),n(I,{...y,mdxType:"Demo"}))}a.isMDXComponent=!0;var x=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));const M={};M.main=x;export{M as default};
