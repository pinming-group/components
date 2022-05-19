var C=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(u,r,a)=>r in u?C(u,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[r]=a,o=(u,r)=>{for(var a in r||(r={}))F.call(r,a)&&s(u,a,r[a]);if(n)for(var a of n(r))p.call(r,a)&&s(u,a,r[a]);return u},m=(u,r)=>B(u,D(r));var d=(u,r)=>{var a={};for(var l in u)F.call(u,l)&&r.indexOf(l)<0&&(a[l]=u[l]);if(u!=null&&n)for(var l of n(u))r.indexOf(l)<0&&p.call(u,l)&&(a[l]=u[l]);return a};import{R as t,c as e}from"./index.161a0514.js";import{F as b,f as h,h as i}from"./index.52e84606.js";import{S as c}from"./index.34d8f86c.js";import{C as f}from"./index.6adcc740.js";import"./PlusOutlined.a6ed2eb3.js";const g=()=>t.createElement(f,null,t.createElement(b,{onValuesChange:(u,r)=>{console.log("values",r)},remoteValues:()=>new Promise(u=>{setTimeout(()=>{u({username:"Hencky",password:"*****",sex:"male",address:"zhejiang"})},1e3)})},t.createElement(h,{labelCol:{style:{width:80}},fields:[{name:"username",label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:t.createElement(i,{placeholder:"\u8BF7\u8F93\u5165"})},{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:t.createElement(i,{placeholder:"\u8BF7\u8F93\u5165"})},{name:"sex",label:"\u6027\u522B",span:12,dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:t.createElement(c,{placeholder:"\u8BF7\u9009\u62E9"})},{name:"address",label:"\u5730\u5740",span:12,remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),children:t.createElement(c,{placeholder:"\u8BF7\u9009\u62E9"})}]}))),v=`import React from 'react';\r
import { Form, FormGroup, Select } from '@pms/ui';\r
import { Input, Card } from 'antd';\r
\r
const Demo = () => {\r
  return (\r
    <Card>\r
      <Form\r
        onValuesChange={(_, values) => {\r
          console.log('values', values);\r
        }}\r
        remoteValues={() => {\r
          return new Promise((resolve) => {\r
            setTimeout(() => {\r
              resolve({ username: 'Hencky', password: '*****', sex: 'male', address: 'zhejiang' });\r
            }, 1000);\r
          });\r
        }}\r
      >\r
        <FormGroup\r
          labelCol={{ style: { width: 80 } }}\r
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
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,A=void 0,N=void 0,y={code:v,title:A,desc:N},S=!0;var q=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:y,isDemo:S,default:g},Symbol.toStringTag,{value:"Module"}));const w=u=>function(a){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",o({},a))},P=w("Demo"),_={},j="wrapper";function E(a){var l=a,{components:u}=l,r=d(l,["components"]);return e(j,m(o(o({},_),r),{components:u,mdxType:"MDXLayout"}),e("h1",null,"Form"),e("blockquote",null,e("p",{parentName:"blockquote"},"\u7406\u60F3\u7684\u8868\u5355\u662F\u914D\u7F6E\u5316\u65B9\u6848\u5B9E\u73B0\uFF0C\u52A0\u4E0A\u5065\u5168\u7684\u5F55\u5165\u7EC4\u4EF6\uFF0C\u89E3\u51B3\u5E76\u89C4\u8303\u8F93\u5165\u573A\u666F\u7684\u4EFB\u4F55\u95EE\u9898\u3002"),e("p",{parentName:"blockquote"},"\u56E0\u4E3A\u7406\u60F3\u5316\u7684\u65B9\u6848\u9700\u8981\u8F83\u957F\u65F6\u95F4\u7ECF\u5386\uFF0C\u5148\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7248\u3002"),e("p",{parentName:"blockquote"},e("strong",{parentName:"p"},"\u6B22\u8FCE\u53C2\u4E0E\uFF0C\u4E00\u8D77\u5171\u5EFA"),"\uFF0C\u7406\u60F3\u72B6\u6001 TODO\uFF1A"),e("p",{parentName:"blockquote"},"\u57FA\u7840\u80FD\u529B\uFF1A \u914D\u7F6E\u8868\u5355\u3001\u914D\u7F6E\u8868\u683C\u3001\u539F\u5B50\u63A7\u4EF6\u3001\u6570\u636E\u5F55\u5165\u7EC4\u4EF6",e("br",{parentName:"p"}),`
`,"\u6A21\u677F\u80FD\u529B\uFF1A \u8868\u5355\u914D\u7F6E\u9875\u3001\u641C\u7D22\u8868\u683C",e("br",{parentName:"p"}),`
`,"\u9AD8\u9636\u80FD\u529B\uFF1A \u5FEB\u901F\u642D\u5EFA\u5E73\u53F0")),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,e("inlineCode",{parentName:"p"},"Form"),"\u5728",e("inlineCode",{parentName:"p"},"AForm"),"\u7684\u57FA\u7840\u4E0A\uFF0C\u6269\u5C55\u4E86",e("inlineCode",{parentName:"p"},"remoteValues"),"\u5C5E\u6027\u52A0\u8F7D\u8868\u5355\u503C\u3002"),e("h2",null,"\u7EC4\u4EF6\u793A\u4F8B"),e("p",null,"\u57FA\u7840\u4F7F\u7528"),e(P,m(o({},q),{mdxType:"Demo"})),e("h2",null,"API"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"remoteValues"),e("td",{parentName:"tr",align:"left"},"\u8FDC\u7A0B\u8868\u5355\u503C"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => Promise<Values>")),e("td",{parentName:"tr",align:"center"},"-")))),e("p",null,"\u5176\u4ED6\u5C5E\u6027\u53C2\u8003",e("a",{parentName:"p",href:"https://ant.design/components/form-cn/#API"},"Form"),"\u3002"))}E.isMDXComponent=!0;var M=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const x={};x.main=M;export{x as default};
