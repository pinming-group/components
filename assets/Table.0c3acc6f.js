import{R as o,c as e}from"./index.1c33d5c1.js";import{ar as l,ac as m,S as p,a6 as r}from"./tree.ce5c4568.js";import{r as i,c as s}from"./config.a1c6c2af.js";import{m as C}from"./index.b9dd85a1.js";import{C as g}from"./index.ec50335b.js";import"./PlusOutlined.99d6d6f5.js";const D=()=>{const n=[...s,{key:"operator",title:"\u64CD\u4F5C",render:u=>o.createElement(m,{actions:[{children:"\u5237\u65B0",confirm:"\u786E\u8BA4\u5237\u65B0?",onClick:()=>(console.log("\u5237\u65B0"),new Promise(t=>{setTimeout(()=>{u.table.refresh(),t(""),C.success("\u5237\u65B0\u6210\u529F")},1e3)}))}]})}];return o.createElement(l,{columns:n,remoteDataSource:i})},E=`import React from 'react';
import { message } from 'antd';
import { Table, type ColumnType, TextActions } from '@dreame/ui';
import { remoteDataSource, columns, type RecordType } from './config';

const Demo = () => {
  const cols: ColumnType<RecordType>[] = [
    ...columns,
    {
      key: 'operator',
      title: '\u64CD\u4F5C',
      render: (ctx) => {
        return (
          <TextActions
            actions={[
              {
                children: '\u5237\u65B0',
                confirm: '\u786E\u8BA4\u5237\u65B0?',
                onClick: () => {
                  console.log('\u5237\u65B0');
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      ctx.table.refresh();
                      resolve('');
                      message.success('\u5237\u65B0\u6210\u529F');
                    }, 1000);
                  });
                },
              },
            ]}
          />
        );
      },
    },
  ];

  return <Table<RecordType> columns={cols} remoteDataSource={remoteDataSource} />;
};

export default Demo;
`,f=void 0,B=void 0,F={code:E,title:f,desc:B},y=!0;var R=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:F,isDemo:y,default:D},Symbol.toStringTag,{value:"Module"}));const S=()=>{const n=o.useRef(null);return o.createElement(g,null,o.createElement(p,{size:16,direction:"vertical",style:{marginBottom:16}},o.createElement(r,{actions:[{children:"\u83B7\u53D6\u9009\u4E2D\u884C",onClick:()=>{const u=n.current.getSelectedRows(),t=n.current.getSelectedRowKeys();console.log("select",t,u)}},{children:"\u83B7\u53D6\u6570\u636E\u6E90",onClick:()=>{const u=n.current.getDataSource();console.log("dataSource",u)}},{children:"\u83B7\u53D6loading",onClick:()=>{const u=n.current.getLoading();console.log("loading",u)}},{children:"\u83B7\u53D6\u5206\u9875",onClick:()=>{const u=n.current.getPagination();console.log("pagination",u)}}]}),o.createElement(r,{actions:[{children:"\u5237\u65B0\u8868\u683C",onClick:()=>{n.current.refresh()}},{children:"\u91CD\u7F6E\u8868\u683C",onClick:()=>{n.current.reset()}},{children:"\u5F3A\u5236\u66F4\u65B0",onClick:()=>{n.current.forceUpdate()}}]}),o.createElement(r,{actions:[{children:"\u8BBE\u7F6E\u9009\u4E2D\u884C",onClick:()=>{const t=n.current.getDataSource().filter(a=>a.id==="1"||a.id==="2");n.current.setSelectedRows(t)}},{children:"\u6E05\u7A7A\u9009\u4E2D\u884C",onClick:()=>{n.current.setSelectedRows([])}},{children:"\u5207\u6362loading",onClick:()=>{const u=n.current.getLoading();n.current.setLoading(!u)}}]})),o.createElement(l,{ref:n,columns:s,rowSelection:!0,remoteDataSource:i}))},T=`import React from 'react';
import { Table, ButtonActions } from '@dreame/ui';
import { Card, Space } from 'antd';
import type { TableInstance } from '@dreame/ui';
import { type RecordType, remoteDataSource, columns } from './config';

const Demo = () => {
  const ref = React.useRef<TableInstance<RecordType>>(null);

  return (
    <Card>
      <Space size={16} direction="vertical" style={{ marginBottom: 16 }}>
        <ButtonActions
          actions={[
            {
              children: '\u83B7\u53D6\u9009\u4E2D\u884C',
              onClick: () => {
                const selectedRows = ref.current!.getSelectedRows();
                const selectedRowKeys = ref.current!.getSelectedRowKeys();
                console.log('select', selectedRowKeys, selectedRows);
              },
            },
            {
              children: '\u83B7\u53D6\u6570\u636E\u6E90',
              onClick: () => {
                const dataSource = ref.current!.getDataSource();
                console.log('dataSource', dataSource);
              },
            },
            {
              children: '\u83B7\u53D6loading',
              onClick: () => {
                const loading = ref.current!.getLoading();
                console.log('loading', loading);
              },
            },
            {
              children: '\u83B7\u53D6\u5206\u9875',
              onClick: () => {
                const pagination = ref.current!.getPagination();
                console.log('pagination', pagination);
              },
            },
          ]}
        />
        <ButtonActions
          actions={[
            {
              children: '\u5237\u65B0\u8868\u683C',
              onClick: () => {
                ref.current!.refresh();
              },
            },
            {
              children: '\u91CD\u7F6E\u8868\u683C',
              onClick: () => {
                ref.current!.reset();
              },
            },
            {
              children: '\u5F3A\u5236\u66F4\u65B0',
              onClick: () => {
                ref.current!.forceUpdate();
              },
            },
          ]}
        />
        <ButtonActions
          actions={[
            {
              children: '\u8BBE\u7F6E\u9009\u4E2D\u884C',
              onClick: () => {
                const dataSource = ref.current!.getDataSource();
                const selectedRows = dataSource.filter((item) => item.id === '1' || item.id === '2');
                ref.current!.setSelectedRows(selectedRows);
              },
            },
            {
              children: '\u6E05\u7A7A\u9009\u4E2D\u884C',
              onClick: () => {
                ref.current!.setSelectedRows([]);
              },
            },
            {
              children: '\u5207\u6362loading',
              onClick: () => {
                const loading = ref.current!.getLoading();
                ref.current!.setLoading(!loading);
              },
            },
          ]}
        />
      </Space>
      <Table<RecordType> ref={ref} columns={columns} rowSelection remoteDataSource={remoteDataSource} />
    </Card>
  );
};

export default Demo;
`,b=void 0,h=void 0,w={code:T,title:b,desc:h},k=!0;var A=Object.freeze(Object.defineProperty({__proto__:null,demoMeta:w,isDemo:k,default:S},Symbol.toStringTag,{value:"Module"}));const P=n=>function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",{...t})},c=P("Demo"),N={},x="wrapper";function d({components:n,...u}){return e(x,{...N,...u,components:n,mdxType:"MDXLayout"},e("h1",null,"Table"),e("h2",null,"\u7EC4\u4EF6\u4ECB\u7ECD"),e("ol",null,e("li",{parentName:"ol"},"\u540E\u7AEF\u5206\u9875\u8868\u683C\uFF0C",e("inlineCode",{parentName:"li"},"loading")," ",e("inlineCode",{parentName:"li"},"rowSelection")," ",e("inlineCode",{parentName:"li"},"pagination"),"\u7531",e("inlineCode",{parentName:"li"},"Table"),"\u7EC4\u4EF6\u5185\u90E8\u63A7\u5236\u3002"),e("li",{parentName:"ol"},"\u652F\u6301",e("inlineCode",{parentName:"li"},"remoteDataSource"),"\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u63A5\u6536",e("inlineCode",{parentName:"li"},"Table"),"\u7EC4\u4EF6\u9700\u8981\u6570\u636E\u683C\u5F0F\u7684 Promise \u5BF9\u8C61\uFF0C\u5373\u53EF\u5BF9",e("inlineCode",{parentName:"li"},"dataSource"),"\u8FDB\u884C\u63A7\u5236\u3002"),e("li",{parentName:"ol"},"\u652F\u6301\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u7075\u6D3B\u63A7\u5236\u8868\u683C\u3002"),e("li",{parentName:"ol"},"Table \u6539\u5199\u4E86",e("inlineCode",{parentName:"li"},"antd Table"),"\u4E2D",e("inlineCode",{parentName:"li"},"columns"),"\u7684",e("inlineCode",{parentName:"li"},"render"),"\u65B9\u6CD5\uFF0C\u53C2\u6570",e("inlineCode",{parentName:"li"},"ctx"),"\u4E2D\u53EF\u4EE5\u62FF\u5230",e("inlineCode",{parentName:"li"},"table"),"\u5B9E\u4F8B\u65B9\u6CD5\u3002")),e("h2",null,"demos"),e("p",null,"\u57FA\u7840\u4F7F\u7528"),e(c,{...R,mdxType:"Demo"}),e("p",null,"\u5B9E\u4F8B\u65B9\u6CD5"),e(c,{...A,mdxType:"Demo"}),e("h2",null,"\u540E\u7AEF\u5206\u9875\u683C\u5F0F"),e("p",null,"\u4E0B\u53D1\u53C2\u6570"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`interface RequestParams {
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
  extends Omit<ATableProps<RecordType>, 'dataSource' | 'loading' | 'rowSelection' | 'columns'> {
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
`)))}d.isMDXComponent=!0;var v=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}));const M={};M.main=v;export{M as default};
