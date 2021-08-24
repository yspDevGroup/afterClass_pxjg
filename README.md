# afterClass_pxjg
课后服务培训机构端

Install dependencies,

```bash
$ yarn
```
如何启用openAPI功能：

1、
```bash
$ yarn add @umijs/plugin-openapi
```
2、
在根目录下的.umirc.ts文件defineConfig中增加:
```js
openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'http://192.168.0.113:3000/documentation/json',
      mock: false,
    },
  ],
```
3、在package.json 的 scripts 中增加一个命令：
```
"openapi": "umi openapi",
```
## 关于 openapi 脚本生成的接口文件多一个 params 参数的问题

请检查 [源码](node_modules@umijs\openapi\dist\serviceGenerator.js) 第 455 行，把

```js
templateParams['path'] = templateParams['path'] || [];
```

移入下面的 where 循环内最终结果为

```js
if (path && path.length > 0) {
  var regex = /\{(\w+)\}/g;
  // templateParams['path'] = templateParams['path'] || [];
  let match = null;
  while ((match = regex.exec(path))) {
    templateParams['path'] = templateParams['path'] || [];
    if (!templateParams['path'].some((p) => p.name === match[1])) {
      templateParams['path'].push(
        Object.assign(Object.assign({}, DEFAULT_PATH_PARAM), { name: match[1] }),
      );
    }
  }
}
```

Start the dev server,

```bash
$ yarn start
```
