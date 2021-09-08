/*
 * @description: 鉴权失败界面
 * @author: zpl
 * @Date: 2021-07-14 17:11:16
 * @LastEditTime: 2021-09-08 12:28:46
 * @LastEditors: zpl
 */
import React from 'react';
import { history } from 'umi';
import { Result, Button } from 'antd';

const NotFind = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您无权访问此页面。"
      extra={
        <Button
          type="primary"
          onClick={() => {
            (window.top || window).location.href = '/';
          }}
        >
          返回首页
        </Button>
      }
    />
  );
};

export default NotFind;
