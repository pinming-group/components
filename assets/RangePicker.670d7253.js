import{R as e,c as u}from"./index.b451a6b4.js";import{a as n,aZ as t,aC as r}from"./tree.feb2c467.js";const m=()=>{const a=l=>{console.log("value",l)};return e.createElement(n,{direction:"vertical"},e.createElement(n,null,e.createElement("span",null,"\u9ED8\u8BA4\u4E3ATimeString\u683C\u5F0F"),e.createElement(t,{onChange:a})),e.createElement(n,null,e.createElement("span",null,"\u4F7F\u7528dayjs\u683C\u5F0F"),e.createElement(t,{valueFormat:!1,onChange:a})),e.createElement(n,null,e.createElement("span",null,"UTC\u65F6\u95F4\u683C\u5F0F"),e.createElement(t,{valueFormat:"utc",onChange:a})),e.createElement(n,null,e.createElement("span",null,"format YYYY-MM"),e.createElement(t,{format:"YYYY-MM",onChange:a,picker:"month"})),e.createElement(n,null,e.createElement("span",null,"format YYYY-MM-DD HH/mm/ss"),e.createElement(t,{showTime:!0,format:"YYYY-MM-DD HH/mm/ss",onChange:a})),e.createElement(n,null,e.createElement("span",null,"UTC\u56DE\u663E"),e.createElement(t,{valueFormat:"utc",value:[1653446642066,1653446643066]})),e.createElement(n,null,e.createElement("span",null,"dayjs\u56DE\u663E"),e.createElement(t,{valueFormat:!1,value:[r("2022-01-01"),r("2022-02-01")]})),e.createElement(n,null,e.createElement("span",null,"TimeString\u56DE\u663E"),e.createElement(t,{valueFormat:!0,value:["2022-01-01","2022-02-01"]})),e.createElement(n,null,e.createElement("span",null,"TimeString\u56DE\u663E"),e.createElement(t,{valueFormat:!0,showTime:!0,value:["2022-01-01 12:12:12","2022-02-01 12:12:12"]})))},s=`import React from 'react';
import { RangePicker } from 'luckybird';
import { Space } from 'antd';
import dayjs from '../../../_util/dayjs';

const Demo = () => {
  const onChange = (value) => {
    console.log('value', value);
  };

  return (
    <Space direction="vertical">
      <Space>
        <span>\u9ED8\u8BA4\u4E3ATimeString\u683C\u5F0F</span>
        <RangePicker onChange={onChange} />
      </Space>
      <Space>
        <span>\u4F7F\u7528dayjs\u683C\u5F0F</span>
        <RangePicker valueFormat={false} onChange={onChange} />
      </Space>
      <Space>
        <span>UTC\u65F6\u95F4\u683C\u5F0F</span>
        <RangePicker valueFormat={'utc'} onChange={onChange} />
      </Space>
      <Space>
        <span>format YYYY-MM</span>
        <RangePicker format={'YYYY-MM'} onChange={onChange} picker="month" />
      </Space>
      <Space>
        <span>format YYYY-MM-DD HH/mm/ss</span>
        <RangePicker showTime format={'YYYY-MM-DD HH/mm/ss'} onChange={onChange} />
      </Space>
      <Space>
        <span>UTC\u56DE\u663E</span>
        <RangePicker valueFormat={'utc'} value={[1653446642066, 1653446643066]} />
      </Space>
      <Space>
        <span>dayjs\u56DE\u663E</span>
        <RangePicker valueFormat={false} value={[dayjs('2022-01-01'), dayjs('2022-02-01')]} />
      </Space>
      <Space>
        <span>TimeString\u56DE\u663E</span>
        <RangePicker valueFormat={true} value={['2022-01-01', '2022-02-01']} />
      </Space>
      <Space>
        <span>TimeString\u56DE\u663E</span>
        <RangePicker valueFormat={true} showTime value={['2022-01-01 12:12:12', '2022-02-01 12:12:12']} />
      </Space>
    </Space>
  );
};

export default Demo;
`,p=void 0,i=void 0,E={code:s,title:p,desc:i},d=!0;var F=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:E,isDemo:d,default:m},Symbol.toStringTag,{value:"Module"}));const g=a=>function(c){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),u("div",{...c})},C=g("Demo"),S={},v="wrapper";function o({components:a,...l}){return u(v,{...S,...l,components:a,mdxType:"MDXLayout"},u("h1",null,"RangePicker"),u("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),u("p",null,"\u65E5\u671F\u9009\u62E9\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u83B7\u53D6\u5230\u7684\u503C\u4E3A\u65E5\u671F\u5B57\u7B26\u4E32\uFF08datestring\uFF09\u683C\u5F0F\uFF0C\u652F\u6301\u83B7\u53D6",u("inlineCode",{parentName:"p"},"utc"),"\u683C\u5F0F\u7684\u503C\u3002"),u("h2",null,"demos"),u(C,{...F,mdxType:"Demo"}))}o.isMDXComponent=!0;var D=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}));const Y={};Y.main=D;export{Y as default};
