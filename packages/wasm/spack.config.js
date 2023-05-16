const { config } = require("@swc/core/spack");

module.exports = config({
    externalModules: [],
    mode: undefined,
    module: {},
    options: undefined,
    target: "node",
    workingDir: "",
    entry: {
        web: __dirname + "/src/index.ts",
    },
    output: {
        path: __dirname + "/lib",
        name: "index.js",
    }
});