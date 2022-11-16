#!/usr/bin/env node

const yargs = require('yargs');
const helpers = require('../helpers');

const options = yargs.usage('Usage: -n <name>').option('n', {
    alias: 'name',
    describe: 'Your name',
    type: 'string',
    demandOption: true
}).argv;

let config = helpers.getConfigFile();

if (!config) {
    console.log('Command called from wrong location. CD to the repos location then try again.')
    return;
}

config.NAME = options.name;

const fileWrote = helpers.writeConfigFile(config);

if (!fileWrote) {
    console.log('Command called from wrong location. CD to the repos location then try again.')
    return;
}

console.log(`Hello ${config.NAME}!`)
