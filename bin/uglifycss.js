const fs = require("fs"),
    uglifycss = require("uglifycss"),
    AWSS3_URL = "https://s.yimg.com/cv/apiv2/default/sites/billboard/assets",
    ASSETS_PATH = "./assets/";

// preprocess all the given CSS files
const uglified = uglifycss.processFiles(
    [
        `${ASSETS_PATH}/css/normalize.css`,
        `${ASSETS_PATH}/css/bootstrap-grid.min.css`,
        `${ASSETS_PATH}/css/index.css`
    ],
    { maxLineLen: 500, expandVars: true }
);

// inject the AWS S3 URL for all the assets
const imagified = uglified.replace(/\.\.\/\.\.\/assets/g, AWSS3_URL);

fs.writeFile("build/bundle-1.0.0.css", imagified, function(err) {
    if (err) throw err;
    console.log("Successfully CSS uglified.");
});
