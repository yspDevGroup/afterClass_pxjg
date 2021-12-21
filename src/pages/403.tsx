/*
 * @description: 鉴权失败界面
 * @author: zpl
 * @Date: 2021-07-14 17:11:16
 * @LastEditTime: 2021-12-21 12:36:31
 * @LastEditors: zpl
 */
import React from 'react';
import { useModel } from 'umi';
import { Result, Button } from 'antd';
import { getLoginPath, getPageQuery, gotoLink } from '@/utils';

const NotFind = () => {
  const { initialState } = useModel('@@initialState');
  const query = getPageQuery();
  const msg = query['message'];

  return (
    <Result
      status="403"
      title="403"
      subTitle={msg || '抱歉，您无权访问此页面。'}
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
