var H=Object.defineProperty,$=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var R=(t,n,u)=>n in t?H(t,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[n]=u,E=(t,n)=>{for(var u in n||(n={}))N.call(n,u)&&R(t,u,n[u]);if(h)for(var u of h(n))V.call(n,u)&&R(t,u,n[u]);return t},D=(t,n)=>$(t,j(n));var w=(t,n)=>{var u={};for(var r in t)N.call(t,r)&&n.indexOf(r)<0&&(u[r]=t[r]);if(t!=null&&h)for(var r of h(t))n.indexOf(r)<0&&V.call(t,r)&&(u[r]=t[r]);return u};import{a as i,R as a,c as e}from"./index.161a0514.js";import{a0 as l,S as X,a1 as L,a2 as q,P as z}from"./index.52e84606.js";import{C as M}from"./index.6adcc740.js";import{D as v}from"./index.932d6496.js";import"./PlusOutlined.a6ed2eb3.js";const{RangePicker:I}=q,p="__custom_value";function U(t,n="YYYY-MM-DD HH:mm:ss"){return[l().startOf(t).format(n),l().endOf(t).format(n)]}function G(t,n="YYYY-MM-DD HH:mm:ss"){if(!!(t!=null&&t.length))return[t[0].startOf("day").format(n),t[1].endOf("day").format(n)]}const s=t=>{const{onChange:n,value:u,options:r=[],defaultValue:T,rangePickerProps:Y={},showRangePicker:c=!1}=t,k=c?r:[...r,{label:"\u81EA\u5B9A\u4E49",value:p}],y=typeof u=="string"||typeof u=="number",[o,P]=i.exports.useState(y?u:u?p:k[0].value),[f,g]=i.exports.useState(y?void 0:u),C=i.exports.useRef(!1),b=i.exports.useRef(!1),x=i.exports.useRef(!1);i.exports.useEffect(()=>{if(!!o){if(c){const m=[l().startOf(o),l().endOf(o)];if(g(m),!b.current)return;n==null||n(m);return}!b.current||(o===p&&!f&&(C.current=!0,g(T)),o!==p&&(n==null||n(o)))}},[o,c]),i.exports.useEffect(()=>{!b.current||(!o&&c&&(n==null||n(f)),o===p&&!C.current&&(n==null||n(f)),C.current=!1)},[o,f]),i.exports.useEffect(()=>{b.current=!0},[]);const A=m=>{x.current=!0;const d=r.find(F=>{const _=U(F.value);return z.exports.isEqual(_,G(m))});P((d==null?void 0:d.value)||"")},S=m=>{if(!m&&c){g(void 0),A(void 0);return}const[d,F]=m||[];g([d==null?void 0:d.startOf("day"),F==null?void 0:F.endOf("day")]),c&&A(m)};return a.createElement(X,null,a.createElement(L.Group,{value:o,onChange:m=>P(m.target.value),buttonStyle:"solid",optionType:"button",options:k}),(o===p||c)&&a.createElement(I,D(E({value:f,onChange:S},Y),{allowClear:!0})))},J=()=>a.createElement(M,null,a.createElement("div",null,"\u4E00\u822C\u4F7F\u7528\uFF1A"),a.createElement(s,{options:[{label:"\u672C\u5468",value:"week"},{label:"\u672C\u6708",value:"month"},{label:"\u4ECA\u5E74",value:"year"}],onChange:t=>{let n=t;typeof t=="string"&&(n=[l().startOf(t),l()]);const u=n.map(r=>r==null?void 0:r.format("YYYY-MM-DD HH:mm:ss"));console.log("val",u)}}),a.createElement(v,null),a.createElement("div",null,"\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u6708\uFF1A"),a.createElement(s,{options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"months"),l()]}),a.createElement(v,null),a.createElement("div",null,"\u56DE\u663E\uFF1A"),a.createElement(s,{options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],value:"month",onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"months"),l()]}),a.createElement(v,null),a.createElement("div",null,"\u56DE\u663E\uFF1A"),a.createElement(s,{options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],value:[l().subtract(2,"months"),l().subtract(1,"weeks")],onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"months"),l()]})),K=`import React from 'react';\r
import { Card, Divider } from 'antd';\r
import moment from 'moment';\r
import { type RecentPickerValue, type RangeValue, RecentPicker } from '@pms/ui';\r
\r
const Demo = () => {\r
  return (\r
    <Card>\r
      <div>\u4E00\u822C\u4F7F\u7528\uFF1A</div>\r
\r
      <RecentPicker<{ label: string; value: moment.unitOfTime.StartOf }>\r
        options={[\r
          { label: '\u672C\u5468', value: 'week' },\r
          { label: '\u672C\u6708', value: 'month' },\r
          { label: '\u4ECA\u5E74', value: 'year' },\r
        ]}\r
        onChange={(val) => {\r
          let finalValue: RecentPickerValue<moment.unitOfTime.StartOf> = val;\r
          if (typeof val === 'string') {\r
            finalValue = [moment().startOf(val as any), moment()];\r
          }\r
          const result = (finalValue as RangeValue).map((val) => val?.format('YYYY-MM-DD HH:mm:ss'));\r
          console.log('val', result);\r
        }}\r
      />\r
\r
      <Divider />\r
\r
      <div>\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u6708\uFF1A</div>\r
      <RecentPicker\r
        options={[\r
          { label: '\u8FD1\u4E00\u5468', value: 'week' },\r
          { label: '\u8FD1\u4E00\u6708', value: 'month' },\r
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },\r
        ]}\r
        onChange={(val) => {\r
          console.log('val', val);\r
        }}\r
        defaultValue={[moment().subtract(1, 'months'), moment()]}\r
      />\r
\r
      <Divider />\r
\r
      <div>\u56DE\u663E\uFF1A</div>\r
      <RecentPicker\r
        options={[\r
          { label: '\u8FD1\u4E00\u5468', value: 'week' },\r
          { label: '\u8FD1\u4E00\u6708', value: 'month' },\r
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },\r
        ]}\r
        value={'month'}\r
        onChange={(val) => {\r
          console.log('val', val);\r
        }}\r
        defaultValue={[moment().subtract(1, 'months'), moment()]}\r
      />\r
\r
      <Divider />\r
\r
      <div>\u56DE\u663E\uFF1A</div>\r
      <RecentPicker\r
        options={[\r
          { label: '\u8FD1\u4E00\u5468', value: 'week' },\r
          { label: '\u8FD1\u4E00\u6708', value: 'month' },\r
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },\r
        ]}\r
        value={[moment().subtract(2, 'months'), moment().subtract(1, 'weeks')]}\r
        onChange={(val) => {\r
          console.log('val', val);\r
        }}\r
        defaultValue={[moment().subtract(1, 'months'), moment()]}\r
      />\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,Q=void 0,W=void 0,Z={code:K,title:Q,desc:W},ee=!0;var te=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:Z,isDemo:ee,default:J},Symbol.toStringTag,{value:"Module"}));const ne=()=>a.createElement(M,null,a.createElement("div",null,"\u4E00\u822C\u4F7F\u7528\uFF1A"),a.createElement(s,{showRangePicker:!0,options:[{label:"\u672C\u5468",value:"week"},{label:"\u672C\u6708",value:"month"},{label:"\u4ECA\u5E74",value:"year"}],onChange:t=>{let n=t;typeof t=="string"&&(n=[l().startOf(t),l()]);const u=n==null?void 0:n.map(r=>r==null?void 0:r.format("YYYY-MM-DD HH:mm:ss"));console.log("val",u)}}),a.createElement(v,null),a.createElement("div",null,"\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u6708\uFF1A"),a.createElement(s,{showRangePicker:!0,options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"months"),l()]}),a.createElement(v,null),a.createElement("div",null,"\u56DE\u663E\uFF1A"),a.createElement(s,{showRangePicker:!0,options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],value:"month",onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"months"),l()]}),a.createElement(v,null),a.createElement("div",null,"\u56DE\u663E\uFF1A"),a.createElement(s,{showRangePicker:!0,options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],value:[l().subtract(2,"months"),l().subtract(1,"weeks")],onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"months"),l()]})),ue=`import React from 'react';\r
