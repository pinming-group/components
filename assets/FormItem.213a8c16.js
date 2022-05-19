var A=Object.defineProperty,w=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var E=(u,t,a)=>t in u?A(u,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[t]=a,l=(u,t)=>{for(var a in t||(t={}))b.call(t,a)&&E(u,a,t[a]);if(s)for(var a of s(t))g.call(t,a)&&E(u,a,t[a]);return u},m=(u,t)=>w(u,I(t));var h=(u,t)=>{var a={};for(var o in u)b.call(u,o)&&t.indexOf(o)<0&&(a[o]=u[o]);if(u!=null&&s)for(var o of s(u))t.indexOf(o)<0&&g.call(u,o)&&(a[o]=u[o]);return a};import{R as r,a as j,c as e}from"./index.161a0514.js";import{F as i,L as N,R as p,Q as n,h as B}from"./index.52e84606.js";import{S as d}from"./index.34d8f86c.js";import{C as F}from"./index.6adcc740.js";import"./PlusOutlined.a6ed2eb3.js";const _=()=>{const[u]=i.useForm();return r.createElement(F,null,r.createElement(N,{type:"primary",onClick:()=>{u.validateFields().then(t=>{console.log("values",t)})}},"\u63D0\u4EA4"),r.createElement(i,{onValuesChange:(t,a)=>{console.log("values",a)},form:u},r.createElement(p,{gutter:24},r.createElement(n,{name:"username",label:"\u7528\u6237\u540D",labelCol:{span:4},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:r.createElement(B,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",allowClear:!0})}),r.createElement(n,{name:"sex",label:"\u6027\u522B",dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],labelCol:{span:4},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:r.createElement(d,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}),r.createElement(n,{name:"address",label:"\u5730\u533A",remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),labelCol:{span:4},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:r.createElement(d,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}))))},P=`import React from 'react';\r
import { Form, FormItem, Select } from '@pms/ui';\r
import { Input, Card, Row, Button } from 'antd';\r
\r
const Demo = () => {\r
  const [form] = Form.useForm();\r
  return (\r
    <Card>\r
      <Button\r
        type="primary"\r
        onClick={() => {\r
          form.validateFields().then((values) => {\r
            console.log('values', values);\r
          });\r
        }}\r
      >\r
        \u63D0\u4EA4\r
      </Button>\r
      <Form\r
        onValuesChange={(_, values) => {\r
          console.log('values', values);\r
        }}\r
        form={form}\r
      >\r
        <Row gutter={24}>\r
          <FormItem\r
            {...{\r
              name: 'username',\r
              label: '\u7528\u6237\u540D',\r
              labelCol: { span: 4 },\r
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }],\r
              children: <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" allowClear />,\r
            }}\r
          />\r
          <FormItem\r
            {...{\r
              name: 'sex',\r
              label: '\u6027\u522B',\r
              dataSource: [\r
                { label: '\u7537', value: 'male' },\r
                { label: '\u5973', value: 'female' },\r
                { label: '\u4FDD\u5BC6', value: 'other' },\r
              ],\r
              labelCol: { span: 4 },\r
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],\r
              children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,\r
            }}\r
          />\r
          <FormItem\r
            {...{\r
              name: 'address',\r
              label: '\u5730\u533A',\r
              remoteDataSource: () => {\r
                return Promise.resolve([\r
                  { label: '\u5317\u4EAC', value: 'beijing' },\r
                  { label: '\u6D59\u6C5F', value: 'zhejiang' },\r
                ]);\r
              },\r
              labelCol: { span: 4 },\r
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],\r
              children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,\r
            }}\r
          />\r
        </Row>\r
      </Form>\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,$=void 0,R=void 0,M={code:P,title:$,desc:R},x=!0;var z=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:M,isDemo:x,default:_},Symbol.toStringTag,{value:"Module"}));const q=()=>{const[u]=i.useForm();return r.createElement(F,null,r.createElement(i,{form:u},r.createElement(p,{gutter:24},r.createElement(n,{name:"username",label:"\u7528\u6237\u540D",labelCol:{style:{width:80}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:r.createElement(B,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",allowClear:!0})}),r.createElement(n,{name:"sex",label:"\u6027\u522B",span:12,dataSource:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"},{label:"\u4FDD\u5BC6",value:"other"}],labelCol:{style:{width:80}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:r.createElement(d,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}),r.createElement(n,{name:"address",label:"\u5730\u533A",span:12,remoteDataSource:()=>Promise.resolve([{label:"\u5317\u4EAC",value:"beijing"},{label:"\u6D59\u6C5F",value:"zhejiang"}]),labelCol:{style:{width:80}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],children:r.createElement(d,{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0})}),r.createElement(n,{offset:2},r.createElement(N,{type:"primary",onClick:()=>{u.validateFields().then(t=>{console.log("values",t)})}},"\u63D0\u4EA4")))))},O=`import React from 'react';\r
import { Form, FormItem, Select } from '@pms/ui';\r
import { Input, Card, Row, Button } from 'antd';\r
\r
const Demo = () => {\r
  const [form] = Form.useForm();\r
  return (\r
    <Card>\r
      <Form form={form}>\r
        <Row gutter={24}>\r
          <FormItem\r
            {...{\r
              name: 'username',\r
              label: '\u7528\u6237\u540D',\r
              labelCol: { style: { width: 80 } },\r
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' }],\r
              children: <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" allowClear />,\r
            }}\r
          />\r
          <FormItem\r
            {...{\r
              name: 'sex',\r
              label: '\u6027\u522B',\r
              span: 12,\r
              dataSource: [\r
                { label: '\u7537', value: 'male' },\r
                { label: '\u5973', value: 'female' },\r
                { label: '\u4FDD\u5BC6', value: 'other' },\r
              ],\r
              labelCol: { style: { width: 80 } },\r
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],\r
              children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,\r
            }}\r
          />\r
          <FormItem\r
            {...{\r
              name: 'address',\r
              label: '\u5730\u533A',\r
              span: 12,\r
              remoteDataSource: () => {\r
                return Promise.resolve([\r
                  { label: '\u5317\u4EAC', value: 'beijing' },\r
                  { label: '\u6D59\u6C5F', value: 'zhejiang' },\r
                ]);\r
              },\r
              labelCol: { style: { width: 80 } },\r
              rules: [{ required: true, message: '\u8BF7\u9009\u62E9' }],\r
              children: <Select placeholder="\u8BF7\u9009\u62E9" allowClear />,\r
            }}\r
          />\r
          <FormItem offset={2}>\r
            <Button\r
              type="primary"\r
              onClick={() => {\r
                form.validateFields().then((values) => {\r
                  console.log('values', values);\r
                });\r
              }}\r
            >\r
              \u63D0\u4EA4\r
            </Button>\r
          </FormItem>\r
        </Row>\r
      </Form>\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,V=void 0,T=void 0,k={code:O,title:V,desc:T},X=!0;var L=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:k,isDemo:X,default:q},Symbol.toStringTag,{value:"Module"}));const D={labelCol:{style:{width:140}},span:12},f=[{value:"zhejiang",label:"\u6D59\u6C5F",children:[{label:"\u676D\u5DDE",value:"hangzhou"}]},{value:"beijing",label:"\u5317\u4EAC",children:[{label:"\u4E09\u91CC\u5C6F",value:"sanlitun"}]},{value:"shanghai",label:"\u4E0A\u6D77",children:[{label:"\u4E0A\u6D77",value:"shanghai"}]}],Q=()=>{const[u]=i.useForm(),[t,a]=j.exports.useState([]);return r.createElement(F,null,r.createElement(i,{form:u},r.createElement(p,{gutter:24},r.createElement(n,l({},m(l({name:"province",label:"\u7701"},D),{remoteDataSource:()=>Promise.resolve(f),children:r.createElement(d,{placeholder:"\u8BF7\u9009\u62E9\u7701\u4EFD",onChange:o=>{const C=f.find(S=>S.value===o);a((C==null?void 0:C.children)||[]),u.setFieldsValue({city:void 0})}})}))),r.createElement(n,l({},m(l({name:"city",label:"\u5E02"},D),{dataSource:t,children:r.createElement(d,{placeholder:"\u8BF7\u9009\u62E9\u5730\u56FE"})}))))))},G=`import React, { useState } from 'react';\r
import { Form, FormItem, Select } from '@pms/ui';\r
import { Card, Row } from 'antd';\r
\r
const layout = { labelCol: { style: { width: 140 } }, span: 12 };\r
\r
const source = [\r
  { value: 'zhejiang', label: '\u6D59\u6C5F', children: [{ label: '\u676D\u5DDE', value: 'hangzhou' }] },\r
  { value: 'beijing', label: '\u5317\u4EAC', children: [{ label: '\u4E09\u91CC\u5C6F', value: 'sanlitun' }] },\r
  { value: 'shanghai', label: '\u4E0A\u6D77', children: [{ label: '\u4E0A\u6D77', value: 'shanghai' }] },\r
];\r
\r
const Demo = () => {\r
  const [form] = Form.useForm();\r
  const [citySource, setCitySource] = useState<{ label: string; value: string }[]>([]);\r
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
                return Promise.resolve(source);\r
              },\r
              children: (\r
                <Select\r
                  placeholder="\u8BF7\u9009\u62E9\u7701\u4EFD"\r
                  onChange={(val) => {\r
                    const targetSource = source.find((item) => item.value === val);\r
                    setCitySource(targetSource?.children || []);\r
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
              name: 'city',\r
              label: '\u5E02',\r
              ...layout,\r
              dataSource: citySource,\r
              children: <Select placeholder="\u8BF7\u9009\u62E9\u5730\u56FE" />,\r
            }}\r
          />\r
        </Row>\r
      </Form>\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,H=void 0,J=void 0,K={code:G,title:H,desc:J},U=!0;var W=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:K,isDemo:U,default:Q},Symbol.toStringTag,{value:"Module"}));const v={labelCol:{style:{width:140}},span:12},Y=()=>{const[u]=i.useForm();return r.createElement(F,null,r.createElement(i,{form:u},r.createElement(p,{gutter:24},r.createElement(n,l({},m(l({name:"province",label:"\u7701"},v),{remoteDataSource:()=>Promise.resolve([{value:"zhejiang",label:"\u6D59\u6C5F"},{value:"beijing",label:"\u5317\u4EAC"},{value:"shanghai",label:"\u4E0A\u6D77"}]),children:r.createElement(d,{placeholder:"\u8BF7\u9009\u62E9\u7701\u4EFD",onChange:()=>{u.setFieldsValue({city:void 0})}})}))),r.createElement(n,{dependencies:["province"],noStyle:!0,span:null,children:t=>{const a=t.getFieldValue(["province"]);return r.createElement(n,l({},m(l({name:"city",label:"\u5E02"},v),{remoteDataSource:()=>(console.log("\u53D1\u8D77\u8BF7\u6C42"),Promise.resolve([{value:a,label:`${a}\u4E0B\u7684\u5730\u533A`}]))})),r.createElement(d,{placeholder:"\u8BF7\u8F93\u5165\u5730\u533A"}))}}))))},Z=`import React from 'react';\r
import { Form, FormItem, Select } from '@pms/ui';\r
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
              children: (form) => {\r
                const depValue = form.getFieldValue(['province']);\r
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
`,ee=void 0,re=void 0,ue={code:Z,title:ee,desc:re},te=!0;var ae=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:ue,isDemo:te,default:Y},Symbol.toStringTag,{value:"Module"}));const le=u=>function(a){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",l({},a))},c=le("Demo"),oe={},ne="wrapper";function y(a){var o=a,{components:u}=o,t=h(o,["components"]);return e(ne,m(l(l({},oe),t),{components:u,mdxType:"MDXLayout"}),e("h1",null,"FormItem"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,e("strong",{parentName:"p"},e("inlineCode",{parentName:"strong"},"FormItem"),"\u548C",e("inlineCode",{parentName:"strong"},"AForm.Item"),"\u6709\u4EE5\u4E0B\u533A\u522B"),"\uFF1A"),e("ol",null,e("li",{parentName:"ol"},e("p",{parentName:"li"},"\u4E3A\u65B9\u4FBF\u8868\u5355\u5E03\u5C40\uFF0C",e("inlineCode",{parentName:"p"},"FormItem"),"\u5728",e("inlineCode",{parentName:"p"},"AForm.Item"),"\u7EC4\u4EF6\u57FA\u7840\u4E0A\u589E\u52A0",e("inlineCode",{parentName:"p"},"Col"),"\u7EC4\u4EF6\u5305\u88F9\u3002\u5982\u679C\u8BBE\u7F6E",e("inlineCode",{parentName:"p"},"span={null}"),"\u7684\u8BDD\uFF0C\u4E0D\u4F1A\u751F\u6210",e("inlineCode",{parentName:"p"},"Col"),"\u7EC4\u4EF6\u5BB9\u5668\u3002")),e("li",{parentName:"ol"},e("p",{parentName:"li"},e("inlineCode",{parentName:"p"},"FormItem")," \u6269\u5C55\u4E86",e("strong",{parentName:"p"},"\u6570\u636E\u6E90"),"\u7684\u4F7F\u7528\uFF0C\u652F\u6301",e("inlineCode",{parentName:"p"},"dataSource"),"\u548C",e("inlineCode",{parentName:"p"},"remoteDataSource"),"\u65B9\u6CD5\u4F20\u9012\u6570\u636E\u6E90\u7ED9\u5B50\u7EC4\u4EF6\u3002")),e("li",{parentName:"ol"},e("p",{parentName:"li"},e("inlineCode",{parentName:"p"},"FormItem")," \u7684",e("inlineCode",{parentName:"p"},"disabled"),"\u5C5E\u6027\u4E5F\u4F1A\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u3002"))),e("blockquote",null,e("p",{parentName:"blockquote"},"TODO: \u6682\u65F6\u4E0D\u8003\u8651\u5BF9\u6570\u636E\u6E90\u3001disabled \u7B49\u72B6\u6001\u7684\u5B9E\u4F8B\u65B9\u6CD5\u6269\u5C55\u3002")),e("h2",null,"demos"),e("p",null,"\u57FA\u672C\u4F7F\u7528"),e(c,m(l({},z),{mdxType:"Demo"})),e("p",null,"\u914D\u5408 span \u5E03\u5C40"),e(c,m(l({},L),{mdxType:"Demo"})),e("p",null,"\u8868\u5355\u5173\u8054: \u5E38\u89C4\u4F7F\u7528"),e(c,m(l({},W),{mdxType:"Demo"})),e("p",null,"\u8868\u5355\u5173\u8054: \u88AB\u52A8\u8868\u5355\u5173\u8054"),e(c,m(l({},ae),{mdxType:"Demo"})),e("h3",null,"API"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"colClassName"),e("td",{parentName:"tr",align:"left"},"col \u7684 className \u5C5E\u6027"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"string")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"colStyle"),e("td",{parentName:"tr",align:"left"},"Col \u6837\u5F0F"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"React.CSSProperties")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"dataSource"),e("td",{parentName:"tr",align:"left"},"\u6570\u636E\u6E90"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"any")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"disabled"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u7981\u7528\u8868\u5355\u9879\uFF0C",e("inlineCode",{parentName:"td"},"disabled"),"\u4F1A\u4F20\u7ED9\u5B50\u7EC4\u4EF6"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"boolean")," ","|"," ",e("inlineCode",{parentName:"td"},"() => boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"false"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"remoteDataSource"),e("td",{parentName:"tr",align:"left"},"\u8FDC\u7A0B\u6570\u636E\u6E90"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => Promise<any>")," ","|"," ",e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"render"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u6E32\u67D3"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(props: FormItemProps) => boolean")," ","|"," ",e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"true"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"span"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"FormItem"),"\u5360\u636E\u7684\u6805\u683C\u6570\u91CF\uFF0C\u4F20",e("inlineCode",{parentName:"td"},"null"),"\u65F6\u6CA1\u6709",e("inlineCode",{parentName:"td"},"Col"),"\u7EC4\u4EF6\u5305\u88F9"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"ColProps['span']")," ","|"," ",e("inlineCode",{parentName:"td"},"null")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"24"))))),e("p",null,"\u9664\u6B64\u4EE5\u5916\uFF0C\u900F\u4F20",e("a",{parentName:"p",href:"https://ant.design/components/grid-cn/#Col"},"Col"),"\u7684 ",e("inlineCode",{parentName:"p"},"offset")," ",e("inlineCode",{parentName:"p"},"push")," ",e("inlineCode",{parentName:"p"},"pull")," ",e("inlineCode",{parentName:"p"},"order")," ",e("inlineCode",{parentName:"p"},"flex")," \u5C5E\u6027\u3002",e("br",{parentName:"p"}),`
`,"\u4EE5\u53CA\uFF0C",e("a",{parentName:"p",href:"https://ant.design/components/form-cn/#Form.Item"},"Form.Item"),"\u7684\u5176\u4ED6\u5C5E\u6027\u3002"))}y.isMDXComponent=!0;var me=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));const ie={};ie.main=me;export{ie as default};
