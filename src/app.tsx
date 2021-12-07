/* eslint-disable no-debugger */
/*
 * @description: 运行时配置
 * @author: zpl
 * @Date: 2021-08-09 10:44:42
 * @LastEditTime: 2021-12-03 11:25:07
 * @LastEditors: Sissle Lynn
 */
import { notification, message } from 'antd';
import { history } from 'umi';
import type { RequestConfig } from 'umi';
import type { ResponseError } from 'umi-request';
import LoadingPage from '@/components/Loading';
import { getAuthorization, getBuildOptions, getCookie, removeOAuthToken } from './utils';

import { currentUser as getCurrentUser } from '@/services/after-class-pxjg/user';
import { currentWechatUser } from '@/services/after-class-pxjg/wechat';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <LoadingPage />
};

/**
 * 项目初始化数据
 *
 * @export
 * @return {*}
 */
export async function getInitialState(): Promise<InitialState> {
  console.log('process.env.REACT_APP_ENV: ', process.env.REACT_APP_ENV);
  const buildOptions = await getBuildOptions();
  const fetchUserInfo = async (): Promise<UserInfo | null> => {
    const res =
      buildOptions.authType === 'wechat'
        ? await currentWechatUser({ plat: 'agency' })
        : await getCurrentUser({ plat: 'agency' });
    const { status, data } = res;
    if (status === 'ok' && data?.info) {
      return data.info;
    }
    const isFirstPage = location.pathname !== '/' && !location.pathname.toLowerCase().startsWith('/authcallback');
    isFirstPage && message.warn(res.message === 'Invalid Token!' ? '未登录' : res.message);
    return null;
  };
  const user = await fetchUserInfo();
  return {
    currentUser: user,
    buildOptions
  };
}

/**
 * 在初始加载和路由切换时做一些事情
 *
 * @export
 * @param {{
 *   location: any;
 *   matchedRoutes: any;
 *   routes: any;
 *   action: any;
 * }} {
 *   matchedRoutes,
 * }
 */
export function onRouteChange({ matchedRoutes }: { location: any; matchedRoutes: any; routes: any; action: any }) {
  // 埋点统计
  // bacon(location.pathname);

  // 控制title显示
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || ENV_title;
  }
}

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '账号未登录。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  413: '上传文件超过最大限制。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

/** 异常处理程序
 * @see https://beta-pro.ant.design/docs/request-cn
 */
const errorHandler = (error: ResponseError) => {
  const { response, data } = error;

  if (response?.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    switch (response.status) {
      // 单独处理400分支
      case 400:
        if (data.error && data.error_description) {
          switch (data.error) {
            case 'invalid_grant':
              message.error('用户名或密码错误');
              break;
            default:
              message.error(data.error_description);
              break;
          }
        } else {
          message.error(errorText);
        }
        break;
      case 401:
        {
          removeOAuthToken();
          const path = location.pathname.toLowerCase();
          const isAuthPage = path.startsWith('/authcallback');
          if (!isAuthPage) {
            history.push(`/403`);
            return;
          }
        }
        break;
      default:
        message.error(errorText);
        break;
    }
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常'
    });
  }
  throw error;
};

export const request: RequestConfig = {
  errorHandler,
  credentials: 'include',
  prefix: '/api',
  middlewares: [
    async function middlewareA(ctx, next) {
      ctx.req.options.headers = {
        'x-csrf-token': getCookie('csrfToken'),
        Authorization: getAuthorization(),
        ...ctx.req.options.headers
      };
      await next();
      const path = window.location.pathname.toLowerCase();
      if (
        ctx.res.status !== 'ok' &&
        path !== '/' &&
        !path.startsWith('/authcallback') &&
        !path.startsWith('/40') &&
        (ctx.res.message?.includes('Authorization token is invalid') || ctx.res.message?.includes('Invalid Token'))
      ) {
        history.replace('/403?title=认证信息已失效，请重新登录');
      }
    }
  ]
};
