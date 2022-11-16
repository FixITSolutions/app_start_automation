#!/usr/bin/env node

const yargs = require('yargs');
const helpers = require('../helpers');

const fileInfo = yargs
    .usage('Usage: $0 path [string] name [string] closeName [string]')
    .demandOption(['path', 'name'])
    .example('--path C:/Users/AppData/Local/slack/ --name slack.exe')
    .help('h')
    .alias('h', 'help').argv;

let config = helpers.getConfigFile();

if (!config) {
    console.log('Command called from wrong location. CD to the repos location then try again.')
    return;
}

let appDetails = {
    fileName: fileInfo.name,
    filePath: fileInfo.path
}

if (fileInfo.closeName) {
    appDetails.closeName = fileInfo.closeName;
}

config.WORK_APPS.push(appDetails);

const fileWrote = helpers.writeConfigFile(config);

if (!fileWrote) {
    console.log('Command called from wrong location. CD to the repos location then try again.')
    return;
}

console.log(`Succesfully added your app to your configs`);
