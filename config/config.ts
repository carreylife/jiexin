import { defineConfig } from 'umi';
import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';
import defaultSettings from './defaultSettings';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: pageRoutes,
  fastRefresh: {},
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  lessLoader: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  chainWebpack: webpackPlugin,
});
