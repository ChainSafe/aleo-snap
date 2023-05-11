const fs = require('fs');
const pathUtils = require('path');
const snapConfig = require('./snap.config');

const bundlePath = pathUtils.join(snapConfig.cliOptions.dist, snapConfig.cliOptions.outfileName);

let bundleString = fs.readFileSync(bundlePath, 'utf8');


// bundleString = bundleString.replace('          const {', '');
// bundleString = bundleString.replace('            TextDecoder,', '');
// bundleString = bundleString.replace('            TextEncoder', '');
// bundleString = bundleString.replace('          } = require(`util`);', '');


fs.writeFileSync(bundlePath, bundleString);