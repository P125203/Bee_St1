const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
        commentContent: {
            type:String,
            required: true
        },
        commentAuthor: {
            type:String,
            required: true
        },
        commentCreatedAt: {
            type:String,
            required: true
        }
    })

module.exports = mongoose.model('Comment' , Comment);