import{r as c,R as t,c as e}from"./index.1c33d5c1.js";import{at as H,f as k,au as q,av as G,aw as J,ax as Q,B as U,ao as W,a8 as Y,H as Z,ab as V,a9 as ee}from"./tree.ce5c4568.js";import{I as te}from"./index.c84422bf.js";import{m as C}from"./index.b9dd85a1.js";import{P as ne}from"./PlusOutlined.99d6d6f5.js";import{D as re}from"./DeleteOutlined.28fb361c.js";const{Search:oe}=te,D=(r,o)=>{let l;for(let a=0;a<o.length;a++){const n=o[a];n.children&&(n.children.some(p=>p.key===r)?l=n.key:D(r,n.children)&&(l=D(r,n.children)))}return l},N=[],R=r=>{for(let o=0;o<r.length;o++){const l=r[o],{key:a,title:n}=l;N.push({key:a,title:n}),l.children&&R(l.children)}},O=r=>{const{loading:o=!1,searchProps:l,showSearch:a=!0,treeData:n,operatorRender:p,showOperatorOnHover:F=!0,extraRender:x,defaultExpandAll:f,treeNodeTitleStyle:v,descriptionInLine:T,onTreeNodeHover:h,...w}=r,[M,P]=c.exports.useState(void 0),[_,b]=c.exports.useState(!1),[K,z]=c.exports.useState("1"),E=c.exports.useRef(""),i=H("tree");c.exports.useEffect(()=>(R(n),()=>{N.length=0}),[n]);const I=c.exports.useCallback(u=>{const{value:d}=u.target;E.current=d;const m=N.map(s=>s.title.indexOf(d)>-1?D(s.key,n):null).filter((s,y,g)=>s&&g.indexOf(s)===y);P(m),b(!0),f&&z(d!=null&&d.length?"2":"1")},[n]),$=c.exports.useCallback(u=>{b(!1),P(u)},[]),j=c.exports.useCallback((u,d)=>{const{title:m,description:s}=u,y=m.indexOf(d),g=m.substring(0,y),X=m.slice(y+d.length),A=y>-1?t.createElement("span",null,g,t.createElement("span",{className:i+"-treenode-highlight-text"},d),X):t.createElement("span",null,m);return p?t.createElement("div",{className:k(i+"-treenode"),onMouseEnter:()=>{h==null||h(u)}},t.createElement("div",{className:k(i+"-treenode-title",{[i+"-treenode-title-description-inline"]:T}),style:v},t.createElement("div",null,A),s?t.createElement(q,{type:"secondary"},s):null),t.createElement("div",{className:k({[i+"-treenode-operator"]:!0,[i+"-treenode-operator-show"]:!F,[i+"-treenode-operator-showonhover"]:F}),onClick:L=>{L.stopPropagation()}},p(u))):A},[p]);return t.createElement(G,{spinning:o},a&&t.createElement("div",{className:i+"-search"},t.createElement(oe,{style:{marginBottom:8},onChange:I,allowClear:!0,...l}),x&&t.createElement("div",{className:i+"-extra"},x())),n!=null&&n.length?t.createElement(J,{key:K,blockNode:!0,...w,treeData:n,onExpand:$,defaultExpandAll:f,...f&&!E.current?{}:{expandedKeys:M},autoExpandParent:_,titleRender:u=>j(u,E.current)}):t.createElement(Q,null))},le=[{id:"0",title:"0",key:"0",children:[{id:"0-0",title:"0-0",key:"0-0"},{id:"0-1",title:"0-1",key:"0-1"},{id:"0-3",title:"0-2",key:"0-2",children:[{id:"0-2-1",title:"0-2-0",key:"0-2-0"}]}]},{id:"1",title:"1",key:"1",children:[{id:"1-0",title:"1-0",key:"1-0"},{id:"1-1",title:"1-1",key:"1-1"},{id:"1-2",title:"1-2",key:"1-2",children:[{id:"1-2-1",title:"1-2-0",key:"1-2-0"}]}]}],ae=()=>t.createElement(O,{searchProps:{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0"},onSelect:(r,o)=>{console.log(r,o)},defaultExpandAll:!0,treeData:le,operatorRender:()=>t.createElement("div",null,"\u64CD\u4F5C\u6309\u94AE")}),ie=`import React from 'react';
import { Tree } from '@dreame/ui';

const treeData = [
  {
    id: '0',
    title: '0',
    key: '0',
    children: [
      { id: '0-0', title: '0-0', key: '0-0' },
      { id: '0-1', title: '0-1', key: '0-1' },
      {
        id: '0-3',
        title: '0-2',
        key: '0-2',
        children: [{ id: '0-2-1', title: '0-2-0', key: '0-2-0' }],
      },
    ],
  },
  {
    id: '1',
    title: '1',
    key: '1',
    children: [
      { id: '1-0', title: '1-0', key: '1-0' },
      { id: '1-1', title: '1-1', key: '1-1' },
      {
        id: '1-2',
        title: '1-2',
        key: '1-2',
        children: [{ id: '1-2-1', title: '1-2-0', key: '1-2-0' }],
      },
    ],
  },
];

const Demo = () => {
  return (
    <Tree
      searchProps={{
        placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0',
      }}
      onSelect={(selectedKeys, e) => {
        console.log(selectedKeys, e);
      }}
      defaultExpandAll={true}
      treeData={treeData}
      operatorRender={() => {
        return <div>\u64CD\u4F5C\u6309\u94AE</div>;
      }}
    />
  );
};

export default Demo;
`,ue=void 0,de=void 0,se={code:ie,title:ue,desc:de},ce=!0;var pe=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:se,isDemo:ce,default:ae},Symbol.toStringTag,{value:"Module"}));const me=[{id:"0",title:"0",key:"0",children:[{id:"0-0",title:"0-0",key:"0-0"},{id:"0-1",title:"0-1",key:"0-1"},{id:"0-3",title:"0-2",key:"0-2",children:[{id:"0-2-1",title:"0-2-0",key:"0-2-0"}]}]},{id:"1",title:"1",key:"1",children:[{id:"1-0",title:"1-0",key:"1-0"},{id:"1-1",title:"1-1",key:"1-1"},{id:"1-2",title:"1-2",key:"1-2",children:[{id:"1-2-1",title:"1-2-0",key:"1-2-0"}]}]}],ye=()=>{const r=()=>t.createElement(U,{tooltip:"\u65B0\u5EFA\u8BC4\u4EF7\u8868",onClick:()=>{C.success("\u65B0\u5EFA\u6210\u529F")},icon:t.createElement(ne,null)}),o=l=>{const a=[{type:"text",size:"small",block:!0,onClick:n=>{n.stopPropagation(),C.success("\u65B0\u5EFA\u6210\u529F")},icon:t.createElement(V,null),children:"\u65B0\u5EFA\u5B50\u96C6"},{children:"\u7F16\u8F91",type:"text",size:"small",block:!0,onClick:n=>{n.stopPropagation(),C.success("\u7F16\u8F91\u6210\u529F")},icon:t.createElement(ee,null)},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664\uFF1F",type:"text",size:"small",block:!0,onClick:n=>(n.stopPropagation(),new Promise(p=>{setTimeout(()=>{p(!0)},2e3)})),icon:t.createElement(re,null)}];return t.createElement(W,{actions:a},t.createElement(Y,{icon:Z,onClick:()=>{console.log("operatorRender",l)}}))};return t.createElement(O,{searchProps:{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0"},onSelect:(l,a)=>{console.log(l,a)},treeData:me,operatorRender:o,extraRender:r})},fe=`import React from 'react';
import { Tree, ButtonAction, DropdownButton, IconAction } from '@dreame/ui';
import { message } from 'antd';
import { PlusOutlined, CopyOutlined, EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import type { DataNode, ButtonActionProps, TreeProps } from '@dreame/ui';

const treeData = [
  {
    id: '0',
    title: '0',
    key: '0',
    children: [
      { id: '0-0', title: '0-0', key: '0-0' },
      { id: '0-1', title: '0-1', key: '0-1' },
      {
        id: '0-3',
        title: '0-2',
        key: '0-2',
        children: [{ id: '0-2-1', title: '0-2-0', key: '0-2-0' }],
      },
    ],
  },
  {
    id: '1',
    title: '1',
    key: '1',
    children: [
      { id: '1-0', title: '1-0', key: '1-0' },
      { id: '1-1', title: '1-1', key: '1-1' },
      {
        id: '1-2',
        title: '1-2',
        key: '1-2',
        children: [{ id: '1-2-1', title: '1-2-0', key: '1-2-0' }],
      },
    ],
  },
];

const Demo = () => {
  const extraRender = () => {
    return (
      <ButtonAction
        tooltip="\u65B0\u5EFA\u8BC4\u4EF7\u8868"
        onClick={() => {
          message.success('\u65B0\u5EFA\u6210\u529F');
        }}
        icon={<PlusOutlined />}
      />
    );
  };

  const operatorRender: TreeProps['operatorRender'] = (dataNode) => {
    const actions: ButtonActionProps[] = [
      {
        type: 'text',
        size: 'small',
        block: true,
        onClick: (e) => {
          e.stopPropagation();
          message.success('\u65B0\u5EFA\u6210\u529F');
        },
        icon: <CopyOutlined />,
        children: '\u65B0\u5EFA\u5B50\u96C6',
      },
      {
        children: '\u7F16\u8F91',
        type: 'text',
        size: 'small',
        block: true,
        onClick: (e) => {
          e.stopPropagation();
          message.success('\u7F16\u8F91\u6210\u529F');
        },
        icon: <EditOutlined />,
      },
      {
        children: '\u5220\u9664',
        confirm: '\u786E\u8BA4\u5220\u9664\uFF1F',
        type: 'text',
        size: 'small',
        block: true,
        onClick: (e) => {
          e.stopPropagation();

          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(true);
            }, 2000);
          });
        },
        icon: <DeleteOutlined />,
      },
    ];

    return (
      <DropdownButton actions={actions}>
        <IconAction
          icon={EllipsisOutlined}
          onClick={() => {
            console.log('operatorRender', dataNode);
          }}
        />
      </DropdownButton>
    );
  };

  return (
    <Tree
      searchProps={{
        placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u540D\u79F0',
      }}
      onSelect={(selectedKeys, e) => {
        console.log(selectedKeys, e);
      }}
      treeData={treeData}
      operatorRender={operatorRender}
      extraRender={extraRender}
    />
  );
};

