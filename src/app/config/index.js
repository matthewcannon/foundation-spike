'use strict';
var environmentName = process.argv.slice(2),
    config = require('./' + environmentName);

module.exports = config;
