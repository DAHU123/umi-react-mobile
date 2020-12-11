import { defineConfig } from 'umi';
import pageRoute from './config/router.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: pageRoute,
  dva: {},
  extraBabelPlugins: [
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": "css" }]
  ],
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 375,//如果设置成750，antd-mobile的样式会整体缩小1倍，平时在拿到750的设计稿的时候，除以2换算一下就行了
      unitPrecision: 5,
      viewportUnit: 'vw',
      minPixelValue: 1,
      include: /\/src\//
    }),
  ],
});
