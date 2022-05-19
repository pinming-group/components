var F=Object.defineProperty,D=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var c=(u,t,r)=>t in u?F(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r,n=(u,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(u,r,t[r]);if(a)for(var r of a(t))m.call(t,r)&&c(u,r,t[r]);return u},l=(u,t)=>D(u,B(t));var d=(u,t)=>{var r={};for(var o in u)p.call(u,o)&&t.indexOf(o)<0&&(r[o]=u[o]);if(u!=null&&a)for(var o of a(u))t.indexOf(o)<0&&m.call(u,o)&&(r[o]=u[o]);return r};import{R as i,c as e}from"./index.161a0514.js";import{C as E,L as f,m as s}from"./index.52e84606.js";import{D as g}from"./DropdownButton.7de76577.js";import{z as h}from"./zh_CN.14a88238.js";const N=[{children:"\u65B0\u589E",type:"text",block:!0,onClick:()=>{s.success("\u65B0\u589E")}},{children:"\u7F16\u8F91",block:!0,type:"text",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(u=>{setTimeout(()=>{s.success("\u7F16\u8F91\u6210\u529F"),u(!0)},2e3)}))},{children:"\u5220\u9664",block:!0,danger:!0,type:"text",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:u=>(console.log("Action \u5220\u9664",u),new Promise((t,r)=>{setTimeout(()=>{s.error("\u5220\u9664\u5931\u8D25"),r(!0)},2e3)}))}],b=()=>i.createElement(E,{locale:h},i.createElement(g,{actions:N},i.createElement(f,{type:"primary"},"\u5212\u5165\u5C55\u5F00\u83DC\u5355"))),y=`import React from 'react';\r
import { DropdownButton } from '@pms/ui';\r
import { Button, message, ConfigProvider } from 'antd';\r
import type { DropdownButtonProps } from '@pms/ui';\r
import zhCN from 'antd/lib/locale/zh_CN';\r
\r
const actions: DropdownButtonProps['actions'] = [\r
  {\r
    children: '\u65B0\u589E',\r
    type: 'text',\r
    block: true,\r
    onClick: () => {\r
      message.success('\u65B0\u589E');\r
    },\r
  },\r
  {\r
    children: '\u7F16\u8F91',\r
    block: true,\r
    type: 'text',\r
    onClick: () => {\r
      console.log('Action \u7F16\u8F91');\r
      return new Promise((resolve) => {\r
        setTimeout(() => {\r
          message.success('\u7F16\u8F91\u6210\u529F');\r
          resolve(true);\r
        }, 2000);\r
      });\r
    },\r
  },\r
  {\r
    children: '\u5220\u9664',\r
    block: true,\r
    danger: true,\r
    type: 'text',\r
    confirm: '\u786E\u8BA4\u5220\u9664?',\r
    onClick: (e) => {\r
      console.log('Action \u5220\u9664', e);\r
      return new Promise((resolve, reject) => {\r
        setTimeout(() => {\r
          message.error('\u5220\u9664\u5931\u8D25');\r
          reject(true);\r
        }, 2000);\r
      });\r
    },\r
  },\r
];\r
\r
const Demo = () => {\r
  return (\r
    <ConfigProvider locale={zhCN}>\r
      <DropdownButton actions={actions}>\r
        <Button type="primary">\u5212\u5165\u5C55\u5F00\u83DC\u5355</Button>\r
      </DropdownButton>\r
    </ConfigProvider>\r
  );\r
};\r
\r
export default Demo;\r
`,A=void 0,v=void 0,P={code:y,title:A,desc:v},w=!0;var k=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:P,isDemo:w,default:b},Symbol.toStringTag,{value:"Module"}));const x=u=>function(r){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",n({},r))},M=x("Demo"),_={},T="wrapper";function C(r){var o=r,{components:u}=o,t=d(o,["components"]);return e(T,l(n(n({},_),t),{components:u,mdxType:"MDXLayout"}),e("h1",null,"DropdownButton"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u5212\u5165\u5C55\u793A\u64CD\u4F5C\u6309\u94AE"),e("p",null,"\u7279\u70B9"),e("ol",null,e("li",{parentName:"ol"},"\u89E3\u51B3 Popconfirm \u5F39\u6846\u51FA\u73B0\u65F6\uFF0C\u4E0B\u62C9\u83DC\u5355\u6D88\u5931\u95EE\u9898"),e("li",{parentName:"ol"},"\u6309\u94AE loading \u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u4F1A\u5173\u95ED\u4E0B\u62C9\u83DC\u5355\uFF0Cloading \u7ED3\u675F\u540E\u81EA\u52A8\u6536\u8D77\u4E0B\u62C9\u83DC\u5355")),e("h2",null,"demos"),e(M,l(n({},k),{mdxType:"Demo"})),e("h2",null,"API"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`export interface DropdownButtonProps extends Omit<DropDownProps, 'overlay' | 'visible' | 'onVisibleChange'> {
  actions: ButtonActionProps[];
}
`)),e("p",null,"\u57FA\u4E8E antd \u7684",e("inlineCode",{parentName:"p"},"Dropdown"),"\u5C01\u88C5\uFF0C\u900F\u4F20\u9664",e("inlineCode",{parentName:"p"},"overlay")," ",e("inlineCode",{parentName:"p"},"visible")," ",e("inlineCode",{parentName:"p"},"onVisibleChange")," \u4E4B\u5916\u7684\u5C5E\u6027\uFF0C\u66F4\u591A api \u8BF7\u53C2\u8003",e("a",{parentName:"p",href:"https://ant.design/components/dropdown-cn/#API"},"Dropdown"),"\u3002"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"actions"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u64CD\u4F5C\u6309\u94AE\u6E32\u67D3\u5217\u8868"),e("td",{parentName:"tr",align:"left"},e("a",{parentName:"td",href:"/components/Actions#actionbutton"},"ButtonActionProps"),"[]\uFF0C\u5EFA\u8BAE\u53C2\u8003 demo \u4F7F\u7528"),e("td",{parentName:"tr",align:"center"},"-")))))}C.isMDXComponent=!0;var z=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const j={};j.main=z;export{j as default};
