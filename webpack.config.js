// //configurar react-native-web
// const path = require('path');
// const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// module.exports = async function (env, arg){
//     const config = await createExpoWebpackConfigAsync(env, arg)
//     //ampliamos la configuración por defecto de expo
//    //añadimos una regla mas para forzar para que compile las dependecias de react native en expo 
//     config.module.rules.push({
//         test: /\.js$/,
//         loader: 'babel-loader',
//         include : [
//             path.join(__dirname, 'node_modules/react-router-native')
//         ]
//     })

//     return config
// }

const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, 'node_modules/react-router-native')],
  });

  return config;
};