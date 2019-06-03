const fs = require("fs"),
    uglifyJS = require("uglify-js"),
    AWSS3_URL = "https://s.yimg.com/cv/apiv2/default/yahoo/bb/assets",
    ASSETS_PATH = "./assets/";

// preprocess all the given JS files
var options = {
    mangle: {},
    compress: {}
};
const uglified = uglifyJS.minify(
    {
        [`${ASSETS_PATH}/js/es6-promise.js`]: fs.readFileSync(
            `${ASSETS_PATH}/js/es6-promise.js`,
            "utf8"
        ),
        [`${ASSETS_PATH}/js/fetch.umd.js`]: fs.readFileSync(
            `${ASSETS_PATH}/js/fetch.umd.js`,
            "utf8"
        ),
        [`${ASSETS_PATH}/js/index.js`]: fs.readFileSync(
            `${ASSETS_PATH}/js/index.js`,
            "utf8"
        )
    },
    options
).code;
const datafied = uglified.replace(/\.\/assets/g, AWSS3_URL);

fs.writeFileSync("build/bundle-1.0.9.js", datafied, "utf8");

console.log("Successfully JS uglified.");