export default Demo;
`,he=void 0,Ee=void 0,ge={code:fe,title:he,desc:Ee},ke=!0;var Ce=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:ge,isDemo:ke,default:ye},Symbol.toStringTag,{value:"Module"}));const De=r=>function(l){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...l})},B=De("Demo"),Ne={},Fe="wrapper";function S({components:r,...o}){return e(Fe,{...Ne,...o,components:r,mdxType:"MDXLayout"},e("h1",null,"Tree"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u53EF\u641C\u7D22\u6811\u5F62\u7EC4\u4EF6"),e("h2",null,"demos"),e("ul",null,e("li",{parentName:"ul"},"\u4E00\u822C\u4F7F\u7528")),e(B,{...pe,mdxType:"Demo"}),e("ul",null,e("li",{parentName:"ul"},"\u65B0\u589E\u6309\u94AE \u548C \u5212\u5165\u5C55\u5F00\u7684\u6E32\u67D3\u6309\u94AE")),e(B,{...Ce,mdxType:"Demo"}),e("h2",null,"API"),e("p",null,"\u57FA\u4E8E antd \u7684",e("inlineCode",{parentName:"p"},"Tree"),"\u5C01\u88C5\uFF0C\u66F4\u591A api \u8BF7\u53C2\u8003",e("a",{parentName:"p",href:"https://ant.design/components/tree-cn/#API"},"Tree"),"\u3002"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"searchProps"),e("td",{parentName:"tr",align:"left"},"\u641C\u7D22\u6846\u5C5E\u6027"),e("td",{parentName:"tr",align:"left"},e("a",{parentName:"td",href:"https://ant.design/components/input-cn/#Input.Search"},"SearchProps")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"{}"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"showSearch"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u663E\u793A\u641C\u7D22\u6846"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"true"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"showOperatorOnHover"),e("td",{parentName:"tr",align:"left"},"\u9F20\u6807\u5212\u5165\u65F6\u624D\u663E\u793A\u64CD\u4F5C\u6309\u94AE"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"boolean")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"true"))),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"operatorRender"),e("td",{parentName:"tr",align:"left"},"\u64CD\u4F5C\u6309\u94AE\u6E32\u67D3"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(data: DataNode) => React.ReactElement")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"extraRender"),e("td",{parentName:"tr",align:"left"},"\u641C\u7D22\u6846\u53F3\u4FA7\u6E32\u67D3\u989D\u5916\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u6DFB\u52A0\u6309\u94AE"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => React.ReactElement")),e("td",{parentName:"tr",align:"center"},"-")))))}S.isMDXComponent=!0;var xe=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const Pe={};Pe.main=xe;export{Pe as default};
