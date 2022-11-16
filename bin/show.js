#!/usr/bin/env node

const helpers = require('../helpers');

let config = helpers.getConfigFile();

if (!config) {
    console.log('Command called from wrong location. CD to the repos location then try again.')
    return;
}

console.log(config);
