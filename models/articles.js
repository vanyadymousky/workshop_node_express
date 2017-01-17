let mongoose = require('mongoose'),
    schema = require('./schemas/article'),
    Articles = mongoose.model('Article', schema);

module.exports = {

    get() {

    },

    getList() {
        return Articles.find({}).sort({ createdAt: -1 });
    },

    save(articleData) {
        let article = new Articles(articleData);
        article.save((err, docs) => {
            console.log(docs);
        });
    },

    addComment(articleId, commentData) {
        Articles.findById(articleId, (err, article) => {
            article.comments.push(commentData);
            article.save();
        });
    }
};
