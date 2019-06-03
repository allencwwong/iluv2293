const fs = require("fs"),
    indexHTML = fs.readFileSync("index.html", "utf8"),
    minify = require("html-minifier").minify,
    AWSS3_URL = "https://s.yimg.com/cv/apiv2/default/yahoo/bb/assets";

// injecting the bundle.css for the local CSS files

const cssBundleInjectedHTML = indexHTML.replace(
    /<!-- CSS-START -->(.|\n)*?<!-- CSS-END -->/g,
    '<link rel="stylesheet" href="./bundle-1.0.9.css">'
);
const jsBundleInjectedHTML = cssBundleInjectedHTML.replace(
    /<!-- JS-START -->(.|\n)*?<!-- JS-END -->/g,
    '<script src="./bundle-1.0.9.js"></script>'
);

// minification of HTML elements
const minified = minify(jsBundleInjectedHTML, {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true
});

// inject the AWS S3 URL for all the assets
const imagified = minified.replace(
    /\.\/assets/g,
    "https://s.yimg.com/cv/apiv2/default/yahoo/bb/assets"
);

fs.writeFile("build/index.html", imagified, function(err) {
    if (err) throw err;
    console.log("Successfully HTML minified.");
});
