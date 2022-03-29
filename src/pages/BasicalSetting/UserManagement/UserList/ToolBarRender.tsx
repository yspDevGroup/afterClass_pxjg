/*
 * @description: 渲染工具栏
 * @author: zpl
 * @Date: 2021-11-19 11:12:16
 * @LastEditTime: 2022-03-29 17:25:23
 * @LastEditors: zpl
 */
import PutUser from './PutUser';

/**
 * 企业维度表格的操作按钮
 *
 */
export const toolBarRender = ({
  CorpID,
  createHandler
}: {
  /** 当前机构ID */
  CorpID: string;
  /** 创建用户方法 */
  createHandler: (data: API.CreateTeacherUser | API.updateTeacherUser) => Promise<boolean>;
}) => {
  if (CorpID) return [<PutUser key="createUser" CorpID={CorpID} onSave={createHandler} />];
  return [];
};
