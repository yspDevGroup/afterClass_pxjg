/*
 * @description: 工具类
 * @author: zpl
 * @Date: 2021-08-09 10:36:53
 * @LastEditTime: 2022-04-01 05:23:56
 * @LastEditors: zpl
 */
import { history } from 'umi';
import { parse } from 'querystring';
import { getEnv } from '@/services/after-class-pxjg/other';

/**
 * 实时获取部署环境信息
 *
 * @return {*}  {Promise<BuildOptions>}
 */
export const getBuildOptions = async (): Promise<BuildOptions> => {
  const { data = {} } = ENV_debug ? {} : await getEnv();
  const { yspAppEnv = 'local', nodeEnv } = data;
  console.log('nodeEnv: ', nodeEnv);

  switch (yspAppEnv) {
    case 'production':
      // 生产环境
      return {
        ENV_type: 'prod',
        ENV_copyRight: '2021 版权所有：陕西五育汇智信息技术有限公司',
        ENV_host: 'http://afterclassPxjg.prod.xianyunshipei.com',
        ssoHost: 'http://sso.prod.xianyunshipei.com',
        clientId: '00003'
      };
    case 'chanming':
      // 禅鸣环境
      return {
        ENV_type: 'chanming',
        ENV_copyRight: '2021 版权所有：蝉鸣科技（西安）有限公司',
        ENV_host: 'http://afterclassPxjg.wuyu.imzhiliao.com',
        ssoHost: 'http://sso.wuyu.imzhiliao.com',
        clientId: '00003'
      };
    case '9dy':
      // 9朵云环境
      return {
        ENV_type: '9dy',
        ENV_copyRight: '2021 版权所有：广东九朵云科技有限公司',
        ENV_host: 'http://afterclassPxjg.9cloudstech.com',
        ssoHost: 'http://sso.9cloudstech.com',
        clientId: '00003'
      };
    case 'development':
      // 开发测试环境
      return {
        ENV_type: 'dev',
        ENV_copyRight: '2021 版权所有：陕西五育汇智信息技术有限公司',
        ENV_host: 'http://afterclassPxjg.test.xianyunshipei.com',
        ssoHost: 'http://sso.test.xianyunshipei.com',
        clientId: '00003'
      };
    default:
      // 默认为local，本地开发模式下请在此处修改配置，但不要提交此处修改
      return {
        ENV_type: 'dev',
        ENV_copyRight: '2021 版权所有：陕西五育汇智信息技术有限公司',
        ENV_host: 'http://localhost:8080',
        ssoHost: 'http://platform.test.xianyunshipei.com',
        // ssoHost: 'http://192.168.0.17:1000',
        clientId: '00003'
      };
  }
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

/**
 * 根据路径search拼接参数获取参数对应的值
 *
 * @export
 * @returns
 */
export const getQueryString = (name: string) => {
  const regs = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = decodeURI(window.location.search.substr(1)).match(regs);
  if (r !== null) return unescape(r[2]);
  return null;
};

/**
 * 判断运行环境
 *
 * @return {*}
 */
export const envjudge = (): PlatType => {
  const isMobile = window.navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  ); // 是否手机端
  const isWx = /micromessenger/i.test(navigator.userAgent); // 是否微信
  const isComWx = /wxwork/i.test(navigator.userAgent); // 是否企业微信
  if (isMobile) {
    if (isComWx) {
      return 'com-wx-mobile'; // 手机端企业微信
    }
    if (isWx) {
      return 'wx-mobile'; // 手机端微信
    }
    return 'mobile'; // 手机
  }
  if (isComWx) {
    return 'com-wx-pc'; // PC端企业微信
  }
  if (isWx) {
    return 'wx-pc'; // PC端微信
  }
  return 'pc'; // PC
};

/**
 * 根据运行环境获取登录地址
 *
 * @param {BuildOptions} [buildOptions] 环境配置信息
 * @param {boolean} [reLogin] 是否强制重登录
 * @return {*} {string}
 */
export const getLoginPath = (buildOptions?: BuildOptions, reLogin?: boolean): string => {
  const { ssoHost, ENV_host, clientId } = buildOptions || {};
  const authType: AuthType = (localStorage.getItem('authType') as AuthType) || 'local';
  let loginPath: string;
  switch (authType) {
    case 'wechat':
      // 前提是本应该已经注册为微信认证，且正确配置认证回调地址为 ${ENV_host}/AuthCallback/wechat
      loginPath = `${ssoHost}/wechat/authorizeUrl?suiteID=${clientId}`;
      break;
    case 'authorization_code':
      // TODO 待处理
      loginPath = `${ssoHost}/oauth2/code?client_id=${clientId}&response_type=${authType}&redirect_uri=${''}state=${''}scope=${''}`;
      break;
    case 'password':
      {
        // 为方便本地调试登录，认证回调地址通过参数传递给后台
        const callback = encodeURIComponent(`${ENV_host}/AuthCallback/password`);
        loginPath = `${ssoHost}/oauth2/password?response_type=${authType}&client_id=${clientId}&redirect_uri=${callback}&reLogin=${
          reLogin || 'false'
        }`;
      }
      break;
    case 'local':
    default:
      loginPath = '/user/login';
  }
  return loginPath;
};

