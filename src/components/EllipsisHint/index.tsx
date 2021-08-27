import { Tooltip } from 'antd';
import styles from './index.module.less';

/**
 * 超出部分省略号显示组件
 * @param props
 * @returns
 */
const EllipsisHint = (props: { text: any; width?: string | number; twoLines?: number }) => {
  const { text, width, twoLines } = props;
  return (
    <Tooltip title={text}>
      <div style={{width: width || 200, WebkitLineClamp:twoLines || 1 }} className={styles.ellips2} >{text}</div>
    </Tooltip>
  )
}

export default EllipsisHint;
