import{r as m,R as r,c as n}from"./index.1c33d5c1.js";import{r as d}from"./config.a1c6c2af.js";import{a2 as i,aB as c}from"./tree.ce5c4568.js";import{I as l}from"./index.c84422bf.js";import{m as s}from"./index.b9dd85a1.js";import{I as p}from"./index.5369081b.js";const f=[{dataIndex:"name",key:"name",title:"name",tooltip:"\u63D0\u793A",renderEditNode:()=>r.createElement(l,{size:"small"}),editFormItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165name"}]}},{dataIndex:"age",key:"age",title:"age",renderEditNode:()=>r.createElement(p,{size:"small"})}],b=()=>{const t=e=>{console.log("value",e)},o=m.exports.useRef();return r.createElement("div",null,r.createElement(i,{onClick:()=>{var e;(e=o.current)==null||e.add({name:"abc",age:123})}},"\u5916\u90E8\u6DFB\u52A0"),r.createElement(c,{fields:[{name:"a",label:"a",children:r.createElement(l,null)}],onChange:t,columns:f,ref:o,remoteDataSource:d,onDelete:async e=>{await new Promise(a=>{setTimeout(a,2e3)}),s.success(`\u5220\u9664${e}`)},onSave:async e=>{await new Promise(a=>{setTimeout(a,2e3)}),console.log("save",e),s.success(`\u4FDD\u5B58${e.id}`)}}))},g=`import React, { useRef } from 'react';\r
import { Button, Input, InputNumber, message } from 'antd';\r
import { remoteDataSource } from '../../../Table/demos/config';\r
import { EditableQueryTable, type EditableQueryTableInstance } from '@dreame/ui';\r
\r
const columns = [\r
  {\r
    dataIndex: 'name',\r
    key: 'name',\r
    title: 'name',\r
    tooltip: '\u63D0\u793A',\r
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
      <EditableQueryTable\r
        fields={[\r
          {\r
            name: 'a',\r
            label: 'a',\r
            children: <Input />,\r
          },\r
        ]}\r
        onChange={onChange}\r
        columns={columns}\r
        ref={ref}\r
        remoteDataSource={remoteDataSource}\r
        onDelete={async (id) => {\r
          await new Promise((resolve) => {\r
            setTimeout(resolve, 2000);\r
          });\r
          message.success(\`\u5220\u9664\${id}\`);\r
        }}\r
        onSave={async (data) => {\r
          await new Promise((resolve) => {\r
            setTimeout(resolve, 2000);\r
          });\r
          console.log('save', data);\r
          message.success(\`\u4FDD\u5B58\${data.id}\`);\r
        }}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default Demo;\r
`,D=void 0,y=void 0,v={code:g,title:D,desc:y},E=!0;var I=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:v,isDemo:E,default:b},Symbol.toStringTag,{value:"Module"}));const T=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),n("div",{...e})},C=T("Demo"),S={},h="wrapper";function u({components:t,...o}){return n(h,{...S,...o,components:t,mdxType:"MDXLayout"},n("h1",null,"EditableQueryTable"),n("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),n("h2",null,"demos"),n(C,{...I,mdxType:"Demo"}))}u.isMDXComponent=!0;var w=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"}));const x={};x.main=w;export{x as default};
