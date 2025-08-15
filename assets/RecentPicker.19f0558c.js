import{r as i,R as a,c as e}from"./index.b451a6b4.js";import{aC as l,a as M,b3 as B,b4 as Y,b0 as x}from"./tree.feb2c467.js";import{C as P}from"./index.2f4c5988.js";import{D as v}from"./index.91983cf2.js";import"./PlusOutlined.bbce47f4.js";const{RangePicker:O}=Y,p="__custom_value";function T(t,n="YYYY-MM-DD HH:mm:ss"){return[l().startOf(t).format(n),l().endOf(t).format(n)]}function _(t,n="YYYY-MM-DD HH:mm:ss"){if(!!(t!=null&&t.length))return[t[0].startOf("day").format(n),t[1].endOf("day").format(n)]}const c=t=>{const{onChange:n,value:r,options:o=[],defaultValue:N,rangePickerProps:V={},showRangePicker:m=!1}=t,h=m?o:[...o,{label:"\u81EA\u5B9A\u4E49",value:p}],D=typeof r=="string"||typeof r=="number",[u,F]=i.exports.useState(D?r:r?p:h[0].value),[f,g]=i.exports.useState(D?void 0:r),y=i.exports.useRef(!1),b=i.exports.useRef(!1),A=i.exports.useRef(!1);i.exports.useEffect(()=>{if(!!u){if(m){const s=[l().startOf(u),l().endOf(u)];if(g(s),!b.current)return;n==null||n(s);return}!b.current||(u===p&&!f&&(y.current=!0,g(N)),u!==p&&(n==null||n(u)))}},[u,m]),i.exports.useEffect(()=>{!b.current||(!u&&m&&(n==null||n(f)),u===p&&!y.current&&(n==null||n(f)),y.current=!1)},[u,f]),i.exports.useEffect(()=>{b.current=!0},[]);const k=s=>{A.current=!0;const d=o.find(E=>{const j=T(E.value);return x.exports.isEqual(j,_(s))});F((d==null?void 0:d.value)||"")},w=s=>{if(!s&&m){g(void 0),k(void 0);return}const[d,E]=s||[];g([d==null?void 0:d.startOf("day"),E==null?void 0:E.endOf("day")]),m&&k(s)};return a.createElement(M,null,a.createElement(B.Group,{value:u,onChange:s=>F(s.target.value),buttonStyle:"solid",optionType:"button",options:h}),(u===p||m)&&a.createElement(O,{value:f,onChange:w,...V,allowClear:!0}))},S=()=>a.createElement(P,null,a.createElement("div",null,"\u4E00\u822C\u4F7F\u7528\uFF1A"),a.createElement(c,{options:[{label:"\u672C\u5468",value:"week"},{label:"\u672C\u6708",value:"month"},{label:"\u4ECA\u5E74",value:"year"}],onChange:t=>{let n=t;typeof t=="string"&&(n=[l().startOf(t),l()]);const r=n.map(o=>o==null?void 0:o.format("YYYY-MM-DD HH:mm:ss"));console.log("val",r)}}),a.createElement(v,null),a.createElement("div",null,"\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u6708\uFF1A"),a.createElement(c,{options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"month"),l()]}),a.createElement(v,null),a.createElement("div",null,"\u56DE\u663E\uFF1A"),a.createElement(c,{options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],value:"month",onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"month"),l()]}),a.createElement(v,null),a.createElement("div",null,"\u56DE\u663E\uFF1A"),a.createElement(c,{options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],value:[l().subtract(2,"month"),l().subtract(1,"week")],onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"month"),l()]})),H=`import React from 'react';
import { Card, Divider } from 'antd';
import dayjs from '../../../_util/dayjs';
import { type RecentPickerValue, type RangeValue, RecentPicker } from 'luckybird';

const Demo = () => {
  return (
    <Card>
      <div>\u4E00\u822C\u4F7F\u7528\uFF1A</div>

      <RecentPicker<{ label: string; value: string }>
        options={[
          { label: '\u672C\u5468', value: 'week' },
          { label: '\u672C\u6708', value: 'month' },
          { label: '\u4ECA\u5E74', value: 'year' },
        ]}
        onChange={(val) => {
          let finalValue: RecentPickerValue<string> = val;
          if (typeof val === 'string') {
            finalValue = [dayjs().startOf(val as any), dayjs()];
          }
          const result = (finalValue as RangeValue).map((val) => val?.format('YYYY-MM-DD HH:mm:ss'));
          console.log('val', result);
        }}
      />

      <Divider />

      <div>\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u6708\uFF1A</div>
      <RecentPicker
        options={[
          { label: '\u8FD1\u4E00\u5468', value: 'week' },
          { label: '\u8FD1\u4E00\u6708', value: 'month' },
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },
        ]}
        onChange={(val) => {
          console.log('val', val);
        }}
        defaultValue={[dayjs().subtract(1, 'month'), dayjs()]}
      />

      <Divider />

      <div>\u56DE\u663E\uFF1A</div>
      <RecentPicker
        options={[
          { label: '\u8FD1\u4E00\u5468', value: 'week' },
          { label: '\u8FD1\u4E00\u6708', value: 'month' },
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },
        ]}
        value={'month'}
        onChange={(val) => {
          console.log('val', val);
        }}
        defaultValue={[dayjs().subtract(1, 'month'), dayjs()]}
      />

      <Divider />

      <div>\u56DE\u663E\uFF1A</div>
      <RecentPicker
        options={[
          { label: '\u8FD1\u4E00\u5468', value: 'week' },
          { label: '\u8FD1\u4E00\u6708', value: 'month' },
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },
        ]}
        value={[dayjs().subtract(2, 'month'), dayjs().subtract(1, 'week')]}
        onChange={(val) => {
          console.log('val', val);
        }}
        defaultValue={[dayjs().subtract(1, 'month'), dayjs()]}
      />
    </Card>
  );
};

export default Demo;
`,$=void 0,X=void 0,L={code:H,title:$,desc:X},q=!0;var z=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:L,isDemo:q,default:S},Symbol.toStringTag,{value:"Module"}));const I=()=>a.createElement(P,null,a.createElement("div",null,"\u4E00\u822C\u4F7F\u7528\uFF1A"),a.createElement(c,{showRangePicker:!0,options:[{label:"\u672C\u5468",value:"week"},{label:"\u672C\u6708",value:"month"},{label:"\u4ECA\u5E74",value:"year"}],onChange:t=>{let n=t;typeof t=="string"&&(n=[l().startOf(t),l()]);const r=n==null?void 0:n.map(o=>o==null?void 0:o.format("YYYY-MM-DD HH:mm:ss"));console.log("val",r)}}),a.createElement(v,null),a.createElement("div",null,"\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u6708\uFF1A"),a.createElement(c,{showRangePicker:!0,options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"month"),l()]}),a.createElement(v,null),a.createElement("div",null,"\u56DE\u663E\uFF1A"),a.createElement(c,{showRangePicker:!0,options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],value:"month",onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"month"),l()]}),a.createElement(v,null),a.createElement("div",null,"\u56DE\u663E\uFF1A"),a.createElement(c,{showRangePicker:!0,options:[{label:"\u8FD1\u4E00\u5468",value:"week"},{label:"\u8FD1\u4E00\u6708",value:"month"},{label:"\u8FD1\u4E00\u5E74",value:"year"}],value:[l().subtract(2,"month"),l().subtract(1,"week")],onChange:t=>{console.log("val",t)},defaultValue:[l().subtract(1,"month"),l()]})),U=`import React from 'react';
import { Card, Divider } from 'antd';
import dayjs from '../../../_util/dayjs';
import { RecentPicker, type RecentPickerValue, type RangeValue } from 'luckybird';

const Demo = () => {
  return (
    <Card>
      <div>\u4E00\u822C\u4F7F\u7528\uFF1A</div>

      <RecentPicker<{ label: string; value: string }>
        showRangePicker
        options={[
          { label: '\u672C\u5468', value: 'week' },
          { label: '\u672C\u6708', value: 'month' },
          { label: '\u4ECA\u5E74', value: 'year' },
        ]}
        onChange={(val) => {
          let finalValue: RecentPickerValue<string> = val;
          if (typeof val === 'string') {
            finalValue = [dayjs().startOf(val as any), dayjs()];
          }
          const result = (finalValue as RangeValue)?.map((val) => val?.format('YYYY-MM-DD HH:mm:ss'));
          console.log('val', result);
        }}
      />

      <Divider />

      <div>\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u663E\u793A\u5F53\u524D\u6708\uFF1A</div>
      <RecentPicker
        showRangePicker
        options={[
          { label: '\u8FD1\u4E00\u5468', value: 'week' },
          { label: '\u8FD1\u4E00\u6708', value: 'month' },
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },
        ]}
        onChange={(val) => {
          console.log('val', val);
        }}
        defaultValue={[dayjs().subtract(1, 'month'), dayjs()]}
      />

      <Divider />

      <div>\u56DE\u663E\uFF1A</div>
      <RecentPicker
        showRangePicker
        options={[
          { label: '\u8FD1\u4E00\u5468', value: 'week' },
          { label: '\u8FD1\u4E00\u6708', value: 'month' },
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },
        ]}
        value={'month'}
        onChange={(val) => {
          console.log('val', val);
        }}
        defaultValue={[dayjs().subtract(1, 'month'), dayjs()]}
      />

      <Divider />

      <div>\u56DE\u663E\uFF1A</div>
      <RecentPicker
        showRangePicker
        options={[
          { label: '\u8FD1\u4E00\u5468', value: 'week' },
          { label: '\u8FD1\u4E00\u6708', value: 'month' },
          { label: '\u8FD1\u4E00\u5E74', value: 'year' },
        ]}
        value={[dayjs().subtract(2, 'month'), dayjs().subtract(1, 'week')]}
        onChange={(val) => {
          console.log('val', val);
        }}
        defaultValue={[dayjs().subtract(1, 'month'), dayjs()]}
      />
    </Card>
  );
};

export default Demo;
`,G=void 0,J=void 0,K={code:U,title:G,desc:J},Q=!0;var W=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:K,isDemo:Q,default:I},Symbol.toStringTag,{value:"Module"}));const Z=t=>function(r){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...r})},C=Z("Demo"),ee={},te="wrapper";function R({components:t,...n}){return e(te,{...ee,...n,components:t,mdxType:"MDXLayout"},e("h1",null,"RecentPicker"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u8FD1\u671F\u65F6\u95F4\u9009\u62E9\u7EC4\u4EF6"),e("h2",null,"demos"),e(C,{...z,mdxType:"Demo"}),e("blockquote",null,e("p",{parentName:"blockquote"},"\u4E0D\u6210\u719F\u7684\u8BBE\u8BA1\u65B9\u6848\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u3002\u5EFA\u8BAE\u5728\u65E5\u671F\u5C55\u5F00\u6846\u4E0B\u9762\u589E\u52A0\u6309\u94AE\uFF0C\u89E3\u51B3\u6B64\u7C7B\u573A\u666F\u95EE\u9898\u3002\u53C2\u8003",e("a",{parentName:"p",href:"https://codesandbox.io/s/ced29l"},"demo"))),e(C,{...W,mdxType:"Demo"}),e("h2",null,"API"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import type { Moment } from 'moment';
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
`)),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"onChange"),e("td",{parentName:"tr",align:"left"},"\u503C\u53D8\u5316\u65F6\u7684\u56DE\u8C03"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(value: RecentPickerValue<T['value']>) => void")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"value"),e("td",{parentName:"tr",align:"left"},"\u503C"),e("td",{parentName:"tr",align:"left"},"moment \u6216",e("inlineCode",{parentName:"td"},"option string"),"\uFF0C\u5EFA\u8BAE\u53C2\u8003 demo"),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"defaultValue"),e("td",{parentName:"tr",align:"left"},"\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u9009\u62E9\u65F6\u7684\u503C"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"RangeValue")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"options"),e("td",{parentName:"tr",align:"left"},"\u65E5\u671F\u8303\u56F4\u9009\u62E9\u6570\u636E\u6E90"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"T extends { label: string; value: any }[]")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"rangePickerProps"),e("td",{parentName:"tr",align:"left"},"\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5176\u4ED6\u53C2\u6570\uFF0C\u900F\u4F20\u7ED9",e("inlineCode",{parentName:"td"},"RangePicker"),"\u7EC4\u4EF6"),e("td",{parentName:"tr",align:"left"},e("a",{parentName:"td",href:"https://ant.design/components/date-picker-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API"},"RangePickerProps")),e("td",{parentName:"tr",align:"center"},"-")))))}R.isMDXComponent=!0;var ne=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const ae={};ae.main=ne;export{ae as default};
