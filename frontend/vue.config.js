const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../dashboards/static/dashboards"),
    assetsDir: "../../static/dashboards",
    indexPath: "../../templates/vue-index.html",
    filenameHashing: false,

    configureWebpack: {
        output: {
            chunkFilename: "../../static/dashboards/[id]-[chunkhash].js",
            // DO allow webpack to hash chunks.
        },
    },
    devServer: {
        writeToDisk: true
    }

    // chainWebpack: config => {
    //     config.devServer
    //     .public('http://127.0.0.1:8080')
    //     .hotOnly(true)
    //     .headers({"Access-Control-Allow-Origin": "*"})
    //     .writeToDisk(filePath => filePath.endsWith('index.html'));
    // }

}
