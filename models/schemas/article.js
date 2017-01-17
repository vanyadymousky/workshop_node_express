let mongoose = require('mongoose'),
    CommentSchema = require('./comment'),
    Schema = mongoose.Schema;

module.exports = new Schema({
    title: { type: String },
    author: { type: String },
    comments: [CommentSchema],
    text: { type: String },
    likes_count: { type: Number },
    createdAt: { type: Date, default: Date.now }
});
