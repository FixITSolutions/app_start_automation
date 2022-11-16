#!/usr/bin/env node

const appDescription = {
    title: 'Simple node.js app, easy to setup and use to start and close your work day',
    commands: [
        'addApp',
        'removeApp',
        'start',
        'close',
        'addMyName',
        'show'
    ]
};
console.log(appDescription.title);
console.log('Available commands:');
console.log(appDescription.commands);
console.log('Give it a spin!');
