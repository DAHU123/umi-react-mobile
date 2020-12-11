import { defineConfig } from 'umi';
import pageRoute from './config/router.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: pageRoute,
  dva: {},
  extraBabelPlugins: [
    ["import", { "libraryName": "antd-mobile", "style": "css" }]
  ]
});
