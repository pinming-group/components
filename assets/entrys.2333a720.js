import{R as a,c as e}from"./index.1c33d5c1.js";import"./tree.ce5c4568.js";import{S as l}from"./index.bb629307.js";const r=()=>{const o=n=>{console.log("value",n)};return a.createElement(l,{style:{width:200},dataSource:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}],placeholder:"\u8BF7\u9009\u62E9",onChange:o})},c=`import React from 'react';
import { Select } from '@dreame/ui';

const Demo = () => {
  const onChange = (value) => {
    console.log('value', value);
  };

  return (
    <Select
      style={{ width: 200 }}
      dataSource={[
        { label: '\u9009\u98791', value: '1' },
        { label: '\u9009\u98792', value: '2' },
      ]}
      placeholder="\u8BF7\u9009\u62E9"
      onChange={onChange}
    />
  );
};

export default Demo;
`,m=void 0,d=void 0,s={code:c,title:m,desc:d},i=!0;var p=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:s,isDemo:i,default:r},Symbol.toStringTag,{value:"Module"}));const f=o=>function(u){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...u})},D=f("Demo"),v={},C="wrapper";function t({components:o,...n}){return e(C,{...v,...n,components:o,mdxType:"MDXLayout"},e("h1",null,"\u5F55\u5165\u7EC4\u4EF6\u9884\u89C8"),e("h2",null,"Select"),e("p",null,"\u652F\u6301",e("inlineCode",{parentName:"p"},"FormItem"),"\u7684",e("inlineCode",{parentName:"p"},"dataSource"),"\u548C",e("inlineCode",{parentName:"p"},"remoteDataSource"),"\u5C5E\u6027\u7684\u9009\u62E9\u5668\u7EC4\u4EF6\u3002"),e(D,{...p,mdxType:"Demo"}))}t.isMDXComponent=!0;var S=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"}));const b={};b.main=S;export{b as default};
