let express = require('express');
let router = express.Router();
let nconf = require('nconf');
let model = require('../models/articles');

/* GET home page. */
router.get('/', function(req, res, next) {
    model.getList().then(articles => {
        res.json(articles)
    });
});

router.get('/add', function(req, res, next) {
    res.render('articles/add', { title: 'Add article' });
});

router.post('/save', function(req, res, next) {
    res.render('articles', { title: 'Articles' });
});

router.post('/add-article', function(req, res, next) {
    model.save(req.body);
    res.json({'result': 'success'});
});

router.post('/add-comment', function(req, res, next) {
    let articleId = req.body.articleId;
    delete req.body.articleId;
    model.addComment(articleId, req.body);
    res.json({'result': 'success'});
});

module.exports = router;
