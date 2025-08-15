import{R as e,c as n}from"./index.b451a6b4.js";import{a,aB as u,aC as c}from"./tree.feb2c467.js";const m=()=>{const t=r=>{console.log("value",r)};return e.createElement(a,{direction:"vertical"},e.createElement(a,null,e.createElement("span",null,"\u9ED8\u8BA4\u4E3ATimeString\u683C\u5F0F"),e.createElement(u,{onChange:t})),e.createElement(a,null,e.createElement("span",null,"\u4F7F\u7528dayjs\u683C\u5F0F"),e.createElement(u,{valueFormat:!1,onChange:t})),e.createElement(a,null,e.createElement("span",null,"UTC\u65F6\u95F4\u683C\u5F0F"),e.createElement(u,{valueFormat:"utc",onChange:t})),e.createElement(a,null,e.createElement("span",null,"format YYYY-MM"),e.createElement(u,{format:"YYYY-MM",onChange:t,picker:"month"})),e.createElement(a,null,e.createElement("span",null,"format YYYY-MM-DD HH/mm/ss"),e.createElement(u,{showTime:!0,format:"YYYY-MM-DD HH/mm/ss",onChange:t})),e.createElement(a,null,e.createElement("span",null,"UTC\u56DE\u663E"),e.createElement(u,{valueFormat:"utc",value:1653446642066})),e.createElement(a,null,e.createElement("span",null,"dayjs\u56DE\u663E"),e.createElement(u,{valueFormat:!1,value:c("2022-01-01")})),e.createElement(a,null,e.createElement("span",null,"TimeString\u56DE\u663E"),e.createElement(u,{valueFormat:!0,value:"2022-01-01"})),e.createElement(a,null,e.createElement("span",null,"TimeString\u56DE\u663E"),e.createElement(u,{valueFormat:!0,showTime:!0,value:"2022-01-01 12:12:12"})))},s=`import React from 'react';
import { DatePicker } from 'luckybird';
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
        <DatePicker onChange={onChange} />
      </Space>
      <Space>
        <span>\u4F7F\u7528dayjs\u683C\u5F0F</span>
        <DatePicker valueFormat={false} onChange={onChange} />
      </Space>
      <Space>
        <span>UTC\u65F6\u95F4\u683C\u5F0F</span>
        <DatePicker valueFormat={'utc'} onChange={onChange} />
      </Space>
      <Space>
        <span>format YYYY-MM</span>
        <DatePicker format={'YYYY-MM'} onChange={onChange} picker="month" />
      </Space>
      <Space>
        <span>format YYYY-MM-DD HH/mm/ss</span>
        <DatePicker showTime format={'YYYY-MM-DD HH/mm/ss'} onChange={onChange} />
      </Space>
      <Space>
        <span>UTC\u56DE\u663E</span>
        <DatePicker valueFormat={'utc'} value={1653446642066} />
      </Space>
      <Space>
        <span>dayjs\u56DE\u663E</span>
        <DatePicker valueFormat={false} value={dayjs('2022-01-01')} />
      </Space>
      <Space>
        <span>TimeString\u56DE\u663E</span>
        <DatePicker valueFormat={true} value={'2022-01-01'} />
      </Space>
      <Space>
        <span>TimeString\u56DE\u663E</span>
        <DatePicker valueFormat={true} showTime value={'2022-01-01 12:12:12'} />
      </Space>
    </Space>
  );
};

export default Demo;
`,p=void 0,i=void 0,E={code:s,title:p,desc:i},F=!0;var D=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:E,isDemo:F,default:m},Symbol.toStringTag,{value:"Module"}));const C=t=>function(o){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),n("div",{...o})},d=C("Demo"),v={},S="wrapper";function l({components:t,...r}){return n(S,{...v,...r,components:t,mdxType:"MDXLayout"},n("h1",null,"DatePicker"),n("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),n("p",null,"\u65E5\u671F\u9009\u62E9\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u83B7\u53D6\u5230\u7684\u503C\u4E3A\u65E5\u671F\u5B57\u7B26\u4E32\uFF08datestring\uFF09\u683C\u5F0F\uFF0C\u652F\u6301\u83B7\u53D6",n("inlineCode",{parentName:"p"},"utc"),"\u683C\u5F0F\u7684\u503C\u3002"),n("h2",null,"demos"),n(d,{...D,mdxType:"Demo"}),n("h2",null,"API"),n("pre",null,n("code",{parentName:"pre",className:"language-ts"},`export type DatePickerProps = Omit<ADatePickerProps, 'value'> & {
  /** \u6839\u636Eformat\u683C\u5F0F\u5316\u503C\u5904\u7406\uFF0C\u9ED8\u8BA4true\uFF0C\u53EF\u8BBE\u7F6E\u4E3Autc\u83B7\u53D6\u65F6\u95F4\u6233\u683C\u5F0F\u503C */
  valueFormat?: 'utc' | boolean;
  value?: number | string | Moment;
  /** \u6839\u636EshowTime\u533A\u5206TimePicker\uFF0CADatePickerProps\u91CC\u6CA1\u6709\u8FD9\u4E2A\u7C7B\u578B */
  showTime?: boolean;
};
`)))}l.isMDXComponent=!0;var f=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));const Y={};Y.main=f;export{Y as default};
