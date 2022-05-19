var v=Object.defineProperty,g=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(r,u,a)=>u in r?v(r,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[u]=a,o=(r,u)=>{for(var a in u||(u={}))E.call(u,a)&&b(r,a,u[a]);if(m)for(var a of m(u))B.call(u,a)&&b(r,a,u[a]);return r},n=(r,u)=>g(r,N(u));var h=(r,u)=>{var a={};for(var t in r)E.call(r,t)&&u.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&m)for(var t of m(r))u.indexOf(t)<0&&B.call(r,t)&&(a[t]=r[t]);return a};import{a as y,R as l,c as e}from"./index.161a0514.js";import{F as s,B as F,f as C,h as c,S}from"./index.52e84606.js";import{S as p}from"./index.34d8f86c.js";import{C as d}from"./index.6adcc740.js";import"./PlusOutlined.a6ed2eb3.js";const A={labelCol:{style:{width:120}}},w=()=>{const[r]=s.useForm(),[u,a]=y.exports.useState(!1);return l.createElement(d,null,l.createElement(F,{onClick:()=>a(t=>!t)},u?"\u542F\u7528":"\u7981\u7528"),l.createElement(s,{form:r},l.createElement(C,n(o({},A),{disabled:u,fields:[{name:"username",label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:l.createElement(c,{placeholder:"\u8BF7\u8F93\u5165"})},{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:l.createElement(c,{placeholder:"\u8BF7\u8F93\u5165"})},{name:"sex",label:"\u6027\u522B",span:12,dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:l.createElement(p,{placeholder:"\u8BF7\u9009\u62E9"})},{name:"address",label:"\u5730\u5740",span:12,remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),children:l.createElement(p,{placeholder:"\u8BF7\u9009\u62E9"})}]}))),l.createElement(F,{type:"primary",onClick:()=>r.validateFields().then(t=>{console.log("values",t)})},"\u63D0\u4EA4"))},j=`import React, { useState } from 'react';\r
import { Form, FormGroup, Select, ButtonAction } from '@pms/ui';\r
import { Input, Card } from 'antd';\r
\r
const layout = { labelCol: { style: { width: 120 } } };\r
\r
const Demo = () => {\r
  const [form] = Form.useForm();\r
  const [disabled, setDisabled] = useState(false);\r
  return (\r
    <Card>\r
      <ButtonAction onClick={() => setDisabled((d) => !d)}>{disabled ? '\u542F\u7528' : '\u7981\u7528'}</ButtonAction>\r
      <Form form={form}>\r
        <FormGroup\r
          {...layout}\r
          disabled={disabled}\r
          fields={[\r
            {\r
              name: 'username',\r
              label: '\u7528\u6237\u540D',\r
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],\r
              children: <Input placeholder="\u8BF7\u8F93\u5165" />,\r
            },\r
            {\r
              name: 'password',\r
              label: '\u5BC6\u7801',\r
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],\r
              children: <Input placeholder="\u8BF7\u8F93\u5165" />,\r
            },\r
            {\r
              name: 'sex',\r
              label: '\u6027\u522B',\r
              span: 12,\r
              dataSource: [\r
                { label: '\u7537', value: 'male' },\r
                { label: '\u5973', value: 'female' },\r
                { label: '\u4FDD\u5BC6', value: 'other' },\r
              ],\r
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],\r
              children: <Select placeholder="\u8BF7\u9009\u62E9" />,\r
            },\r
            {\r
              name: 'address',\r
              label: '\u5730\u5740',\r
              span: 12,\r
              remoteDataSource: () => {\r
                return Promise.resolve([\r
                  { label: '\u5317\u4EAC', value: 'beijing' },\r
                  { label: '\u6D59\u6C5F', value: 'zhejiang' },\r
                ]);\r
              },\r
              children: <Select placeholder="\u8BF7\u9009\u62E9" />,\r
            },\r
          ]}\r
        />\r
      </Form>\r
\r
      <ButtonAction\r
        type="primary"\r
        onClick={() => {\r
          return form.validateFields().then((values) => {\r
            console.log('values', values);\r
          });\r
        }}\r
      >\r
        \u63D0\u4EA4\r
      </ButtonAction>\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,I=void 0,_=void 0,M={code:j,title:I,desc:_},q=!0;var x=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:M,isDemo:q,default:w},Symbol.toStringTag,{value:"Module"}));const i={labelCol:{style:{width:120}}},P=()=>{const[r]=s.useForm();return l.createElement(d,null,l.createElement(s,{form:r},l.createElement(S,{direction:"vertical",size:24},l.createElement(d,{title:"\u57FA\u7840\u4FE1\u606F"},l.createElement(C,{labelCol:{span:4},fields:[n(o({name:"username",label:"\u7528\u6237\u540D"},i),{rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:l.createElement(c,{placeholder:"\u8BF7\u8F93\u5165",allowClear:!0})}),n(o({name:"password",label:"\u5BC6\u7801"},i),{rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:l.createElement(c,{placeholder:"\u8BF7\u8F93\u5165",allowClear:!0})}),n(o({name:"sex",label:"\u6027\u522B",dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}]},i),{rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:l.createElement(p,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})})]})),l.createElement(d,{title:"\u5176\u4ED6\u4FE1\u606F"},l.createElement(C,{fields:[n(o({name:"address",label:"\u5730\u5740"},i),{remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),children:l.createElement(p,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})})]})),l.createElement(F,{type:"primary",onClick:()=>r.validateFields().then(u=>{console.log("values",u)})},"\u63D0\u4EA4"))))},G=`import React from 'react';\r
