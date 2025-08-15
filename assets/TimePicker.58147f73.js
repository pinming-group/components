import{R as e,c as n}from"./index.1c33d5c1.js";import{S as a,b4 as t,aY as m}from"./tree.ce5c4568.js";const c=()=>{const u=l=>{console.log("value",l)};return e.createElement(a,{direction:"vertical"},e.createElement(a,null,e.createElement("span",null,"\u9ED8\u8BA4\u4E3ATimeString\u683C\u5F0F"),e.createElement(t,{onChange:u})),e.createElement(a,null,e.createElement("span",null,"\u4F7F\u7528HH:mm:ss\u683C\u5F0F"),e.createElement(t,{format:"HH:mm:ss",onChange:u})),e.createElement(a,null,e.createElement("span",null,"\u4F7F\u7528dayjs\u683C\u5F0F"),e.createElement(t,{valueFormat:!1,onChange:u})),e.createElement(a,null,e.createElement("span",null,"UTC\u65F6\u95F4\u683C\u5F0F"),e.createElement(t,{valueFormat:"utc",onChange:u})),e.createElement(a,null,e.createElement("span",null,"UTC\u56DE\u663E"),e.createElement(t,{valueFormat:"utc",value:1653446642066})),e.createElement(a,null,e.createElement("span",null,"dayjs\u56DE\u663E"),e.createElement(t,{valueFormat:!1,value:m("2022-01-01 01:01:01")})),e.createElement(a,null,e.createElement("span",null,"TimeString\u56DE\u663E"),e.createElement(t,{valueFormat:!0,value:"2022-01-01 01:01:01"})),e.createElement(a,null,e.createElement("span",null,"TimeString\u56DE\u663E"),e.createElement(t,{valueFormat:!0,value:"2022-01-01 12:12:12"})))},s=`import React from 'react';
import { TimePicker } from '@dreame/ui';
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
        <TimePicker onChange={onChange} />
      </Space>
      <Space>
        <span>\u4F7F\u7528HH:mm:ss\u683C\u5F0F</span>
        <TimePicker format={'HH:mm:ss'} onChange={onChange} />
      </Space>
      <Space>
        <span>\u4F7F\u7528dayjs\u683C\u5F0F</span>
        <TimePicker valueFormat={false} onChange={onChange} />
      </Space>
      <Space>
        <span>UTC\u65F6\u95F4\u683C\u5F0F</span>
        <TimePicker valueFormat={'utc'} onChange={onChange} />
      </Space>
      <Space>
        <span>UTC\u56DE\u663E</span>
        <TimePicker valueFormat={'utc'} value={1653446642066} />
      </Space>
      <Space>
        <span>dayjs\u56DE\u663E</span>
        <TimePicker valueFormat={false} value={dayjs('2022-01-01 01:01:01')} />
      </Space>
      <Space>
        <span>TimeString\u56DE\u663E</span>
        <TimePicker valueFormat={true} value={'2022-01-01 01:01:01'} />
      </Space>
      <Space>
        <span>TimeString\u56DE\u663E</span>
        <TimePicker valueFormat={true} value={'2022-01-01 12:12:12'} />
      </Space>
    </Space>
  );
};

export default Demo;
`,p=void 0,i=void 0,F={code:s,title:p,desc:i},E=!0;var d=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:F,isDemo:E,default:c},Symbol.toStringTag,{value:"Module"}));const C=u=>function(o){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),n("div",{...o})},v=C("Demo"),S={},g="wrapper";function r({components:u,...l}){return n(g,{...S,...l,components:u,mdxType:"MDXLayout"},n("h1",null,"TimePicker"),n("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),n("p",null,"\u65F6\u95F4\u9009\u62E9\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u83B7\u53D6\u5230\u7684\u503C\u4E3A\u65E5\u671F\u5B57\u7B26\u4E32\uFF08datestring\uFF09\u683C\u5F0F\uFF0C\u652F\u6301\u83B7\u53D6",n("inlineCode",{parentName:"p"},"utc"),"\u683C\u5F0F\u7684\u503C\u3002"),n("h2",null,"demos"),n(v,{...d,mdxType:"Demo"}),n("h2",null,"API"),n("pre",null,n("code",{parentName:"pre",className:"language-ts"},`export type TimePickerProps = Omit<ATimePickerProps, 'value'> & {
  /** \u6839\u636Eformat\u683C\u5F0F\u5316\u503C\u5904\u7406\uFF0C\u9ED8\u8BA4true\uFF0C\u53EF\u8BBE\u7F6E\u4E3Autc\u83B7\u53D6\u65F6\u95F4\u6233\u683C\u5F0F\u503C */
  valueFormat?: 'utc' | boolean;
  value?: number | string | Moment;
};
`)))}r.isMDXComponent=!0;var T=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"}));const f={};f.main=T;export{f as default};
