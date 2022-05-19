var i=Object.defineProperty,v=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var c=(e,o,t)=>o in e?i(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,a=(e,o)=>{for(var t in o||(o={}))m.call(o,t)&&c(e,t,o[t]);if(l)for(var t of l(o))d.call(o,t)&&c(e,t,o[t]);return e},n=(e,o)=>v(e,D(o));var s=(e,o)=>{var t={};for(var r in e)m.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&l)for(var r of l(e))o.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};import{R as f,c as u}from"./index.161a0514.js";import"./index.52e84606.js";import{S as C}from"./index.34d8f86c.js";const S=()=>{const e=o=>{console.log("value",o)};return f.createElement(C,{style:{width:200},dataSource:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}],placeholder:"\u8BF7\u9009\u62E9",onChange:e})},b=`import React from 'react';\r
import { Select } from '@pms/ui';\r
\r
const Demo = () => {\r
  const onChange = (value) => {\r
    console.log('value', value);\r
  };\r
\r
  return (\r
    <Select\r
      style={{ width: 200 }}\r
      dataSource={[\r
        { label: '\u9009\u98791', value: '1' },\r
        { label: '\u9009\u98792', value: '2' },\r
      ]}\r
      placeholder="\u8BF7\u9009\u62E9"\r
      onChange={onChange}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,h=void 0,y=void 0,g={code:b,title:h,desc:y},E=!0;var M=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:g,isDemo:E,default:S},Symbol.toStringTag,{value:"Module"}));const _=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),u("div",a({},t))},F=_("Demo"),X={},w="wrapper";function p(t){var r=t,{components:e}=r,o=s(r,["components"]);return u(w,n(a(a({},X),o),{components:e,mdxType:"MDXLayout"}),u("h1",null,"\u5F55\u5165\u7EC4\u4EF6\u9884\u89C8"),u("h2",null,"Select"),u("p",null,"\u652F\u6301",u("inlineCode",{parentName:"p"},"FormItem"),"\u7684",u("inlineCode",{parentName:"p"},"dataSource"),"\u548C",u("inlineCode",{parentName:"p"},"remoteDataSource"),"\u5C5E\u6027\u7684\u9009\u62E9\u5668\u7EC4\u4EF6\u3002"),u(F,n(a({},M),{mdxType:"Demo"})))}p.isMDXComponent=!0;var x=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));const j={};j.main=x;export{j as default};
