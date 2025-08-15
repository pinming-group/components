import{R as n,r as y,c as e}from"./index.b451a6b4.js";import{J as a,H as E,R as i,ap as l,S as s}from"./tree.feb2c467.js";import{S as o}from"./index.3d58d8e9.js";import{C as d}from"./index.2f4c5988.js";import{I as h}from"./index.29e311ad.js";import"./PlusOutlined.bbce47f4.js";const N=()=>{const[t]=a.useForm();return n.createElement(d,null,n.createElement(E,{type:"primary",onClick:()=>{t.validateFields().then(r=>{console.log("values",r)})}},"\u63D0\u4EA4"),n.createElement(a,{onValuesChange:(r,u)=>{console.log("values",u)},form:t},n.createElement(i,{gutter:24},n.createElement(l,{name:"username",label:"\u7528\u6237\u540D",labelCol:{span:4},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:n.createElement(h,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",allowClear:!0})}),n.createElement(l,{name:"sex",label:"\u6027\u522B",dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],labelCol:{span:4},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}),n.createElement(l,{name:"address",label:"\u5730\u533A",remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),labelCol:{span:4},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}))))},S=`import React from 'react';
import { Form, FormItem, Select } from 'luckybird';
import { Input, Card, Row, Button } from 'antd';

const Demo = () => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Button
        type="primary"
        onClick={() => {
          form.validateFields().then((values) => {
            console.log('values', values);
          });
        }}
      >
        \u63D0\u4EA4
      </Button>
      <Form
        onValuesChange={(_, values) => {
          console.log('values', values);
        }}
        form={form}
      >
        <Row gutter={24}>
          <FormItem
            {...{
              name: 'username',
              label: '\u7528\u6237\u540D',
              labelCol: { span: 4 },
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }],
              children: <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" allowClear />,
            }}
          />
          <FormItem
            {...{
              name: 'sex',
              label: '\u6027\u522B',
              dataSource: [
                { label: '\u7537', value: 'male' },
                { label: '\u5973', value: 'female' },
                { label: '\u4FDD\u5BC6', value: 'other' },
              ],
              labelCol: { span: 4 },
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],
              children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,
            }}
          />
          <FormItem
            {...{
              name: 'address',
              label: '\u5730\u533A',
              remoteDataSource: () => {
                return Promise.resolve([
                  { label: '\u5317\u4EAC', value: 'beijing' },
                  { label: '\u6D59\u6C5F', value: 'zhejiang' },
                ]);
              },
              labelCol: { span: 4 },
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],
              children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,
            }}
          />
        </Row>
      </Form>
    </Card>
  );
};

export default Demo;
`,B=void 0,w=void 0,I={code:S,title:B,desc:w},A=!0;var _=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:I,isDemo:A,default:N},Symbol.toStringTag,{value:"Module"}));const $=()=>{const[t]=a.useForm();return n.createElement(d,null,n.createElement(a,{form:t},n.createElement(i,{gutter:24},n.createElement(l,{name:"username",label:"\u7528\u6237\u540D",labelCol:{style:{width:80}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:n.createElement(h,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",allowClear:!0})}),n.createElement(l,{name:"sex",label:"\u6027\u522B",span:12,dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],labelCol:{style:{width:80}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}),n.createElement(l,{name:"address",label:"\u5730\u533A",span:12,remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),labelCol:{style:{width:80}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}),n.createElement(l,{offset:2},n.createElement(E,{type:"primary",onClick:()=>{t.validateFields().then(r=>{console.log("values",r)})}},"\u63D0\u4EA4")))))},j=`import React from 'react';
import { Form, FormItem, Select } from 'luckybird';
import { Input, Card, Row, Button } from 'antd';

const Demo = () => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Form form={form}>
        <Row gutter={24}>
          <FormItem
            {...{
              name: 'username',
              label: '\u7528\u6237\u540D',
              labelCol: { style: { width: 80 } },
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }],
              children: <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" allowClear />,
            }}
          />
          <FormItem
            {...{
              name: 'sex',
              label: '\u6027\u522B',
              span: 12,
              dataSource: [
                { label: '\u7537', value: 'male' },
                { label: '\u5973', value: 'female' },
                { label: '\u4FDD\u5BC6', value: 'other' },
              ],
              labelCol: { style: { width: 80 } },
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],
              children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,
            }}
          />
          <FormItem
            {...{
              name: 'address',
              label: '\u5730\u533A',
              span: 12,
              remoteDataSource: () => {
                return Promise.resolve([
                  { label: '\u5317\u4EAC', value: 'beijing' },
                  { label: '\u6D59\u6C5F', value: 'zhejiang' },
                ]);
              },
              labelCol: { style: { width: 80 } },
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],
              children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,
            }}
          />
          <FormItem offset={2}>
            <Button
              type="primary"
              onClick={() => {
                form.validateFields().then((values) => {
                  console.log('values', values);
                });
              }}
            >
              \u63D0\u4EA4
            </Button>
          </FormItem>
        </Row>
      </Form>
    </Card>
  );
};

