import{r as m,R as l,c as a}from"./index.1c33d5c1.js";import{ay as v}from"./tree.ce5c4568.js";import{I as S}from"./index.c84422bf.js";import{I as T}from"./index.5369081b.js";const C=t=>{const n=m.exports.useRef(null),o=m.exports.useRef(!1),{fields:D=[],rowKey:i="id",value:s,onChange:p,disabled:w,tableProps:h,rowSelectionType:f,...x}=t,u=f==="radio";m.exports.useEffect(()=>{var r,e;o.current||(u?(r=n.current)==null||r.table.setSelectedRows(s?[s]:[]):(e=n.current)==null||e.table.setSelectedRows(s||[]))},[s,o.current,u]);const d=r=>{o.current=!0,p==null||p(r),setTimeout(()=>{o.current=!1})};return l.createElement(v,{...x,tableProps:{...h,onRow:r=>({onClick:()=>{var c,y,b;let e;if(u)e=[r],(c=n.current)==null||c.table.setSelectedRows(e),d(e[0]);else{e=[...((y=n.current)==null?void 0:y.table.getSelectedRows())||[]];const g=e.findIndex(R=>R[i]===r[i]);g>-1?e.splice(g,1):e.push(r),(b=n.current)==null||b.table.setSelectedRows(e),d(e)}}})},rowKey:i,fields:D,ref:n,rowSelection:{type:f,onSelect:(r,e,c)=>{d(u?r:c)},onSelectAll:(r,e)=>{d(e)},hideSelectAll:!1,getCheckboxProps:()=>({disabled:w})}})},E=[{dataIndex:"name",key:"name",title:"name",editNode:l.createElement(S,{size:"small"}),editFormItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165name"}]}},{dataIndex:"age",key:"age",title:"age",editNode:l.createElement(T,{size:"small"})}],M=()=>{const t=n=>{console.log("value",n)};return m.exports.useRef(),l.createElement("div",null,l.createElement(C,{onChange:t,columns:E,fields:[{name:"a",label:"name",children:l.createElement(S,null)}],rowKey:"id",rowSelectionType:"radio",remoteDataSource:async()=>({total:100,current:1,records:[{name:"a1",id:1},{name:"a2",id:2},{name:"a3",id:3},{name:"a4",id:4},{name:"a5",id:5},{name:"a6",id:6}]})}))},_=`import React, { useRef } from 'react';\r
import { Input, InputNumber } from 'antd';\r
import { QueryTableInput } from '@dreame/ui';\r
\r
const columns = [\r
  {\r
    dataIndex: 'name',\r
    key: 'name',\r
    title: 'name',\r
    editNode: <Input size="small" />,\r
    editFormItemProps: {\r
      rules: [{ required: true, message: '\u8BF7\u8F93\u5165name' }],\r
    },\r
  },\r
  {\r
    dataIndex: 'age',\r
    key: 'age',\r
    title: 'age',\r
    editNode: <InputNumber size="small" />,\r
  },\r
];\r
\r
const Demo = () => {\r
  const onChange = (value) => {\r
    console.log('value', value);\r
  };\r
\r
  const ref = useRef();\r
\r
  return (\r
    <div>\r
      <QueryTableInput\r
        onChange={onChange}\r
        columns={columns}\r
        fields={[{ name: 'a', label: 'name', children: <Input /> }]}\r
        rowKey="id"\r
        rowSelectionType="radio"\r
        remoteDataSource={async () => {\r
          return {\r
            total: 100,\r
            current: 1,\r
            records: [\r
              { name: 'a1', id: 1 },\r
              { name: 'a2', id: 2 },\r
              { name: 'a3', id: 3 },\r
              { name: 'a4', id: 4 },\r
              { name: 'a5', id: 5 },\r
              { name: 'a6', id: 6 },\r
            ],\r
          };\r
        }}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default Demo;\r
`,P=void 0,k=void 0,N={code:_,title:P,desc:k},z=!0;var X=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:N,isDemo:z,default:M},Symbol.toStringTag,{value:"Module"}));const F=t=>function(o){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),a("div",{...o})},Q=F("Demo"),j={},O="wrapper";function I({components:t,...n}){return a(O,{...j,...n,components:t,mdxType:"MDXLayout"},a("h1",null,"QueryTableInput"),a("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),a("h2",null,"demos"),a(Q,{...X,mdxType:"Demo"}))}I.isMDXComponent=!0;var K=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const q={};q.main=K;export{q as default};
