var F=Object.defineProperty,f=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var s=(u,r,o)=>r in u?F(u,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[r]=o,c=(u,r)=>{for(var o in r||(r={}))d.call(r,o)&&s(u,o,r[o]);if(a)for(var o of a(r))m.call(r,o)&&s(u,o,r[o]);return u},l=(u,r)=>f(u,y(r));var p=(u,r)=>{var o={};for(var n in u)d.call(u,n)&&r.indexOf(n)<0&&(o[n]=u[n]);if(u!=null&&a)for(var n of a(u))r.indexOf(n)<0&&m.call(u,n)&&(o[n]=u[n]);return o};import{R as t,c as e}from"./index.161a0514.js";import{X as g,m as R,S,a as i}from"./index.52e84606.js";import{T}from"./index.f26b28ec.js";import{r as D,c as E}from"./config.70aae31f.js";import{C as b}from"./index.6adcc740.js";import"./PlusOutlined.a6ed2eb3.js";const h=()=>{const u=[...E,{key:"operator",title:"\u64CD\u4F5C",render:r=>t.createElement(T,{actions:[{children:"\u5237\u65B0",confirm:"\u786E\u8BA4\u5237\u65B0?",onClick:()=>(console.log("\u5237\u65B0"),new Promise(o=>{setTimeout(()=>{r.table.refresh(),o(""),R.success("\u5237\u65B0\u6210\u529F")},1e3)}))}]})}];return t.createElement(g,{columns:u,remoteDataSource:D})},w=`import React from 'react';\r
import { message } from 'antd';\r
import { Table, type ColumnType, TextActions } from '@pms/ui';\r
import { remoteDataSource, columns, type RecordType } from './config';\r
\r
const Demo = () => {\r
  const cols: ColumnType<RecordType>[] = [\r
    ...columns,\r
    {\r
      key: 'operator',\r
      title: '\u64CD\u4F5C',\r
      render: (ctx) => {\r
        return (\r
          <TextActions\r
            actions={[\r
              {\r
                children: '\u5237\u65B0',\r
                confirm: '\u786E\u8BA4\u5237\u65B0?',\r
                onClick: () => {\r
                  console.log('\u5237\u65B0');\r
                  return new Promise((resolve) => {\r
                    setTimeout(() => {\r
                      ctx.table.refresh();\r
                      resolve('');\r
                      message.success('\u5237\u65B0\u6210\u529F');\r
                    }, 1000);\r
                  });\r
                },\r
              },\r
            ]}\r
          />\r
        );\r
      },\r
    },\r
  ];\r
\r
  return <Table<RecordType> columns={cols} remoteDataSource={remoteDataSource} />;\r
};\r
\r
export default Demo;\r
`,A=void 0,k=void 0,v={code:w,title:A,desc:k},P=!0;var N=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:v,isDemo:P,default:h},Symbol.toStringTag,{value:"Module"}));const x=()=>{const u=t.useRef(null);return t.createElement(b,null,t.createElement(S,{size:16,direction:"vertical",style:{marginBottom:16}},t.createElement(i,{actions:[{children:"\u83B7\u53D6\u9009\u4E2D\u884C",onClick:()=>{const r=u.current.getSelectedRows(),o=u.current.getSelectedRowKeys();console.log("select",o,r)}},{children:"\u83B7\u53D6\u6570\u636E\u6E90",onClick:()=>{const r=u.current.getDataSource();console.log("dataSource",r)}},{children:"\u83B7\u53D6loading",onClick:()=>{const r=u.current.getLoading();console.log("loading",r)}},{children:"\u83B7\u53D6\u5206\u9875",onClick:()=>{const r=u.current.getPagination();console.log("pagination",r)}}]}),t.createElement(i,{actions:[{children:"\u5237\u65B0\u8868\u683C",onClick:()=>{u.current.refresh()}},{children:"\u91CD\u7F6E\u8868\u683C",onClick:()=>{u.current.reset()}},{children:"\u5F3A\u5236\u66F4\u65B0",onClick:()=>{u.current.forceUpdate()}}]}),t.createElement(i,{actions:[{children:"\u8BBE\u7F6E\u9009\u4E2D\u884C",onClick:()=>{const o=u.current.getDataSource().filter(n=>n.id==="1"||n.id==="2");u.current.setSelectedRows(o)}},{children:"\u6E05\u7A7A\u9009\u4E2D\u884C",onClick:()=>{u.current.setSelectedRows([])}},{children:"\u5207\u6362loading",onClick:()=>{const r=u.current.getLoading();u.current.setLoading(!r)}}]})),t.createElement(g,{ref:u,columns:E,rowSelection:!0,remoteDataSource:D}))},M=`import React from 'react';\r
import { Table, ButtonActions } from '@pms/ui';\r
import { Card, Space } from 'antd';\r
import type { TableInstance } from '@pms/ui';\r
import { type RecordType, remoteDataSource, columns } from './config';\r
\r
const Demo = () => {\r
  const ref = React.useRef<TableInstance<RecordType>>(null);\r
\r
  return (\r
    <Card>\r
      <Space size={16} direction="vertical" style={{ marginBottom: 16 }}>\r
        <ButtonActions\r
          actions={[\r
            {\r
              children: '\u83B7\u53D6\u9009\u4E2D\u884C',\r
              onClick: () => {\r
                const selectedRows = ref.current!.getSelectedRows();\r
                const selectedRowKeys = ref.current!.getSelectedRowKeys();\r
                console.log('select', selectedRowKeys, selectedRows);\r
              },\r
            },\r
            {\r
              children: '\u83B7\u53D6\u6570\u636E\u6E90',\r
              onClick: () => {\r
                const dataSource = ref.current!.getDataSource();\r
                console.log('dataSource', dataSource);\r
              },\r
            },\r
            {\r
              children: '\u83B7\u53D6loading',\r
              onClick: () => {\r
                const loading = ref.current!.getLoading();\r
                console.log('loading', loading);\r
              },\r
            },\r
            {\r
              children: '\u83B7\u53D6\u5206\u9875',\r
              onClick: () => {\r
                const pagination = ref.current!.getPagination();\r
                console.log('pagination', pagination);\r
              },\r
            },\r
          ]}\r
        />\r
        <ButtonActions\r
          actions={[\r
            {\r
              children: '\u5237\u65B0\u8868\u683C',\r
              onClick: () => {\r
                ref.current!.refresh();\r
              },\r
            },\r
            {\r
              children: '\u91CD\u7F6E\u8868\u683C',\r
              onClick: () => {\r
                ref.current!.reset();\r
              },\r
            },\r
            {\r
              children: '\u5F3A\u5236\u66F4\u65B0',\r
              onClick: () => {\r
                ref.current!.forceUpdate();\r
              },\r
            },\r
          ]}\r
        />\r
        <ButtonActions\r
          actions={[\r
            {\r
              children: '\u8BBE\u7F6E\u9009\u4E2D\u884C',\r
              onClick: () => {\r
                const dataSource = ref.current!.getDataSource();\r
                const selectedRows = dataSource.filter((item) => item.id === '1' || item.id === '2');\r
                ref.current!.setSelectedRows(selectedRows);\r
              },\r
            },\r
            {\r
              children: '\u6E05\u7A7A\u9009\u4E2D\u884C',\r
              onClick: () => {\r
                ref.current!.setSelectedRows([]);\r
              },\r
            },\r
            {\r
              children: '\u5207\u6362loading',\r
              onClick: () => {\r
                const loading = ref.current!.getLoading();\r
                ref.current!.setLoading(!loading);\r
              },\r
            },\r
          ]}\r
        />\r
      </Space>\r
      <Table<RecordType> ref={ref} columns={columns} rowSelection remoteDataSource={remoteDataSource} />\r
    </Card>\r
  );\r
};\r
\r
export default Demo;\r
`,_=void 0,K=void 0,L={code:M,title:_,desc:K},O=!0;var z=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:L,isDemo:O,default:x},Symbol.toStringTag,{value:"Module"}));const X=u=>function(o){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},o))},C=X("Demo"),$={},j="wrapper";function B(o){var n=o,{components:u}=n,r=p(n,["components"]);return e(j,l(c(c({},$),r),{components:u,mdxType:"MDXLayout"}),e("h1",null,"Table"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("ol",null,e("li",{parentName:"ol"},"\u540E\u7AEF\u5206\u9875\u8868\u683C\uFF0C",e("inlineCode",{parentName:"li"},"loading")," ",e("inlineCode",{parentName:"li"},"rowSelection")," ",e("inlineCode",{parentName:"li"},"pagination"),"\u7531",e("inlineCode",{parentName:"li"},"Table"),"\u7EC4\u4EF6\u5185\u90E8\u63A7\u5236\u3002"),e("li",{parentName:"ol"},"\u652F\u6301",e("inlineCode",{parentName:"li"},"remoteDataSource"),"\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u63A5\u6536",e("inlineCode",{parentName:"li"},"Table"),"\u7EC4\u4EF6\u9700\u8981\u6570\u636E\u683C\u5F0F\u7684 Promise \u5BF9\u8C61\uFF0C\u5373\u53EF\u5BF9",e("inlineCode",{parentName:"li"},"dataSource"),"\u8FDB\u884C\u63A7\u5236\u3002"),e("li",{parentName:"ol"},"\u652F\u6301\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u7075\u6D3B\u63A7\u5236\u8868\u683C\u3002"),e("li",{parentName:"ol"},"Table \u6539\u5199\u4E86",e("inlineCode",{parentName:"li"},"antd Table"),"\u4E2D",e("inlineCode",{parentName:"li"},"columns"),"\u7684",e("inlineCode",{parentName:"li"},"render"),"\u65B9\u6CD5\uFF0C\u53C2\u6570",e("inlineCode",{parentName:"li"},"ctx"),"\u4E2D\u53EF\u4EE5\u62FF\u5230",e("inlineCode",{parentName:"li"},"table"),"\u5B9E\u4F8B\u65B9\u6CD5\u3002")),e("h2",null,"demos"),e("p",null,"\u57FA\u7840\u4F7F\u7528"),e(C,l(c({},N),{mdxType:"Demo"})),e("p",null,"\u5B9E\u4F8B\u65B9\u6CD5"),e(C,l(c({},z),{mdxType:"Demo"})),e("h2",null,"\u540E\u7AEF\u5206\u9875\u683C\u5F0F"),e("p",null,"\u4E0B\u53D1\u53C2\u6570"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`interface RequestParams {
  /** \u5F53\u524D\u9875 */
  current: number;
  /** \u5206\u9875\u5927\u5C0F */
  size: number;
  /** \u6392\u5E8F\u53C2\u6570 */
  sorter?: {
    /** \u6392\u5E8F\u5B57\u6BB5 */
    field: string;
    /** descend: \u964D\u5E8F\uFF0C ascend\uFF1A\u5347\u5E8F */
    order: 'descend' | 'ascend' | undefined;
  };
  /** \u5176\u4ED6\u5206\u9875\u53C2\u6570 */
  [key: string]: any;
}
`)),e("p",null,"\u6570\u636E\u54CD\u5E94"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`type RequestResult<RecordType extends Record<string, any> = any> = {
  /** \u6570\u636E\u6E90 **/
  records: RecordType[];
  /** \u5F53\u524D\u9875 **/
  current: number;
  /** \u6570\u636E\u603B\u6761\u6570 **/
  total: number;
  /** \u5206\u9875\u5927\u5C0F **/
  size: number;
};
`)),e("h2",null,"\u5B9E\u4F8B\u65B9\u6CD5"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import type { Key } from 'antd/lib/table/interface';

export type Pagination = {
  /** \u5F53\u524D\u9875 */
  current: number;
  /** \u5206\u9875\u5927\u5C0F */
  size: number;
  /** \u603B\u6761\u6570 */
  total: number;
};

export interface TableInstance<RecordType = any> {
  /** \u5237\u65B0\u8868\u683C */
  refresh: (extraRefreshParams?: Record<string, any>) => Promise<void> | undefined;
  /** \u91CD\u7F6E\u8868\u683C\u5230\u521D\u59CB\u72B6\u6001 */
  reset: () => void;
  /** \u83B7\u53D6\u8868\u683C\u9009\u4E2D\u884C\u6570\u636E */
  getSelectedRowKeys: () => Key[];
  /** \u8BBE\u7F6E\u8868\u683C\u9009\u4E2D\u884C\u6570\u636E */
  setSelectedRowKeys: (rows: Key[]) => void;
  /** \u83B7\u53D6\u8868\u683C\u9009\u4E2D\u884C\u6570\u636E */
  getSelectedRows: () => RecordType[];
  /** \u8BBE\u7F6E\u8868\u683C\u9009\u4E2D\u884C\u6570\u636E */
  setSelectedRows: (rows: RecordType[]) => void;
  /** \u83B7\u53D6\u6570\u636E\u6E90 */
  getDataSource: () => RecordType[];
  /** \u83B7\u53D6\u5206\u9875\u914D\u7F6E */
  getPagination: () => Pagination;
  /** \u8BBE\u7F6E\u5206\u9875\u914D\u7F6E */
  setPagination: (pagination: Pagination) => void;
  /** \u83B7\u53D6\u8868\u683Cloading\u72B6\u6001 */
  getLoading: () => boolean;
  /** \u8BBE\u7F6E\u8868\u683Cloading\u72B6\u6001 */
  setLoading: (loading: boolean) => void;
  /** \u5F3A\u5236\u5237\u65B0\u8868\u683C */
  forceUpdate: () => void;
}
`)),e("h2",null,"API"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`export interface ColumnType<RecordType> extends Omit<AColumnType<RecordType>, 'render' | 'key'> {
  render?: (ctx: { value: RecordType; index: number; table: TableInstance; record: RecordType }) => ReactElement;
  key?: string;
}

export interface TableProps<RecordType = any>
  extends Omit<ATableProps<RecordType>, 'dataSoruce' | 'loading' | 'rowSelection' | 'columns'> {
  /** \u8FDC\u7A0B\u6570\u636E\u6E90 */
  remoteDataSource?: (params: RequestParams) => Promise<RequestResult<RecordType>>;
  /** \u9ED8\u8BA4\u5206\u9875\u914D\u7F6E */
  defaultPagination?: Pagination;
  /** \u9009\u4E2D\u884C\u914D\u7F6E */
  rowSelection?: boolean | TableRowSelection<RecordType>;
  /** \u521D\u59CB\u662F\u5426\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u53D1\u8D77\u8BF7\u6C42 */
  requestOnMount?: boolean;
  /** \u5217\u914D\u7F6E */
  columns?: ColumnType<RecordType>[];
}
`)))}B.isMDXComponent=!0;var q=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const I={};I.main=q;export{I as default};
