// Change theme plugin
import ThemeColorReplacer from 'webpack-theme-color-replacer';
import generate from '@ant-design/colors/lib/generate';

export default (config: any) => {
  config.plugin('webpack-theme-color-replacer').use(ThemeColorReplacer, [
    {
      fileName: 'css/theme-colors-[contenthash:8].css',
      matchColors: getAntdSerials('#1890ff'), // 主色系列
      // isJsUgly: true,
    },
  ]);
};

const getAntdSerials = (color: string) => {
  const lightNum = 9;
  const devide10 = 10;
  // 淡化（即less的tint）
  const lightens = new Array(lightNum).fill(undefined).map((_, i: number) => {
    return ThemeColorReplacer.varyColor.lighten(color, i / devide10);
  });
  const colorPalettes = generate(color);
  const rgb = ThemeColorReplacer.varyColor
    .toNum3(color.replace('#', ''))
    .join(',');
  return lightens.concat(colorPalettes).concat(rgb);
};
