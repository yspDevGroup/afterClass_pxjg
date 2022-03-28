# 用户列表组件

## API

| 配置项        | 是否必填 | 值                 | 默认值    | 说明             |
| ------------- | -------- | ------------------ | --------- | ---------------- |
| CorpID        | 是       | string             |           | 机构ID           |
| readonly      | 否       | true               | undefined | 是否只读模式     |
| hiddenTitle   | 否       | true               | undefined | 是否隐藏头部标题 |
| filterType    | 否       | 'query' \| 'light' | 'query'   | 搜索表单样式     |
| columnOptions | 否       | Object             | undefined | 列配置           |

### ColumnOptions 配置

- 用户属性名，每个属性代表一列，均可配置以下属性

```js
{    /** 是否在表格中隐藏 */
    hidden?: true;
    /** 列宽 */
    width?: number;
    /** 是否参与搜索 */
    search?: false;
}
```

- putUsers

```js
/** 更新用户方法 */
  putUsers: (id: string, info: TeacherUser.UserInfo) => Promise<TeacherUser.UserInfo>;
```
