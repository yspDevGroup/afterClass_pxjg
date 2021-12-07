/*
 * @description: 鉴权失败界面
 * @author: zpl
 * @Date: 2021-07-14 17:11:16
 * @LastEditTime: 2021-12-03 11:20:16
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { history, useModel } from 'umi';
import { Result, Button } from 'antd';
import { getLoginPath, gotoLink } from '@/utils';

const NotFind = () => {
  const { initialState } = useModel('@@initialState');
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您无权访问此页面。"
      extra={
        <Button
          type="primary"
          onClick={() => {
            const loginPath = getLoginPath(initialState?.buildOptions, true);
            gotoLink(loginPath, true);
          }}
        >
          返回首页
        </Button>
      }
    />
  );
};

export default NotFind;
