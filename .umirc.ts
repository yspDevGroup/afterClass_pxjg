import { defineConfig } from 'umi';
import theme from './theme';

export default defineConfig({
  mock: false,
  mfsu: {},
  nodeModulesTransform: {
    type: 'none'
  },
  fastRefresh: {},
  define: {
    ENV_title: '智慧校园',
    ENV_backUrl: 'http://192.168.0.113:3000'
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
  }
});
