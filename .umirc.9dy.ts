/*
 * @Author: 9朵云配置
 * @Date: 2021-09-24 16:43:37
 * @LastEditTime: 2021-10-30 12:52:55
 * @LastEditors: zpl
 * @Description: In User Settings Edit
 * @FilePath: \afterClass_pxjg\.umirc.ts
 */
import { defineConfig } from 'umi';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import theme from './theme';

const prodGzipList = ['js', 'css'];

export default defineConfig({
  mock: false,
  // mfsu: {},
  nodeModulesTransform: {
    type: 'none'
  },
  fastRefresh: {},
  define: {
    ENV_type: '9dy',
    ENV_title: '课后帮',
    ENV_subTitle: '课后服务平台',
    ENV_copyRight: '2021 版权所有：广东九朵云科技有限公司',
    ENV_host: 'http://afterclassPxjg.9cloudstech.com',
    ENV_backUrl: 'http://api.9cloudstech.com',
    ssoHost: 'http://sso.9cloudstech.com',
    authType: 'wechat',
    clientId: 'ww201fdc0b014dbbf5',
    clientSecret: '2apZaZvNHwzqcukXc54bzN6pmjel3U76Vgk15ecL3CY'
  },
  links: [{ rel: 'icon', href: './title.png' }],
  dynamicImport: {
    loading: '@/components/Loading'
  },
  theme,
  chainWebpack: (config) => {
    // 以下为gzip配置内容
    // if (process.env.NODE_ENV === 'production') {
    // 生产模式开启
    config.plugin('compression-webpack-plugin').use(
      new CompressionWebpackPlugin({
        // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
        algorithm: 'gzip', // 指定生成gzip格式
        test: new RegExp('\\.(' + prodGzipList.join('|') + ')$'), // 匹配哪些格式文件需要压缩
        threshold: 10240, //对超过10k的数据进行压缩
        minRatio: 0.6 // 压缩比例，值为0 ~ 1
      })
    );
    // }
  },
  proxy: {
    '/api': {
      // target: 'http://api.test.xianyunshipei.com',
      target: 'http://192.168.0.113:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // schemaPath: 'http://api.prod.xianyunshipei.com/documentation/json',
      schemaPath: 'http://192.168.0.113:3000/documentation/json',
      mock: false
    }
  ]
});
