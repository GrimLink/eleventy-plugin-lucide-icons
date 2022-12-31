const eleventyPluginLucideicons = require("../index");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPluginLucideicons, {
        size: 64,
    });
};