export default Demo;
`,R=void 0,P=void 0,M={code:j,title:R,desc:P},x=!0;var z=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:M,isDemo:x,default:$},Symbol.toStringTag,{value:"Module"}));const F={labelCol:{style:{width:140}},span:12},b=[{value:"zhejiang",label:"\u6D59\u6C5F",children:[{label:"\u676D\u5DDE",value:"hangzhou"}]},{value:"beijing",label:"\u5317\u4EAC",children:[{label:"\u4E09\u91CC\u5C6F",value:"sanlitun"}]},{value:"shanghai",label:"\u4E0A\u6D77",children:[{label:"\u4E0A\u6D77",value:"shanghai"}]}],q=()=>{const[t]=a.useForm(),[r,u]=y.exports.useState([]);return n.createElement(d,{title:"\u57FA\u7840\u5173\u8054"},n.createElement(a,{form:t},n.createElement(i,{gutter:24},n.createElement(l,{name:"province",label:"\u7701",...F,remoteDataSource:()=>Promise.resolve(b),children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9\u7701\u4EFD",onChange:v=>{const C=b.find(D=>D.value===v);u((C==null?void 0:C.children)||[]),t.setFieldsValue({city:void 0})}})}),n.createElement(l,{name:"city",label:"\u5E02",...F,dataSource:r,children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9\u5730\u56FE"})}))))},O=`import React, { useState } from 'react';
import { Form, FormItem, Select } from 'luckybird';
import { Card, Row } from 'antd';

const layout = { labelCol: { style: { width: 140 } }, span: 12 };

const source = [
  { value: 'zhejiang', label: '\u6D59\u6C5F', children: [{ label: '\u676D\u5DDE', value: 'hangzhou' }] },
  { value: 'beijing', label: '\u5317\u4EAC', children: [{ label: '\u4E09\u91CC\u5C6F', value: 'sanlitun' }] },
  { value: 'shanghai', label: '\u4E0A\u6D77', children: [{ label: '\u4E0A\u6D77', value: 'shanghai' }] },
];

const Demo = () => {
  const [form] = Form.useForm();
  const [citySource, setCitySource] = useState<{ label: string; value: string }[]>([]);
  return (
    <Card title="\u57FA\u7840\u5173\u8054">
      <Form form={form}>
        <Row gutter={24}>
          <FormItem
            {...{
              name: 'province',
              label: '\u7701',
              ...layout,
              remoteDataSource: () => {
                return Promise.resolve(source);
              },
              children: (
                <Select
                  placeholder="\u8BF7\u9009\u62E9\u7701\u4EFD"
                  onChange={(val) => {
                    const targetSource = source.find((item) => item.value === val);
                    setCitySource(targetSource?.children || []);
                    form.setFieldsValue({
                      city: undefined,
                    });
                  }}
                />
              ),
            }}
          />
          <FormItem
            {...{
              name: 'city',
              label: '\u5E02',
              ...layout,
              dataSource: citySource,
              children: <Select placeholder="\u8BF7\u9009\u62E9\u5730\u56FE" />,
            }}
          />
        </Row>
      </Form>
    </Card>
  );
};

