/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-11-17 10:25:58
 * @LastEditTime: 2021-11-17 13:35:39
 * @LastEditors: Sissle Lynn
 */
import { Space } from "antd";
import styles from "./index.less";

const SearchLayout = (props: any) => {
  const { children } = props;
  return <Space size={[16, 16]} wrap align="center" className={styles.searchLayout}>
    {children}
  </Space>
};
export default SearchLayout;
