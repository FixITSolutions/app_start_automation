#!/usr/bin/env node

const yargs = require('yargs');
const helpers = require('../helpers');
const config = require('../config');

const options = yargs.usage('Usage: -i <name>').option('i', {
    alias: 'index',
    describe: 'app index',
    type: 'number',
    demandOption: true
}).argv;

if (config.WORK_APPS.length === 0) {
    console.log(`Your Apps are empty, add some and then remove.`);

    return;
}

if (options.index >= config.WORK_APPS.length || typeof options.index !== 'number') {
    console.log(`Invalid Index, try again.`);

    return;
}

let configFile = helpers.getConfigFile();

if (!config) {
    console.log('Command called from wrong location. CD to the repos location then try again.')
    return;
}

configFile.WORK_APPS.splice(options.index, 1);

const fileWrote = helpers.writeConfigFile(config);

if (!fileWrote) {
    console.log('Command called from wrong location. CD to the repos location then try again.')
    return;
}

console.log(`Succesfully removed the app from your configs`);
