import{R as u,c as e}from"./index.1c33d5c1.js";import{a5 as l,ao as i,a2 as c}from"./tree.ce5c4568.js";import{d as s}from"./zh_CN.266838fe.js";import{m as r}from"./index.b9dd85a1.js";const p=[{children:"\u65B0\u589E",type:"text",block:!0,onClick:()=>{r.success("\u65B0\u589E")}},{children:"\u7F16\u8F91",block:!0,type:"text",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(n=>{setTimeout(()=>{r.success("\u7F16\u8F91\u6210\u529F"),n(!0)},2e3)}))},{children:"\u9690\u85CF\u6309\u94AE",block:!0,danger:!0,type:"text",render:!1,onClick:n=>{}},{children:"\u5220\u9664",block:!0,danger:!0,type:"text",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:n=>(console.log("Action \u5220\u9664",n),new Promise((t,o)=>{setTimeout(()=>{r.error("\u5220\u9664\u5931\u8D25"),o(!0)},2e3)}))}],m=()=>u.createElement(l,{locale:s},u.createElement(i,{actions:p},u.createElement(c,{type:"primary"},"\u5212\u5165\u5C55\u5F00\u83DC\u5355"))),d=`import React from 'react';
import { DropdownButton } from '@dreame/ui';
import { Button, message, ConfigProvider } from 'antd';
import type { DropdownButtonProps } from '@dreame/ui';
import zhCN from 'antd/lib/locale/zh_CN';

const actions: DropdownButtonProps['actions'] = [
  {
    children: '\u65B0\u589E',
    type: 'text',
    block: true,
    onClick: () => {
      message.success('\u65B0\u589E');
    },
  },
  {
    children: '\u7F16\u8F91',
    block: true,
    type: 'text',
    onClick: () => {
      console.log('Action \u7F16\u8F91');
      return new Promise((resolve) => {
        setTimeout(() => {
          message.success('\u7F16\u8F91\u6210\u529F');
          resolve(true);
        }, 2000);
      });
    },
  },

  {
    children: '\u9690\u85CF\u6309\u94AE',
    block: true,
    danger: true,
    type: 'text',
    render: false,
    onClick: (e) => {},
  },
  {
    children: '\u5220\u9664',
    block: true,
    danger: true,
    type: 'text',
    confirm: '\u786E\u8BA4\u5220\u9664?',
    onClick: (e) => {
      console.log('Action \u5220\u9664', e);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          message.error('\u5220\u9664\u5931\u8D25');
          reject(true);
        }, 2000);
      });
    },
  },
];

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <DropdownButton actions={actions}>
        <Button type="primary">\u5212\u5165\u5C55\u5F00\u83DC\u5355</Button>
      </DropdownButton>
    </ConfigProvider>
  );
};

export default Demo;
`,C=void 0,D=void 0,F={code:d,title:C,desc:D},f=!0;var g=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:F,isDemo:f,default:m},Symbol.toStringTag,{value:"Module"}));const B=n=>function(o){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...o})},E=B("Demo"),h={},b="wrapper";function a({components:n,...t}){return e(b,{...h,...t,components:n,mdxType:"MDXLayout"},e("h1",null,"DropdownButton"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u5212\u5165\u5C55\u793A\u64CD\u4F5C\u6309\u94AE"),e("p",null,"\u7279\u70B9"),e("ol",null,e("li",{parentName:"ol"},"\u89E3\u51B3 Popconfirm \u5F39\u6846\u51FA\u73B0\u65F6\uFF0C\u4E0B\u62C9\u83DC\u5355\u6D88\u5931\u95EE\u9898"),e("li",{parentName:"ol"},"\u6309\u94AE loading \u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u4F1A\u5173\u95ED\u4E0B\u62C9\u83DC\u5355\uFF0Cloading \u7ED3\u675F\u540E\u81EA\u52A8\u6536\u8D77\u4E0B\u62C9\u83DC\u5355")),e("h2",null,"demos"),e(E,{...g,mdxType:"Demo"}),e("h2",null,"API"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`export interface DropdownButtonProps extends Omit<DropDownProps, 'overlay' | 'visible' | 'onVisibleChange'> {
  actions: ButtonActionProps[];
}
`)),e("p",null,"\u57FA\u4E8E antd \u7684",e("inlineCode",{parentName:"p"},"Dropdown"),"\u5C01\u88C5\uFF0C\u900F\u4F20\u9664",e("inlineCode",{parentName:"p"},"overlay")," ",e("inlineCode",{parentName:"p"},"visible")," ",e("inlineCode",{parentName:"p"},"onVisibleChange")," \u4E4B\u5916\u7684\u5C5E\u6027\uFF0C\u66F4\u591A api \u8BF7\u53C2\u8003",e("a",{parentName:"p",href:"https://ant.design/components/dropdown-cn/#API"},"Dropdown"),"\u3002"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"actions"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u64CD\u4F5C\u6309\u94AE\u6E32\u67D3\u5217\u8868"),e("td",{parentName:"tr",align:"left"},e("a",{parentName:"td",href:"/components/Actions#actionbutton"},"ButtonActionProps"),"[]\uFF0C\u5EFA\u8BAE\u53C2\u8003 demo \u4F7F\u7528"),e("td",{parentName:"tr",align:"center"},"-")))))}a.isMDXComponent=!0;var y=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));const A={};A.main=y;export{A as default};
