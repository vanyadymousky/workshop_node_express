let path = require('path'),
    nconf = require('nconf'),
    configFilePath = path.join(__dirname, 'config.json');

nconf.argv()
    .env()
    .file({ file: configFilePath });
