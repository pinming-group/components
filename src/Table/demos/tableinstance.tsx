import React from 'react';
import { Table, ButtonActions } from 'luckybird';
import { Card, Space } from 'antd';
import type { TableInstance } from 'luckybird';
import { type RecordType, remoteDataSource, columns } from './config';

const Demo = () => {
  const ref = React.useRef<TableInstance<RecordType>>(null);

  return (
    <Card>
      <Space size={16} direction="vertical" style={{ marginBottom: 16 }}>
        <ButtonActions
          actions={[
            {
              children: '获取选中行',
              onClick: () => {
                const selectedRows = ref.current!.getSelectedRows();
                const selectedRowKeys = ref.current!.getSelectedRowKeys();
                console.log('select', selectedRowKeys, selectedRows);
              },
            },
            {
              children: '获取数据源',
              onClick: () => {
                const dataSource = ref.current!.getDataSource();
                console.log('dataSource', dataSource);
              },
            },
            {
              children: '获取loading',
              onClick: () => {
                const loading = ref.current!.getLoading();
                console.log('loading', loading);
              },
            },
            {
              children: '获取分页',
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
              children: '刷新表格',
              onClick: () => {
                ref.current!.refresh();
              },
            },
            {
              children: '重置表格',
              onClick: () => {
                ref.current!.reset();
              },
            },
            {
              children: '强制更新',
              onClick: () => {
                ref.current!.forceUpdate();
              },
            },
          ]}
        />
        <ButtonActions
          actions={[
            {
              children: '设置选中行',
              onClick: () => {
                const dataSource = ref.current!.getDataSource();
                const selectedRows = dataSource.filter((item) => item.id === '1' || item.id === '2');
                ref.current!.setSelectedRows(selectedRows);
              },
            },
            {
              children: '清空选中行',
              onClick: () => {
                ref.current!.setSelectedRows([]);
              },
            },
            {
              children: '切换loading',
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
