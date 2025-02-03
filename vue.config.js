const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.plugin("monaco").use(
      new MonacoWebpackPlugin({
        languages: ["javascript", "typescript", "python", "java", "cpp"], // 添加更多语言支持
        features: ["coreCommands", "find", "format", "suggest"], // 添加更多功能
      })
    ); //使用monaco-editor-webpack-plugin
    // 构建优化,提取公共模块
    config.optimization.splitChunks({
      chunks: "all",
      cacheGroups: {
        vendors: {
          name: "chunk-vendors", // 第三方库代码
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        common: {
          name: "chunk-common", // 公共模块代码
          minChunks: 2, // 至少被引用2次才会被提取
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true,
        },
      },
    });
  },
  pwa: {
    name: "Test-OJ",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxOptions: {
      skipWaiting: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // sass-loader 配置
      },
      less: {
        // less-loader 配置
      },
      postcss: {
        // postcss 配置
      },
    },
  },
});
