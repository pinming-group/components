import{R as u,c as e}from"./index.1c33d5c1.js";import{F as m,a as s}from"./tree.ce5c4568.js";import{S as r}from"./index.bb629307.js";import{C as p}from"./index.ec50335b.js";import{I as l}from"./index.c84422bf.js";import"./PlusOutlined.99d6d6f5.js";const F=()=>u.createElement(p,null,u.createElement(m,{onValuesChange:(n,a)=>{console.log("values",a)},remoteValues:()=>new Promise(n=>{setTimeout(()=>{n({username:"Hencky",password:"*****",sex:"male",address:"zhejiang"})},1e3)})},u.createElement(s,{labelCol:{style:{width:80}},fields:[{name:"username",label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:u.createElement(l,{placeholder:"\u8BF7\u8F93\u5165"})},{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:u.createElement(l,{placeholder:"\u8BF7\u8F93\u5165"})},{name:"sex",label:"\u6027\u522B",span:12,dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:u.createElement(r,{placeholder:"\u8BF7\u9009\u62E9"})},{name:"address",label:"\u5730\u5740",span:12,remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),children:u.createElement(r,{placeholder:"\u8BF7\u9009\u62E9"})}]}))),d=`import React from 'react';
import { Form, FormGroup, Select } from '@dreame/ui';
import { Input, Card } from 'antd';

const Demo = () => {
  return (
    <Card>
      <Form
        onValuesChange={(_, values) => {
          console.log('values', values);
        }}
        remoteValues={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({ username: 'Hencky', password: '*****', sex: 'male', address: 'zhejiang' });
            }, 1000);
          });
        }}
      >
        <FormGroup
          labelCol={{ style: { width: 80 } }}
          fields={[
            {
              name: 'username',
              label: '\u7528\u6237\u540D',
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
              children: <Input placeholder="\u8BF7\u8F93\u5165" />,
            },
            {
              name: 'password',
              label: '\u5BC6\u7801',
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
              children: <Input placeholder="\u8BF7\u8F93\u5165" />,
            },
            {
              name: 'sex',
              label: '\u6027\u522B',
              span: 12,
              dataSource: [
                { label: '\u7537', value: 'male' },
                { label: '\u5973', value: 'female' },
                { label: '\u4FDD\u5BC6', value: 'other' },
              ],
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],
              children: <Select placeholder="\u8BF7\u9009\u62E9" />,
            },
            {
              name: 'address',
              label: '\u5730\u5740',
              span: 12,
              remoteDataSource: () => {
                return Promise.resolve([
                  { label: '\u5317\u4EAC', value: 'beijing' },
                  { label: '\u6D59\u6C5F', value: 'zhejiang' },
                ]);
              },
              children: <Select placeholder="\u8BF7\u9009\u62E9" />,
            },
          ]}
        />
      </Form>
    </Card>
  );
};

export default Demo;
`,i=void 0,c=void 0,E={code:d,title:i,desc:c},C=!0;var b=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:E,isDemo:C,default:F},Symbol.toStringTag,{value:"Module"}));const h=n=>function(o){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...o})},D=h("Demo"),B={},f="wrapper";function t({components:n,...a}){return e(f,{...B,...a,components:n,mdxType:"MDXLayout"},e("h1",null,"Form"),e("blockquote",null,e("p",{parentName:"blockquote"},"\u7406\u60F3\u7684\u8868\u5355\u662F\u914D\u7F6E\u5316\u65B9\u6848\u5B9E\u73B0\uFF0C\u52A0\u4E0A\u5065\u5168\u7684\u5F55\u5165\u7EC4\u4EF6\uFF0C\u89E3\u51B3\u5E76\u89C4\u8303\u8F93\u5165\u573A\u666F\u7684\u4EFB\u4F55\u95EE\u9898\u3002"),e("p",{parentName:"blockquote"},"\u56E0\u4E3A\u7406\u60F3\u5316\u7684\u65B9\u6848\u9700\u8981\u8F83\u957F\u65F6\u95F4\u7ECF\u5386\uFF0C\u5148\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7248\u3002"),e("p",{parentName:"blockquote"},e("strong",{parentName:"p"},"\u6B22\u8FCE\u53C2\u4E0E\uFF0C\u4E00\u8D77\u5171\u5EFA"),"\uFF0C\u7406\u60F3\u72B6\u6001 TODO\uFF1A"),e("p",{parentName:"blockquote"},"\u57FA\u7840\u80FD\u529B\uFF1A \u914D\u7F6E\u8868\u5355\u3001\u914D\u7F6E\u8868\u683C\u3001\u539F\u5B50\u63A7\u4EF6\u3001\u6570\u636E\u5F55\u5165\u7EC4\u4EF6",e("br",{parentName:"p"}),`
`,"\u6A21\u677F\u80FD\u529B\uFF1A \u8868\u5355\u914D\u7F6E\u9875\u3001\u641C\u7D22\u8868\u683C",e("br",{parentName:"p"}),`
`,"\u9AD8\u9636\u80FD\u529B\uFF1A \u5FEB\u901F\u642D\u5EFA\u5E73\u53F0")),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,e("inlineCode",{parentName:"p"},"Form"),"\u5728",e("inlineCode",{parentName:"p"},"AForm"),"\u7684\u57FA\u7840\u4E0A\uFF0C\u6269\u5C55\u4E86",e("inlineCode",{parentName:"p"},"remoteValues"),"\u5C5E\u6027\u52A0\u8F7D\u8868\u5355\u503C\u3002"),e("h2",null,"\u7EC4\u4EF6\u793A\u4F8B"),e("p",null,"\u57FA\u7840\u4F7F\u7528"),e(D,{...b,mdxType:"Demo"}),e("h2",null,"API"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"remoteValues"),e("td",{parentName:"tr",align:"left"},"\u8FDC\u7A0B\u8868\u5355\u503C"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => Promise<Values>")),e("td",{parentName:"tr",align:"center"},"-")))),e("p",null,"\u5176\u4ED6\u5C5E\u6027\u53C2\u8003",e("a",{parentName:"p",href:"https://ant.design/components/form-cn/#API"},"Form"),"\u3002"))}t.isMDXComponent=!0;var g=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"}));const A={};A.main=g;export{A as default};
