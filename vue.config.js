module.exports = {
    outputDir: 'build',
    indexPath: 'index.html',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        unitToConvert: "px",
                        viewportWidth: 375,
                        unitPrecision: 5,
                        propList: [
                            "*"
                        ],
                        viewportUnit: "vw",
                        fontViewportUnit: "vw",
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: /(\/|\\)(node_modules)(\/|\\)/,
                    })
                ]
            }
        }
    },
}