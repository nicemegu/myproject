 const { override, fixBabelImports, addLessLoader,addDecoratorsLegacy,addWebpackAlias } = require('customize-cra');
//按需加载
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
   style: true,
  }),
  //自定义主题
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: { '@primary-color': '#1DA57A' },
 }),
 addDecoratorsLegacy(),
 addWebpackAlias()
);