export default Demo;
`,V=void 0,T=void 0,k={code:O,title:V,desc:T},X=!0;var L=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:k,isDemo:X,default:q},Symbol.toStringTag,{value:"Module"}));const c={labelCol:{style:{width:140}},span:12},p=[{label:"1",value:"1"},{label:"2",value:"2"}],H=()=>{const[t]=a.useForm();return n.createElement(d,{title:"\u663E\u793A\u9690\u85CF\u5173\u8054"},n.createElement(a,{form:t},n.createElement(i,{gutter:24},n.createElement(l,{name:"first",label:"\u7B2C\u4E00\u5C42",...c,children:n.createElement(s,{options:p,allowClear:!0,onChange:()=>{t.setFieldsValue({second:void 0})}})}),n.createElement(l,{name:"second",label:"\u7B2C\u4E8C\u5C42",...c,dependency:{deps:["first"],visible:{condition:[["1"]],result:!1}},children:n.createElement(s,{options:p,allowClear:!0,onChange:()=>{t.setFieldsValue({third:void 0})}})}),n.createElement(l,{name:"third",label:"\u7B2C\u4E09\u5C42",...c,dependency:{deps:["second"],visible:{condition:[["1"]]}},children:n.createElement(s,{options:p,allowClear:!0,onChange:()=>{t.setFieldsValue({fourth:void 0})}})}),n.createElement(l,{name:"fourth",label:"\u7B2C\u56DB\u5C42",...c,dependency:{deps:["third","first","second"],visible:{condition:[["1","1","1"],["2","1","1"]]},options:{condition:[["1"]],result:[{label:"3",value:"3"}]}},children:n.createElement(s,{options:p})}))))},J=`import React from 'react';
import { Form, FormItem } from 'luckybird';
import { Card, Row, Select } from 'antd';

const layout = { labelCol: { style: { width: 140 } }, span: 12 };

const options = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
];

const Demo = () => {
  const [form] = Form.useForm();
  return (
    <Card title="\u663E\u793A\u9690\u85CF\u5173\u8054">
      <Form form={form}>
        <Row gutter={24}>
          <FormItem
            {...{
              name: 'first',
              label: '\u7B2C\u4E00\u5C42',
              ...layout,
              children: (
                <Select
                  options={options}
                  allowClear
                  onChange={() => {
                    form.setFieldsValue({
                      second: undefined,
                    });
                  }}
                />
              ),
            }}
          />
          <FormItem
            {...{
              name: 'second',
              label: '\u7B2C\u4E8C\u5C42',
              ...layout,
              dependency: {
                deps: ['first'],
                visible: {
                  condition: [['1']],
                  result: false,
                },
              },
              children: (
                <Select
                  options={options}
                  allowClear
                  onChange={() => {
                    form.setFieldsValue({
                      third: undefined,
                    });
                  }}
                />
              ),
            }}
          />
          <FormItem
            {...{
              name: 'third',
              label: '\u7B2C\u4E09\u5C42',
              ...layout,
              dependency: {
                deps: ['second'],
                visible: {
                  condition: [['1']],
                },
              },
              children: (
                <Select
                  options={options}
                  allowClear
                  onChange={() => {
                    form.setFieldsValue({
                      fourth: undefined,
                    });
                  }}
                />
              ),
            }}
          />
          <FormItem
            {...{
              name: 'fourth',
              label: '\u7B2C\u56DB\u5C42',
              ...layout,
              dependency: {
                deps: ['third', 'first', 'second'],
                visible: {
                  condition: [
                    ['1', '1', '1'],
                    ['2', '1', '1'],
                  ],
                },
                options: {
                  condition: [['1']],
                  result: [{ label: '3', value: '3' }],
                },
              },
              children: <Select options={options} />,
            }}
          />
        </Row>
      </Form>
    </Card>
  );
};

