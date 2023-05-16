const { config } = require("@swc/core/spack");

module.exports = config({
    externalModules: [],
    mode: "production",
    module: {},
    options: undefined,
    target: "browser",
    workingDir: "",
    entry: {
        web: __dirname + "/src/index.ts",
    },
    output: {
        path: __dirname + "/lib",
        name: "index.js",
    }
});