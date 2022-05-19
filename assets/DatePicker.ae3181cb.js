var C=Object.defineProperty,v=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var p=(u,a,t)=>a in u?C(u,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[a]=t,m=(u,a)=>{for(var t in a||(a={}))i.call(a,t)&&p(u,t,a[t]);if(c)for(var t of c(a))E.call(a,t)&&p(u,t,a[t]);return u},s=(u,a)=>v(u,S(a));var F=(u,a)=>{var t={};for(var r in u)i.call(u,r)&&a.indexOf(r)<0&&(t[r]=u[r]);if(u!=null&&c)for(var r of c(u))a.indexOf(r)<0&&E.call(u,r)&&(t[r]=u[r]);return t};import{R as e,c as n}from"./index.161a0514.js";import{S as o,$ as l,a0 as d}from"./index.52e84606.js";const Y=()=>{const u=a=>{console.log("value",a)};return e.createElement(o,{direction:"vertical"},e.createElement(o,null,e.createElement("span",null,"\u9ED8\u8BA4\u4E3ATimeString\u683C\u5F0F"),e.createElement(l,{onChange:u})),e.createElement(o,null,e.createElement("span",null,"\u4F7F\u7528moment\u683C\u5F0F"),e.createElement(l,{valueFormat:!1,onChange:u})),e.createElement(o,null,e.createElement("span",null,"UTC\u65F6\u95F4\u683C\u5F0F"),e.createElement(l,{valueFormat:"utc",onChange:u})),e.createElement(o,null,e.createElement("span",null,"format YYYY-MM"),e.createElement(l,{format:"YYYY-MM",onChange:u,picker:"month"})),e.createElement(o,null,e.createElement("span",null,"format YYYY-MM-DD HH/mm/ss"),e.createElement(l,{showTime:!0,format:"YYYY-MM-DD HH/mm/ss",onChange:u})),e.createElement(o,null,e.createElement("span",null,"UTC\u56DE\u663E"),e.createElement(l,{valueFormat:"utc",value:1653446642066})),e.createElement(o,null,e.createElement("span",null,"moment\u56DE\u663E"),e.createElement(l,{valueFormat:!1,value:d("2022-01-01")})),e.createElement(o,null,e.createElement("span",null,"TimeString\u56DE\u663E"),e.createElement(l,{valueFormat:!0,value:"2022-01-01"})),e.createElement(o,null,e.createElement("span",null,"TimeString\u56DE\u663E"),e.createElement(l,{valueFormat:!0,showTime:!0,value:"2022-01-01 12:12:12"})))},f=`import React from 'react';\r
import { DatePicker } from '@pms/ui';\r
import { Space } from 'antd';\r
import moment from 'moment';\r
\r
const Demo = () => {\r
  const onChange = (value) => {\r
    console.log('value', value);\r
  };\r
\r
  return (\r
    <Space direction="vertical">\r
      <Space>\r
        <span>\u9ED8\u8BA4\u4E3ATimeString\u683C\u5F0F</span>\r
        <DatePicker onChange={onChange} />\r
      </Space>\r
      <Space>\r
        <span>\u4F7F\u7528moment\u683C\u5F0F</span>\r
        <DatePicker valueFormat={false} onChange={onChange} />\r
      </Space>\r
      <Space>\r
        <span>UTC\u65F6\u95F4\u683C\u5F0F</span>\r
        <DatePicker valueFormat={'utc'} onChange={onChange} />\r
      </Space>\r
      <Space>\r
        <span>format YYYY-MM</span>\r
        <DatePicker format={'YYYY-MM'} onChange={onChange} picker="month" />\r
      </Space>\r
      <Space>\r
        <span>format YYYY-MM-DD HH/mm/ss</span>\r
        <DatePicker showTime format={'YYYY-MM-DD HH/mm/ss'} onChange={onChange} />\r
      </Space>\r
      <Space>\r
        <span>UTC\u56DE\u663E</span>\r
        <DatePicker valueFormat={'utc'} value={1653446642066} />\r
      </Space>\r
      <Space>\r
        <span>moment\u56DE\u663E</span>\r
        <DatePicker valueFormat={false} value={moment('2022-01-01')} />\r
      </Space>\r
      <Space>\r
        <span>TimeString\u56DE\u663E</span>\r
        <DatePicker valueFormat={true} value={'2022-01-01'} />\r
      </Space>\r
      <Space>\r
        <span>TimeString\u56DE\u663E</span>\r
        <DatePicker valueFormat={true} showTime value={'2022-01-01 12:12:12'} />\r
      </Space>\r
    </Space>\r
  );\r
};\r
\r
export default Demo;\r
`,g=void 0,h=void 0,M={code:f,title:g,desc:h},P=!0;var T=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:M,isDemo:P,default:Y},Symbol.toStringTag,{value:"Module"}));const k=u=>function(t){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),n("div",m({},t))},A=k("Demo"),B={},b="wrapper";function D(t){var r=t,{components:u}=r,a=F(r,["components"]);return n(b,s(m(m({},B),a),{components:u,mdxType:"MDXLayout"}),n("h1",null,"DatePicker"),n("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),n("p",null,"\u65E5\u671F\u9009\u62E9\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u83B7\u53D6\u5230\u7684\u503C\u4E3A\u65E5\u671F\u5B57\u7B26\u4E32\uFF08datestring\uFF09\u683C\u5F0F\uFF0C\u652F\u6301\u83B7\u53D6",n("inlineCode",{parentName:"p"},"utc"),"\u683C\u5F0F\u7684\u503C\u3002"),n("h2",null,"demos"),n(A,s(m({},T),{mdxType:"Demo"})),n("h2",null,"API"),n("pre",null,n("code",{parentName:"pre",className:"language-ts"},`export type DatePickerProps = Omit<ADatePickerProps, 'value'> & {
  /** \u6839\u636Eformat\u683C\u5F0F\u5316\u503C\u5904\u7406\uFF0C\u9ED8\u8BA4true\uFF0C\u53EF\u8BBE\u7F6E\u4E3Autc\u83B7\u53D6\u65F6\u95F4\u6233\u683C\u5F0F\u503C */
  valueFormat?: 'utc' | boolean;
  value?: number | string | Moment;
  /** \u6839\u636EshowTime\u533A\u5206TimePicker\uFF0CADatePickerProps\u91CC\u6CA1\u6709\u8FD9\u4E2A\u7C7B\u578B */
  showTime?: boolean;
};
`)))}D.isMDXComponent=!0;var y=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const w={};w.main=y;export{w as default};
