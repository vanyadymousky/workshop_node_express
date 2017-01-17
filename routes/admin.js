let express = require('express');
let router = express.Router();
let nconf = require('nconf');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Express' });
});

module.exports = router;