import { Form, FormGroup, Select, ButtonAction } from '@pms/ui';\r
import { Input, Card, Space } from 'antd';\r
\r
const layout = { labelCol: { style: { width: 120 } } };\r
\r
const Demo = () => {\r
  const [form] = Form.useForm();\r
  return (\r
    <Card>\r
      <Form form={form}>\r
        <Space direction="vertical" size={24}>\r
          <Card title="\u57FA\u7840\u4FE1\u606F">\r
            <FormGroup\r
              labelCol={{ span: 4 }}\r
              fields={[\r
                {\r
                  name: 'username',\r
                  label: '\u7528\u6237\u540D',\r
                  ...layout,\r
                  rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],\r
                  children: <Input placeholder="\u8BF7\u8F93\u5165" allowClear />,\r
                },\r
                {\r
                  name: 'password',\r
                  label: '\u5BC6\u7801',\r
                  ...layout,\r
                  rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],\r
                  children: <Input placeholder="\u8BF7\u8F93\u5165" allowClear />,\r
                },\r
                {\r
                  name: 'sex',\r
                  label: '\u6027\u522B',\r
                  dataSource: [\r
                    { label: '\u7537', value: 'male' },\r
                    { label: '\u5973', value: 'female' },\r
                    { label: '\u4FDD\u5BC6', value: 'other' },\r
                  ],\r
                  ...layout,\r
                  rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],\r
                  children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,\r
                },\r
              ]}\r
            />\r
          </Card>\r
\r
          <Card title="\u5176\u4ED6\u4FE1\u606F">\r
            <FormGroup\r
              fields={[\r
                {\r
                  name: 'address',\r
                  label: '\u5730\u5740',\r
                  ...layout,\r
                  remoteDataSource: () => {\r
                    return Promise.resolve([\r
                      { label: '\u5317\u4EAC', value: 'beijing' },\r
                      { label: '\u6D59\u6C5F', value: 'zhejiang' },\r
                    ]);\r
                  },\r
                  children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,\r
                },\r
              ]}\r
            />\r
          </Card>\r
\r
          <ButtonAction\r
            type="primary"\r
            onClick={() => {\r
              return form.validateFields().then((values) => {\r
                console.log('values', values);\r
              });\r
            }}\r
          >\r
            \u63D0\u4EA4\r
          </ButtonAction>\r
        </Space>\r
      </Form>\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,z=void 0,$=void 0,k={code:G,title:z,desc:$},O=!0;var R=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:k,isDemo:O,default:P},Symbol.toStringTag,{value:"Module"}));const T=r=>function(a){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",o({},a))},f=T("Demo"),X={},L="wrapper";function D(a){var t=a,{components:r}=t,u=h(t,["components"]);return e(L,n(o(o({},X),u),{components:r,mdxType:"MDXLayout"}),e("h1",null,"FormGroup"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("ol",null,e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"FormGroup"),"\u63D0\u4F9B",e("inlineCode",{parentName:"li"},"FormItem"),"\u6279\u91CF\u4F7F\u7528\u80FD\u529B\u3002"),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"FormGroup"),"\u7684",e("inlineCode",{parentName:"li"},"colon"),"\u3001",e("inlineCode",{parentName:"li"},"labelCol"),"\u3001",e("inlineCode",{parentName:"li"},"labelAlign"),"\u3001",e("inlineCode",{parentName:"li"},"wrapperCol"),"\u3001",e("inlineCode",{parentName:"li"},"hidden"),"\u3001",e("inlineCode",{parentName:"li"},"disabled"),"\u5C5E\u6027\u4F1A\u4F20\u7ED9\u6BCF\u4E2A\u5B50",e("inlineCode",{parentName:"li"},"FormItem"),"\u7EC4\u4EF6\u3002")),e("h2",null,"demos"),e("p",null,"\u57FA\u7840\u4F7F\u7528"),e(f,n(o({},x),{mdxType:"Demo"})),e("p",null,"\u914D\u5408\u5BB9\u5668\u4F7F\u7528"),e(f,n(o({},R),{mdxType:"Demo"})),e("h3",null,"API"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"fields"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u8868\u5355\u9879\u5217\u8868"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"FormItemProps[]")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"render"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u6E32\u67D3"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(props: FormGroupProps) => boolean")," ","|"," ",e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"true"))))),e("p",null,"\u9664\u6B64\u4EE5\u5916\uFF0C\u900F\u4F20",e("a",{parentName:"p",href:"https://ant.design/components/grid-cn/#Row"},"Row"),"\u7684\u5C5E\u6027\u3002",e("br",{parentName:"p"}),`
`,"\u4EE5\u53CA\uFF0C",e("a",{parentName:"p",href:"https://ant.design/components/form-cn/#Form.Item"},"Form.Item"),"\u7684",e("inlineCode",{parentName:"p"},"colon")," ",e("inlineCode",{parentName:"p"},"labelCol")," ",e("inlineCode",{parentName:"p"},"labelAlign")," ",e("inlineCode",{parentName:"p"},"wrapperCol")," ",e("inlineCode",{parentName:"p"},"hidden"),"\u3001",e("inlineCode",{parentName:"p"},"disabled"),"\u5C5E\u6027\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u4F1A\u900F\u4F20\u5230\u6BCF\u4E2A",e("inlineCode",{parentName:"p"},"FormItem"),"\u7EC4\u4EF6\u4E0A\u3002"))}D.isMDXComponent=!0;var H=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const J={};J.main=H;export{J as default};
