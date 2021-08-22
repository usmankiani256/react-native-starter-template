module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './app/assets',
          '@images': './app/assets/images',
          '@components': './app/components',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@services': './app/services',
          '@state': './app/state',
          '@theme': './app/theme',
        },
      },
    ],
  ],
}
