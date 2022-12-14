module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "@babel/transform-flow-strip-types",
      'react-native-reanimated/plugin',
      'react-native-paper/babel'
    ],
  };
};
