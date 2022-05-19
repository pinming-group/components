var P=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var N=(n,o,r)=>o in n?P(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,a=(n,o)=>{for(var r in o||(o={}))B.call(o,r)&&N(n,r,o[r]);if(F)for(var r of F(o))y.call(o,r)&&N(n,r,o[r]);return n},s=(n,o)=>v(n,w(o));var k=(n,o)=>{var r={};for(var l in n)B.call(n,l)&&o.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&F)for(var l of F(n))o.indexOf(l)<0&&y.call(n,l)&&(r[l]=n[l]);return r};import{R as t,c as e}from"./index.161a0514.js";import{C,S as d,B as g,m as c,a as T,R as m,I as i,E as u,b,c as h}from"./index.52e84606.js";import{z as E}from"./zh_CN.14a88238.js";import{D as A}from"./DeleteOutlined.2764adce.js";import{T as x}from"./index.f26b28ec.js";const O=()=>t.createElement(C,{locale:E},t.createElement(d,null,t.createElement(g,{children:"\u65B0\u589E",type:"primary",onClick:()=>{console.log("Action 1")}}),t.createElement(g,{disabled:!0,children:"\u65B0\u589E",tooltip:"\u8BBE\u7F6Edisabled\u88AB\u7981\u7528\u4E86~",onClick:()=>{console.log("Action 1")}}),t.createElement(g,{children:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(n=>{setTimeout(()=>{c.success("\u7F16\u8F91\u6210\u529F"),n(!0)},2e3)}))}),t.createElement(g,{children:"\u5220\u9664",danger:!0,confirm:"\u786E\u8BA4\u5220\u9664?",onClick:n=>(console.log("Action \u5220\u9664",n),new Promise((o,r)=>{setTimeout(()=>{c.error("\u5220\u9664\u5931\u8D25"),r(!0)},2e3)}))}))),I=`\r
\r
import React from 'react';\r
import { ConfigProvider, message, Space } from 'antd';\r
import { ButtonAction } from '@pms/ui';\r
import zhCH from 'antd/lib/locale/zh_CN';\r
\r
const ButtonActionDemo = () => {\r
  return (\r
    <ConfigProvider locale={zhCH}>\r
      <Space>\r
        <ButtonAction\r
          {...{\r
            children: '\u65B0\u589E',\r
            type: 'primary',\r
            onClick: () => {\r
              console.log('Action 1');\r
            },\r
          }}\r
        />\r
        <ButtonAction\r
          {...{\r
            disabled: true,\r
            children: '\u65B0\u589E',\r
            tooltip: '\u8BBE\u7F6Edisabled\u88AB\u7981\u7528\u4E86~',\r
            onClick: () => {\r
              console.log('Action 1');\r
            },\r
          }}\r
        />\r
        <ButtonAction\r
          {...{\r
            children: '\u7F16\u8F91',\r
            onClick: () => {\r
              console.log('Action \u7F16\u8F91');\r
              return new Promise((resolve) => {\r
                setTimeout(() => {\r
                  message.success('\u7F16\u8F91\u6210\u529F');\r
                  resolve(true);\r
                }, 2000);\r
              });\r
            },\r
          }}\r
        />\r
        <ButtonAction\r
          {...{\r
            children: '\u5220\u9664',\r
            danger: true,\r
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
          }}\r
        />\r
      </Space>\r
    </ConfigProvider>\r
  );\r
};\r
\r
export default ButtonActionDemo;\r
`,R="ButtonAction",_="\u6309\u94AE",S={code:I,title:R,desc:_},z=!0;var $=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:S,isDemo:z,default:O},Symbol.toStringTag,{value:"Module"}));const j=()=>{const n=[{children:"\u65B0\u589E",type:"primary",onClick:()=>{console.log("Action 1")}},{disabled:!0,children:"\u65B0\u589E",tooltip:"\u8BBE\u7F6Edisabled\u88AB\u7981\u7528\u4E86~",onClick:()=>{console.log("Action 1")}},{children:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(o=>{setTimeout(()=>{c.success("\u7F16\u8F91\u6210\u529F"),o(!0)},2e3)}))},{children:"\u5220\u9664",danger:!0,confirm:"\u786E\u8BA4\u5220\u9664?",onClick:o=>(console.log("Action \u5220\u9664",o),new Promise((r,l)=>{setTimeout(()=>{c.error("\u5220\u9664\u5931\u8D25"),l(!0)},2e3)}))}];return t.createElement(C,{locale:E},t.createElement(T,{actions:n}))},M=`\r
\r
import React from 'react';\r
import { ConfigProvider, message } from 'antd';\r
import { ButtonActions } from '@pms/ui';\r
import type { ButtonActionsProps } from '@pms/ui';\r
import zhCH from 'antd/lib/locale/zh_CN';\r
\r
const ButtonAction = () => {\r
  const buttonActions: ButtonActionsProps['actions'] = [\r
    {\r
      children: '\u65B0\u589E',\r
      type: 'primary',\r
      onClick: () => {\r
        console.log('Action 1');\r
      },\r
    },\r
    {\r
      disabled: true,\r
      children: '\u65B0\u589E',\r
      tooltip: '\u8BBE\u7F6Edisabled\u88AB\u7981\u7528\u4E86~',\r
      onClick: () => {\r
        console.log('Action 1');\r
      },\r
    },\r
    {\r
      children: '\u7F16\u8F91',\r
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
      danger: true,\r
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
  return (\r
    <ConfigProvider locale={zhCH}>\r
      <ButtonActions actions={buttonActions} />\r
    </ConfigProvider>\r
  );\r
};\r
\r
export default ButtonAction;\r
`,H="ButtonActions",X="\u6309\u94AE",q={code:M,title:H,desc:X},L=!0;var G=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:q,isDemo:L,default:j},Symbol.toStringTag,{value:"Module"}));const J=()=>{const n=o=>(console.log("click",o),new Promise(r=>{setTimeout(()=>{r(!0)},1500)}));return t.createElement(C,{locale:E},t.createElement(m,null,t.createElement(d,null,t.createElement(i,{tooltip:"\u7F16\u8F91",onClick:n,icon:u}),t.createElement(i,{tooltip:"\u7F16\u8F91",onClick:n,icon:u,type:"error"}),t.createElement(i,{tooltip:"\u7F16\u8F91",onClick:n,icon:u,type:"primary"}),t.createElement(i,{tooltip:"\u7F16\u8F91",onClick:n,icon:u,type:"success"}),t.createElement(i,{tooltip:"\u7F16\u8F91",onClick:n,icon:u,type:"warning"}))),t.createElement(m,null,t.createElement(d,null,t.createElement(i,{onClick:n,icon:t.createElement(u,{className:"extracls"})}),t.createElement(i,{onClick:n,icon:t.createElement(u,null),type:"error"}),t.createElement(i,{onClick:n,icon:t.createElement(u,null),type:"primary"}),t.createElement(i,{onClick:n,icon:t.createElement(u,null),type:"success"}),t.createElement(i,{onClick:n,icon:t.createElement(u,null),type:"warning"}))),t.createElement(m,null,t.createElement(d,null,t.createElement(i,{onClick:n,loading:!0,icon:u}),t.createElement(i,{onClick:n,loading:!0,icon:u,type:"error"}),t.createElement(i,{onClick:n,loading:!0,icon:u,type:"primary"}),t.createElement(i,{onClick:n,loading:!0,icon:u,type:"success"}),t.createElement(i,{onClick:n,loading:!0,icon:u,type:"warning"}))),t.createElement(m,null,t.createElement(d,null,t.createElement(i,{onClick:n,disabled:!0,icon:u}),t.createElement(i,{onClick:n,disabled:!0,icon:u,type:"error"}),t.createElement(i,{onClick:n,disabled:!0,icon:u,type:"primary"}),t.createElement(i,{onClick:n,disabled:!0,icon:u,type:"success"}),t.createElement(i,{onClick:n,disabled:!0,icon:u,type:"warning"}))),t.createElement(m,null,t.createElement(d,null,t.createElement(i,{onClick:n,text:"\u7F16\u8F91",icon:u}),t.createElement(i,{onClick:n,text:"\u7F16\u8F91",icon:u,type:"error"}),t.createElement(i,{onClick:n,text:"\u7F16\u8F91",icon:u,type:"primary"}),t.createElement(i,{onClick:n,text:"\u7F16\u8F91",icon:u,type:"success"}),t.createElement(i,{onClick:n,text:"\u7F16\u8F91",icon:u,type:"warning"}))))},K=`\r
\r
import React from 'react';\r
import { ConfigProvider, Space, Row } from 'antd';\r
import { EditOutlined } from '@ant-design/icons';\r
import { IconAction } from '@pms/ui';\r
import zhCH from 'antd/lib/locale/zh_CN';\r
\r
const IconActionDemo = () => {\r
  const onClick = (e) => {\r
    console.log('click', e);\r
    return new Promise((resolve) => {\r
      setTimeout(() => {\r
        resolve(true);\r
      }, 1500);\r
    });\r
  };\r
\r
  return (\r
    <ConfigProvider locale={zhCH}>\r
      <Row>\r
        <Space>\r
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} />\r
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} type="error" />\r
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} type="primary" />\r
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} type="success" />\r
          <IconAction tooltip="\u7F16\u8F91" onClick={onClick} icon={EditOutlined} type="warning" />\r
        </Space>\r
      </Row>\r
      <Row>\r
        <Space>\r
          <IconAction onClick={onClick} icon={<EditOutlined className="extracls" />} />\r
          <IconAction onClick={onClick} icon={<EditOutlined />} type="error" />\r
          <IconAction onClick={onClick} icon={<EditOutlined />} type="primary" />\r
          <IconAction onClick={onClick} icon={<EditOutlined />} type="success" />\r
          <IconAction onClick={onClick} icon={<EditOutlined />} type="warning" />\r
        </Space>\r
      </Row>\r
      <Row>\r
        <Space>\r
          <IconAction onClick={onClick} loading icon={EditOutlined} />\r
          <IconAction onClick={onClick} loading icon={EditOutlined} type="error" />\r
          <IconAction onClick={onClick} loading icon={EditOutlined} type="primary" />\r
          <IconAction onClick={onClick} loading icon={EditOutlined} type="success" />\r
          <IconAction onClick={onClick} loading icon={EditOutlined} type="warning" />\r
        </Space>\r
      </Row>\r
\r
      <Row>\r
        <Space>\r
          <IconAction onClick={onClick} disabled icon={EditOutlined} />\r
          <IconAction onClick={onClick} disabled icon={EditOutlined} type="error" />\r
          <IconAction onClick={onClick} disabled icon={EditOutlined} type="primary" />\r
          <IconAction onClick={onClick} disabled icon={EditOutlined} type="success" />\r
          <IconAction onClick={onClick} disabled icon={EditOutlined} type="warning" />\r
        </Space>\r
      </Row>\r
\r
      <Row>\r
        <Space>\r
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} />\r
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} type="error" />\r
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} type="primary" />\r
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} type="success" />\r
          <IconAction onClick={onClick} text="\u7F16\u8F91" icon={EditOutlined} type="warning" />\r
        </Space>\r
      </Row>\r
    </ConfigProvider>\r
  );\r
};\r
\r
export default IconActionDemo;\r
`,Q="TextAction",U="\u6309\u94AE",V={code:K,title:Q,desc:U},W=!0;var Y=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:V,isDemo:W,default:J},Symbol.toStringTag,{value:"Module"}));const Z=()=>{const n=[{icon:u,tooltip:"\u7F16\u8F91",onClick:()=>{console.log("Action 1")}},{icon:h,tooltip:"\u590D\u5236~",onClick:()=>{console.log("Action 1")}},{icon:u,tooltip:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(r=>{setTimeout(()=>{c.success("\u7F16\u8F91\u6210\u529F"),r(!0)},2e3)}))},{icon:A,tooltip:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:r=>(console.log("Action \u5220\u9664",r),new Promise(l=>{setTimeout(()=>{c.success("\u5220\u9664\u6210\u529F"),l(!0)},2e3)}))},{icon:A,confirm:"\u786E\u8BA4\u5220\u9664?",type:"error",onClick:r=>(console.log("Action \u5220\u9664",r),new Promise((l,f)=>{setTimeout(()=>{c.error("\u5220\u9664\u5931\u8D25"),f(!0)},2e3)}))}],o=[{icon:u,text:"\u7F16\u8F91",onClick:()=>{console.log("Action 1")}},{icon:h,text:"\u590D\u5236~",onClick:()=>{console.log("Action 1")}},{icon:u,text:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(r=>{setTimeout(()=>{c.success("\u7F16\u8F91\u6210\u529F"),r(!0)},2e3)}))},{icon:A,text:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:r=>(console.log("Action \u5220\u9664",r),new Promise(l=>{setTimeout(()=>{c.success("\u5220\u9664\u6210\u529F"),l(!0)},2e3)}))},{icon:A,confirm:"\u786E\u8BA4\u5220\u9664?",type:"error",text:"\u5220\u9664",onClick:r=>(console.log("Action \u5220\u9664",r),new Promise((l,f)=>{setTimeout(()=>{c.error("\u5220\u9664\u5931\u8D25"),f(!0)},2e3)}))}];return t.createElement(C,{locale:E},t.createElement(m,null,t.createElement(b,{actions:n})),t.createElement(m,null,t.createElement(b,{actions:o})))},ee=`\r
\r
import React from 'react';\r
import { ConfigProvider, message, Row } from 'antd';\r
import { CopyOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';\r
import { IconActions } from '@pms/ui';\r
import type { IconActionsProps } from '@pms/ui';\r
import zhCH from 'antd/lib/locale/zh_CN';\r
\r
const IconActionDemo = () => {\r
  const iconActions: IconActionsProps['actions'] = [\r
    {\r
      icon: EditOutlined,\r
      tooltip: '\u7F16\u8F91',\r
      onClick: () => {\r
        console.log('Action 1');\r
      },\r
    },\r
    {\r
      icon: CopyOutlined,\r
      tooltip: '\u590D\u5236~',\r
      onClick: () => {\r
        console.log('Action 1');\r
      },\r
    },\r
    {\r
      icon: EditOutlined,\r
      tooltip: '\u7F16\u8F91',\r
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
      icon: DeleteOutlined,\r
      tooltip: '\u5220\u9664',\r
      confirm: '\u786E\u8BA4\u5220\u9664?',\r
      onClick: (e) => {\r
        console.log('Action \u5220\u9664', e);\r
        return new Promise((resolve) => {\r
          setTimeout(() => {\r
            message.success('\u5220\u9664\u6210\u529F');\r
            resolve(true);\r
          }, 2000);\r
        });\r
      },\r
    },\r
    {\r
      icon: DeleteOutlined,\r
      confirm: '\u786E\u8BA4\u5220\u9664?',\r
      type: 'error',\r
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
  const iconTextActions: IconActionsProps['actions'] = [\r
    {\r
      icon: EditOutlined,\r
      text: '\u7F16\u8F91',\r
      onClick: () => {\r
        console.log('Action 1');\r
      },\r
    },\r
    {\r
      icon: CopyOutlined,\r
      text: '\u590D\u5236~',\r
      onClick: () => {\r
        console.log('Action 1');\r
      },\r
    },\r
    {\r
      icon: EditOutlined,\r
      text: '\u7F16\u8F91',\r
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
      icon: DeleteOutlined,\r
      text: '\u5220\u9664',\r
      confirm: '\u786E\u8BA4\u5220\u9664?',\r
      onClick: (e) => {\r
        console.log('Action \u5220\u9664', e);\r
        return new Promise((resolve) => {\r
          setTimeout(() => {\r
            message.success('\u5220\u9664\u6210\u529F');\r
            resolve(true);\r
          }, 2000);\r
        });\r
      },\r
    },\r
    {\r
      icon: DeleteOutlined,\r
      confirm: '\u786E\u8BA4\u5220\u9664?',\r
      type: 'error',\r
      text: '\u5220\u9664',\r
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
  return (\r
    <ConfigProvider locale={zhCH}>\r
      <Row>\r
        <IconActions actions={iconActions} />\r
      </Row>\r
      <Row>\r
        <IconActions actions={iconTextActions} />\r
      </Row>\r
    </ConfigProvider>\r
  );\r
};\r
\r
export default IconActionDemo;\r
`,ne="TextActions",te="\u6309\u94AE",re={code:ee,title:ne,desc:te},oe=!0;var ue=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:re,isDemo:oe,default:Z},Symbol.toStringTag,{value:"Module"}));const ie=()=>{const n=[{render:!1,children:"\u65B0\u589E",onClick:()=>{console.log("Action 1")}},{disabled:!0,children:"\u65B0\u589E",tooltip:"\u524D\u9762\u8FD8\u6709\u4E00\u4E2A\u6CA1\u6E32\u67D3\u7684\u6309\u94AE\u5440~",onClick:()=>{console.log("Action 1")}},{children:"\u7F16\u8F91",onClick:()=>(console.log("Action \u7F16\u8F91"),new Promise(o=>{setTimeout(()=>{c.success("\u7F16\u8F91\u6210\u529F"),o(!0)},2e3)}))},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",onClick:o=>(console.log("Action \u5220\u9664",o),new Promise(r=>{setTimeout(()=>{c.success("\u5220\u9664\u6210\u529F"),r(!0)},2e3)}))},{children:"\u5220\u9664",confirm:"\u786E\u8BA4\u5220\u9664?",type:"danger",onClick:o=>(console.log("Action \u5220\u9664",o),new Promise((r,l)=>{setTimeout(()=>{c.error("\u5220\u9664\u5931\u8D25"),l(!0)},2e3)}))}];return t.createElement(C,{locale:E},t.createElement(x,{actions:n}))},le=`\r
\r
import React from 'react';\r
import { ConfigProvider, message } from 'antd';\r
import { TextActions } from '@pms/ui';\r
import type { TextActionsProps } from '@pms/ui';\r
import zhCH from 'antd/lib/locale/zh_CN';\r
\r
const Demo = () => {\r
  const textActions: TextActionsProps['actions'] = [\r
    {\r
      render: false,\r
      children: '\u65B0\u589E',\r
      onClick: () => {\r
        console.log('Action 1');\r
      },\r
    },\r
    {\r
      disabled: true,\r
      children: '\u65B0\u589E',\r
      tooltip: '\u524D\u9762\u8FD8\u6709\u4E00\u4E2A\u6CA1\u6E32\u67D3\u7684\u6309\u94AE\u5440~',\r
      onClick: () => {\r
        console.log('Action 1');\r
      },\r
    },\r
    {\r
      children: '\u7F16\u8F91',\r
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
      confirm: '\u786E\u8BA4\u5220\u9664?',\r
      onClick: (e) => {\r
        console.log('Action \u5220\u9664', e);\r
        return new Promise((resolve) => {\r
          setTimeout(() => {\r
            message.success('\u5220\u9664\u6210\u529F');\r
            resolve(true);\r
          }, 2000);\r
        });\r
      },\r
    },\r
    {\r
      children: '\u5220\u9664',\r
      confirm: '\u786E\u8BA4\u5220\u9664?',\r
      type: 'danger',\r
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
  return (\r
    <ConfigProvider locale={zhCH}>\r
      <TextActions actions={textActions} />\r
    </ConfigProvider>\r
  );\r
};\r
\r
export default Demo;\r
`,ce="TextActions",ae="\u6587\u672C\u6309\u94AE",se={code:le,title:ce,desc:ae},me=!0;var de=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:se,isDemo:me,default:ie},Symbol.toStringTag,{value:"Module"}));const pe=n=>function(r){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",a({},r))},p=pe("Demo"),Ce={},Ee="wrapper";function D(r){var l=r,{components:n}=l,o=k(l,["components"]);return e(Ee,s(a(a({},Ce),o),{components:n,mdxType:"MDXLayout"}),e("h1",null,"Actions"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("p",null,"\u4EA4\u4E92\u6309\u94AE\u89E3\u51B3\u65B9\u6848\uFF1A"),e("ol",null,e("li",{parentName:"ol"},"\u56FE\u6807\u3001\u6587\u672C\u3001\u6309\u94AE"),e("li",{parentName:"ol"},"\u5185\u7F6E loading\u3001disabled \u72B6\u6001\uFF0CTooltip \u548C Popconfirm"),e("li",{parentName:"ol"},"\u4E00\u822C\u7528\u4E8E\u8868\u683C\u64CD\u4F5C\u680F\u7B49\u9700\u8981",e("inlineCode",{parentName:"li"},"onClick"),"\u4E8B\u4EF6\u4EA4\u4E92\u7684\u5730\u65B9")),e("p",null,"\u7279\u70B9\uFF1A"),e("blockquote",null,e("ol",{parentName:"blockquote"},e("li",{parentName:"ol"},"\u611F\u77E5\u70B9\u51FB\u4E8B\u4EF6\u8FD4\u56DE\u7684 Promise \u72B6\u6001\uFF0C\u81EA\u52A8\u8FDB\u5165 loading \u72B6\u6001"),e("li",{parentName:"ol"},"Tooltip \u548C Popconfirm \u4E0D\u4F1A\u76F8\u4E92\u906E\u6321"))),e("h2",null,"\u884C\u4E3A\u6309\u94AE demos"),e("p",null,"\u5355\u4E2A\u4F7F\u7528"),e(p,s(a({},$),{mdxType:"Demo"})),e("p",null,"\u6210\u7EC4\u4F7F\u7528"),e(p,s(a({},G),{mdxType:"Demo"})),e("h2",null,"\u884C\u4E3A\u56FE\u6807 demos"),e("p",null,"\u5355\u4E2A\u4F7F\u7528\uFF0C\u652F\u6301\u4E24\u79CD\u7EC4\u4EF6\u4F20\u5165\u65B9\u5F0F"),e(p,s(a({},Y),{mdxType:"Demo"})),e("p",null,"\u6210\u7EC4\u4F7F\u7528"),e(p,s(a({},ue),{mdxType:"Demo"})),e("h2",null,"\u884C\u4E3A\u6587\u672C demos"),e(p,s(a({},de),{mdxType:"Demo"})),e("h2",null,"API"),e("h3",null,"\u516C\u5171 API"),e("blockquote",null,e("p",{parentName:"blockquote"},"\u5EFA\u8BAE\u76F4\u63A5\u53C2\u8003 demo \u4F7F\u7528\uFF0C\u7B80\u5355\u6613\u61C2\u3002")),e("h4",null,"\u5355\u4E2A Action \u7EC4\u4EF6"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"tooltip"),e("td",{parentName:"tr",align:"left"},"\u6C14\u6CE1\u63D0\u793A\u6587\u672C"),e("td",{parentName:"tr",align:"left"},"\u63A8\u8350 ",e("inlineCode",{parentName:"td"},"string"),"\uFF0C",e("inlineCode",{parentName:"td"},"ReactNode \u6216 () => ReactNode")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"confirm"),e("td",{parentName:"tr",align:"left"},"\u4E8C\u6B21\u786E\u8BA4\u63D0\u793A\u6587\u672C"),e("td",{parentName:"tr",align:"left"},"\u63A8\u8350 ",e("inlineCode",{parentName:"td"},"string"),"\uFF0C",e("inlineCode",{parentName:"td"},"ReactNode \u6216 () => ReactNode")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"disabled"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u7981\u7528"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => boolean \u6216 boolean")),e("td",{parentName:"tr",align:"center"},"false")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"render"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u6E32\u67D3"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => boolean \u6216 boolean")),e("td",{parentName:"tr",align:"center"},"true")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"container"),e("td",{parentName:"tr",align:"left"},"\u5305\u88F9\u5BB9\u5668"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => React.ReactElement \u6216 React.ReactElement")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"onClick"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u70B9\u51FB\u4E8B\u4EF6"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"(...args: any[]) => any")),e("td",{parentName:"tr",align:"center"},"-")))),e("h4",null,"Actions \u7EC4\uFF0C \u66F4\u591A\u5C5E\u6027\u53C2\u8003",e("a",{parentName:"h4",href:"https://ant.design/components/space-cn/"},"Space")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"actions"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C(",e("inlineCode",{parentName:"td"},"\u5BF9\u5E94\u7C7B\u578B\u7EC4\u4EF6")," \u6216\u8005",e("inlineCode",{parentName:"td"},"React.ReactElement")," )[]"),e("td",{parentName:"tr",align:"left"}),e("td",{parentName:"tr",align:"center"},"-")))),e("h3",null,"ActionButton"),e("p",null,"\u540C antd \u7684",e("a",{parentName:"p",href:"https://ant.design/components/button-cn/#API"},"Button"),"\u3002"),e("h3",null,"ActionText"),e("p",null,"\u540C",e("a",{parentName:"p",href:"/components/Text#api"},"Text"),"\u3002"),e("h3",null,"ActionIcon"),e("p",null,"\u56FE\u6807\u53C2\u8003",e("a",{parentName:"p",href:"https://ant.design/components/icon-cn"},"Icon"),"\u3002"),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:"left"},"\u5B57\u6BB5\u540D"),e("th",{parentName:"tr",align:"left"},"\u8BF4\u660E"),e("th",{parentName:"tr",align:"left"},"\u7C7B\u578B"),e("th",{parentName:"tr",align:"center"},"\u9ED8\u8BA4\u503C"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"icon"),e("td",{parentName:"tr",align:"left"},"\u5FC5\u586B\uFF0C\u56FE\u6807"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"@ant-design/icons"),"\u7EC4\u4EF6"),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"type"),e("td",{parentName:"tr",align:"left"},"\u6309\u94AE\u7C7B\u578B"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"'primary'")," ",e("inlineCode",{parentName:"td"},"'error'")," ",e("inlineCode",{parentName:"td"},"'success'")," ",e("inlineCode",{parentName:"td"},"'warning'")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"disabled"),e("td",{parentName:"tr",align:"left"},"\u662F\u5426\u7981\u7528"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"() => boolean \u6216 boolean")),e("td",{parentName:"tr",align:"center"},"false")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"text"),e("td",{parentName:"tr",align:"left"},"\u6587\u672C"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"string")),e("td",{parentName:"tr",align:"center"},"-")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:"left"},"textPosition"),e("td",{parentName:"tr",align:"left"},"\u6587\u672C\u4F4D\u7F6E"),e("td",{parentName:"tr",align:"left"},e("inlineCode",{parentName:"td"},"start")," ",e("inlineCode",{parentName:"td"},"end")),e("td",{parentName:"tr",align:"center"},e("inlineCode",{parentName:"td"},"end"))))))}D.isMDXComponent=!0;var Fe=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));const ge={};ge.main=Fe;export{ge as default};
