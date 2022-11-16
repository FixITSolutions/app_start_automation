const fs = require('fs');
const CONFIG_FILE_PATH = './config.json';

function getConfigFile() {
    if (!fs.existsSync(CONFIG_FILE_PATH)) {
        console.log('calling failed')
        return null;
    }
    
    let rawConfig = fs.readFileSync(CONFIG_FILE_PATH);
    return JSON.parse(rawConfig)
}

function writeConfigFile(fileData) {
    if (!fs.existsSync(CONFIG_FILE_PATH)) {
        console.log('writting failed')

        return false;
    }

    let data = JSON.stringify(fileData);
    fs.writeFileSync(CONFIG_FILE_PATH, data);

    return true;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showRandomJoke() {
    const config = require('./config');
    const axios = require('axios');

    console.log("Here's a random joke for you: ");

    // Use randon Joke API
    const JokeSource = getRandomInt(config.JOKE_APIS.length);
    const url = config.JOKE_APIS[JokeSource];
    
    axios.get(url, { headers: { Accept: 'application/json' } }).then((res) => {
        var data = res.data;
        var jokeText = data.value ? data.value : data.setup && data.punchline ? data.setup + '\n' + data.punchline : 'Sorry, no jokes today!';
        console.log(jokeText);
    });    
}

module.exports = {
    getConfigFile: getConfigFile,
    writeConfigFile: writeConfigFile,
    getRandomInt: getRandomInt,
    showRandomJoke: showRandomJoke
};
