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
    ENV_host: 'http://192.168.0.17:8080',
    ENV_backUrl: 'http://192.168.0.17:3000',
    ssoHost: 'http://192.168.0.17:1000',
    authType: 'password',
    clientId: '00002',
    clientSecret: 'U3JFM1DAjYeenXGspuQHks4lHGQcTc'
  },
  links: [{ rel: 'icon', href: './title.png' }],
  dynamicImport: {
    loading: '@/components/Loading'
  },
  theme,
  proxy: {
    '/api': {
      target: 'http://192.168.0.17:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'http://192.168.0.17:3000/documentation/json',
      mock: false
    }
  ]
});
