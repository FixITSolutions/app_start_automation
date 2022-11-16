#!/usr/bin/env node

const yargs = require('yargs');
const cpm = require('child_process');
const config = require('../config');
const helpers = require('../helpers');

const options = yargs.usage('Usage: -j <joke>').option('j', {
    alias: 'joke',
    describe: 'Do you want a joke?',
    type: 'string',
    demandOption: true
}).example('y/n').argv;

if (options.joke === 'y' || options.joke === 'yes') {
    helpers.showRandomJoke();
}

if (!config.WORK_APPS || config.WORK_APPS.length === 0) {
    return;
}

if (config.WORK_APPS) {
    config.WORK_APPS.forEach((app) => {
        cpm.exec(`taskkill/im"" "${app.closeName ? app.closeName : app.fileName}"`, {
            cwd: app.filePath
        });
    });
}