export default Demo;
`,G=void 0,K=void 0,Q={code:J,title:G,desc:K},U=!0;var W=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:Q,isDemo:U,default:H},Symbol.toStringTag,{value:"Module"}));const f={labelCol:{style:{width:140}},span:12},Y=()=>{const[t]=a.useForm();return n.createElement(d,null,n.createElement(a,{form:t},n.createElement(i,{gutter:24},n.createElement(l,{name:"province",label:"\u7701",...f,remoteDataSource:()=>Promise.resolve([{value:"zhejiang",label:"\u6D59\u6C5F"},{value:"beijing",label:"\u5317\u4EAC"},{value:"shanghai",label:"\u4E0A\u6D77"}]),children:n.createElement(o,{placeholder:"\u8BF7\u9009\u62E9\u7701\u4EFD",onChange:()=>{t.setFieldsValue({city:void 0})}})}),n.createElement(l,{dependencies:["province"],noStyle:!0,span:null,children:(r,[u])=>n.createElement(l,{name:"city",label:"\u5E02",...f,remoteDataSource:()=>(console.log("\u53D1\u8D77\u8BF7\u6C42"),Promise.resolve([{value:u,label:`${u}\u4E0B\u7684\u5730\u533A`}]))},n.createElement(o,{placeholder:"\u8BF7\u8F93\u5165\u5730\u533A"}))}))))},Z=`import React from 'react';\r
import { Form, FormItem, Select } from 'luckybird';\r
import { Card, Row } from 'antd';\r
\r
const layout = { labelCol: { style: { width: 140 } }, span: 12 };\r
\r
const Demo = () => {\r
  const [form] = Form.useForm();\r
  return (\r
    <Card>\r
      <Form form={form}>\r
        <Row gutter={24}>\r
          <FormItem\r
            {...{\r
              name: 'province',\r
              label: '\u7701',\r
              ...layout,\r
              remoteDataSource: () => {\r
                return Promise.resolve([\r
                  { value: 'zhejiang', label: '\u6D59\u6C5F' },\r
                  { value: 'beijing', label: '\u5317\u4EAC' },\r
                  { value: 'shanghai', label: '\u4E0A\u6D77' },\r
                ]);\r
              },\r
              children: (\r
                <Select\r
                  placeholder="\u8BF7\u9009\u62E9\u7701\u4EFD"\r
                  onChange={() => {\r
                    form.setFieldsValue({\r
                      city: undefined,\r
                    });\r
                  }}\r
                />\r
              ),\r
            }}\r
          />\r
          <FormItem\r
            {...{\r
              dependencies: ['province'],\r
              noStyle: true,\r
              span: null,\r
              children: (form, [depValue]) => {\r
                return (\r
                  <FormItem\r
                    {...{\r
                      name: 'city',\r
                      label: '\u5E02',\r
                      ...layout,\r
                      remoteDataSource: () => {\r
                        console.log('\u53D1\u8D77\u8BF7\u6C42');\r
                        return Promise.resolve([{ value: depValue, label: \`\${depValue}\u4E0B\u7684\u5730\u533A\` }]);\r
                      },\r
                    }}\r
                  >\r
                    <Select placeholder="\u8BF7\u8F93\u5165\u5730\u533A" />\r
                  </FormItem>\r
                );\r
              },\r
            }}\r
          />\r
        </Row>\r
      </Form>\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,ee=void 0,ne=void 0,te={code:Z,title:ee,desc:ne},le=!0;var re=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:te,isDemo:le,default:Y},Symbol.toStringTag,{value:"Module"}));const ae=t=>function(u){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...u})},m=ae("Demo"),ue={},oe="wrapper";function g({components:t,...r}){return e(oe,{...ue,...r,components:t,mdxType:"MDXLayout"},e("h1",null,"FormItem"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,e("strong",{parentName:"p"},e("inlineCode",{parentName:"strong"},"FormItem"),"\u548C",e("inlineCode",{parentName:"strong"},"AForm.Item"),"\u6709\u4EE5\u4E0B\u533A\u522B"),"\uFF1A"),e("ol",null,e("li",{parentName:"ol"},e("p",{parentName:"li"},"\u4E3A\u65B9\u4FBF\u8868\u5355\u5E03\u5C40\uFF0C",e("inlineCode",{parentName:"p"},"FormItem"),"\u5728",e("inlineCode",{parentName:"p"},"AForm.Item"),"\u7EC4\u4EF6\u57FA\u7840\u4E0A\u589E\u52A0",e("inlineCode",{parentName:"p"},"Col"),"\u7EC4\u4EF6\u5305\u88F9\u3002\u5982\u679C\u8BBE\u7F6E",e("inlineCode",{parentName:"p"},"span={null}"),"\u7684\u8BDD\uFF0C\u4E0D\u4F1A\u751F\u6210",e("inlineCode",{parentName:"p"},"Col"),"\u7EC4\u4EF6\u5BB9\u5668\u3002")),e("li",{parentName:"ol"},e("p",{parentName:"li"},e("inlineCode",{parentName:"p"},"FormItem")," \u6269\u5C55\u4E86",e("strong",{parentName:"p"},"\u6570\u636E\u6E90"),"\u7684\u4F7F\u7528\uFF0C\u652F\u6301",e("inlineCode",{parentName:"p"},"dataSource"),"\u548C",e("inlineCode",{parentName:"p"},"remoteDataSource"),"\u65B9\u6CD5\u4F20\u9012\u6570\u636E\u6E90\u7ED9\u5B50\u7EC4\u4EF6\u3002")),e("li",{parentName:"ol"},e("p",{parentName:"li"},e("inlineCode",{parentName:"p"},"FormItem")," \u7684",e("inlineCode",{parentName:"p"},"disabled"),"\u5C5E\u6027\u4E5F\u4F1A\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u3002"))),e("blockquote",null,e("p",{parentName:"blockquote"},"TODO: \u6682\u65F6\u4E0D\u8003\u8651\u5BF9\u6570\u636E\u6E90\u3001disabled \u7B49\u72B6\u6001\u7684\u5B9E\u4F8B\u65B9\u6CD5\u6269\u5C55\u3002")),e("h2",null,"demos"),e("p",null,"\u57FA\u672C\u4F7F\u7528"),e(m,{..._,mdxType:"Demo"}),e("p",null,"\u914D\u5408 span \u5E03\u5C40"),e(m,{...z,mdxType:"Demo"}),e("p",null,"\u8868\u5355\u5173\u8054: \u5E38\u89C4\u4F7F\u7528"),e(m,{...L,mdxType:"Demo"}),e("p",null,"\u8868\u5355\u5173\u8054: \u663E\u9690\u5173\u8054"),e(m,{...W,mdxType:"Demo"}),e("p",null,"\u8868\u5355\u5173\u8054: \u88AB\u52A8\u8868\u5355\u5173\u8054"),e(m,{...re,mdxType:"Demo"}),e("h3",null,"API"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"colClassName"),e("td",{parentName:"tr",align:"left"},"col \u7684 className \u5C5E\u6027"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"string")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"colStyle"),e("td",{parentName:"tr",align:"left"},"Col \u6837\u5F0F"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"React.CSSProperties")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"dataSource"),e("td",{parentName:"tr",align:"left"},"\u6570\u636E\u6E90"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"any")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"disabled"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u7981\u7528\u8868\u5355\u9879\uFF0C",e("inlineCode",{parentName:"td"},"disabled"),"\u4F1A\u4F20\u7ED9\u5B50\u7EC4\u4EF6"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"boolean")," ","|"," ",e("inlineCode",{parentName:"td"},"() => boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"false"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"remoteDataSource"),e("td",{parentName:"tr",align:"left"},"\u8FDC\u7A0B\u6570\u636E\u6E90"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => Promise<any>")," ","|"," ",e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"render"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u6E32\u67D3"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(props: FormItemProps) => boolean")," ","|"," ",e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"true"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"span"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"FormItem"),"\u5360\u636E\u7684\u6805\u683C\u6570\u91CF\uFF0C\u4F20",e("inlineCode",{parentName:"td"},"null"),"\u65F6\u6CA1\u6709",e("inlineCode",{parentName:"td"},"Col"),"\u7EC4\u4EF6\u5305\u88F9"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"ColProps['span']")," ","|"," ",e("inlineCode",{parentName:"td"},"null")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"24"))))),e("p",null,"\u9664\u6B64\u4EE5\u5916\uFF0C\u900F\u4F20",e("a",{parentName:"p",href:"https://ant.design/components/grid-cn/#Col"},"Col"),"\u7684 ",e("inlineCode",{parentName:"p"},"offset")," ",e("inlineCode",{parentName:"p"},"push")," ",e("inlineCode",{parentName:"p"},"pull")," ",e("inlineCode",{parentName:"p"},"order")," ",e("inlineCode",{parentName:"p"},"flex")," \u5C5E\u6027\u3002",e("br",{parentName:"p"}),`
`,"\u4EE5\u53CA\uFF0C",e("a",{parentName:"p",href:"https://ant.design/components/form-cn/#Form.Item"},"Form.Item"),"\u7684\u5176\u4ED6\u5C5E\u6027\u3002"))}g.isMDXComponent=!0;var me=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));const ie={};ie.main=me;export{ie as default};
