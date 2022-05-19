var k=Object.defineProperty,h=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var s=(t,r,n)=>r in t?k(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(t,r)=>{for(var n in r||(r={}))p.call(r,n)&&s(t,n,r[n]);if(i)for(var n of i(r))m.call(r,n)&&s(t,n,r[n]);return t},d=(t,r)=>h(t,g(r));var y=(t,r)=>{var n={};for(var o in t)p.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&i)for(var o of i(t))r.indexOf(o)<0&&m.call(t,o)&&(n[o]=t[o]);return n};import{R as u,c as e}from"./index.161a0514.js";import{Z as D,B as f,m as c,I as N,z as B,c as A,E as P}from"./index.52e84606.js";import{D as b}from"./DropdownButton.7de76577.js";import{P as O}from"./PlusOutlined.a6ed2eb3.js";import{D as R}from"./DeleteOutlined.2764adce.js";const v=[{id:"0",title:"0",key:"0",children:[{id:"0-0",title:"0-0",key:"0-0"},{id:"0-1",title:"0-1",key:"0-1"},{id:"0-3",title:"0-2",key:"0-2",children:[{id:"0-2-1",title:"0-2-0",key:"0-2-0"}]}]},{id:"1",title:"1",key:"1",children:[{id:"1-0",title:"1-0",key:"1-0"},{id:"1-1",title:"1-1",key:"1-1"},{id:"1-2",title:"1-2",key:"1-2",children:[{id:"1-2-1",title:"1-2-0",key:"1-2-0"}]}]}],x=()=>u.createElement(D,{searchProps:{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0"},onSelect:(t,r)=>{console.log(t,r)},treeData:v,operatorRender:()=>u.createElement("div",null,"\u64CD\u4F5C\u6309\u94AE")}),T=`import React from 'react';\r
import { Tree } from '@pms/ui';\r
\r
const treeData = [\r
  {\r
    id: '0',\r
    title: '0',\r
    key: '0',\r
    children: [\r
      { id: '0-0', title: '0-0', key: '0-0' },\r
      { id: '0-1', title: '0-1', key: '0-1' },\r
      {\r
        id: '0-3',\r
        title: '0-2',\r
        key: '0-2',\r
        children: [{ id: '0-2-1', title: '0-2-0', key: '0-2-0' }],\r
      },\r
    ],\r
  },\r
  {\r
    id: '1',\r
    title: '1',\r
    key: '1',\r
    children: [\r
      { id: '1-0', title: '1-0', key: '1-0' },\r
      { id: '1-1', title: '1-1', key: '1-1' },\r
      {\r
        id: '1-2',\r
        title: '1-2',\r
        key: '1-2',\r
        children: [{ id: '1-2-1', title: '1-2-0', key: '1-2-0' }],\r
      },\r
    ],\r
  },\r
];\r
\r
const Demo = () => {\r
  return (\r
    <Tree\r
      searchProps={{\r
        placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0',\r
      }}\r
      onSelect={(selectedKeys, e) => {\r
        console.log(selectedKeys, e);\r
      }}\r
      treeData={treeData}\r
      operatorRender={() => {\r
        return <div>\u64CD\u4F5C\u6309\u94AE</div>;\r
      }}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,S=void 0,_=void 0,M={code:T,title:S,desc:_},w=!0;var z=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:M,isDemo:w,default:x},Symbol.toStringTag,{value:"Module"}));const $=[{id:"0",title:"0",key:"0",children:[{id:"0-0",title:"0-0",key:"0-0"},{id:"0-1",title:"0-1",key:"0-1"},{id:"0-3",title:"0-2",key:"0-2",children:[{id:"0-2-1",title:"0-2-0",key:"0-2-0"}]}]},{id:"1",title:"1",key:"1",children:[{id:"1-0",title:"1-0",key:"1-0"},{id:"1-1",title:"1-1",key:"1-1"},{id:"1-2",title:"1-2",key:"1-2",children:[{id:"1-2-1",title:"1-2-0",key:"1-2-0"}]}]}],I=()=>{const t=()=>u.createElement(f,{tooltip:"\u65B0\u5EFA\u8BC4\u4EF7\u8868",onClick:()=>{c.success("\u65B0\u5EFA\u6210\u529F")},icon:u.createElement(O,null)}),r=n=>{const o=[{type:"text",size:"small",block:!0,onClick:a=>{a.stopPropagation(),c.success("\u65B0\u5EFA\u6210\u529F")},icon:u.createElement(A,null),children:"\u65B0\u5EFA\u5B50\u96C6"},{children:"\u7F16\u8F91",type:"text",size:"small",block:!0,onClick:a=>{a.stopPropagation(),c.success("\u7F16\u8F91\u6210\u529F")},icon:u.createElement(P,null)},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664\uFF1F",type:"text",size:"small",block:!0,onClick:a=>(a.stopPropagation(),new Promise(E=>{setTimeout(()=>{E(!0)},2e3)})),icon:u.createElement(R,null)}];return u.createElement(b,{actions:o},u.createElement(N,{icon:B,onClick:()=>{console.log("operatorRender",n)}}))};return u.createElement(D,{searchProps:{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0"},onSelect:(n,o)=>{console.log(n,o)},treeData:$,operatorRender:r,extraRender:t})},j=`import React from 'react';\r
import { Tree, ButtonAction, DropdownButton, IconAction } from '@pms/ui';\r
import { message } from 'antd';\r
import { PlusOutlined, CopyOutlined, EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';\r
import type { DataNode, ButtonActionProps, TreeProps } from '@pms/ui';\r
\r
const treeData = [\r
  {\r
    id: '0',\r
    title: '0',\r
    key: '0',\r
    children: [\r
      { id: '0-0', title: '0-0', key: '0-0' },\r
      { id: '0-1', title: '0-1', key: '0-1' },\r
      {\r
        id: '0-3',\r
        title: '0-2',\r
        key: '0-2',\r
        children: [{ id: '0-2-1', title: '0-2-0', key: '0-2-0' }],\r
      },\r
    ],\r
  },\r
  {\r
    id: '1',\r
    title: '1',\r
    key: '1',\r
    children: [\r
      { id: '1-0', title: '1-0', key: '1-0' },\r
      { id: '1-1', title: '1-1', key: '1-1' },\r
      {\r
        id: '1-2',\r
        title: '1-2',\r
        key: '1-2',\r
        children: [{ id: '1-2-1', title: '1-2-0', key: '1-2-0' }],\r
      },\r
    ],\r
  },\r
];\r
\r
const Demo = () => {\r
  const extraRender = () => {\r
    return (\r
      <ButtonAction\r
        tooltip="\u65B0\u5EFA\u8BC4\u4EF7\u8868"\r
        onClick={() => {\r
          message.success('\u65B0\u5EFA\u6210\u529F');\r
        }}\r
        icon={<PlusOutlined />}\r
      />\r
    );\r
  };\r
\r
  const operatorRender: TreeProps['operatorRender'] = (dataNode) => {\r
    const actions: ButtonActionProps[] = [\r
      {\r
        type: 'text',\r
        size: 'small',\r
        block: true,\r
        onClick: (e) => {\r
          e.stopPropagation();\r
          message.success('\u65B0\u5EFA\u6210\u529F');\r
        },\r
        icon: <CopyOutlined />,\r
        children: '\u65B0\u5EFA\u5B50\u96C6',\r
      },\r
      {\r
        children: '\u7F16\u8F91',\r
        type: 'text',\r
        size: 'small',\r
        block: true,\r
        onClick: (e) => {\r
          e.stopPropagation();\r
          message.success('\u7F16\u8F91\u6210\u529F');\r
        },\r
        icon: <EditOutlined />,\r
      },\r
      {\r
        children: '\u5220\u9664',\r
        confirm: '\u786E\u8BA4\u5220\u9664\uFF1F',\r
        type: 'text',\r
        size: 'small',\r
        block: true,\r
        onClick: (e) => {\r
          e.stopPropagation();\r
\r
          return new Promise((resolve) => {\r
            setTimeout(() => {\r
              resolve(true);\r
            }, 2000);\r
          });\r
        },\r
        icon: <DeleteOutlined />,\r
      },\r
    ];\r
\r
    return (\r
      <DropdownButton actions={actions}>\r
        <IconAction\r
          icon={EllipsisOutlined}\r
          onClick={() => {\r
            console.log('operatorRender', dataNode);\r
          }}\r
        />\r
      </DropdownButton>\r
    );\r
  };\r
\r
  return (\r
    <Tree\r
      searchProps={{\r
        placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0',\r
      }}\r
      onSelect={(selectedKeys, e) => {\r
        console.log(selectedKeys, e);\r
      }}\r
      treeData={treeData}\r
      operatorRender={operatorRender}\r
      extraRender={extraRender}\r
    />\r
  );\r
};\r
\r
export default Demo;\r
`,X=void 0,K=void 0,L={code:j,title:X,desc:K},H=!0;var Z=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:L,isDemo:H,default:I},Symbol.toStringTag,{value:"Module"}));const q=t=>function(n){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",l({},n))},F=q("Demo"),G={},J="wrapper";function C(n){var o=n,{components:t}=o,r=y(o,["components"]);return e(J,d(l(l({},G),r),{components:t,mdxType:"MDXLayout"}),e("h1",null,"Tree"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u53EF\u641C\u7D22\u6811\u5F62\u7EC4\u4EF6"),e("h2",null,"demos"),e("ul",null,e("li",{parentName:"ul"},"\u4E00\u822C\u4F7F\u7528")),e(F,d(l({},z),{mdxType:"Demo"})),e("ul",null,e("li",{parentName:"ul"},"\u65B0\u589E\u6309\u94AE \u548C \u5212\u5165\u5C55\u5F00\u7684\u6E32\u67D3\u6309\u94AE")),e(F,d(l({},Z),{mdxType:"Demo"})),e("h2",null,"API"),e("p",null,"\u57FA\u4E8E antd \u7684",e("inlineCode",{parentName:"p"},"Tree"),"\u5C01\u88C5\uFF0C\u66F4\u591A api \u8BF7\u53C2\u8003",e("a",{parentName:"p",href:"https://ant.design/components/tree-cn/#API"},"Tree"),"\u3002"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"searchProps"),e("td",{parentName:"tr",align:"left"},"\u641C\u7D22\u6846\u5C5E\u6027"),e("td",{parentName:"tr",align:"left"},e("a",{parentName:"td",href:"https://ant.design/components/input-cn/#Input.Search"},"SearchProps")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"{}"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"showSearch"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u663E\u793A\u641C\u7D22\u6846"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"true"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"showOperatorOnHover"),e("td",{parentName:"tr",align:"left"},"\u9F20\u6807\u5212\u5165\u65F6\u624D\u663E\u793A\u64CD\u4F5C\u6309\u94AE"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"true"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"operatorRender"),e("td",{parentName:"tr",align:"left"},"\u64CD\u4F5C\u6309\u94AE\u6E32\u67D3"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(data: DataNode) => React.ReactElement")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"extraRender"),e("td",{parentName:"tr",align:"left"},"\u641C\u7D22\u6846\u53F3\u4FA7\u6E32\u67D3\u989D\u5916\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u6DFB\u52A0\u6309\u94AE"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => React.ReactElement")),e("td",{parentName:"tr",align:"center"},"-")))))}C.isMDXComponent=!0;var Q=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const U={};U.main=Q;export{U as default};
