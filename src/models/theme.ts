import themeColorClient from '@/pages/home/themeClient';

export default {
  namespace: 'theme',
  state: {
    primaryColor: '#FFFFFF',
  },
  effects: {},
  reducers: {
    updateState(state: any, { payload }: any) {
      const { primaryColor } = payload;
      themeColorClient.changeColor(primaryColor);

      return {
        ...state,
        ...payload,
      };
    },
  },
};
