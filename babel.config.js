module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'], // Define a raiz como a pasta src
          alias: {
            '@': './src', // O alias @ aponta para src
          },
        },
      ],
      'react-native-reanimated/plugin', // Adicionando o plugin de animação
    ],
  };
};
