import{r as C,R as n,c as e}from"./index.1c33d5c1.js";import{F as u,B as s,a as c,S as b}from"./tree.ce5c4568.js";import{S as o}from"./index.bb629307.js";import{C as r}from"./index.ec50335b.js";import{I as m}from"./index.c84422bf.js";import"./PlusOutlined.99d6d6f5.js";const h={labelCol:{style:{width:120}}},f=()=>{const[l]=u.useForm(),[a,i]=C.exports.useState(!1);return n.createElement(r,null,n.createElement(s,{onClick:()=>i(d=>!d)},a?"\u542F\u7528":"\u7981\u7528"),n.createElement(u,{form:l},n.createElement(c,{...h,disabled:a,fields:[{name:"username",label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:n.createElement(m,{placeholder:"\u8BF7\u8F93\u5165"})},{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:n.createElement(m,{placeholder:"\u8BF7\u8F93\u5165"})},{name:"sex",label:"\u6027\u522B",span:12,dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9"})},{name:"address",label:"\u5730\u5740",span:12,remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9"})}]})),n.createElement(s,{type:"primary",onClick:()=>l.validateFields().then(d=>{console.log("values",d)})},"\u63D0\u4EA4"))},E=`import React, { useState } from 'react';
import { Form, FormGroup, Select, ButtonAction } from '@dreame/ui';
import { Input, Card } from 'antd';

const layout = { labelCol: { style: { width: 120 } } };

const Demo = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  return (
    <Card>
      <ButtonAction onClick={() => setDisabled((d) => !d)}>{disabled ? '\u542F\u7528' : '\u7981\u7528'}</ButtonAction>
      <Form form={form}>
        <FormGroup
          {...layout}
          disabled={disabled}
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

      <ButtonAction
        type="primary"
        onClick={() => {
          return form.validateFields().then((values) => {
            console.log('values', values);
          });
        }}
      >
        \u63D0\u4EA4
      </ButtonAction>
    </Card>
  );
};

export default Demo;
`,g=void 0,B=void 0,D={code:E,title:g,desc:B},v=!0;var N=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:D,isDemo:v,default:f},Symbol.toStringTag,{value:"Module"}));const t={labelCol:{style:{width:120}}},y=()=>{const[l]=u.useForm();return n.createElement(r,null,n.createElement(u,{form:l},n.createElement(b,{direction:"vertical",size:24},n.createElement(r,{title:"\u57FA\u7840\u4FE1\u606F"},n.createElement(c,{labelCol:{span:4},fields:[{name:"username",label:"\u7528\u6237\u540D",...t,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:n.createElement(m,{placeholder:"\u8BF7\u8F93\u5165",allowClear:!0})},{name:"password",label:"\u5BC6\u7801",...t,rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],children:n.createElement(m,{placeholder:"\u8BF7\u8F93\u5165",allowClear:!0})},{name:"sex",label:"\u6027\u522B",dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],...t,rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}]})),n.createElement(r,{title:"\u5176\u4ED6\u4FE1\u606F"},n.createElement(c,{fields:[{name:"address",label:"\u5730\u5740",...t,remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}]})),n.createElement(s,{type:"primary",onClick:()=>l.validateFields().then(a=>{console.log("values",a)})},"\u63D0\u4EA4"))))},S=`import React from 'react';
import { Form, FormGroup, Select, ButtonAction } from '@dreame/ui';
import { Input, Card, Space } from 'antd';

const layout = { labelCol: { style: { width: 120 } } };

const Demo = () => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Form form={form}>
        <Space direction="vertical" size={24}>
          <Card title="\u57FA\u7840\u4FE1\u606F">
            <FormGroup
              labelCol={{ span: 4 }}
              fields={[
                {
                  name: 'username',
                  label: '\u7528\u6237\u540D',
                  ...layout,
                  rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
                  children: <Input placeholder="\u8BF7\u8F93\u5165" allowClear />,
                },
                {
                  name: 'password',
                  label: '\u5BC6\u7801',
                  ...layout,
                  rules: [{ required: true, message: '\u8BF7\u8F93\u5165' }],
                  children: <Input placeholder="\u8BF7\u8F93\u5165" allowClear />,
                },
                {
                  name: 'sex',
                  label: '\u6027\u522B',
                  dataSource: [
                    { label: '\u7537', value: 'male' },
                    { label: '\u5973', value: 'female' },
                    { label: '\u4FDD\u5BC6', value: 'other' },
                  ],
                  ...layout,
                  rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],
                  children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,
                },
              ]}
            />
          </Card>

          <Card title="\u5176\u4ED6\u4FE1\u606F">
            <FormGroup
              fields={[
                {
                  name: 'address',
                  label: '\u5730\u5740',
                  ...layout,
                  remoteDataSource: () => {
                    return Promise.resolve([
                      { label: '\u5317\u4EAC', value: 'beijing' },
                      { label: '\u6D59\u6C5F', value: 'zhejiang' },
                    ]);
                  },
                  children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,
                },
              ]}
            />
          </Card>

          <ButtonAction
            type="primary"
            onClick={() => {
              return form.validateFields().then((values) => {
                console.log('values', values);
              });
            }}
          >
            \u63D0\u4EA4
          </ButtonAction>
        </Space>
      </Form>
    </Card>
  );
};

export default Demo;
`,A=void 0,w=void 0,I={code:S,title:A,desc:w},j=!0;var _=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:I,isDemo:j,default:y},Symbol.toStringTag,{value:"Module"}));const M=l=>function(i){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...i})},p=M("Demo"),q={},x="wrapper";function F({components:l,...a}){return e(x,{...q,...a,components:l,mdxType:"MDXLayout"},e("h1",null,"FormGroup"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("ol",null,e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"FormGroup"),"\u63D0\u4F9B",e("inlineCode",{parentName:"li"},"FormItem"),"\u6279\u91CF\u4F7F\u7528\u80FD\u529B\u3002"),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"FormGroup"),"\u7684",e("inlineCode",{parentName:"li"},"colon"),"\u3001",e("inlineCode",{parentName:"li"},"labelCol"),"\u3001",e("inlineCode",{parentName:"li"},"labelAlign"),"\u3001",e("inlineCode",{parentName:"li"},"wrapperCol"),"\u3001",e("inlineCode",{parentName:"li"},"hidden"),"\u3001",e("inlineCode",{parentName:"li"},"disabled"),"\u5C5E\u6027\u4F1A\u4F20\u7ED9\u6BCF\u4E2A\u5B50",e("inlineCode",{parentName:"li"},"FormItem"),"\u7EC4\u4EF6\u3002")),e("h2",null,"demos"),e("p",null,"\u57FA\u7840\u4F7F\u7528"),e(p,{...N,mdxType:"Demo"}),e("p",null,"\u914D\u5408\u5BB9\u5668\u4F7F\u7528"),e(p,{..._,mdxType:"Demo"}),e("h3",null,"API"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"fields"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u8868\u5355\u9879\u5217\u8868"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"FormItemProps[]")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"render"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u6E32\u67D3"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(props: FormGroupProps) => boolean")," ","|"," ",e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"true"))))),e("p",null,"\u9664\u6B64\u4EE5\u5916\uFF0C\u900F\u4F20",e("a",{parentName:"p",href:"https://ant.design/components/grid-cn/#Row"},"Row"),"\u7684\u5C5E\u6027\u3002",e("br",{parentName:"p"}),`
`,"\u4EE5\u53CA\uFF0C",e("a",{parentName:"p",href:"https://ant.design/components/form-cn/#Form.Item"},"Form.Item"),"\u7684",e("inlineCode",{parentName:"p"},"colon")," ",e("inlineCode",{parentName:"p"},"labelCol")," ",e("inlineCode",{parentName:"p"},"labelAlign")," ",e("inlineCode",{parentName:"p"},"wrapperCol")," ",e("inlineCode",{parentName:"p"},"hidden"),"\u3001",e("inlineCode",{parentName:"p"},"disabled"),"\u5C5E\u6027\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u4F1A\u900F\u4F20\u5230\u6BCF\u4E2A",e("inlineCode",{parentName:"p"},"FormItem"),"\u7EC4\u4EF6\u4E0A\u3002"))}F.isMDXComponent=!0;var P=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const G={};G.main=P;export{G as default};
