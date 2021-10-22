/*
 * @Author: 蝉鸣配置
 * @Date: 2021-09-24 16:43:37
 * @LastEditTime: 2021-10-22 12:42:14
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
    ENV_title: '课后帮',
    ENV_subTitle: '课后服务平台',
    ENV_copyRight: '2021 版权所有：蝉鸣科技（西安）有限公司',
    ENV_host: 'http://afterclassPxjg.wuyu.imzhiliao.com',
    ENV_backUrl: 'http://api.wuyu.imzhiliao.com',
    ssoHost: 'http://sso.wuyu.imzhiliao.com',
    authType: 'wechat',
    clientId: 'ww47296cadbd4de507',
    clientSecret: 'Do9LvJl3Xnf8Tj0rt9iy-wvcT-shBvdzsQZqp4IKkJc'
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