import { Card, Divider } from 'antd';\r
import moment from 'moment';\r
import { RecentPicker, type RecentPickerValue, type RangeValue } from '@pms/ui';\r
\r
const Demo = () => {\r
  return (\r
    <Card>\r
      <div>\u4E00\u822C\u4F7F\u7528\uFF1A</div>\r
\r
      <RecentPicker<{ label: string; value: moment.unitOfTime.StartOf }>\r
        showRangePicker\r
        options={[\r
          { label: '\u672C\u5468', value: 'week' },\r
          { label: '\u672C\u6708', value: 'month' },\r
          { label: '\u4ECA\u5E74', value: 'year' },\r
        ]}\r
        onChange={(val) => {\r
          let finalValue: RecentPickerValue<moment.unitOfTime.StartOf> = val;\r
          if (typeof val === 'string') {\r
            finalValue = [moment().startOf(val as any), moment()];\r
          }\r
          const result = (finalValue as RangeValue)?.map((val) => val?.format('YYYY-MM-DD HH:mm:ss'));\r
          console.log('val', result);\r
        }}\r
      />\r
\r
      <Divider />\r
\r
      <div>\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u6708\uFF1A</div>\r
      <RecentPicker\r
        showRangePicker\r
        options={[\r
          { label: '\u8FD1\u4E00\u5468', value: 'week' },\r
          { label: '\u8FD1\u4E00\u6708', value: 'month' },\r
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },\r
        ]}\r
        onChange={(val) => {\r
          console.log('val', val);\r
        }}\r
        defaultValue={[moment().subtract(1, 'months'), moment()]}\r
      />\r
\r
      <Divider />\r
\r
      <div>\u56DE\u663E\uFF1A</div>\r
      <RecentPicker\r
        showRangePicker\r
        options={[\r
          { label: '\u8FD1\u4E00\u5468', value: 'week' },\r
          { label: '\u8FD1\u4E00\u6708', value: 'month' },\r
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },\r
        ]}\r
        value={'month'}\r
        onChange={(val) => {\r
          console.log('val', val);\r
        }}\r
        defaultValue={[moment().subtract(1, 'months'), moment()]}\r
      />\r
