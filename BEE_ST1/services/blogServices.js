const Post = require('../model/postModel');
const Comment = require('../model/commentModel')

exports.addBlogPost = async (data) => {
    return await Post.create(data);
}

exports.addBlogComment = async (data) => {
    return await Comment.create(data);
}