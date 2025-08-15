import{R as n,c as e}from"./index.b451a6b4.js";import{a as s,B as d,C,b as N,R as a,I as i,E as o,c as A,d as f,T as y}from"./tree.feb2c467.js";import{m as u}from"./index.18e9e184.js";import{d as g}from"./zh_CN.266838fe.js";import{D as p}from"./DeleteOutlined.d44088ab.js";const k=()=>n.createElement(s,null,n.createElement(d,{children:"\u65B0\u589E",type:"primary",onClick:()=>{console.log("Action 1")}}),n.createElement(d,{disabled:!0,children:"\u65B0\u589E",tooltip:"\u8BBE\u7F6Edisabled\u88AB\u7981\u7528\u4E86~",onClick:()=>{console.log("Action 1")}}),n.createElement(d,{children:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(t=>{setTimeout(()=>{u.success("\u7F16\u8F91\u6210\u529F"),t(!0)},2e3)}))}),n.createElement(d,{children:"\u5220\u9664",danger:!0,confirm:"\u786E\u8BA4\u5220\u9664?",onClick:t=>(console.log("Action \u5220\u9664",t),new Promise((l,r)=>{setTimeout(()=>{u.error("\u5220\u9664\u5931\u8D25"),r(!0)},2e3)}))})),B=`

import React from 'react';
import { message, Space } from 'antd';
import { ButtonAction } from 'luckybird';

const ButtonActionDemo = () => {
  return (
    <Space>
      <ButtonAction
        {...{
          children: '\u65B0\u589E',
          type: 'primary',
          onClick: () => {
            console.log('Action 1');
          },
        }}
      />
      <ButtonAction
        {...{
          disabled: true,
          children: '\u65B0\u589E',
          tooltip: '\u8BBE\u7F6Edisabled\u88AB\u7981\u7528\u4E86~',
          onClick: () => {
            console.log('Action 1');
          },
        }}
      />
      <ButtonAction
        {...{
          children: '\u7F16\u8F91',
          onClick: () => {
            console.log('Action \u7F16\u8F91');
            return new Promise((resolve) => {
              setTimeout(() => {
                message.success('\u7F16\u8F91\u6210\u529F');
                resolve(true);
              }, 2000);
            });
          },
        }}
      />
      <ButtonAction
        {...{
          children: '\u5220\u9664',
          danger: true,
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
        }}
      />
    </Space>
  );
};

export default ButtonActionDemo;
`,b="ButtonAction",h="\u6309\u94AE",D={code:B,title:b,desc:h},P=!0;var w=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:D,isDemo:P,default:k},Symbol.toStringTag,{value:"Module"}));const v=()=>{const t=[{children:"\u65B0\u589E",type:"primary",onClick:()=>{console.log("Action 1")}},{disabled:!0,children:"\u65B0\u589E",tooltip:"\u8BBE\u7F6Edisabled\u88AB\u7981\u7528\u4E86~",onClick:()=>{console.log("Action 1")}},{children:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(l=>{setTimeout(()=>{u.success("\u7F16\u8F91\u6210\u529F"),l(!0)},2e3)}))},{children:"\u5220\u9664",danger:!0,confirm:"\u786E\u8BA4\u5220\u9664?",onClick:l=>(console.log("Action \u5220\u9664",l),new Promise((r,c)=>{setTimeout(()=>{u.error("\u5220\u9664\u5931\u8D25"),c(!0)},2e3)}))}];return n.createElement(C,{locale:g},n.createElement(N,{actions:t}))},T=`

import React from 'react';
import { ConfigProvider, message } from 'antd';
import { ButtonActions } from 'luckybird';
import type { ButtonActionsProps } from 'luckybird';
import zhCH from 'antd/lib/locale/zh_CN';

const ButtonAction = () => {
  const buttonActions: ButtonActionsProps['actions'] = [
    {
      children: '\u65B0\u589E',
      type: 'primary',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      disabled: true,
      children: '\u65B0\u589E',
      tooltip: '\u8BBE\u7F6Edisabled\u88AB\u7981\u7528\u4E86~',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      children: '\u7F16\u8F91',
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
      children: '\u5220\u9664',
      danger: true,
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

  return (
    <ConfigProvider locale={zhCH}>
      <ButtonActions actions={buttonActions} />
    </ConfigProvider>
  );
};

export default ButtonAction;
`,O="ButtonActions",x="\u6309\u94AE",I={code:T,title:O,desc:x},R=!0;var _=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:I,isDemo:R,default:v},Symbol.toStringTag,{value:"Module"}));const S=()=>{const t=l=>(console.log("click",l),new Promise(r=>{setTimeout(()=>{r(!0)},1500)}));return n.createElement(C,{locale:g},n.createElement(a,null,n.createElement(s,null,n.createElement(i,{tooltip:"\u7F16\u8F91",onClick:t,icon:o}),n.createElement(i,{tooltip:"\u7F16\u8F91",onClick:t,icon:o,type:"error"}),n.createElement(i,{tooltip:"\u7F16\u8F91",onClick:t,icon:o,type:"primary"}),n.createElement(i,{tooltip:"\u7F16\u8F91",onClick:t,icon:o,type:"success"}),n.createElement(i,{tooltip:"\u7F16\u8F91",onClick:t,icon:o,type:"warning"}))),n.createElement(a,null,n.createElement(s,null,n.createElement(i,{onClick:t,icon:n.createElement(o,{className:"extracls"})}),n.createElement(i,{onClick:t,icon:n.createElement(o,null),type:"error"}),n.createElement(i,{onClick:t,icon:n.createElement(o,null),type:"primary"}),n.createElement(i,{onClick:t,icon:n.createElement(o,null),type:"success"}),n.createElement(i,{onClick:t,icon:n.createElement(o,null),type:"warning"}))),n.createElement(a,null,n.createElement(s,null,n.createElement(i,{onClick:t,loading:!0,icon:o}),n.createElement(i,{onClick:t,loading:!0,icon:o,type:"error"}),n.createElement(i,{onClick:t,loading:!0,icon:o,type:"primary"}),n.createElement(i,{onClick:t,loading:!0,icon:o,type:"success"}),n.createElement(i,{onClick:t,loading:!0,icon:o,type:"warning"}))),n.createElement(a,null,n.createElement(s,null,n.createElement(i,{onClick:t,disabled:!0,icon:o}),n.createElement(i,{onClick:t,disabled:!0,icon:o,type:"error"}),n.createElement(i,{onClick:t,disabled:!0,icon:o,type:"primary"}),n.createElement(i,{onClick:t,disabled:!0,icon:o,type:"success"}),n.createElement(i,{onClick:t,disabled:!0,icon:o,type:"warning"}))),n.createElement(a,null,n.createElement(s,null,n.createElement(i,{onClick:t,text:"\u7F16\u8F91",icon:o}),n.createElement(i,{onClick:t,text:"\u7F16\u8F91",icon:o,type:"error"}),n.createElement(i,{onClick:t,text:"\u7F16\u8F91",icon:o,type:"primary"}),n.createElement(i,{onClick:t,text:"\u7F16\u8F91",icon:o,type:"success"}),n.createElement(i,{onClick:t,text:"\u7F16\u8F91",icon:o,type:"warning"}))))},$=`

import React from 'react';
import { ConfigProvider, Space, Row } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { IconAction } from 'luckybird';
import zhCH from 'antd/lib/locale/zh_CN';

const IconActionDemo = () => {
  const onClick = (e) => {
    console.log('click', e);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  };

  return (
    <ConfigProvider locale={zhCH}>
      <Row>
        <Space>
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} />
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} type="error" />
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} type="primary" />
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} type="success" />
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} type="warning" />
        </Space>
      </Row>
      <Row>
        <Space>
          <IconAction onClick={onClick} icon={<EditOutlined className="extracls" />} />
          <IconAction onClick={onClick} icon={<EditOutlined />} type="error" />
          <IconAction onClick={onClick} icon={<EditOutlined />} type="primary" />
          <IconAction onClick={onClick} icon={<EditOutlined />} type="success" />
          <IconAction onClick={onClick} icon={<EditOutlined />} type="warning" />
        </Space>
      </Row>
      <Row>
        <Space>
          <IconAction onClick={onClick} loading icon={EditOutlined} />
          <IconAction onClick={onClick} loading icon={EditOutlined} type="error" />
          <IconAction onClick={onClick} loading icon={EditOutlined} type="primary" />
          <IconAction onClick={onClick} loading icon={EditOutlined} type="success" />
          <IconAction onClick={onClick} loading icon={EditOutlined} type="warning" />
        </Space>
      </Row>

      <Row>
        <Space>
          <IconAction onClick={onClick} disabled icon={EditOutlined} />
          <IconAction onClick={onClick} disabled icon={EditOutlined} type="error" />
          <IconAction onClick={onClick} disabled icon={EditOutlined} type="primary" />
          <IconAction onClick={onClick} disabled icon={EditOutlined} type="success" />
          <IconAction onClick={onClick} disabled icon={EditOutlined} type="warning" />
        </Space>
      </Row>

      <Row>
        <Space>
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} />
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} type="error" />
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} type="primary" />
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} type="success" />
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} type="warning" />
        </Space>
      </Row>
    </ConfigProvider>
  );
};

export default IconActionDemo;
`,j="IconAction",M="\u6309\u94AE",z={code:$,title:j,desc:M},H=!0;var X=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:z,isDemo:H,default:S},Symbol.toStringTag,{value:"Module"}));const q=()=>{const t=[{icon:o,tooltip:"\u7F16\u8F91",onClick:()=>{console.log("Action 1")}},{icon:f,tooltip:"\u590D\u5236~",onClick:()=>{console.log("Action 1")}},{icon:o,tooltip:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(r=>{setTimeout(()=>{u.success("\u7F16\u8F91\u6210\u529F"),r(!0)},2e3)}))},{icon:p,tooltip:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:r=>(console.log("Action \u5220\u9664",r),new Promise(c=>{setTimeout(()=>{u.success("\u5220\u9664\u6210\u529F"),c(!0)},2e3)}))},{icon:p,confirm:"\u786E\u8BA4\u5220\u9664?",type:"error",onClick:r=>(console.log("Action \u5220\u9664",r),new Promise((c,E)=>{setTimeout(()=>{u.error("\u5220\u9664\u5931\u8D25"),E(!0)},2e3)}))}],l=[{icon:o,text:"\u7F16\u8F91",onClick:()=>{console.log("Action 1")}},{icon:f,text:"\u590D\u5236~",onClick:()=>{console.log("Action 1")}},{icon:o,text:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(r=>{setTimeout(()=>{u.success("\u7F16\u8F91\u6210\u529F"),r(!0)},2e3)}))},{icon:p,text:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:r=>(console.log("Action \u5220\u9664",r),new Promise(c=>{setTimeout(()=>{u.success("\u5220\u9664\u6210\u529F"),c(!0)},2e3)}))},{icon:p,confirm:"\u786E\u8BA4\u5220\u9664?",type:"error",text:"\u5220\u9664",onClick:r=>(console.log("Action \u5220\u9664",r),new Promise((c,E)=>{setTimeout(()=>{u.error("\u5220\u9664\u5931\u8D25"),E(!0)},2e3)}))}];return n.createElement(C,{locale:g},n.createElement(a,null,n.createElement(A,{actions:t})),n.createElement(a,null,n.createElement(A,{actions:l})))},L=`

import React from 'react';
import { ConfigProvider, message, Row } from 'antd';
import { CopyOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { IconActions } from 'luckybird';
import type { IconActionsProps } from 'luckybird';
import zhCH from 'antd/lib/locale/zh_CN';

const IconActionDemo = () => {
  const iconActions: IconActionsProps['actions'] = [
    {
      icon: EditOutlined,
      tooltip: '\u7F16\u8F91',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: CopyOutlined,
      tooltip: '\u590D\u5236~',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: EditOutlined,
      tooltip: '\u7F16\u8F91',
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
      icon: DeleteOutlined,
      tooltip: '\u5220\u9664',
      confirm: '\u786E\u8BA4\u5220\u9664?',
      onClick: (e) => {
        console.log('Action \u5220\u9664', e);
        return new Promise((resolve) => {
          setTimeout(() => {
            message.success('\u5220\u9664\u6210\u529F');
            resolve(true);
          }, 2000);
        });
      },
    },
    {
      icon: DeleteOutlined,
      confirm: '\u786E\u8BA4\u5220\u9664?',
      type: 'error',
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

  const iconTextActions: IconActionsProps['actions'] = [
    {
      icon: EditOutlined,
      text: '\u7F16\u8F91',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: CopyOutlined,
      text: '\u590D\u5236~',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      icon: EditOutlined,
      text: '\u7F16\u8F91',
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
      icon: DeleteOutlined,
      text: '\u5220\u9664',
      confirm: '\u786E\u8BA4\u5220\u9664?',
      onClick: (e) => {
        console.log('Action \u5220\u9664', e);
        return new Promise((resolve) => {
          setTimeout(() => {
            message.success('\u5220\u9664\u6210\u529F');
            resolve(true);
          }, 2000);
        });
      },
    },
    {
      icon: DeleteOutlined,
      confirm: '\u786E\u8BA4\u5220\u9664?',
      type: 'error',
      text: '\u5220\u9664',
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

  return (
    <ConfigProvider locale={zhCH}>
      <Row>
        <IconActions actions={iconActions} />
      </Row>
      <Row>
        <IconActions actions={iconTextActions} />
      </Row>
    </ConfigProvider>
  );
};

export default IconActionDemo;
`,G="IconActions",J="\u6309\u94AE",K={code:L,title:G,desc:J},Q=!0;var U=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:K,isDemo:Q,default:q},Symbol.toStringTag,{value:"Module"}));const V=()=>{const t=[{render:!1,children:"\u65B0\u589E",onClick:()=>{console.log("Action 1")}},{disabled:!0,children:"\u65B0\u589E",tooltip:"\u524D\u9762\u8FD8\u6709\u4E00\u4E2A\u6CA1\u6E32\u67D3\u7684\u6309\u94AE\u5440~",onClick:()=>{console.log("Action 1")}},{children:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(l=>{setTimeout(()=>{u.success("\u7F16\u8F91\u6210\u529F"),l(!0)},2e3)}))},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:l=>(console.log("Action \u5220\u9664",l),new Promise(r=>{setTimeout(()=>{u.success("\u5220\u9664\u6210\u529F"),r(!0)},2e3)}))},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",type:"danger",onClick:l=>(console.log("Action \u5220\u9664",l),new Promise((r,c)=>{setTimeout(()=>{u.error("\u5220\u9664\u5931\u8D25"),c(!0)},2e3)}))}];return n.createElement(C,{locale:g},n.createElement(y,{actions:t}))},W=`

