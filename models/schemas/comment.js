let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = new Schema({
    author: { type: String },
    createdAt: { type: Date, default: Date.now },
    text: { type: String }
});
