import { message } from 'antd';
import themeColorClient from '@/pages/home/themeClient';

type themeState = {
  primaryColor: string;
};

export default {
  namespace: 'theme',
  state: {
    primaryColor: '#1890ff',
  },
  effects: {},
  reducers: {
    updateState(state: themeState, { payload }: any) {
      const { primaryColor } = payload;
      if (primaryColor) {
        const timeOut = 0;
        const hideMessage = message.loading('正在切换主题！', timeOut);
        themeColorClient.changeColor(primaryColor).finally(() => hideMessage());
      }

      return {
        ...state,
        ...payload,
      };
    },
  },
};