/**
 * 跳转到指定URL连接
 *
 * @param {string} url 跳转链接
 * @param {boolean} onTop 是否在top上跳转
 */
export const gotoLink = (url: string, onTop?: boolean) => {
  if (url.startsWith('http')) {
    // 外部连接
    const win = onTop ? window.top || window : window;
    win.location.href = url;
  } else {
    // 本系统内跳转
    history.push(url);
  }
};

/**
 * base64编码
 *
 * @param {string} str
 * @return {*}
 */
export const base64Encode = (str: string): string => {
  const buff = Buffer.from(str, 'utf-8');
  const base64 = buff.toString('base64');
  return base64;
};

/**
 * base64解码
 *
 * @param {string} str
 * @return {*}
 */
export const base64Decode = (str: string): string => {
  const buff = new Buffer(str, 'base64');
  const s = buff.toString();
  return s;
};

/**
 * 从缓存中取出oAuth token
 *
 * @return {*}
 */
export const getOauthToken = () => {
  return {
    ysp_access_token: localStorage.getItem('ysp_access_token'),
    ysp_expires_in: localStorage.getItem('ysp_expires_in'),
    ysp_refresh_token: localStorage.getItem('ysp_refresh_token'),
    ysp_token_type: localStorage.getItem('ysp_token_type')
  };
};

/**
 * 客户端保存oAuth token
 *
 * @param {TokenInfo} token
 */
export const saveOAuthToken = async (token: TokenInfo) => {
  return new Promise((resolve, reject) => {
    localStorage.setItem('ysp_access_token', token.access_token);
    localStorage.setItem('ysp_expires_in', token.expires_in || '0');
    localStorage.setItem('ysp_refresh_token', token.refresh_token || '');
    localStorage.setItem('ysp_token_type', token.token_type || 'Bearer');
    setTimeout(() => {
      resolve('');
    }, 200);
  });
};

/**
 * 客户端清除oAuth token
 *
 */
export const removeOAuthToken = () => {
  localStorage.removeItem('ysp_access_token');
  localStorage.removeItem('ysp_expires_in');
  localStorage.removeItem('ysp_refresh_token');
  localStorage.removeItem('ysp_token_type');
};

/**
 * 组装请求头部token信息
 *
 * @return {*}  {string}
 */
export const getAuthorization = (): string => {
  const tokenType = localStorage.getItem('ysp_token_type') || 'Bearer';
  const accessToken = localStorage.getItem('ysp_access_token');
  if (tokenType && accessToken) {
    return `${tokenType} ${accessToken}`;
  }
  return '';
};

/**
 * 封装获取 cookie 的方法
 *
 * @param {string} name
 * @return {*}
 */
export const getCookie = (name: string): string => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) {
    return unescape(arr[2]);
  }
  return '';
};

// 获取当前页面大小的方法
export const getWidHei = () => {
  let width;
  let height;
  if (window.innerWidth) {
    width = window.innerWidth;
    height = window.innerHeight;
  } else if (document.compatMode === 'BackCompat') {
    width = document.body.clientWidth;
    height = document.body.clientHeight;
  } else {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
  }
  return {
    width,
    height
  };
};
/**
 * 根据当前时间获取学年学期
 *
 * @param {API.XNXQ[]} list
 * @return {*}  {(API.XNXQ | null)}
 */
export const getCurrentXQ = (list: API.XNXQ[]): API.XNXQ | null => {
  if (!list.length) {
    return null;
  }
  const today = new Date();
  const currentXQ = list.find((xq: any) => {
    const begin = new Date(xq.KSRQ);
    const end = new Date(xq.JSRQ);
    if (begin <= today && today <= end) {
      return true;
    }
    return false;
  });
  if (currentXQ) {
    return currentXQ;
  }
  // 未找到匹配学期时返回前一个
  // 先按降序排序
  const tempList = list.sort((a, b) => new Date(b.KSRQ).getTime() - new Date(a.KSRQ).getTime());
  const previousXQ = tempList.find((xq) => new Date() >= new Date(xq.JSRQ));
  if (previousXQ) {
    return previousXQ;
  }
  return tempList[tempList.length - 1];
};

export const getTableWidth = (columns: any[]) => {
  if (columns.length > 0) {
    let sum = 0;
    columns.forEach(({ width }) => {
      if (Number.isFinite(width)) {
        sum += width;
      } else {
        // 如果width 不是number类型默认家100
        sum += 100;
      }
    });
    // console.log('列表宽度',sum);
    return sum;
  }
  return 1300;
};