import React from 'react';
import { ConfigProvider, message } from 'antd';
import { TextActions } from 'luckybird';
import type { TextActionsProps } from 'luckybird';
import zhCH from 'antd/lib/locale/zh_CN';

const Demo = () => {
  const textActions: TextActionsProps['actions'] = [
    {
      render: false,
      children: '\u65B0\u589E',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      disabled: true,
      children: '\u65B0\u589E',
      tooltip: '\u524D\u9762\u8FD8\u6709\u4E00\u4E2A\u6CA1\u6E32\u67D3\u7684\u6309\u94AE\u5440~',
      onClick: () => {
        console.log('Action 1');
      },
    },
    {
      children: '\u7F16\u8F91',
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
      children: '\u5220\u9664',
      confirm: '\u786E\u8BA4\u5220\u9664?',
      onClick: (e) => {
        console.log('Action \u5220\u9664', e);
        return new Promise((resolve) => {
          setTimeout(() => {
            message.success('\u5220\u9664\u6210\u529F');
            resolve(true);
          }, 2000);
        });
      },
    },
    {
      children: '\u5220\u9664',
      confirm: '\u786E\u8BA4\u5220\u9664?',
      type: 'danger',
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

  return (
    <ConfigProvider locale={zhCH}>
      <TextActions actions={textActions} />
    </ConfigProvider>
  );
};

export default Demo;
`,Y="TextActions",Z="\u6587\u672C\u6309\u94AE",ee={code:W,title:Y,desc:Z},ne=!0;var te=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:ee,isDemo:ne,default:V},Symbol.toStringTag,{value:"Module"}));const oe=t=>function(r){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...r})},m=oe("Demo"),ie={},re="wrapper";function F({components:t,...l}){return e(re,{...ie,...l,components:t,mdxType:"MDXLayout"},e("h1",null,"Actions"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u4EA4\u4E92\u6309\u94AE\u89E3\u51B3\u65B9\u6848\uFF1A"),e("ol",null,e("li",{parentName:"ol"},"\u56FE\u6807\u3001\u6587\u672C\u3001\u6309\u94AE"),e("li",{parentName:"ol"},"\u5185\u7F6E loading\u3001disabled \u72B6\u6001\uFF0CTooltip \u548C Popconfirm"),e("li",{parentName:"ol"},"\u4E00\u822C\u7528\u4E8E\u8868\u683C\u64CD\u4F5C\u680F\u7B49\u9700\u8981",e("inlineCode",{parentName:"li"},"onClick"),"\u4E8B\u4EF6\u4EA4\u4E92\u7684\u5730\u65B9")),e("p",null,"\u7279\u70B9\uFF1A"),e("blockquote",null,e("ol",{parentName:"blockquote"},e("li",{parentName:"ol"},"\u611F\u77E5\u70B9\u51FB\u4E8B\u4EF6\u8FD4\u56DE\u7684 Promise \u72B6\u6001\uFF0C\u81EA\u52A8\u8FDB\u5165 loading \u72B6\u6001"),e("li",{parentName:"ol"},"Tooltip \u548C Popconfirm \u4E0D\u4F1A\u76F8\u4E92\u906E\u6321"))),e("h2",null,"\u884C\u4E3A\u6309\u94AE demos"),e("p",null,"\u5355\u4E2A\u4F7F\u7528"),e(m,{...w,mdxType:"Demo"}),e("p",null,"\u6210\u7EC4\u4F7F\u7528"),e(m,{..._,mdxType:"Demo"}),e("h2",null,"\u884C\u4E3A\u56FE\u6807 demos"),e("p",null,"\u5355\u4E2A\u4F7F\u7528\uFF0C\u652F\u6301\u4E24\u79CD\u7EC4\u4EF6\u4F20\u5165\u65B9\u5F0F"),e(m,{...X,mdxType:"Demo"}),e("p",null,"\u6210\u7EC4\u4F7F\u7528"),e(m,{...U,mdxType:"Demo"}),e("h2",null,"\u884C\u4E3A\u6587\u672C demos"),e(m,{...te,mdxType:"Demo"}),e("h2",null,"API"),e("h3",null,"\u516C\u5171 API"),e("blockquote",null,e("p",{parentName:"blockquote"},"\u5EFA\u8BAE\u76F4\u63A5\u53C2\u8003 demo \u4F7F\u7528\uFF0C\u7B80\u5355\u6613\u61C2\u3002")),e("h4",null,"\u5355\u4E2A Action \u7EC4\u4EF6"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"tooltip"),e("td",{parentName:"tr",align:"left"},"\u6C14\u6CE1\u63D0\u793A\u6587\u672C"),e("td",{parentName:"tr",align:"left"},"\u63A8\u8350 ",e("inlineCode",{parentName:"td"},"string"),"\uFF0C",e("inlineCode",{parentName:"td"},"ReactNode \u6216 () => ReactNode")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"confirm"),e("td",{parentName:"tr",align:"left"},"\u4E8C\u6B21\u786E\u8BA4\u63D0\u793A\u6587\u672C"),e("td",{parentName:"tr",align:"left"},"\u63A8\u8350 ",e("inlineCode",{parentName:"td"},"string"),"\uFF0C",e("inlineCode",{parentName:"td"},"ReactNode \u6216 () => ReactNode")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"disabled"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u7981\u7528"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => boolean \u6216 boolean")),e("td",{parentName:"tr",align:"center"},"false")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"render"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u6E32\u67D3"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => boolean \u6216 boolean")),e("td",{parentName:"tr",align:"center"},"true")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"container"),e("td",{parentName:"tr",align:"left"},"\u5305\u88F9\u5BB9\u5668"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => React.ReactElement \u6216 React.ReactElement")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"onClick"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u70B9\u51FB\u4E8B\u4EF6"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(...args: any[]) => any")),e("td",{parentName:"tr",align:"center"},"-")))),e("h4",null,"Actions \u7EC4\uFF0C \u66F4\u591A\u5C5E\u6027\u53C2\u8003",e("a",{parentName:"h4",href:"https://ant.design/components/space-cn/"},"Space")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"actions"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C(",e("inlineCode",{parentName:"td"},"\u5BF9\u5E94\u7C7B\u578B\u7EC4\u4EF6")," \u6216\u8005",e("inlineCode",{parentName:"td"},"React.ReactElement")," )[]"),e("td",{parentName:"tr",align:"left"}),e("td",{parentName:"tr",align:"center"},"-")))),e("h3",null,"ActionButton"),e("p",null,"\u540C antd \u7684",e("a",{parentName:"p",href:"https://ant.design/components/button-cn/#API"},"Button"),"\u3002"),e("h3",null,"ActionText"),e("p",null,"\u540C",e("a",{parentName:"p",href:"/components/Text#api"},"Text"),"\u3002"),e("h3",null,"ActionIcon"),e("p",null,"\u56FE\u6807\u53C2\u8003",e("a",{parentName:"p",href:"https://ant.design/components/icon-cn"},"Icon"),"\u3002"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"icon"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u56FE\u6807"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"@ant-design/icons"),"\u7EC4\u4EF6"),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"type"),e("td",{parentName:"tr",align:"left"},"\u6309\u94AE\u7C7B\u578B"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"'primary'")," ",e("inlineCode",{parentName:"td"},"'error'")," ",e("inlineCode",{parentName:"td"},"'success'")," ",e("inlineCode",{parentName:"td"},"'warning'")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"disabled"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u7981\u7528"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => boolean \u6216 boolean")),e("td",{parentName:"tr",align:"center"},"false")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"text"),e("td",{parentName:"tr",align:"left"},"\u6587\u672C"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"string")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"textPosition"),e("td",{parentName:"tr",align:"left"},"\u6587\u672C\u4F4D\u7F6E"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"start")," ",e("inlineCode",{parentName:"td"},"end")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"end"))))))}F.isMDXComponent=!0;var le=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const ue={};ue.main=le;export{ue as default};
