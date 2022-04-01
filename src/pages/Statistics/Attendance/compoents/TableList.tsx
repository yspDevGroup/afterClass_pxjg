import { getTableWidth } from '@/utils';
import ProTable from '@ant-design/pro-table';
import { Card } from 'antd';

const Table = (props: any) => {
  const { dataSource, columns } = props;

  return (
    <Card bordered={false} bodyStyle={{ padding: '24px 0 0 0 ' }}>
      <ProTable
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1
        }}
        scroll={{ x: getTableWidth(columns) }}
        columns={columns}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false
        }}
        dataSource={dataSource}
        search={false}
      />
    </Card>
  );
};
export default Table;
