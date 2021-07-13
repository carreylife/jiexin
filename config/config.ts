import { defineConfig } from 'umi';
import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: pageRoutes,
  fastRefresh: {},
  theme: {
    '@primary-color': '#1890ff',
  },
  lessLoader: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  chainWebpack: webpackPlugin,
});
