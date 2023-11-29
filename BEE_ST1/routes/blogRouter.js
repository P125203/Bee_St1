const express = require('express');
const app = express();
const router = express.Router();
const controller = require('../controller/postController/postAdd');
const deletePost = require('../controller/postController/postDelete')
const updatePost = require('../controller/postController/postUpdate')

app.use('/api/posts' , controller.home)
app.use('/api/posts' , controller.add)
app.use('/deleteById' , deletePost.delete)
app.use('/updateById' , updatePost.update)

app.use('' , router)
module.exports = app;