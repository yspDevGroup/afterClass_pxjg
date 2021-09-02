import { defineConfig } from 'umi';
import theme from './theme';

export default defineConfig({
  mock: false,
  // mfsu: {},
  nodeModulesTransform: {
    type: 'none'
  },
  fastRefresh: {},
  define: {
    ENV_title: '课后帮',
    ENV_subTitle: '课后服务平台',
    ENV_copyRight: '2021 版权所有：陕西凯锐信息技术有限公司',
    ENV_host: 'http://afterclass_pxjg.test.xianyunshipei.com',
    ENV_backUrl: 'http://api.test.xianyunshipei.com',
    ssoHost: 'http://platform.test.xianyunshipei.com',
    authType: 'password',
    clientId: 'ww73f350f785b450ab',
    clientSecret: 'GioaHZFINvGOlb3e6rW2BBgjVEpHi-CUYBxGpC0NI9c'
  },
  links: [{ rel: 'icon', href: './title.png' }],
  dynamicImport: {
    loading: '@/components/Loading'
  },
  theme,
  proxy: {
    '/api': {
      target: 'http://192.168.0.113:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'http://192.168.0.113:3000/documentation/json',
      mock: false
    }
  ]
});
