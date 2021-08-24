/*
 * @description: 404路由
 * @author: zpl
 * @Date: 2021-07-14 17:11:16
 * @LastEditTime: 2021-07-14 17:16:17
 * @LastEditors: zpl
 */
import React from 'react';
import { history } from 'umi';
import { Result, Button } from 'antd';

const NotFind = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.replace('/');
          }}
        >
          返回首页
        </Button>
      }
    />
  );
};

export default NotFind;
