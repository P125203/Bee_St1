const mongoose = require('mongoose');

const Blog = new mongoose.Schema({
    blogTitle: {
        type:String,
        required: true
    },
    blogContent: {
        type:String,
        required: true
    },
    blogAuthor: {
        type:String,
        required: true
    },
    blogTags: {
        type:String,
        required: true
    },
    blogComments: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Blog' , Blog);