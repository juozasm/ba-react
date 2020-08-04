module.exports = function (api) {
    api.cache(false)
    const presets = [
        "@babel/preset-react",
        ["@babel/preset-typescript"],
        [
            "@babel/preset-env",
            {
                corejs: { version: 3 },
                useBuiltIns: "usage",
                targets: {
                    browsers:[
                        "last 5 versions",
                        "ie >= 9"
                      ],
                      "node": "current"
                },
            },
        ],
    ]
    const plugins = [
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
        ["@babel/plugin-proposal-class-properties"],
        ["@babel/transform-runtime"],
    ]
    return {
        presets,
        plugins,
    }
}
