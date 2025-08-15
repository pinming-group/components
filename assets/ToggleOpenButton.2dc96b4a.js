import{R as r,c as e}from"./index.b451a6b4.js";import{as as l}from"./tree.feb2c467.js";const u=()=>{const[t,n]=r.useState(!1);return r.createElement(l,{open:t,onClick:a=>{n(!a)}})},p=`import React from 'react';
import { ToggleOpenButton } from 'luckybird';

const Demo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ToggleOpenButton
      open={isOpen}
      onClick={(open) => {
        setIsOpen(!open);
      }}
    />
  );
};

export default Demo;
`,m=void 0,d=void 0,i={code:p,title:m,desc:d},s=!0;var c=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:i,isDemo:s,default:u},Symbol.toStringTag,{value:"Module"}));const f=t=>function(a){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...a})},g=f("Demo"),N={},C="wrapper";function o({components:t,...n}){return e(C,{...N,...n,components:t,mdxType:"MDXLayout"},e("h1",null,"ToggleOpenButton"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u5C55\u5F00\u5173\u95ED\u4EA4\u4E92\u6309\u94AE\u3002"),e("h2",null,"demos"),e(g,{...c,mdxType:"Demo"}),e("h2",null,"API"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"classNames"),e("td",{parentName:"tr",align:"left"},"\u7C7B\u540D"),e("td",{parentName:"tr",align:"left"},"string"),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"style"),e("td",{parentName:"tr",align:"left"},"CSS \u6837\u5F0F"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"React.CSSProperties")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"open"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u662F\u5426\u5C55\u5F00\u72B6\u6001"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"onClick"),e("td",{parentName:"tr",align:"left"},"\u70B9\u51FB\u65F6\u7684\u4E8B\u4EF6"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(isOpen: boolean) => void")),e("td",{parentName:"tr",align:"center"},"-")))))}o.isMDXComponent=!0;var D=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}));const b={};b.main=D;export{b as default};