\r
      <Divider />\r
\r
      <div>\u56DE\u663E\uFF1A</div>\r
      <RecentPicker\r
        showRangePicker\r
        options={[\r
          { label: '\u8FD1\u4E00\u5468', value: 'week' },\r
          { label: '\u8FD1\u4E00\u6708', value: 'month' },\r
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },\r
        ]}\r
        value={[moment().subtract(2, 'months'), moment().subtract(1, 'weeks')]}\r
        onChange={(val) => {\r
          console.log('val', val);\r
        }}\r
        defaultValue={[moment().subtract(1, 'months'), moment()]}\r
      />\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,ae=void 0,re=void 0,le={code:ue,title:ae,desc:re},oe=!0;var me=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:le,isDemo:oe,default:ne},Symbol.toStringTag,{value:"Module"}));const ie=t=>function(u){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",E({},u))},B=ie("Demo"),se={},ce="wrapper";function O(u){var r=u,{components:t}=r,n=w(r,["components"]);return e(ce,D(E(E({},se),n),{components:t,mdxType:"MDXLayout"}),e("h1",null,"RecentPicker"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u8FD1\u671F\u65F6\u95F4\u9009\u62E9\u7EC4\u4EF6"),e("h2",null,"demos"),e(B,D(E({},te),{mdxType:"Demo"})),e("blockquote",null,e("p",{parentName:"blockquote"},"\u4E0D\u6210\u719F\u7684\u8BBE\u8BA1\u65B9\u6848\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u3002\u5EFA\u8BAE\u5728\u65E5\u671F\u5C55\u5F00\u6846\u4E0B\u9762\u589E\u52A0\u6309\u94AE\uFF0C\u89E3\u51B3\u6B64\u7C7B\u573A\u666F\u95EE\u9898\u3002\u53C2\u8003",e("a",{parentName:"p",href:"https://codesandbox.io/s/ced29l"},"demo"))),e(B,D(E({},me),{mdxType:"Demo"})),e("h2",null,"API"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import type { Moment } from 'moment';
import type { RangePickerProps } from 'antd/lib/date-picker';

export type RangeValue = [Moment, Moment];

export type RecentPickerValue<T> = T | RangeValue;

export interface RecentPickerProps<T extends { label: string; value: any }> {
  onChange?: (value: RecentPickerValue<T['value']>) => void;
  value?: RecentPickerValue<T['value']>;
  defaultValue?: RangeValue;
  options?: T[];
  rangePickerProps?: RangePickerProps;
  showRangePicker?: boolean;
}
`)),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"onChange"),e("td",{parentName:"tr",align:"left"},"\u503C\u53D8\u5316\u65F6\u7684\u56DE\u8C03"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(value: RecentPickerValue<T['value']>) => void")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"value"),e("td",{parentName:"tr",align:"left"},"\u503C"),e("td",{parentName:"tr",align:"left"},"moment \u6216",e("inlineCode",{parentName:"td"},"option string"),"\uFF0C\u5EFA\u8BAE\u53C2\u8003 demo"),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"defaultValue"),e("td",{parentName:"tr",align:"left"},"\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9009\u62E9\u65F6\u7684\u503C"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"RangeValue")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"options"),e("td",{parentName:"tr",align:"left"},"\u65E5\u671F\u8303\u56F4\u9009\u62E9\u6570\u636E\u6E90"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"T extends { label: string; value: any }[]")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"rangePickerProps"),e("td",{parentName:"tr",align:"left"},"\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5176\u4ED6\u53C2\u6570\uFF0C\u900F\u4F20\u7ED9",e("inlineCode",{parentName:"td"},"RangePicker"),"\u7EC4\u4EF6"),e("td",{parentName:"tr",align:"left"},e("a",{parentName:"td",href:"https://ant.design/components/date-picker-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API"},"RangePickerProps")),e("td",{parentName:"tr",align:"center"},"-")))))}O.isMDXComponent=!0;var de=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const Ee={};Ee.main=de;export{Ee as default};
