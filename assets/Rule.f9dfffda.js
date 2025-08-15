import{r as d,b as X,R as e,c as s}from"./index.1c33d5c1.js";import{O as j,at as p,f as q,b1 as x,b0 as A,b2 as E,S as I,a8 as H,aa as U,a6 as W,B as J}from"./tree.ce5c4568.js";import{C as K}from"./index.ec50335b.js";import{I as F}from"./index.c84422bf.js";import{P as f}from"./PlusOutlined.99d6d6f5.js";import{D as Q}from"./DeleteOutlined.28fb361c.js";var Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},Z=Y,ee=function(n,t){return d.exports.createElement(j,X({},n,{ref:t,icon:Z}))},ne=d.exports.forwardRef(ee),te=ne;const L=o=>{const{title:n,className:t,...a}=o,r=p("line-wrapper-title");return e.createElement("div",{className:q(r,t),...a},n)},oe=o=>{const{children:n,length:t,gutter:a=0,index:r,...c}=o,l=p("line-wrapper-item");if(t<=1)return e.createElement("div",null,n);const i=t-1===r;return e.createElement("div",{className:`${l}`,style:{marginBottom:i?0:a}},e.createElement("div",{className:`${l}-line`},r>0&&e.createElement("div",{className:`${l}-line-top`}),e.createElement("div",{className:`${l}-line-left`}),!i&&e.createElement("div",{className:`${l}-line-bottom`,style:{height:`calc(50% + ${a}px)`}})),e.createElement("div",{...c},n))},re=o=>{const n=p("line-wrapper"),{children:t,title:a,gutter:r,titleRender:c}=o,l=t.flat(),i=e.useCallback(()=>l.map((m,u,{length:h})=>e.createElement(oe,{index:u,length:h,gutter:r,key:u},m)),[t]);return e.createElement("div",{className:n},l.length>1&&e.createElement("div",{className:n+"-title-wrapper"},c?c():e.createElement(L,{title:a})),i())},{useFormInstance:ae}=E,le={or:"\u6216",and:"\u4E0E"},ce=o=>{const n=ae(),{name:t,disabled:a}=d.exports.useContext(x),{path:r,refresh:c}=o,l=p("rule-title"),i=n.getFieldValue(t),m=[...r,"type"],u=A.exports.get(i,m);return e.createElement(L,{title:le[u],className:l,onClick:()=>{a||(n.setFieldValue([t,...r.concat("type")],u==="and"?"or":"and"),c())}})},{List:ie,useFormInstance:se}=E,O=o=>{const{name:n,path:t=[]}=o,{name:a,condition:r,lineAction:c,groupAction:l,disabled:i}=d.exports.useContext(x),m=p("rule-group"),u=se(),[,h]=d.exports.useState({}),S=()=>h({});return e.createElement(ie,{name:n},(V,y)=>{const _=()=>V.map((v,g)=>{const{key:D,name:G}=v,z=u.getFieldValue(a),b=[...t,"children",g];return!A.exports.get(z,b,{}).type?e.createElement(I,{key:v.key},e.cloneElement(r,{field:v,path:b,disabled:i}),e.createElement(H,{onClick:()=>{y.remove(g)},render:!i,icon:e.createElement(te,null),tooltip:"\u5220\u9664\u884C"})):e.createElement(K,{key:D,className:m+"-card"},e.createElement("div",{className:m+"-operator"},l&&!i?e.cloneElement(l,{operation:y,index:g}):null),e.createElement(O,{field:v,key:D,name:[G,"children"],path:b}))}),w=u.getFieldValue(a),T=[...t,"type"],$=A.exports.get(w,T),B=_();return c&&!i&&B.push(e.cloneElement(c,{operation:y})),e.createElement(re,{title:$,gutter:16,titleRender:()=>e.createElement(ce,{path:t,refresh:S})},B)})},M=o=>{const{name:n,condition:t,lineAction:a,groupAction:r,disabled:c}=o;return e.createElement(x.Provider,{value:{name:n,condition:t,lineAction:a,groupAction:r,disabled:c}},e.createElement(O,{name:[n,0,"children"],path:[0]}))},{Item:C}=E,N=o=>{const{field:n,disabled:t}=o,{key:a,...r}=n;return e.createElement(I,{size:0},e.createElement(C,{...r,name:[r.name,"a"],rules:[{required:!1}],style:{marginBottom:0}},e.createElement(F,{disabled:t,placeholder:"\u8BF7\u8F93\u5165\u6761\u4EF61"})),e.createElement(C,{...r,name:[r.name,"b"],style:{marginBottom:0}},e.createElement(F,{disabled:t,placeholder:"\u8BF7\u8F93\u5165\u6761\u4EF62"})),e.createElement(C,{...r,name:[r.name,"c"],style:{marginBottom:0}},e.createElement(F,{disabled:t,placeholder:"\u8BF7\u8F93\u5165\u6761\u4EF63"})))},k=o=>{const{operation:n,index:t}=o;return e.createElement(U,{actions:[{onClick:()=>{n.add({type:"and",children:[]},t+1)},icon:f,tooltip:"\u4E0B\u65B9\u6DFB\u52A0\u4E0E\u7EC4"},{onClick:()=>{n.remove(t)},icon:Q,tooltip:"\u5220\u9664\u7EC4"}]})},R=o=>{const{operation:n}=o;return e.createElement(W,{actions:[{onClick:()=>{n.add({operation:"",variable:"",value:""})},icon:e.createElement(f,null),children:"\u6DFB\u52A0\u6761\u4EF6"},{onClick:()=>{n.add({type:"or",children:[]})},icon:e.createElement(f,null),type:"primary",children:"\u6DFB\u52A0\u6216\u7EC4"},{onClick:()=>{n.add({type:"and",children:[]})},icon:e.createElement(f,null),type:"primary",children:"\u6DFB\u52A0\u4E0E\u7EC4"}]})},{useForm:ue}=E,me=()=>{const[o]=ue();return e.createElement("div",null,e.createElement(E,{form:o,initialValues:{abc:[{type:"and",children:[{operation:"",variable:"",condition:""},{type:"or",children:[{operation:"",variable:"",condition:""},{operation:"",variable:"",condition:""}]}]}],def:[{type:"and",children:[{b:"=",a:"a",c:"a"},{type:"or",children:[{b:"=",a:"a",c:"a"}]}]}]}},e.createElement(M,{name:"abc",condition:e.createElement(N,null),lineAction:e.createElement(R,null),groupAction:e.createElement(k,null)}),e.createElement(M,{name:"def",disabled:!0,condition:e.createElement(N,null),lineAction:e.createElement(R,null),groupAction:e.createElement(k,null)})),e.createElement(J,{style:{marginTop:20},onClick:()=>{o.validateFields().then(n=>{const t=o.getFieldsValue(!0);console.log("values",t)})}},"\u63D0\u4EA4"))},de=`import React from 'react';
import { Rule, ButtonAction } from '@dreame/ui';
import { Form } from 'antd';
import { Condition, LineAction, GroupAction } from '../Bag';

const { useForm } = Form;

const demo = () => {
  const [form] = useForm();
  return (
    <div>
      <Form
        form={form}
        initialValues={{
          abc: [
            {
              type: 'and',
              children: [
                {
                  operation: '',
                  variable: '',
                  condition: '',
                },
                {
                  type: 'or',
                  children: [
                    {
                      operation: '',
                      variable: '',
                      condition: '',
                    },
                    {
                      operation: '',
                      variable: '',
                      condition: '',
                    },
                  ],
                },
              ],
            },
          ],
          def: [
            {
              type: 'and',
              children: [
                {
                  b: '=',
                  a: 'a',
                  c: 'a',
                },
                {
                  type: 'or',
                  children: [
                    {
                      b: '=',
                      a: 'a',
                      c: 'a',
                    },
                  ],
                },
              ],
            },
          ],
        }}
      >
        <Rule name={'abc'} condition={<Condition />} lineAction={<LineAction />} groupAction={<GroupAction />} />
        <Rule
          name={'def'}
          disabled
          condition={<Condition />}
          lineAction={<LineAction />}
          groupAction={<GroupAction />}
        />
      </Form>
      <ButtonAction
        style={{ marginTop: 20 }}
        onClick={() => {
          form.validateFields().then((res) => {
            const values = form.getFieldsValue(true);
            console.log('values', values);
          });
        }}
      >
        \u63D0\u4EA4
      </ButtonAction>
    </div>
  );
};

export default demo;
`,pe=void 0,Ee=void 0,ve={code:de,title:pe,desc:Ee},fe=!0;var he=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:ve,isDemo:fe,default:me},Symbol.toStringTag,{value:"Module"}));const ye=o=>function(t){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),s("div",{...t})},ge=ye("Demo"),be={},Fe="wrapper";function P({components:o,...n}){return s(Fe,{...be,...n,components:o,mdxType:"MDXLayout"},s("h1",null,"Rule"),s("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),s("ol",null,s("li",{parentName:"ol"},"\u89C4\u5219\u7EC4\u4EF6")),s("h2",null,"demos"),s("p",null,"\u57FA\u7840\u4F7F\u7528"),s(ge,{...he,mdxType:"Demo"}),s("pre",null,s("code",{parentName:"pre",className:"language-ts"},`const condition = {
  type: 'or',
  children: [
    {
      type: 'and',
      children: [
        {
          variable: 'a',
          operator: '=',
          value: '123',
        },
        {
          variable: 'a',
          operator: '=',
          value: '123',
        },
        {
          type: 'or',
          children: [],
        },
      ],
    },
    {
      type: 'or',
      children: [
        {
          variable: 'a',
          operator: '=',
          value: '123',
        },
        {
          variable: 'a',
          operator: '=',
          value: '123',
        },
      ],
    },
  ],
};
`)))}P.isMDXComponent=!0;var Ce=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const Ae={};Ae.main=Ce;export{Ae as default};
