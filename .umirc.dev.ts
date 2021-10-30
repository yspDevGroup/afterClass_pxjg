/*
 * @Author: your name
 * @Date: 2021-09-24 16:43:37
 * @LastEditTime: 2021-10-30 12:53:15
 * @LastEditors: zpl
 * @Description: In User Settings Edit
 * @FilePath: \afterClass_pxjg\.umirc.dev.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    ENV_type: 'dev',
    ENV_title: '课后帮',
    ENV_subTitle: '课后服务平台',
    ENV_copyRight: '2021 版权所有：陕西五育汇智信息技术有限公司',
    ENV_host: 'http://afterclassPxjg.test.xianyunshipei.com',
    ENV_backUrl: 'http://api.test.xianyunshipei.com',
    ssoHost: 'http://sso.test.xianyunshipei.com',
    authType: 'wechat',
    clientId: 'ww73f350f785b450ab',
    clientSecret: 'GioaHZFINvGOlb3e6rW2BBgjVEpHi-CUYBxGpC0NI9c'
  },
  proxy: {
    '/api': {
      // target: 'http://api.test.xianyunshipei.com',
      target: 'http://192.168.0.113:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
});
