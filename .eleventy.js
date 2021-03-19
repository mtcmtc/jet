const htmlmin = require("html-minifier");
const isProduction = process.env.NODE_ENV === `production`;

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/styles.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy({"./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js"});
  eleventyConfig.addShortcode("version", function () { return String(Date.now()) });


  isProduction && eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if(outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}