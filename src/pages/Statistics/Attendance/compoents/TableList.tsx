import { getTableWidth } from '@/utils';
import ProTable from '@ant-design/pro-table';

const Table = (props: any) => {
  const { dataSource, columns } = props;

  return (
    <>
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
    </>
  );
};
export default Table;
