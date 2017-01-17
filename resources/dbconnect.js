let mongoose = require('mongoose'),
    nconf = require('nconf');

mongoose.Promise = Promise;
mongoose.connect(nconf.get('database:host'));
