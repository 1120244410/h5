const path = require("path");
const pageMethod = require("./scripts/getPages");
const BASE_PATH = process.env.BASE_PATH;
const OUTPUT_DIR = process.env.OUTPUT_DIR;

module.exports = {
  // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  // 基于history路由，使用pages构建多页面时，避免使用相对路径
  publicPath: BASE_PATH,
  outputDir: OUTPUT_DIR,
  pages: pageMethod(),
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    // open: true, // 项目构建成功之后，自动弹出页面
    // host: '192.168.0.52', // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
    // port: 8080, // 端口号，默认8080
    contentBase: path.join(__dirname, "index.html")
  }
};
