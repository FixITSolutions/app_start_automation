#!/usr/bin/env node

const cpm = require('child_process');
const config = require('../config');
const helpers = require('../helpers');

const greeting = `Hello, ${config.name ? config.name : 'Stranger'}! \n`;
console.log(greeting);

helpers.showRandomJoke();

if (!config.WORK_APPS || config.WORK_APPS.length === 0) {
    return;
}

setTimeout(() => {
    if (config.WORK_APPS) {
        config.WORK_APPS.forEach((app) => {
            cpm.exec(`start "" "${app.fileName}"`, {
                cwd: app.filePath
            }, (error) => {
                if (error) {
                    console.error(error);
                    return;
                }
            });
        });
    }
}, config.JOKE_READING_TIME);
