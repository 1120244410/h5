const glob = require("glob"); // glob全局的文件匹配器

const pages = {};

module.exports = function() {
  // 路径中的/*号表示此路径下的所有文件，/*.js表示此路径所有.js文件
  glob.sync("./src/pages/*/*.js").forEach(filePath => {
    const pathSlice = filePath.split("/");
    const fileName = pathSlice[pathSlice.length - 2];
    pages[fileName] = {
      entry: `src/pages/${fileName}/index.js`,

      template: `src/pages/${fileName}/index.html`, // 模板来源

      filename: `${fileName}.html`, // 在 dist/index.html 的输出

      chunks: ["chunk-vendors", "chunk-common", `${fileName}`] // 提取出来的通用 chunk 和 vendor chunk。
    };
  });
  return pages;
};
