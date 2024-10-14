const presets = ['module:@react-native/babel-preset'];
const plugins = [
  '@babel/plugin-transform-export-namespace-from',
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ts', '.tsx', '.json'],
      alias: {
        _assets: './src/assets',
        _components: './src/components',
        _hooks: './src/hooks',
        _locales: './src/locales',
        _mocks: './src/mocks',
        _navigation: './src/navigation',
        _providers: './src/providers',
        _constants: './src/constants',
        _screens: './src/screens',
        _store: './src/store',
        _theme: './src/theme',
        _utils: './src/utils',
        _types: './src/types',
      },
    },
  ],
  'react-native-reanimated/plugin',
];

module.exports = {
  presets,
  plugins,
};
